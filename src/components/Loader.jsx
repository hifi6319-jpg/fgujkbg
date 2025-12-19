import { useEffect, useState } from 'react';

const Loader = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
            setTimeout(() => {
                setShouldRender(false);
            }, 600); // Wait for transition
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (!shouldRender) return null;

    return (
        <section id="loader" className={`loader-section ${isLoaded ? 'hidden' : ''}`}>
            <div className="three-body">
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
            </div>
        </section>
    );
};

export default Loader;
