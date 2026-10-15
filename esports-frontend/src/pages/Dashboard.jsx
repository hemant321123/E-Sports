import { useEffect, useState } from "react"; 

function Dashboard() { 
    const [user, setUser] = useState(null); 
    useEffect(() => { const savedUser = localStorage.getItem("user"); 
        if (savedUser) { 
            setUser(JSON.parse(savedUser)); 
        } 
    }, []); 
    const logout = () => { localStorage.removeItem("token"); 
        localStorage.removeItem("user"); 
        window.location.href = "/login"; 
    }; 
    return ( <div> <h1>Player Dashboard</h1> {user && ( <div> <h2>Welcome, {user.name}!</h2> <p>Email: {user.email}</p> <p>Role: {user.role}</p> </div> )} <br /> 
    <button onClick={logout}> Logout </button> </div> 
    ); } 
    export default Dashboard;