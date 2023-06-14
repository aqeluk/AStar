import { useRouter } from 'next/router';
import Contact from '../components/Contact';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      {currentPath !== '/register' && currentPath !== '/contact' && <CTA />}
      <Contact />
      <Footer />
    </>
  );
}

export default MyApp;
