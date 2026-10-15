const pool = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check required fields
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // Check if email already exists
        const existingUser = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        );

        if (existingUser.rows.length > 0) {
            return res.status(400).json({
                message: "Email already registered"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save user
        const result = await pool.query(
            `INSERT INTO users (name, email, password)
             VALUES ($1, $2, $3)
             RETURNING id, name, email, role`,
            [name, email, hashedPassword]
        );

        res.status(201).json({
            message: "User registered successfully",
            user: result.rows[0]
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Server error"
        });
    }
};


const loginUser = async (req, res) => { 
    try { 
        const { 
            email, 
            password 
        } = req.body; 
        if (!email || !password) { 
            return res.status(400).json({ message: "Email and password are required" }); 
        } 
        const result = await pool.query( "SELECT * FROM users WHERE email = $1", [email] ); 
        if (result.rows.length === 0) { 
            return res.status(400).json({ message: "Invalid email or password" }); 
        } 
        const user = result.rows[0]; 
        const isMatch = await bcrypt.compare( password, user.password ); 
        if (!isMatch) { 
            return res.status(400).json({ message: "Invalid email or password" }); 
        } 
        const token = jwt.sign( { id: user.id, role: user.role }, "MY_SECRET_KEY", { expiresIn: "1h" } ); 
        res.json({ message: "Login successful", 
            token: token, 
            user: { id: user.id, name: user.name, email: user.email, role: user.role } 
        }); 
    } 
    catch (error) { 
        console.log(error); 
        res.status(500).json({ message: "Server error" }); 
    } 
};
module.exports = {
    registerUser,
    loginUser
};