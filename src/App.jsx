import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'sonner';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';

import Home from './pages/Home';
import Equipment from './pages/Equipment';
import Services from './pages/Services';
import Industries from './pages/Industries';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function ScrollReset() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, search]);
  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollReset />
      <Navbar />

      <main className="min-h-[60vh] bg-charcoal-900">
        <ErrorBoundary>
          <AnimatePresence mode="popLayout" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/equipment" element={<Equipment />} />
              <Route path="/services" element={<Services />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </ErrorBoundary>
      </main>

      <Footer />
      <ScrollToTop />
      <Toaster
        position="top-center"
        theme="dark"
        closeButton
        toastOptions={{
          style: {
            fontFamily: 'Inter, system-ui, sans-serif',
            background: '#1A1A1D',
            color: '#F5F5F6',
            border: '1px solid #35353C',
            borderRadius: '2px',
          },
        }}
      />
    </>
  );
}
