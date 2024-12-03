import React, { useEffect, useState } from "react";
import { Modal, Box, Typography, Button, TextField, CircularProgress } from "@mui/material";
import { signIn, signUp } from "../../firebase/login";
import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser } from "../../store/LoginSlice";
import { auth } from "../../firebase/app";

const ModalUI = ({ open, handleClose, toggleMode, isSignIn }) => {

    const defaultTestCredentials = {
        email: "test@example.com",
        password: "test1234",
    };

    const [email, setEmail] = useState(defaultTestCredentials.email);
    const [password, setPassword] = useState(defaultTestCredentials.password);

    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.login.user);
   

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                const userData = {
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                };
                dispatch(setUser(userData));
            } else {
                dispatch(clearUser());
            }
        });

        return () => unsubscribe();
    }, [dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");
        try {

            if (isSignIn) {
                const userCredential = await signIn(email, password);

            } else {
                if (password !== confirmPassword) {
                    setErrorMessage("Passwords do not match!");
                    setLoading(false);
                    return;
                }
                const userCredential = await signUp(email, password);

            }


        } catch (error) {
            console.error("Error:", error.message);
            setErrorMessage(error.message);
        } finally {
            setEmail("");
            setPassword("");
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            await auth.signOut();
            dispatch(clearUser());
            handleClose();
        } catch (error) {
            console.error("Logout Error:", error.message);
        }
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    borderRadius: 2,
                    boxShadow: 24,
                    p: 4,
                }}
            >
                {currentUser ? (
                    <Box sx={{ textAlign: "center" }}>
                        <Typography variant="h5" gutterBottom>
                            Welcome, {currentUser.displayName || currentUser.email}!
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={handleClose}
                            >
                                Close
                            </Button>
                            <Button
                                variant="outlined"
                                color="error"
                                onClick={handleLogout}
                            >
                                Logout
                            </Button>
                        </Box>
                    </Box>
                ) : (
                    <>
                        <Typography variant="h5" textAlign="center" mb={2}>
                            {isSignIn ? "Sign In" : "Sign Up"}
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Email"
                                type="email"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                label="Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {!isSignIn && (
                                <TextField
                                    label="Confirm Password"
                                    type="password"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            )}
                            {errorMessage && (
                                <Typography color="error" variant="body2" sx={{ textAlign: "center", mt: 1 }}>
                                    {errorMessage}
                                </Typography>
                            )}
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                fullWidth
                                sx={{ mt: 2 }}
                                disabled={loading}
                            >
                                {loading ? <CircularProgress size={24} color="inherit" /> : (isSignIn ? "Sign In" : "Sign Up")}
                            </Button>
                        </form>
                        <Button onClick={toggleMode} sx={{ mt: 2 }} color="secondary">
                            {isSignIn ? "Switch to Sign Up" : "Switch to Sign In"}
                        </Button>
                    </>
                )}
            </Box>
        </Modal>
    );
};

export default ModalUI;
