import React, { useState, useEffect } from "react";
import Arrow from "../../img/arrow.svg";
import "./Nav.scss";
import { Link, useLocation } from "react-router-dom";


const Nav = ({ active, setMenu }) => {

    const [activeMenu, setActiveMenu] = useState(null);
    const location = useLocation();
    const toggleMenu = (menuName) => {

        setActiveMenu((prevMenu) => (prevMenu === menuName ? null : menuName));
    }

    useEffect(() => {
        setMenu(false);
        setActiveMenu(null);
        
    }, [location]);

    
    

    return (
        <nav className="nav">
            <ul className={`nav-main ${active ? "active" : ""}`}>
                <li>
                    <a href="#">Home</a>
                </li>

                <li>
                    <a
                        onClick={() => toggleMenu("plants")}
                    >
                        Plants
                        <img
                            src={Arrow}
                            alt="Arrow icon"
                            title="Arrow icon"
                            style={{
                                transform: activeMenu === "plants" ? "rotate(90deg)" : "rotate(0deg)",
                                transition: "transform 0.3s ease",
                            }}
                        />
                    </a>

                    <ul className={`plants-nav ${activeMenu === "plants" ? "active" : ""}`}>
                        <li><Link to="/#trending">Jade Terrarium</Link></li>
                        <li><Link to="/#trending">Ficus Benjamania</Link></li>
                        <li><Link to="/#trending">Syngorium Plant</Link></li>
                        <li><Link to="/#trending">Cactus Peruvianus</Link></li>
                    </ul>
                </li>

                <li className="planters">
                    <a
                        onClick={() => toggleMenu("planters")}
                    >
                        Planters
                        <img
                            src={Arrow}
                            alt="Arrow icon"
                            title="Arrow icon"
                            style={{
                                transform: activeMenu === "planters" ? "rotate(90deg)" : "rotate(0deg)",
                                transition: "transform 0.3s ease",
                            }}
                        />
                    </a>

                    <ul className={`plants-nav ${activeMenu === "planters" ? "active" : ""}`}>
                        <li><Link to="/#planters">Tale Pot</Link></li>
                        <li><Link to="/#planters">Ice Cream Pot</Link></li>
                        <li><Link to="/#planters">Beige Fracture</Link></li>
                        <li><Link to="/#planters">Mint Fusione</Link></li>
                    </ul>
                </li>

                <li>
                    <a href="#">
                        Essentials
                        <img src={Arrow} alt="Arrow icon" title="Arrow icon" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        Services
                        <img src={Arrow} alt="Arrow icon" title="Arrow icon" />
                    </a>
                </li>
            </ul>
        </nav>
    );

};

export default Nav;
