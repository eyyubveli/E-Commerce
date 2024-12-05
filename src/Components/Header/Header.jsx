import React from 'react'
import Shopping from "../../img/shopping-cart.svg";
import Account from "../../img/account.svg";
import Logo from "../../img/PAP Logo.png";
import Search from "../../img/search.svg";
import { Link } from "react-router-dom";
import "./Header.scss";
import Nav from "../Nav/Nav";
import Hero from '../Hero/Hero';
import ModalUI from '../UI/Modal';
import Basket from '../Basket/Basket';
import SearchingPlants from '../SearchingPlants/SearchingPlants';
import { CiMenuFries } from "react-icons/ci";
import useHeaderState from '../../Hooks/useHeaderState';

const Header = () => {
    const {
        open,
        isSignIn,
        active,
        setActive,
        totalItemCount,
        value,
        menu,
        handleOpen,
        handleClose,
        toggleMode,
        toggleBasket,
        handleChange,
        showMenu,
        setMenu
    } = useHeaderState();

    return (
        <>
            <header className="header">
                <div className="header-wrapper">
                    <div className="header-top container">
                        <div className="header-center">
                            <p>Use code FIRST50 for a 50% discount on your first order!</p>
                        </div>
                        <div className="header-right">
                            <div onClick={toggleBasket} className="header-basket">
                                <img src={Shopping} alt="Search icon" title='search icon' />
                                <span>{totalItemCount > 0 && totalItemCount}</span>
                            </div>
                            <img
                                onClick={handleOpen}
                                src={Account}
                                alt="Account icon"
                                title='Account icon'
                                style={{ cursor: "pointer" }}
                            />
                        </div>
                        <Basket
                            setActive={setActive}
                            active={active}
                        />

                    </div>
                </div>
                <div className="header-bottom container">
                    <Link to="/">
                        <img className='logo' src={Logo} alt="Logo" title='Logo' />
                    </Link>
                    <Nav active={menu && 'active'} setMenu={setMenu} />
                    <CiMenuFries size={25} className='burger' onClick={showMenu} />
                    <div className={`input-container ${menu ? 'active' : ''}`}>
                        <input value={value} onChange={handleChange} type="text" placeholder='Search' />
                        <img src={Search} alt="Search" title='Search' />

                        <SearchingPlants />
                    </div>
                </div>
                <Hero />
            </header>
            <ModalUI open={open} handleClose={handleClose} toggleMode={toggleMode} isSignIn={isSignIn} />
        </>
    );
};

export default Header;
