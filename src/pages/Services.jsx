import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <>
            <section className="page-header" style={{
                background: "linear-gradient(rgba(45, 48, 71, 0.8), rgba(45, 48, 71, 0.8)), url('/hero2.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '180px 0 100px',
                color: 'white',
                textAlign: 'center',
                marginTop: '76px'
            }}>
                <div className="container">
                    <h1 className="animate-on-scroll">Our Services</h1>
                    <p className="animate-on-scroll">Comprehensive tattoo services tailored to your needs</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6 animate-on-scroll">
                            <div className="service-card h-100">
                                <div className="service-img">
                                    <img src="/hero1.webp" alt="Custom Tattoos" />
                                </div>
                                <div className="p-4">
                                    <h3>Custom Tattoos</h3>
                                    <p>Work with our artists to create a one-of-a-kind design that is uniquely yours. We specialize in translating your ideas into beautiful tattoo art.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 animate-on-scroll">
                            <div className="service-card h-100">
                                <div className="service-img">
                                    <img src="/hero5.webp" alt="Cover-Ups" />
                                </div>
                                <div className="p-4">
                                    <h3>Cover-Up Tattoos</h3>
                                    <p>Got a tattoo you no longer love? We can expertly cover it up with a new design, ensuring the old one is completely hidden.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 animate-on-scroll">
                            <div className="service-card h-100">
                                <div className="service-img">
                                    <img src="/gallery13.webp" alt="Restoration" />
                                </div>
                                <div className="p-4">
                                    <h3>Tattoo Restoration</h3>
                                    <p>Bring old, faded tattoos back to life. We can refresh the colors and sharpen the lines to make your tattoo look new again.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 animate-on-scroll">
                            <div className="service-card h-100">
                                <div className="service-img">
                                    <img src="/gallery7.jpg" alt="Black & Grey" />
                                </div>
                                <div className="p-4">
                                    <h3>Black & Grey</h3>
                                    <p>Classic, timeless, and elegant. Our black and grey work focuses on smooth shading and strong contrast.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 animate-on-scroll">
                            <div className="service-card h-100">
                                <div className="service-img">
                                    <img src="/gallery11.jpg" alt="Color Tattoos" />
                                </div>
                                <div className="p-4">
                                    <h3>Color Tattoos</h3>
                                    <p>Vibrant and eye-catching. We use high-quality pigments to ensure your color tattoo stays bright and beautiful for years.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 animate-on-scroll">
                            <div className="service-card h-100">
                                <div className="service-img">
                                    <img src="/hero3.webp" alt="Realism" />
                                </div>
                                <div className="p-4">
                                    <h3>Realism & Portraits</h3>
                                    <p>Capture a moment or a face with photorealistic precision. Our artists are skilled in creating lifelike tattoos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
