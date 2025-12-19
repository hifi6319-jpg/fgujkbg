import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-3">
                        <h3 className="text-white mb-4 animate-on-scroll">QUALITY TATTOO STUDIO</h3>
                        <p className="mb-4 animate-on-scroll">Creating custom tattoos that tell your unique story. Our talented artists specialize in various styles to bring your vision to life with precision and artistry.</p>
                        <p className="mb-2"><i className="bi bi-geo-alt me-2"></i>Abirami complex, bus stop, opposite Indian Bank Colony, Ganesh Nagar, K K Nagar, Tiruchirappalli, Tamil Nadu 620021</p>
                        <p className="mb-2"><i className="bi bi-telephone me-2"></i>+91 63852 17970</p>
                        <p className="mb-4"><i className="bi bi-envelope me-2"></i>info@qualitytattoostudio.in</p>
                        <div className="social-icons">
                            <a href="#"><i className="bi bi-instagram"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h5 className="text-white mb-4 animate-on-scroll">Quick Links</h5>
                        <div className="footer-links">
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/gallery">Gallery</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/appointment">Appointment</Link>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h5 className="text-white mb-4 animate-on-scroll">Our Services</h5>
                        <div className="footer-links">
                            <Link to="/services">Custom Tattoos</Link>
                            <Link to="/services">Cover-Up Tattoos</Link>
                            <Link to="/services">Tattoo Restoration</Link>
                            <Link to="/services">Color Tattoos</Link>
                            <Link to="/services">Black & Grey Tattoos</Link>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h5 className="text-white mb-4 animate-on-scroll">Studio Hours</h5>
                        <div className="footer-links">
                            <p className="text-white-50 mb-2">Monday - Friday: 9AM - 8PM</p>
                            <p className="text-white-50 mb-2">Saturday: 10AM - 6PM</p>
                            <p className="text-white-50 mb-2">Sunday: Closed</p>
                        </div>
                    </div>
                </div>
                <hr className="text-white-50 mt-5" />
                <div className="row">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="text-white-50 mb-0">&copy; 2025 QUALITY TATTOO STUDIO. All Rights Reserved.</p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <a className="text-white-50" href="https://pixelgridhub.in/" target="_blank" rel="noopener noreferrer">
                            Designed by PixelGridHub
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
