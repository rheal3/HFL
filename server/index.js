const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db_pool');

app.use(cors());
app.use(express.json());

// ROUTES FOR USERS //
app.post("/register", async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const createUser = await pool.query(
            "INSERT INTO users (username, password, email) values ($1, $2, $3)", 
            [username, password, email]);
        res.json(createUser.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// app.get("/login", async (req, res) => {
//     try {

//     } catch (err) {
//         console.error(err.message);
//     }
// });

// app.post("/login", async (req, res) => {
//     try {

//     } catch (err) {
//         console.error(err.message);
//     }
// });


// ROUTES FOR ENTRIES //
app.post("/create", async (req, res) => {
    try {
        const { date, entry, user_id } = req.body;
        if (!('date' in req.body)) {
            const createEntry = await pool.query(
                "INSERT INTO entries (date, entry, user_id) values (CURRENT_DATE, $1, $2)", 
                [entry, user_id]);
            res.json(createEntry.rows[0]);
        } else {
            const createEntry = await pool.query(
                "INSERT INTO entries (date, entry, user_id) values ($1, $2, $3)", 
                [date, entry, user_id]);
                res.json(createEntry.rows[0]);
        }
    } catch (err) {
        console.error(err.message);
    }
}); 

app.get("/entries/:user_id", async (req, res) => {
    try {
        const { user_id } = req.params;
        const getEntries = await pool.query(
            "SELECT id, TO_CHAR(date, 'YYYY-MM-DD') AS date, entry, user_id FROM entries WHERE user_id = $1 ORDER BY date DESC", 
            [user_id]);
        res.json(getEntries.rows);
        } catch (err) {
        console.error(err.message);
    }
});

// app.put("/entries/:id")
// app.delete("/entries/:id")

// LISTEN //
app.listen(5000, () => {
    console.log("Server running on port 5000.");
});