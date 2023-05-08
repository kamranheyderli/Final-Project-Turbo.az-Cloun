import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export const SimpleTextField = ({ label1, label2 }) => {

    return (
        <Box
            component="form"
            sx={{width:"auto",height:50,display:'flex'}}
            noValidate
            autoComplete="off"
        >
          
                <TextField sx={{ width: "115px", height:50, borderRight: 0 }} size='medium' id="outlined-basic" label={label1} variant="outlined" />
                <TextField sx={{ width: "115px", height:50, borderLeft: 0 }} size='medium' id="outlined-basic" label={label2} variant="outlined" />
        </Box>
    )
}

export default SimpleTextField;
