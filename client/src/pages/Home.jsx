import React, { useState } from 'react';
import Footer from '../components/Footer';
import './Home.css'; // Ensure you have a CSS file for styling
import { useAuth } from '../store/auth';

const Home = () => {
    const [chatOpen, setChatOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [reply, setReply] = useState("");
    const { courses } = useAuth(); // Fetch courses from useAuth

    const features = [
        {
            title: "Interactive Learning",
            description: "Engage with interactive quizzes, assignments to enhance your learning experience.",
            image: "/images/interactive-courses.png",
        },
        {
            title: "Expert Instructors",
            description: "Learn from industry experts and professionals who are passionate about teaching.",
            image: "/images/expert-instructors.png",
        },
        {
            title: "Community Support",
            description: "Join a vibrant community of learners and educators for collaboration and support.",
            image: "/images/community-support.png",
        },
    ];

    const handleChatClick = () => {
        setChatOpen(true);
    };

    const handleSendMessage = async () => {
        try {
            const response = await fetch("http://localhost:5000/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message })
            });

            if (response.ok) {
                const data = await response.json();
                setReply(data.reply.replace(/\n/g, "<br />")); 
                setMessage("");
            } else {
                setReply("Failed to connect to chat.");
            }
        } catch (error) {
            console.error("Error connecting to chat:", error);
            setReply("Error connecting to chat.");
        }
    };

    return (
        <>
        <div>
            <section
                id="home"
                className="hero-section"
                style={{ backgroundImage: "client\public\images\hero-bg.png" }}
            >
                <div className="container text-center text-white">
                    <div className="hero-content">
                        <h1 className="display-4">Empowering Education <br />Through Technology</h1>
                        <p className="lead">Join our community to enhance your learning experience.</p>
                        <a href="/courses" className="btn btn-primary btn-lg">Explore Courses</a>
                    </div>
                </div>
            </section>


                {/* Introduction Section */}
                <section className="intro-section py-5">
                    <div className="container">
                        <h2>Welcome to EdTech Platform</h2>
                        <p>Our mission is to provide the best educational resources and support to help you achieve your learning goals. Explore our interactive courses, learn from expert instructors, and join a community of learners and educators.</p>
                    </div>
                </section>
                
            {/* About Section */}
            <section className="about-section py-5">
                <div className="container">
                    <h2>About Us</h2>
                    <p>
                        At EdTech, we are dedicated to revolutionizing education through technology. 
                        Our platform offers a wide range of interactive courses, expert instructors, 
                        and a supportive community to help learners achieve their goals. Whether you're 
                        looking to upskill, explore new interests, or advance your career, EdTech is here 
                        to empower your learning journey.
                    </p>
                    <div className="text-center mt-4">
                        <a href="/about" className="btn btn-primary">Learn More About Us</a>
                    </div>
                </div>
            </section>


            {/* Our Courses Section */}
            <section className="courses-section py-5 bg-light">
                <div className="container">
                    <h2>Our Courses</h2>
                    <p>Explore our wide range of courses designed to meet your learning needs.</p>
                    <div className="row">
                        {courses && courses.slice(0, 3).map((course, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="card uniform-card">
                                    <img src="/images/design.png" className="card-img-top" alt={course.courseName} />
                                    <div className="card-body">
                                        <h3 className="card-title">{course.courseName}</h3>
                                        <p className="card-text">{course.description || "No description available."}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <a href="/courses" className="btn btn-primary">Explore More Courses</a>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section py-5">
                <div className="container">
                    <h2>Our Features</h2>
                    <p>Discover the unique features that make our platform stand out.</p>
                    <div className="row">
                        {features.map((feature, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="card uniform-card">
                                    <img src={feature.image} className="card-img-top" alt={feature.title} />
                                    <div className="card-body">
                                        <h3 className="card-title">{feature.title}</h3>
                                        <p className="card-text">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <a href="/features" className="btn btn-primary">Explore More Features</a>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="cta-section py-5 bg-primary text-white text-center">
                <div className="container">
                    <h2>Ready to Start Learning?</h2>
                    <p>Join our community and take your learning to the next level.</p>
                    <a href="features.html" className="btn btn-light btn-lg">Explore Features</a>
                </div>
            </section>

            {/* Chat with Assistant Button */}
            <div className="chat-assistant-button">
                <button onClick={handleChatClick}>
                    💬 Chat with Assistant
                </button>
            </div>

            {/* Chat Dialog Box */}
            {chatOpen && (
                <div className="chat-dialog">
                    <div className="chat-header">
                        <h3>Chat with Assistant</h3>
                        <button onClick={() => setChatOpen(false)}>✖</button>
                    </div>
                    <div className="chat-body">
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type your message here..."
                        />
                        <button onClick={handleSendMessage}>Send</button>
                        {reply && <p className="chat-reply" dangerouslySetInnerHTML={{ __html: reply }}></p>}
                    </div>
                </div>
            )}
            </div>
            <Footer />
        </>
    );
}

export default Home;
