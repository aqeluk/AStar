import Contact from '../components/Contact';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}

export default MyApp;
