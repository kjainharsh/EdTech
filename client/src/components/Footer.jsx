import React from 'react';

const Footer = () => {
    return (
        <footer className="py-4 bg-dark text-white">
            <div className="container">
                {/* About Section */}
                <div className="row">
                    <div className="col-md-12">
                        <h5>About</h5>
                        <p>Our mission is to provide the best educational resources and support to help you achieve your learning goals.</p>
                    </div>
                </div>

                {/* Social Media and Contact Section */}
                <div className="row">
                    {/* Follow Us */}
                    <div className="col-md-4">
                        <h5>Follow Us</h5>
                        <div className="social-icons">
                            <a href="#" aria-label="Instagram"><i className="fa-brands fa-square-instagram"></i></a>
                            <a href="#" aria-label="Facebook"><i className="fa-brands fa-square-facebook"></i></a>
                            <a href="#" aria-label="Twitter"><i className="fa-brands fa-square-twitter"></i></a>
                            <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>

                    {/* Contact Us */}
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <p>Email: support@edtechplatform.com</p>
                        <p>Phone: +1 234 567 890</p>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center mt-3">
                    &copy; 2025 EdTech Platform. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
