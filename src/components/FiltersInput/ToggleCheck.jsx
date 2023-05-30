import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// i 18 lang
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

export const ToggleCheck = () => {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const { t, i18n } = useTranslation();
    return (
        <div>
            <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
            >
                <ToggleButton sx={{ height: 50, fontSize: "14px", background: "white", ":hover": { background: "red", color: "white" } }} value="web">{t("app_input_all")}</ToggleButton>
                <ToggleButton sx={{ height: 50, fontSize: "14px", background: "white", ":hover": { background: "red", color: "white" } }} value="android">{t("app_input_new")}</ToggleButton>
                <ToggleButton sx={{ height: 50, fontSize: "14px", background: "white", ":hover": { background: "red", color: "white" } }} value="ios">{t("app_input_last")}</ToggleButton>
            </ToggleButtonGroup>
        </div>
    )
}
export default ToggleCheck
