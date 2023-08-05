import express from "express";
import cors from 'cors';

const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.json());

let todos = []


app.get('/todos', function (request, response) {
    response.json(todos)
});

app.post('/todos', function (request, response) {
    const todo_title = request.body;
    todos.push(todo_title);
    response.json({"message":"request received"});
});

app.delete('/todos', function (request, response) {
    // console.table(request);
    response.json({"message":"request received"});
});





function server_message(){
    console.log(`http://localhost:${PORT}`);
}

app.listen(PORT, server_message);