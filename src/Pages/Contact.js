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

        let formData = {
            name: name,
            email: email,
            message: message
        };
        console.log(formData);

        // let xhr = new XMLHttpRequest();
        // xhr.open('post', '/');
        // xhr.setRequestHeader('content-type', 'application/json');
        // xhr.onload = function () {
        //     console.log(xhr.responceText);
        //     if (this.responseText = 'success')
        //     {
        //         name.name = "";
        //         email.email = "";
        //         message.message = "";

        //     }
        //     else
        //     {
        //         // error handling code here...
        //         alert(
        //             "There was an issue sending your message please try again later."
        //         );
        //     }
        // };
        // xhr.send(JSON.stringify(formData));
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