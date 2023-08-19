import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

import { useState } from 'react';

export default function TodoForm({ todoAdder }) {
    const [formText, setFormText] = useState('')
    const handleChange = (e) => {
        setFormText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        todoAdder(formText)
        setFormText('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                value={formText}
                onChange={handleChange}
                // size="small"
                label="add a task"
                id="outlined-start-adornment"
                sx={{ marginTop: '10px', width: '103%' }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton aria-label="add" type='submit'>
                                <AddIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </form>
    )
}