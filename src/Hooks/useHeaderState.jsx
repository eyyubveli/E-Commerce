import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInputValue, selectTotalItemCount } from "../store/ProductSlice";

const useHeaderState = () => {
    const [open, setOpen] = useState(false);
    const [isSignIn, setIsSignIn] = useState(true);
    const [active, setActive] = useState(false);
    const totalItemCount = useSelector(selectTotalItemCount);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const toggleMode = () => setIsSignIn(!isSignIn);
    const toggleBasket = () => setActive(!active);
    const [value, setValue] = useState('');
    const [menu, setMenu] = useState(false);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        dispatch(getInputValue(newValue));
    }

    const showMenu = () => {
        setMenu(prev => !prev);
    }

    return {
        open,
        setOpen,
        isSignIn,
        setIsSignIn,
        active,
        setActive,
        value,
        menu,
        setValue,
        totalItemCount,
        handleOpen,
        handleClose,
        toggleMode,
        toggleBasket,
        handleChange,
        showMenu,
        setMenu
    }
}

export default useHeaderState