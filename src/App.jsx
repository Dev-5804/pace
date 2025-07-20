import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CustmerReview, Footer, Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from '/src/sections';
import Nav from './components/Nav';
import AboutUs from './sections/AboutUs';
import ContactUs from './sections/ContactUs';
import Products from './sections/Products';
import OurServices from './sections/OurServices';
import ThankYou from './sections/ThankYou';

const App = () => (
  <Router>
    <main className='relative'>
      <Nav />
      <Routes>
        <Route path="/" element={
          <>
            <section className='xl:padding-l wide:padding-r padding-b'>
              <Hero />
            </section>
            <section className='padding'>
              <PopularProducts />
            </section>
            <section className='padding'>
              <SuperQuality />
            </section>
            <section className='padding'>
              <Services />
            </section>
            <section className='padding'>
              <SpecialOffer />
            </section>
            <section className='bg-pale-blue padding'>
              <CustmerReview />
            </section>
            <section className='padding-x sm:py-32 py-16 w-full'>
              <Subscribe />
            </section>
          </>
        } />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      <section className='padding-x padding-t bg-black pb-8'>
        <Footer />
      </section>
    </main>
  </Router>
);

export default App;