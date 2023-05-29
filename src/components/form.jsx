import React, { useState } from "react";
import { Button, TextField, Paper } from '@mui/material';

function Form({ addTodo }) {
    const [text, setText] = useState(null);
    const [id, setId] = useState(0);

    const todoCreate = (text) => {
        if (text == null){
            alert("Não foi possível criar esta tarefa");
        } else {
            const todoObject = {text: text, id: id}
            setId(id + 1);
            addTodo(todoObject);
            document.getElementById('outlined-basic').value = null;
        }
      }

    return (
        <Paper style={{ padding: "1em" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <TextField 
                id="outlined-basic" 
                label="Tarefa" 
                variant="outlined" 
                fullWidth 
                onChange={(e) => setText(e.target.value)}
                />
                <Button variant="text" onClick={() => todoCreate(text)}>Adicionar Tarefa</Button>
            </div>
        </Paper>
    )
}

export default Form;