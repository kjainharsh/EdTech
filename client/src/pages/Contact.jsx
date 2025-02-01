import { useState, useEffect } from "react";
import { useAuth } from "../store/auth.jsx";

const defaultContactFormData = {
    username: "",
    email: "",
    message: "",
};

const Contact = () => {
    const [contact, setContact] = useState(defaultContactFormData);
    const [userData, setUserData] = useState(true);
    const { user } = useAuth();

    // Use useEffect to avoid infinite re-renders
    useEffect(() => {
        if (user && userData) {
            setContact({
                username: user.username,
                email: user.email,
                message: "",
            });
            setUserData(false);
        }
    }, [user, userData]); // Run only when user or userData changes

    // Handle input change
    const handleInput = (e) => {
        const { name, value } = e.target;
        setContact((prevContact) => ({
            ...prevContact,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/form/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact),
            });

            if (response.ok) {
                setContact(defaultContactFormData);
                const data = await response.json();
                console.log(data);
                alert("Message Sent Successfully");
            } else {
                alert("Failed to send message");
            }
        } catch (error) {
            alert("Message not sent");
            console.log(error);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2>Contact Us</h2>
                <p>If you have any questions or need assistance, feel free to reach out. We're here to help!</p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Name:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your name"
                            value={contact.username}
                            onChange={handleInput}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={contact.email}
                            onChange={handleInput}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write your message here..."
                            value={contact.message}
                            onChange={handleInput}
                            required
                        />
                    </div>
                    <button type="submit" className="cta-button">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
