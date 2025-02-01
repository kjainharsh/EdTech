import React from 'react';
const Home = () => {
    return (
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
                        <a href="courses.html" className="btn btn-primary btn-lg">Explore Courses</a>
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

            {/* Features Section */}
            <section className="features-section py-5 bg-light">
                <div className="container">
                    <h2>Our Features</h2>
                    <p>Discover the unique features that make our platform stand out.</p>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <img src="images/interactive-courses.png" className="card-img-top" alt="Interactive Courses" />
                                <div className="card-body">
                                    <h3 className="card-title">Interactive Courses</h3>
                                    <p className="card-text">Engage with interactive content and quizzes designed to enhance your learning experience.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src="images/expert-instructors.png" className="card-img-top" alt="Expert Instructors" />
                                <div className="card-body">
                                    <h3 className="card-title">Expert Instructors</h3>
                                    <p className="card-text">Learn from industry experts and professionals who are passionate about teaching.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src="images/community-support.png" className="card-img-top" alt="Community Support" />
                                <div className="card-body">
                                    <h3 className="card-title">Community Support</h3>
                                    <p className="card-text">Join a vibrant community of learners and educators for support and collaboration.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Services Section */}
            <section className="services-section py-5">
                <div className="container">
                    <h2>Our Services</h2>
                    <p>Discover the range of services we offer to enhance your learning experience.</p>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <img src="images/service1.png" className="card-img-top" alt="Service 1" />
                                <div className="card-body">
                                    <h3 className="card-title">Service 1</h3>
                                    <p className="card-text">Description of service 1.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src="images/service2.png" className="card-img-top" alt="Service 2" />
                                <div className="card-body">
                                    <h3 className="card-title">Service 2</h3>
                                    <p className="card-text">Description of service 2.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src="images/service3.png" className="card-img-top" alt="Service 3" />
                                <div className="card-body">
                                    <h3 className="card-title">Service 3</h3>
                                    <p className="card-text">Description of service 3.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Clients Section */}
            <section className="clients-section py-5 bg-light">
                <div className="container">
                    <h2>Our Clients</h2>
                    <p>We are proud to work with a diverse range of clients.</p>
                    <div className="row">
                        <div className="col-md-3">
                            <img src="images/client1.png" className="img-fluid" alt="Client 1" />
                        </div>
                        <div className="col-md-3">
                            <img src="images/client2.png" className="img-fluid" alt="Client 2" />
                        </div>
                        <div className="col-md-3">
                            <img src="images/client3.png" className="img-fluid" alt="Client 3" />
                        </div>
                        <div className="col-md-3">
                            <img src="images/client4.png" className="img-fluid" alt="Client 4" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section py-5">
                <div className="container">
                    <h2>What Our Students Say</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <p>"The interactive courses have greatly enhanced my learning experience. The instructors are knowledgeable and supportive."</p>
                                    <h4>- Student A</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <p>"I love the community support. It's great to connect with other learners and share knowledge."</p>
                                    <h4>- Student B</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <p>"The platform is user-friendly and the content is top-notch. Highly recommend EdTech Platform!"</p>
                                    <h4>- Student C</h4>
                                </div>
                            </div>
                        </div>
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

            {/* Footer Section */}
            <footer className="py-4 bg-dark text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h5>About</h5>
                            <p>Our mission is to provide the best educational resources and support to help you achieve your learning goals.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <h5>Follow Us</h5>
                            <div className="social-icons">
                                <a href="#" aria-label="Instagram"><i className="fa-brands fa-square-instagram"></i></a>
                                <a href="#" aria-label="Facebook"><i className="fa-brands fa-square-facebook"></i></a>
                                <a href="#" aria-label="Twitter"><i className="fa-brands fa-square-twitter"></i></a>
                                <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h5>Contact Us</h5>
                            <p>Email: support@edtechplatform.com</p>
                            <p>Phone: +1 234 567 890</p>
                        </div>
                    </div>
                    <div className="text-center mt-3">
                        &copy; 2025 EdTech Platform. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
