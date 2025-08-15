import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});

let todoData = [
     {
        "id": uuidv4(),
        "title": "Title 1",
        "description": "Test description"
     },
     {
        "id": uuidv4(),
        "title": "Title 2",
        "description": "Test description 2"
     },
];

app.get('/api/data', (req, res) => {
    res.json({ message: 'Data from Express backend!' });
});

// Get all todos
app.get('/api/todoData', (req, res) => {
    res.json({ todos: todoData });
});

// Get specific todo
app.get('/api/todoData/:id', (req, res) => {
    const id = req.params.id;
    const item = todoData.find(item => item.id === id);
    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    } else {
        res.json(item);
    }
    res.json({ todos: todoData });
});

// Create a todo
app.post('/api/todoData', (req, res) => {
    const { title, description } = req.body;
    const newTodo = {
        id: uuidv4(),
        title,
        description
    };
    todoData.push(newTodo);
    res.status(201).json({ message: 'Todo created', todo: newTodo });
});

// Update a specific todo
app.put('/api/todoData/:id', (req, res) => {
    const id = req.params.id;
    const updatedItem = req.body;
    const index = todoData.findIndex((item) => item.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Item not found' });
    } else {
        todoData[index] = {...todoData[index], ...updatedItem};
        res.json(todoData[index]);
    }
});

// Delete specific todo
app.delete('/api/todoData/:id', (req, res) => {
    const id = req.params.id;
    const index = todoData.findIndex((item) => item.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Item not found' });
    } else {
        const deletedItem = todoData.splice(index, 1);
        res.json(deletedItem[0]);
    }
});
