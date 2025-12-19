import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-slider">
                    <div className="item" style={{ '--position': 1 }}><img src="/hero1.webp" alt="Custom sleeve tattoo design by Quality Tattoo Studio Trichy" /></div>
                    <div className="item" style={{ '--position': 2 }}><img src="/hero2.webp" alt="Realistic portrait tattoo artwork Tiruchirappalli" /></div>
                    <div className="item" style={{ '--position': 3 }}><img src="/hero3.webp" alt="Fine-line minimalist tattoo design Trichy" /></div>
                    <div className="item" style={{ '--position': 4 }}><img src="/hero4.webp" alt="Traditional mandala tattoo Tamil Nadu" /></div>
                    <div className="item" style={{ '--position': 5 }}><img src="/hero5.webp" alt="Color realism tattoo by expert artist Trichy" /></div>
                    <div className="item" style={{ '--position': 6 }}><img src="/hero6.webp" alt="Geometric pattern tattoo design Tiruchirappalli" /></div>
                    <div className="item" style={{ '--position': 7 }}><img src="/hero7.webp" alt="Custom name and script tattoo Trichy" /></div>
                </div>
                <div className="hero-content">
                    <h1 data-content="QUALITY TATTOO SHOP">QUALITY TATTOO STUDIO</h1>
                    <div className="tagline">
                        <h2>PREMIUM INK</h2>
                        <p>Custom tattoos that tell your story</p>
                    </div>

                    <div className="hero-buttons">
                        <Link to="/gallery" className="btn btn-primary">View Our Work</Link>
                        <Link to="/appointment" className="btn btn-primary">Book Consultation</Link>
                    </div>

                    <a href="#about" className="scroll-down">
                        <span>Scroll Down</span>
                        <i className="bi bi-arrow-down"></i>
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="about-img animate-on-scroll">
                                <img src="/logo.webp" alt="Quality Tattoo Studio Trichy - Professional Tattoo Artists in Tiruchirappalli" loading="lazy" className="round-image" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="section-title text-start animate-on-scroll">About QUALITY TATTOO SHOP</h2>
                            <h3 className="mb-4 animate-on-scroll">Where Art Meets Skin</h3>
                            <p className="mb-4 animate-on-scroll">
                                QUALITY TATTOO STUDIO represents the pinnacle of tattoo artistry, where exceptional skill meets
                                creative vision.
                                Our studio was founded on the principle that tattoos should be more than just ink—they should be
                                meaningful
                                works of art that tell your unique story.
                            </p>
                            <p className="mb-4 animate-on-scroll">
                                With a commitment to hygiene, safety, and innovation, we provide a comfortable environment for
                                our clients.
                                Whether you're getting your first tattoo or adding to your collection, our experienced artists
                                are here to guide you every step of the way.
                            </p>

                            <Link to="/about" className="btn btn-primary animate-on-scroll">Know More About Us</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="section-padding bg-light">
                <div className="container">
                    <h2 className="section-title animate-on-scroll">Our Services</h2>
                    <div className="row g-4">
                        {/* Service 1 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="service-card animate-on-scroll">
                                <div className="service-img">
                                    <img src="/gallery25.jpg" alt="Custom Tattoos" loading="lazy" />
                                </div>
                                <div className="text-center p-4">
                                    <h4 className="animate-on-scroll">Custom Tattoos</h4>
                                    <p className="mb-0 animate-on-scroll">Transform your ideas into unique, personalized tattoos. Our artists
                                        collaborate with you to design pieces that reflect your personality and story.</p>
                                </div>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="service-card animate-on-scroll">
                                <div className="service-img">
                                    <img src="/hero7.webp" alt="Cover-Up Tattoos" loading="lazy" />
                                </div>
                                <div className="text-center p-4">
                                    <h4 className="animate-on-scroll">Cover-Up Tattoos</h4>
                                    <p className="mb-0 animate-on-scroll">Expertly transform existing tattoos into beautiful new artwork. Our
                                        specialists create designs that seamlessly incorporate or completely conceal previous
                                        work.</p>
                                </div>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="service-card animate-on-scroll">
                                <div className="service-img">
                                    <img src="https://uploads.onecompiler.io/4434eqhhv/443aedfgk/IMG_20251101_014322.jpg"
                                        alt="Tattoo Restoration" loading="lazy" />
                                </div>
                                <div className="text-center p-4">
                                    <h4 className="animate-on-scroll">Tattoo Restoration</h4>
                                    <p className="mb-0 animate-on-scroll">Revitalize aged or faded tattoos with our restoration services. We refresh
                                        colors and redefine lines while preserving the integrity of your original design.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact & Location Section (Legacy) */}
            <section id="location" className="py-5">
                <div className="container">
                    <div className="row align-items-center">

                        {/* Map Section */}
                        <div className="col-lg-8 mb-4 mb-lg-0">
                            <h2 className="text-center mb-4">Find Us Here</h2>
                            <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.96727800496996!2d78.6845809221268!3d10.774773955525578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf59dd51585b3%3A0x667234825807b13e!2sQuality%20Tattoo%20Shop!5e0!3m2!1sen!2sin!4v1763492653391!5m2!1sen!2sin"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Map"
                                ></iframe>
                            </div>
                        </div>

                        {/* Contact Info Section */}
                        <div className="col-lg-4">
                            <h2 className="text-center mb-4">Contact Information</h2>
                            <div className="contact-info">

                                {/* Location */}
                                <div className="d-flex align-items-start mb-4">
                                    <div className="contact-icon">
                                        <i className="bi bi-geo-alt-fill"></i>
                                    </div>
                                    <div>
                                        <h5 className="mb-1">Our Studio</h5>
                                        <p className="mb-0">
                                            Abirami complex, bus stop, opposite Indian Bank Colony, Ganesh Nagar,
                                            K K Nagar, Tiruchirappalli, Tamil Nadu 620021
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="d-flex align-items-start mb-4">
                                    <div className="contact-icon">
                                        <i className="bi bi-telephone-fill"></i>
                                    </div>
                                    <div>
                                        <h5 className="mb-1">Call Us</h5>
                                        <p className="mb-0">
                                            <a href="tel:+916385217970" className="text-decoration-none">
                                                +91 63852 17970
                                            </a>
                                        </p>
                                    </div>
                                </div>


                                {/* Email */}
                                <div className="d-flex align-items-start mb-4">
                                    <div className="contact-icon">
                                        <i className="bi bi-envelope-fill"></i>
                                    </div>
                                    <div>
                                        <h5 className="mb-1">Email Us</h5>
                                        <p className="mb-0">
                                            info@qualitytattoostudio.in<br />
                                        </p>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="d-flex align-items-start">
                                    <div className="contact-icon">
                                        <i className="bi bi-clock-fill"></i>
                                    </div>
                                    <div>
                                        <h5 className="mb-1">Studio Hours</h5>
                                        <p className="mb-0">
                                            Mon - Fri: 9AM - 8PM<br />
                                            Sat: 10AM - 6PM<br />
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="testimonial-section">
                <div className="container">
                    <h2 className="text-center mb-5" style={{ fontWeight: 700 }}>What Our Clients Say</h2>

                    <div className="row g-4">
                        {/* Testimonial 1 */}
                        <div className="col-md-4">
                            <div className="testimonial-card">
                                <p style={{ fontSize: '15px', lineHeight: 1.7 }}>
                                    “Amazing tattoo experience! The artist listened carefully to my idea and created something
                                    even better than I imagined.
                                    Clean studio, professional service — highly recommended!”
                                </p>
                                <h5 style={{ marginTop: '20px', fontWeight: 600 }}>— Aravind R.</h5>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="col-md-4">
                            <div className="testimonial-card">
                                <p style={{ fontSize: '15px', lineHeight: 1.7 }}>
                                    “I got my cover-up tattoo done here. The detailing and shading are next level.
                                    They explained everything clearly and made the whole process comfortable.”
                                </p>
                                <h5 style={{ marginTop: '20px', fontWeight: 600 }}>— Sneha K.</h5>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="col-md-4">
                            <div className="testimonial-card">
                                <p style={{ fontSize: '15px', lineHeight: 1.7 }}>
                                    “One of the best affordable tattoo studios in Trichy.
                                    The artist took time to understand my design and delivered it perfectly.
                                    Definitely coming back for my next one.”
                                </p>
                                <h5 style={{ marginTop: '20px', fontWeight: 600 }}>— Mohammed A.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
