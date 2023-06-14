import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from "@mui/icons-material/MoreVert";

function ChatUserButton() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
              
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ color: "black",marginTop:'-10px' }}
            >
                <MoreVertIcon />
            </Button>
            <Menu
                sx={{marginLeft:'-90px',marginTop:'-20px'}}
                id="basic-menu"

                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose} >Serch</MenuItem>
                <MenuItem onClick={handleClose}>Clear Chat</MenuItem>
                <MenuItem onClick={handleClose}>Leave Chat</MenuItem>
                <MenuItem onClick={handleClose}>Report</MenuItem>

            </Menu>
        </div>
    )
}

export default ChatUserButton

