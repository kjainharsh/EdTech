import { Navigate, NavLink, Outlet } from "react-router-dom";
import { FaUser, FaHome, FaRegListAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useAuth } from "../../store/auth";
import "./AdminLayout.css";

export const AdminLayout = () => {

    const { user, isLoading } = useAuth();
    console.log("user", user);
    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (!user.isAdmin) {
        return <Navigate to="/" />;
    }

    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/admin/users">
                                    <FaUser /> users
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/contacts">
                                    <FaMessage /> Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/courses">
                                    <FaRegListAlt /> Courses
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/">
                                    <FaHome /> Home
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="admin-main">
                <Outlet />
            </main>
        </>
    );
};