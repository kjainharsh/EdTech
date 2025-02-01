import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <section id="about" className="about-section">
                <div className="container">
                    <div className="about-content">
                        <div className="about-text">
                            <h2>About Us</h2>
                            <p>We are dedicated to empowering education through technology. Our mission is to provide innovative and accessible learning solutions that enable individuals to achieve their goals.</p>
                            <p>Our platform offers a variety of interactive courses, expert instructors, and a supportive community designed to enhance your learning experience.</p>
                            <NavLink to="/features" className="cta-button">Explore Our Features</NavLink>
                        </div>
                        <div className="about-image">
                            <img src="images/about-us.png" alt="About Us" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values Section */}
            <section id="mission" className="mission-section">
                <div className="container">
                    <h2>Our Mission & Values</h2>
                    <div className="values-cards">
                        <div className="value-card">
                            <i className="fas fa-lightbulb"></i>
                            <h3>Innovation</h3>
                            <p>We strive to stay at the forefront of technology to deliver cutting-edge solutions.</p>
                        </div>
                        <div className="value-card">
                            <i className="fas fa-users"></i>
                            <h3>Community</h3>
                            <p>We believe in building a supportive and inclusive community of learners.</p>
                        </div>
                        <div className="value-card">
                            <i className="fas fa-graduation-cap"></i>
                            <h3>Excellence</h3>
                            <p>We are committed to providing the highest quality educational resources.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
