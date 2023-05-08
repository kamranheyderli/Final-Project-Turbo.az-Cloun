import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const SimpleSelect = () => {
    const [money, setMoney] = React.useState('');

    const handleChange = (event) => {
        setMoney(event.target.value);
    };
    return (
        <div>
            <FormControl sx={{ width: "82px", height:50 }}>
                <InputLabel id="demo-simple-select-label">AZN</InputLabel>
                <Select
                    sx={{   borderRadius: "7px" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={money}
                    label="AZN"
                    onChange={handleChange}
                >
                    <MenuItem  value="AZN">AZN</MenuItem>
                    <MenuItem  value='USD'>USD</MenuItem>
                    <MenuItem  value='EUR'>EUR</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default SimpleSelect;
