/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Testimonials from './components/Testimonials.jsx';
import Faq from './components/Faq.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import OrderModal from './components/OrderModal.jsx';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenOrderModal = (serviceTitle: string = '') => {
    setSelectedService(serviceTitle);
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1A1A1A]">
      {/* Navigation */}
      <Navbar onOrderClick={() => handleOpenOrderModal()} />

      {/* Main Page Flow */}
      <main className="flex-grow">
        <Hero onOrderClick={() => handleOpenOrderModal()} />
        <Services onOrderClick={(serviceTitle?: string) => handleOpenOrderModal(serviceTitle || '')} />
        <About onOrderClick={() => handleOpenOrderModal()} />
        <WhyChooseUs />
        <Testimonials />
        <Faq />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Order Online Action Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrderModal}
        preselectedService={selectedService}
      />
    </div>
  );
}
