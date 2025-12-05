const express = require('express');
const db = require('./config/db');
const usermodel = require('./model/usermodul');
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Insert
app.post("/insertData", async (req, res) => {
    const data = await usermodel.create(req.body);
    return res.send(data);
});

// Get all
app.get('/', async (req, res) => {
    const data = await usermodel.find({});
    return res.send(data);
});

// Delete
app.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const data = await usermodel.findByIdAndDelete(id);

    if (!data) {
        return res.send("User not found");
    }

    res.send("Delete success");
});

app.patch("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await usermodel.findByIdAndUpdate(id, req.body);
        res.send(data);
    } catch (err) {
        res.send(err);
    }
});

app.listen(7800, () => {
    console.log('Server is running on http://localhost:7800');
});
