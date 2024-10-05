import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs.send(
            'service_shv7jn9',
            'template_l1xl6me',
            formData,
            'x9m0Yhz2EM1StQJA9'
        )
        .then((result) => {
            alert('Message sent successfully!');
        }, (error) => {
            console.log(error.text);
            alert('Failed to send message.');
        });
    };

    return (
        <div>
            <Header />
            <div style = {{paddingLeft: '10px'}}>
                <h2>contact me</h2>
            </div>
            <form onSubmit={sendEmail}>
                <div style={{ marginBottom: '20px', padding: '10px', paddingLeft: '10px' }}>
                    <label>your name     </label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div style={{ marginBottom: '20px', padding: '10px', paddingLeft: '10px' }}>
                    <label>your email     </label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div style={{ marginBottom: '20px', padding: '10px', paddingLeft: '10px' }}>
                    <label>your message     </label>
                    <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div style = {{paddingLeft: "10px"}}>
                    <button type="submit">send message</button>
                </div>
            </form>
            <Footer />
        </div>
    );
};

export default Contact;
