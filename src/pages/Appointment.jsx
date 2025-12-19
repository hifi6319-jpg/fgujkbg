const Appointment = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        const message = `New Appointment Request:

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email || 'Not provided'}
Service: ${data.service}
Preferred Date: ${data.date || 'Not specified'}
Preferred Time: ${data.time || 'Not specified'}
Details: ${data.description || 'No additional details'}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappNumber = "916385217970"; // Added country code 91 as per standard WA format, matching legacy number
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        window.open(whatsappURL, '_blank');
    };

    return (
        <>
            <section className="page-header" style={{
                background: "linear-gradient(rgba(45, 48, 71, 0.8), rgba(45, 48, 71, 0.8)), url('/hero4.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '180px 0 100px',
                color: 'white',
                textAlign: 'center',
                marginTop: '76px'
            }}>
                <div className="container">
                    <h1 className="animate-on-scroll">Book Appointment</h1>
                    <p className="animate-on-scroll">Schedule your consultation or tattoo session</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 animate-on-scroll">
                            <div className="contact-form">
                                <h3 className="mb-4 text-center">Appointment Request</h3>
                                <p className="text-center mb-5">Fill out the form below and we will get back to you to confirm your appointment.</p>

                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="tel" name="phone" className="form-control" placeholder="Your Phone" required />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" name="email" className="form-control" placeholder="Your Email" />
                                        </div>
                                        <div className="col-md-6">
                                            <select name="service" className="form-control">
                                                <option value="">Select Service</option>
                                                <option value="consultation">Consultation</option>
                                                <option value="custom">Custom Tattoo</option>
                                                <option value="cover-up">Cover-Up</option>
                                                <option value="restoration">Restoration</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label text-muted small">Preferred Date</label>
                                            <input type="date" name="date" className="form-control" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label text-muted small">Preferred Time</label>
                                            <input type="time" name="time" className="form-control" />
                                        </div>
                                        <div className="col-12">
                                            <textarea name="description" className="form-control" rows="5" placeholder="Description of tattoo idea, placement, size, etc."></textarea>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button type="submit" className="btn btn-primary px-5">Submit Request</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Appointment;
