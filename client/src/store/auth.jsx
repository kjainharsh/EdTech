import { Children, createContext, useContext, useEffect } from "react";
import { useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [courses, setCourses] = useState([]);
    const authorizationToken = `Bearer ${token}`;

    const storeTokeninLS = (serverToken) => {
        console.log("token", serverToken);
        setToken(serverToken);

        return localStorage.setItem("token", serverToken);
    };

    let isLoggedIn = !!token;
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    }
    console.log("isLoggedIn", isLoggedIn);

    // JWT AUTHENTICATION -  to get current user login data

    const userAuthentication = async () => {
        try {
            setIsLoading(true);
            const response = await fetch("http://localhost:5000/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response);
            
            if (response.ok) {
                const data = await response.json();
                console.log("data",data);
                
                console.log("userdata", data.userData);
                setUser(data.userData);
                setIsLoading(false);
            }
            else {
                setIsLoading(false);
            }
        } catch (error) {
            console.log("Error fetching userdata");
        }
    }

    const getCourses = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/data/course", {
                method: "GET",
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.msg);
                setCourses(data.msg);
            }
        } catch (error) {
            console.log(` courses frontend error ${error}`);
        }
    };

    useEffect(() => {
        userAuthentication();
        getCourses();
    }, []);
    //tackling logout functionality
    return (<AuthContext.Provider value={{ storeTokeninLS, isLoggedIn, LogoutUser, token, user, courses, authorizationToken, isLoading }}>
        {children}
    </AuthContext.Provider>);
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
};