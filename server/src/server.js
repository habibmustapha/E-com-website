const app = require("./app");
const pool = require("../src/config/db");
const { json } = require("express");

const PORT = 5000;

// app.get("/", async (req,res) => {
//     try{
//         const result = await pool.query("SELECT NOW()");
//         res.json({
//             message : "server is connected to postgresql",
//             time : result.rows[0].now,
//         });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json("Database error")
//     };

// })

app.listen(PORT , () => {
    console.log(`Server started on port ${PORT}`);
});

