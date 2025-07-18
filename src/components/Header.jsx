import "../styles/Component1.css"
import logo from '../assets/logo.svg'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";


const Header = () => {

    const navigate = useNavigate();

    const openTheWay = () => {
        navigate('/theway');
    }

    const openHome = () => {
        navigate('/');
    }


    const [isOpen, setIsOpen] = useState(false);

    const navStyle = {
        display: isOpen ? 'flex' : 'none',
        flexDirection: 'column',
        justifyContent: 'space-between',
        // alignItems: ',
        width: '100%',
        // padding: '10px 20px',
        backgroundColor: 'rgba(252,215,80)',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        position: 'fixed',
        paddingLeft: "50px",
        top: 70,
        right: 0,
        zIndex: 1000,
    };

    const linkmobileStyle = {
        color: '#2d2c4c',
        textDecoration: 'none',
        fontSize: '18px',
        margin: '10px 0',
        fontWeight: 'bold',
        textAlign: 'left',
        // width: '100%',
    };
      

    const toggleMenu = () => {
        console.log("Menu toggled");
        setIsOpen(!isOpen);
    };
    

    return(
        <>
            <header className="header">
                <img onClick={openHome} src={logo} alt="logo" className="logo"/>
                <nav className="nav">
                    {/* <a href="" onClick={openTheWay} className="link">The Way</a> */}
                    <NavLink to= "/theway" className="link">The Way</NavLink>
                    <a href="" className="link">The Why</a>
                    <a href="" className="link">The Us</a>
                    <a href="" className="link">The How</a>
                </nav>
                <div onClick={toggleMenu} className="hamburger">{isOpen ? "X": "☰"}</div>

                <div style={navStyle} className="nav-mobile">
                    <a style={linkmobileStyle} onClick={openTheWay} href="" className="link-mobile">The Way</a>
                    <a style={linkmobileStyle} href="" className="link-mobile">The Why</a>
                    <a style={linkmobileStyle} href="" className="link-mobile">The Us</a>
                    <a style={linkmobileStyle} href="" className="link-mobile">The How</a>
                </div>
            </header>
        </>
    )
}

export default Header