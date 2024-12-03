import React, { useState } from "react";
import Arrow from "../../img/arrow.svg";
import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = ({ active }) => {
    console.log(active);

    const [plantsActive, setPlantsActive] = useState(false);
    const [plantersActive, setPlantersActive] = useState(false);

    return (
        <nav className="nav">
            <ul className={`nav-main ${active ? 'active' : ''}`}>
            <li>
                <a href="#">Home</a>
            </li>

            <li>
                <a
                    onClick={() => setPlantsActive((prev) => !prev)}
                >
                    Plants
                    <img
                        src={Arrow}
                        alt="Arrow icon"
                        title="Arrow icon"
                        style={{
                            transform: plantsActive ? "rotate(90deg)" : "rotate(0deg)",
                            transition: "transform 0.3s ease",
                        }}
                    />
                </a>

                <ul className={`plants-nav ${plantsActive ? 'active' : ''}`}>
                    <li><Link to="/#trending">Jade Terrarium</Link></li>
                    <li><Link to="/#trending">Ficus Benjamania</Link></li>
                    <li><Link to="/#trending">Syngorium Plant</Link></li>
                    <li><Link to="/#trending">Cactus Peruvianus</Link></li>
                </ul>

            </li>

            <li className="planters">
                <a
                    onClick={() => setPlantersActive((prev) => !prev)}
                >
                    Planters
                    <img
                        src={Arrow}
                        alt="Arrow icon"
                        title="Arrow icon"
                        style={{
                            transform: plantersActive ? "rotate(90deg)" : "rotate(0deg)",
                            transition: "transform 0.3s ease",
                        }}
                    />
                </a>

                <ul className={`plants-nav ${plantersActive ? 'active' : ""}`}>
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
        </nav >
    );
};

export default Nav;
