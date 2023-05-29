import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function EditItem({open, dialogHandler, todo, editTodo}) {
  const [editedText, setEditedText] = useState(todo.text)
  const textHandler = () => {
    editTodo(todo.id, editedText)
  }

  return (
      <Dialog 
        open={open} 
        onClose={dialogHandler}
      >
        <DialogTitle>{"Editando Tarefa"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {todo.text}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Editar"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogHandler}>Cancelar</Button>
          <Button onClick={textHandler}>Editar tarefa</Button>
        </DialogActions>
      </Dialog>
  );
}
