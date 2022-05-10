import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Appbar() {
    return (
        <Box sx={{
            flexGrow: 1, marginBottom: '60px'
        }}>
            <AppBar position="fixed">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
                        Github users app
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Appbar;