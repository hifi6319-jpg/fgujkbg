import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section className="page-header" style={{ backgroundImage: 'url(/hero2.webp)' }}>
                <div className="container">
                    <h1 className="animate-on-scroll">About Us</h1>
                    <p className="animate-on-scroll">Where Art Meets Skin - The Story of Quality Tattoo Studio</p>
                </div>
            </section>

            {/* Our Story / Intro */}
            <section className="section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="about-img animate-on-scroll">
                                <img src="/logo.webp" alt="Quality Tattoo Studio" className="img-fluid round-image" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="section-title text-start animate-on-scroll">Our Story</h2>
                            <h4 className="mb-4 text-primary animate-on-scroll">Discover the passion, artistry, and dedication behind QUALITY TATTOO STUDIO</h4>
                            <p className="mb-4 animate-on-scroll">
                                QUALITY TATTOO STUDIO represents the pinnacle of tattoo artistry, where exceptional skill meets creative vision.
                                Our studio was founded on the principle that tattoos should be more than just ink—they should be meaningful works of art that tell your unique story.
                            </p>
                            <p className="animate-on-scroll">
                                With over a decade of collective experience, our artists specialize in various styles from delicate fine-line work to bold traditional pieces.
                                We prioritize hygiene, comfort, and artistic excellence in every tattoo we create.
                            </p>

                            <div className="row mt-4 g-3">
                                <div className="col-sm-6 animate-on-scroll">
                                    <ul className="list-unstyled">
                                        <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> Award-Winning Artists</li>
                                        <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> Custom Design Process</li>
                                        <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> Premium Quality Materials</li>
                                    </ul>
                                </div>
                                <div className="col-sm-6 animate-on-scroll">
                                    <ul className="list-unstyled">
                                        <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> Sterile Environment</li>
                                        <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> Personalized Consultations</li>
                                        <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> Aftercare Support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Journey (Timeline) */}
            <section className="section-padding bg-light">
                <div className="container">
                    <h2 className="section-title text-center animate-on-scroll">Our Journey</h2>
                    <p className="text-center mb-5 animate-on-scroll">From humble beginnings to becoming a premier tattoo destination</p>

                    <div className="timeline">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                {/* 2010 */}
                                <div className="timeline-item animate-on-scroll">
                                    <div className="year">2010</div>
                                    <div className="content">
                                        <h5>Foundation</h5>
                                        <p>QUALITY TATTOO STUDIO was founded by a group of passionate artists with a shared vision: to create a studio where artistry and client experience were equally prioritized.</p>
                                    </div>
                                </div>
                                {/* 2013 */}
                                <div className="timeline-item animate-on-scroll">
                                    <div className="year">2013</div>
                                    <div className="content">
                                        <h5>First Expansion</h5>
                                        <p>We expanded our studio space to accommodate more artists and provide private consultation rooms, enhancing the personalized experience for our clients.</p>
                                    </div>
                                </div>
                                {/* 2016 */}
                                <div className="timeline-item animate-on-scroll">
                                    <div className="year">2016</div>
                                    <div className="content">
                                        <h5>Artistic Recognition</h5>
                                        <p>Our artists began receiving national recognition, with several winning awards at prestigious tattoo conventions across the country.</p>
                                    </div>
                                </div>
                                {/* 2019 */}
                                <div className="timeline-item animate-on-scroll">
                                    <div className="year">2019</div>
                                    <div className="content">
                                        <h5>Modernization</h5>
                                        <p>We completely renovated our studio, incorporating state-of-the-art equipment and creating a more welcoming, gallery-like atmosphere.</p>
                                    </div>
                                </div>
                                {/* 2022 */}
                                <div className="timeline-item animate-on-scroll">
                                    <div className="year">2022</div>
                                    <div className="content">
                                        <h5>Premium Status</h5>
                                        <p>QUALITY TATTOO STUDIO was recognized as a premium tattoo destination, known for our exceptional custom work and unparalleled client care.</p>
                                    </div>
                                </div>
                                {/* Present */}
                                <div className="timeline-item animate-on-scroll">
                                    <div className="year">Present</div>
                                    <div className="content">
                                        <h5>Continuing Excellence</h5>
                                        <p>We continue to push artistic boundaries while maintaining our commitment to quality, safety, and creating meaningful tattoos for our clients.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="section-padding">
                <div className="container">
                    <h2 className="section-title text-center animate-on-scroll">Our Values</h2>
                    <p className="text-center mb-5 animate-on-scroll">The principles that guide everything we do</p>
                    <div className="row g-4">
                        <div className="col-md-4 animate-on-scroll">
                            <div className="value-card text-center p-4 h-100 border rounded-3 shadow-sm">
                                <div className="icon mb-3 text-primary fs-1"><i className="bi bi-palette"></i></div>
                                <h4>Artistic Excellence</h4>
                                <p>We believe every tattoo should be a masterpiece. Our artists continuously refine their skills and stay updated with the latest techniques and trends.</p>
                            </div>
                        </div>
                        <div className="col-md-4 animate-on-scroll">
                            <div className="value-card text-center p-4 h-100 border rounded-3 shadow-sm">
                                <div className="icon mb-3 text-primary fs-1"><i className="bi bi-shield-check"></i></div>
                                <h4>Safety & Hygiene</h4>
                                <p>Your health and safety are our top priorities. We maintain the highest standards of cleanliness and use only medical-grade, single-use equipment.</p>
                            </div>
                        </div>
                        <div className="col-md-4 animate-on-scroll">
                            <div className="value-card text-center p-4 h-100 border rounded-3 shadow-sm">
                                <div className="icon mb-3 text-primary fs-1"><i className="bi bi-people"></i></div>
                                <h4>Client Partnership</h4>
                                <p>We view each tattoo as a collaboration. We listen carefully to your ideas and work together to create a design that perfectly represents your vision.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet Our Founders */}
            <section className="section-padding bg-light">
                <div className="container">
                    <h2 className="section-title text-center animate-on-scroll">Meet Our Founders</h2>
                    <p className="text-center mb-5 animate-on-scroll">The visionary artists behind QUALITY TATTOO STUDIO</p>

                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="founder-card bg-white rounded-3 shadow overflow-hidden animate-on-scroll">
                                <div className="row g-0">
                                    <div className="col-md-5">
                                        <img src="/artist_venkat.jpg" alt="Venkat" className="img-fluid h-100 object-fit-cover w-100" style={{ minHeight: '400px' }} />
                                    </div>
                                    <div className="col-md-7">
                                        <div className="p-4 p-md-5 d-flex flex-column justify-content-center h-100">
                                            <h3>Venkat</h3>
                                            <h5 className="text-primary mb-3">Founder & Creative Artist</h5>
                                            <p className="mb-4">
                                                With 6+ years of expertise in realism and portrait tattoos, Venkat delivers precision-driven artistry that defines QUALITY TATTOO STUDIO’s excellence.
                                                His work is known for its durability, smooth healing, flawless finish, and high success rate, with no reported cases of skin bulging or premature fading.
                                                Every tattoo reflects his commitment to detail, perfection, and client satisfaction.
                                            </p>
                                            <p>
                                                Venkat also specialises in advanced cover-up transformations, turning outdated or poorly executed tattoos into visually refined, seamless designs.
                                                Through intelligent layering, strategic planning, and expert shading, each redesign blends naturally with the body, appearing intentional, cohesive, and artistically elevated while ensuring long-term quality and renewed client confidence.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-5 bg-dark text-white text-center">
                <div className="container">
                    <h2 className="mb-4 animate-on-scroll">Ready to Begin Your Tattoo Journey?</h2>
                    <p className="mb-4 lead animate-on-scroll">Book a consultation with our expert artists today.</p>
                    <Link to="/appointment" className="btn btn-primary btn-lg animate-on-scroll">Book Appointment</Link>
                </div>
            </section>
        </>
    );
};

export default About;
