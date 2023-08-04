import { TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar';
import { FormBoxContainer, FormMainContainer } from './style';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData, [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const PostURL = "http://localhost:5001/contact";
        fetch(PostURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.message);
                setFormData({ name: '', email: '', subject: '', message: '' });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    return (
        <>
            <Navbar />
            <FormMainContainer>
                <FormBoxContainer
                    noValidate
                // autoComplete="off"
                >
                    <Typography variant="h4" align="center" mb={2}>
                        Contact Us
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            // label="Name"
                            type="text"
                            name="name"
                            value={formData.name}
                            placeholder="Name"
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            fullWidth
                            // label="Email"
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder="Email"
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            fullWidth
                            // label="Email"
                            type="text"
                            name="subject"
                            value={formData.subject}
                            placeholder="Subject"
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            fullWidth
                            // label="Message"
                            name="message"
                            value={formData.message}
                            placeholder="Your Message"
                            onChange={handleChange}
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