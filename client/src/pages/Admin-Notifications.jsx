import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import "./AdminNotifications.css"; // Ensure you have a CSS file for styling

const AdminNotifications = () => {
    const { authorizationToken } = useAuth();
    const [notifications, setNotifications] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    const fetchNotifications = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/notifications", {
                headers: { Authorization: authorizationToken }
            });
            const data = await response.json();
            setNotifications(data);
        } catch (error) {
            console.error("Error fetching notifications:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:5000/api/admin/notifications/delete/${id}`, {
                method: "DELETE",
                headers: { Authorization: authorizationToken }
            });
            fetchNotifications();
        } catch (error) {
            console.error("Error deleting notification:", error);
        }
    };

    const handleAdd = async () => {
        try {
            await fetch("http://localhost:5000/api/admin/notifications/insert", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken
                },
                body: JSON.stringify({ message: newMessage })
            });
            setNewMessage("");
            fetchNotifications();
        } catch (error) {
            console.error("Error adding notification:", error);
        }
    };

    useEffect(() => {
        fetchNotifications();
    }, []);

    return (
        <section className="section-notifications">
            <div className="container">
                <h1 className="main-heading">Admin Notifications</h1>
                <div className="notifications-list">
                    {notifications.length > 0 ? (
                        notifications.map((notification, index) => (
                            <div className="notification-card" key={index}>
                                <p>{notification.message}</p>
                                <p className="notification-date">{new Date(notification.createdAt).toLocaleString()}</p>
                                <button onClick={() => handleDelete(notification._id)}>Delete</button>
                            </div>
                        ))
                    ) : (
                        <p>No notifications available</p>
                    )}
                </div>
                <div className="add-notification">
                    <textarea
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type new notification message here..."
                    />
                    <button onClick={handleAdd}>Add Notification</button>
                </div>
            </div>
        </section>
    );
};

export default AdminNotifications;
