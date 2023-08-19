import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

export default function TodoItem({ toggler, todo, remover }) {
    const labelId = `checkbox-${todo.id}`;
    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="remove" onClick={remover}>
                    <RemoveCircleOutlineIcon />
                </IconButton>
            }
            disablePadding

        >
            <ListItemButton role={undefined} dense>
                <ListItemIcon>
                    <Checkbox
                        color="primary"
                        edge="start"
                        checked={todo.completed}
                        tabIndex={-1}
                        onChange={toggler}
                        inputProps={{ 'aria-labelledby': labelId }}
                        disableRipple
                    />
                </ListItemIcon>
                {/* read the overriding styles documentation on mui website */}
                <ListItemText id={labelId} primary={todo.task} sx={{ '& .MuiListItemText-primary': todo.completed ? { textDecoration: 'line-through' } : '' }} />
            </ListItemButton>
        </ListItem>
    )
}
