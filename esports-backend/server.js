const pool = require("./db");
const authRoutes = require("./routes/authRoutes");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "E-Sports Backend is running!"
    });
});

app.get("/api/tournaments", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM tournaments");

        res.json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Database error"
        });
    }
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});

// app.get("/api/tournaments", (req, res) => {
//     const tournaments = [
//         {
//             id: 1,
//             name: "BGMI Championship",
//             game: "BGMI",
//             teams: 32,
//             prize: "₹50,000"
//         },
//         {
//             id: 2,
//             name: "Valorant Masters",
//             game: "Valorant",
//             teams: 16,
//             prize: "₹1,00,0000"
//         },
//         {
//             id: 3,
//             name: "Free Fire Clash",
//             game: "Free-Fire",
//             teams: 24,
//             prize: "₹25,000"
//         }
//     ];

//     res.json(tournaments);
// });
