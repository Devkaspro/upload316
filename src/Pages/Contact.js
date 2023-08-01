import { TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Footer from '../component/Footer/Footer';
import Navbar from '../component/Navbar';
import { FormBoxContainer, FormMainContainer } from './style';
import Button from '@mui/material/Button';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name);
    };
    return (
        <>
            <Navbar />
            <FormMainContainer>
                <FormBoxContainer
                    noValidate
                    autoComplete="off"
                >
                    <Typography variant="h4" align="center" mb={2}>
                        Contact Us
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            margin="normal"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            margin="normal"
                            required
                            type="email"
                        />
                        <TextField
                            fullWidth
                            label="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            margin="normal"
                            required
                            multiline
                            rows={4}
                        />
                        <Button
                            fullWidth
                            type="submit"
                            sx={{
                                mt: 2,
                                backgroundColor: "#000",
                                color: "#fff",
                                "&:hover": {
                                    backgroundColor: "#111",
                                },
                            }}
                        >
                            Submit
                        </Button>
                    </form>
                </FormBoxContainer>
            </FormMainContainer>
            <Footer />
        </>

    );
};

export default Contact;