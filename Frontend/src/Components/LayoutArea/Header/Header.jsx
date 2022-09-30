import Logo from "../Logo/Logo";
import "./Header.css";
import { Typography } from '@mui/material';

function Header() {
    return (
        <div className="Header">
			<Logo/>
            <Typography variant="h3">Project By Jack</Typography>
        </div>
    );
}

export default Header;
