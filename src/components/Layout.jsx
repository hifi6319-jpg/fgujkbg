import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import WhatsAppButton from './WhatsAppButton';
import Loader from './Loader';
import ChatWidget from './ChatWidget';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    useScrollAnimation();

    return (
        <>
            <Loader />
            <div className="aurora-background"></div>
            <Navbar />
            <Outlet />
            <Footer />
            <ScrollToTop />
            <WhatsAppButton />
            <ChatWidget />
        </>
    );
};

export default Layout;
