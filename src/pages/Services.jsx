import { useState } from 'react';

const Services = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "How much does a tattoo cost?",
            answer: "Tattoo pricing varies based on size, complexity, placement, and the artist's experience. Small tattoos start at ₹1000, while larger custom pieces can range from ₹3000 to ₹20000+. During your consultation, we'll provide a detailed quote based on your specific design."
        },
        {
            question: "How long does a tattoo take to heal?",
            answer: "Surface healing typically takes 2-3 weeks, but complete healing (all layers of skin) can take 4-6 weeks. Proper aftercare is essential for optimal healing and tattoo longevity. We provide detailed aftercare instructions and are available to answer any healing questions."
        },
        {
            question: "Do you use sterile equipment?",
            answer: "Absolutely. We maintain the highest standards of hygiene and safety. All needles are single-use and disposed of immediately after each session. Our studio undergoes regular sterilization, and our artists follow strict health protocols to ensure a safe environment for every client."
        },
        {
            question: "Can I bring my own design?",
            answer: "Yes! We welcome custom designs and will work with you to adapt your concept for optimal tattooing. Our artists can also create original designs based on your ideas, references, or inspiration. During your consultation, we'll discuss your vision and create a design that works well as a tattoo."
        },
        {
            question: "How do I care for my new tattoo?",
            answer: "We provide detailed aftercare instructions specific to your tattoo. Generally, this includes keeping the tattoo clean, applying recommended ointment, avoiding sun exposure, and not picking at healing skin. We also offer aftercare products for purchase and are always available to answer healing questions."
        }
    ];

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

            {/* Process Section */}
            <section className="section-padding">
                <div className="container">
                    <h2 className="section-title animate-on-scroll text-center" style={{ marginBottom: '50px' }}>Our Tattoo Process</h2>
                    <p className="text-center mb-5 animate-on-scroll">From concept to completion, we ensure a seamless and enjoyable tattoo experience.</p>

                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="process-step animate-on-scroll">
                                <div className="step-number">1</div>
                                <h4>Consultation</h4>
                                <p>We discuss your ideas, placement, and design preferences to create a personalized plan.</p>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="process-step animate-on-scroll">
                                <div className="step-number">2</div>
                                <h4>Design</h4>
                                <p>Our artists create a custom design based on your vision, with revisions until it's perfect.</p>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="process-step animate-on-scroll">
                                <div className="step-number">3</div>
                                <h4>Application</h4>
                                <p>We apply your tattoo using premium equipment and inks in our sterile, comfortable studio.</p>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="process-step animate-on-scroll">
                                <div className="step-number">4</div>
                                <h4>Aftercare</h4>
                                <p>We provide detailed aftercare instructions and support to ensure proper healing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-padding bg-light">
                <div className="container">
                    <h2 className="section-title animate-on-scroll text-center" style={{ marginBottom: '50px' }}>Frequently Asked Questions</h2>
                    <p className="text-center mb-5 animate-on-scroll">Find answers to common questions about our tattoo services.</p>

                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`faq-item animate-on-scroll ${activeFaq === index ? 'active' : ''}`}
                                    onClick={() => toggleFaq(index)}
                                >
                                    <div className="faq-question">
                                        <span>{faq.question}</span>
                                        <i className="bi bi-chevron-down"></i>
                                    </div>
                                    <div className="faq-answer">
                                        <div>
                                            <p>{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
