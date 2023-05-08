import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';

export const SimpleCheck = ({ content }) => {
    const [selected, setSelected] = React.useState(false);
    return (
        <div>
            <ToggleButton
                sx={{ width: "60px",height:56,borderRadius:"7px",backgroundColor:"white",color:"black",fontSize:"13px"}}
                value="check"
                selected={selected}
                onChange={() => {
                    setSelected(!selected);
                }}
            >
                {content }
            </ToggleButton>
        </div>
    )
}

export default SimpleCheck;
