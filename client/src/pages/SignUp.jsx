import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const [user, setUser] = useState({
        username: "",  // Changed from "name" to "username"
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    // Handle input changes
    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const URL = "http://localhost:5000/api/auth/register";

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            const resData = await response.json();

            if (response.ok) {
                toast.success("Registration Successful! Please log in.");
                setUser({ username: "", email: "", password: "" });
                navigate("/login");
            } else {
                toast.error(resData.extraDetails || resData.message || "Signup failed. Please try again.");
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again later.");
            console.error("Signup error:", error);
        }
    };

    return (
        <div className="signup-container d-flex justify-content-center align-items-center">
            <div className="card p-4" style={{ width: "100%", maxWidth: "400px" }}>
                <h2 className="text-center mb-4">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Full Name</label> {/* Changed from name */}
                        <input
                            type="text"
                            className="form-control"
                            id="username"  
                            name="username"  
                            placeholder="Enter full name"
                            value={user.username}
                            onChange={handleInput}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Enter email"
                            value={user.email}
                            onChange={handleInput}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={user.password}
                            onChange={handleInput}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    <div className="text-center mt-3">
                        <NavLink to="/login">Already have an account? Login</NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
