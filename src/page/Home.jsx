import { Container, List } from "@mui/material";
import React, { useState } from "react";
import Form from "../components/form";
import ToDoItem from "../components/ToDoItem";

function Home(){
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    var filtered = todos.filter((todo) => todo.id !== id)
    setTodos(filtered);
  }

  const editTodo = (id, newText) => {
    var todosArray = [...todos];

    todosArray.splice(id, 1, { text:newText, id: id });
    setTodos(todosArray);
  }

    return(
        <Container maxWidth='md' style={{marginTop: "1em"}}>
        <Form addTodo={addTodo}/>
        <List sx={{ marginTop:"1em" }}>
          {todos.map((todo) => (
            <div key={todo.id} style={{ marginTop: "1em" }}>
              <ToDoItem todo={todo} deleteTodo={deleteTodo} editTodo={editTodo}/>
            </div>
          ))}
        </List>
      </Container>
    )
}

export default Home;