import { useState } from 'react';

const Gallery = () => {
    const [filter, setFilter] = useState('all');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % filteredImages.length;
            if (!lightboxOpen) setLightboxOpen(true);
            return newIndex;
        });
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => {
            const newIndex = (prevIndex - 1 + filteredImages.length) % filteredImages.length;
            if (!lightboxOpen) setLightboxOpen(true);
            return newIndex;
        });
    };

    const images = [
        { src: '/hero1.webp', category: 'realism', alt: 'Realism Tattoo' },
        { src: '/hero2.webp', category: 'custom', alt: 'Custom Tattoo' },
        { src: '/hero3.webp', category: 'realism', alt: 'Realism Tattoo' },
        { src: '/hero4.webp', category: 'black-grey', alt: 'Black & Grey' },
        { src: '/hero5.webp', category: 'cover-up', alt: 'Cover Up Tattoo' },
        { src: '/hero6.webp', category: 'custom', alt: 'Custom Tattoo' },
        { src: '/hero7.webp', category: 'cover-up', alt: 'Cover Up' },
        { src: '/gallery1.jpg', category: 'custom', alt: 'Custom Tattoo' },
        { src: '/gallery2.jpg', category: 'color', alt: 'Color Tattoo' },
        { src: '/gallery3.jpg', category: 'black-grey', alt: 'Black & Grey' },
        { src: '/gallery4.jpg', category: 'custom', alt: 'Custom Tattoo' },
        { src: '/gallery5.jpg', category: 'realism', alt: 'Realism' },
        { src: '/gallery6.jpg', category: 'black-grey', alt: 'Black & Grey' },
        { src: '/gallery7.jpg', category: 'custom', alt: 'Custom Tattoo' },
        { src: '/gallery8.jpg', category: 'realism', alt: 'Realism' },
        { src: '/gallery9.jpg', category: 'color', alt: 'Color Tattoo' },
        { src: '/gallery10.jpg', category: 'custom', alt: 'Custom Tattoo' },
        { src: '/gallery11.jpg', category: 'color', alt: 'Color Tattoo' },
        { src: '/gallery12.jpg', category: 'custom', alt: 'Custom Tattoo' },
        { src: '/gallery13.webp', category: 'realism', alt: 'Portrait' },
        { src: '/gallery14.jpg', category: 'black-grey', alt: 'Black & Grey' },
        { src: '/gallery15.jpg', category: 'custom', alt: 'Custom Tattoo' },
        { src: '/gallery16.jpg', category: 'cover-up', alt: 'Cover Up' },
        { src: '/gallery17.jpg', category: 'custom', alt: 'Custom Tattoo' },
        { src: '/gallery18.jpg', category: 'black-grey', alt: 'Black & Grey' },
        { src: '/gallery20.jpg', category: 'custom', alt: 'Custom Tattoo' },
        { src: '/gallery21.jpg', category: 'color', alt: 'Color Tattoo' },
        { src: '/gallery22.jpg', category: 'custom', alt: 'Custom Tattoo' },
        { src: '/gallery23.jpg', category: 'realism', alt: 'Realism' },
        { src: '/gallery24.jpg', category: 'black-grey', alt: 'Black & Grey' },
        { src: '/gallery25.jpg', category: 'custom', alt: 'Custom Tattoo' },
        { src: '/gallery26.jpg', category: 'cover-up', alt: 'Cover Up' },
        { src: '/gallery27.jpg', category: 'custom', alt: 'Custom Tattoo' },
        { src: '/gallery28.jpg', category: 'color', alt: 'Color Tattoo' },
        { src: '/gallery29.jpg', category: 'custom', alt: 'Custom Tattoo' },
        { src: '/gallery30.jpg', category: 'realism', alt: 'Realism' },
        { src: '/gallery31.jpg', category: 'black-grey', alt: 'Black & Grey' },
        { src: '/gallery32.jpg', category: 'custom', alt: 'Custom Tattoo' },
        { src: '/gallery33.jpg', category: 'cover-up', alt: 'Cover Up' },
        { src: '/gallery34.jpg', category: 'color', alt: 'Color Tattoo' },
        { src: '/gallery50.jpg', category: 'custom', alt: 'Custom Tattoo' },
        { src: '/gallery51.jpg', category: 'realism', alt: 'Realism' },
        { src: '/gallery52.jpg', category: 'black-grey', alt: 'Black & Grey' },
        { src: '/gallery53.jpg', category: 'custom', alt: 'Custom Tattoo' },
    ];

    const filteredImages = filter === 'all'
        ? images
        : images.filter(img => img.category === filter);

    return (
        <>
            <section className="gallery-hero">
                <div className="container">
                    <h1 className="animate-on-scroll">Our Portfolio</h1>
                    <p className="animate-on-scroll">A showcase of our diverse tattoo styles and techniques</p>
                </div>
            </section>

            <section className="section-padding bg-light">
                <div className="container">

                    {/* Loop Gallery Navigation Buttons */}
                    <div className="d-flex justify-content-center align-items-center gap-3 mb-4 animate-on-scroll">
                        <button className="btn btn-outline-primary rounded-circle p-2" onClick={prevImage} aria-label="Previous Image" style={{ width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <i className="bi bi-chevron-left"></i>
                        </button>
                        <span className="text-uppercase fw-bold ls-1" style={{ fontSize: '0.9rem', letterSpacing: '2px' }}>Browse Gallery</span>
                        <button className="btn btn-outline-primary rounded-circle p-2" onClick={nextImage} aria-label="Next Image" style={{ width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>

                    <div className="gallery-filter text-center mb-5 animate-on-scroll">
                        <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
                        <button className={`filter-btn ${filter === 'custom' ? 'active' : ''}`} onClick={() => setFilter('custom')}>Custom Tattoos</button>
                        <button className={`filter-btn ${filter === 'cover-up' ? 'active' : ''}`} onClick={() => setFilter('cover-up')}>Cover-Ups</button>
                        <button className={`filter-btn ${filter === 'color' ? 'active' : ''}`} onClick={() => setFilter('color')}>Color</button>
                        <button className={`filter-btn ${filter === 'realism' ? 'active' : ''}`} onClick={() => setFilter('realism')}>Realism</button>
                    </div>

                    <div className="gallery-grid row g-3">
                        {filteredImages.map((img, index) => (
                            <div key={index} className="col-lg-4 col-md-6 animate-on-scroll" onClick={() => openLightbox(index)}>
                                <div className="about-img h-100 position-relative" style={{ borderRadius: '12px', overflow: 'hidden', cursor: 'pointer' }}>
                                    <img src={img.src} alt={img.alt} className="img-fluid w-100 h-100 object-fit-cover" loading="lazy" style={{ minHeight: '300px' }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox / Loop Gallery */}
            {lightboxOpen && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox}><i className="bi bi-x-lg"></i></button>
                    <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}><i className="bi bi-chevron-left"></i></button>
                    <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}><i className="bi bi-chevron-right"></i></button>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img src={filteredImages[currentImageIndex].src} alt={filteredImages[currentImageIndex].alt} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Gallery;
