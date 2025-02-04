import React, { useEffect, useState } from "react";
import "./Notifications.css"; // Ensure you have a CSS file for styling

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);

    const fetchNotifications = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/user/notifications");
            const data = await response.json();
            setNotifications(data);
        } catch (error) {
            console.error("Error fetching notifications:", error);
        }
    };

    useEffect(() => {
        fetchNotifications();
    }, []);

    return (
        <section className="section-notifications">
            <div className="container">
                <h1 className="main-heading">Notifications</h1>
                <div className="notifications-list">
                    {notifications.length > 0 ? (
                        notifications.map((notification, index) => (
                            <div className="notification-card" key={index}>
                                <p>{notification.message}</p>
                                <p className="notification-date">{new Date(notification.createdAt).toLocaleString()}</p>
                            </div>
                        ))
                    ) : (
                        <p>No notifications available</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Notifications;
