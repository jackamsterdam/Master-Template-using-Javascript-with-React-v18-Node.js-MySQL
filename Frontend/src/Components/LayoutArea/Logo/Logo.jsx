import "./Logo.css";
import logoSource from '../../../Assets/Images/logo.png'

function Logo() {
    return (
        <div className="Logo">
			<img src={logoSource} alt="logo" />
        </div>
    );
}

export default Logo;
