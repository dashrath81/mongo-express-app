const express = require('express');
const Todo = require('./usermodel');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/todos', async (req, res) => {
    const todos = await Todo.find();   
    res.json(todos);
});

app.post('/todos', async (req, res) => {
    const { title } = req.body;
    const newTodo = new Todo({ title });
    await newTodo.save();
    res.json(newTodo);
});

app.delete('/todos/:id', async (req, res) => {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.json({ message: 'Todo deleted' });
});

app.put('/todos/:id', async (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(id, { title }, { new: true });
    res.json(updatedTodo);
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
