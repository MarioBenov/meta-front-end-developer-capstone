import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import MenuSection from './components/MenuSection'
import TestimonialsSection from './components/TestimonialsSection'
import AboutSection from './components/AboutSection'

export default function App() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <MenuSection />
        <TestimonialsSection />
        <AboutSection />
      </main>

      <Footer />
    </>
  );
}
