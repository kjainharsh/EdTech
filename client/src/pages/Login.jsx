import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css"; // Import the CSS file for styling
import Footer from "../components/Footer";

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const { storeTokeninLS, isLoggedIn } = useAuth(); 
    // useEffect(() => {
    //     if (isLoggedIn) {
    //         navigate("/"); 
    //     }
    // }, [isLoggedIn, navigate]); 

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const URL = "http://localhost:5000/api/auth/login";

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
                console.log("Login successful", resData.token);
                storeTokeninLS(resData.token);  
                setUser({ email: "", password: "" });
                toast.success("Login Successful");
                navigate("/");  
            } else {
                toast.error(resData.extraDetails || resData.message || "Invalid credentials");
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again later.");
            console.error("Login error:", error);
        }
    };

    return (
        <>
        <div className="login-container">
            <div className="card p-4">
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                    <div className="text-center mt-3">
                        <NavLink to="/signup">Don't have an account? Sign Up</NavLink>
                    </div>
                </form>
            </div>
            </div>
            {/* <Footer /> */}
            </>
    );
};

export default Login;
