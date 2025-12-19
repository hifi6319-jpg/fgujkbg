import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container navbar-container">
                    <Link className="navbar-brand d-flex align-items-center" to="/" onClick={closeMenu}>
                        <img src="/logo.webp" alt="Logo" style={{ width: '45px', height: '45px', borderRadius: '50%', objectFit: 'cover', marginRight: '8px' }} />
                        QUALITY TATTOO STUDIO<span style={{ color: 'var(--primary)' }}>.</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="desktop-nav d-none d-lg-flex align-items-center">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/gallery">Gallery</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/appointment">Appointment</NavLink>
                            </li>
                        </ul>
                        <Link to="/appointment" className="btn btn-primary ms-3">Book Appointment</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`hamburger-menu d-lg-none ${isOpen ? 'opened' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle mobile menu"
                        aria-expanded={isOpen}
                    >
                        <svg width="40" height="40" viewBox="0 0 100 100">
                            <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                            <path className="line line2" d="M 20,50 H 80" />
                            <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`} onClick={closeMenu}></div>
            <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
                <button className="mobile-menu-close" onClick={closeMenu} aria-label="Close mobile menu">
                    <i className="bi bi-x" aria-hidden="true"></i>
                </button>
                <NavLink className="nav-link" to="/" onClick={closeMenu}>Home</NavLink>
                <NavLink className="nav-link" to="/about" onClick={closeMenu}>About</NavLink>
                <NavLink className="nav-link" to="/services" onClick={closeMenu}>Services</NavLink>
                <NavLink className="nav-link" to="/gallery" onClick={closeMenu}>Gallery</NavLink>
                <NavLink className="nav-link" to="/appointment" onClick={closeMenu}>Appointment</NavLink>
                <Link to="/appointment" className="btn btn-primary mt-4" onClick={closeMenu}>Book Appointment</Link>
            </div>
        </>
    );
};

export default Navbar;
