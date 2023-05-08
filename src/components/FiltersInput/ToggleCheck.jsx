import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export const ToggleCheck = () => {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <div>
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
            >
                <ToggleButton sx={{ height: 50 }} value="web">Hamisi</ToggleButton>
                <ToggleButton sx={{ height: 50 }} value="android">Yeni</ToggleButton>
                <ToggleButton sx={{ height: 50 }} value="ios">Sürülmüş</ToggleButton>
            </ToggleButtonGroup>
        </div>
    )
}
export default ToggleCheck
