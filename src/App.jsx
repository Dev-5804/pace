import React from 'react'
import { CustmerReview, Footer, Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from '/src/sections';
import Nav from './components/Nav';

const App = () => (
  <main className='relative'>
    <Nav />
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
    <section className='padding-x padding-t bg-black pb-8'>
      <Footer />
    </section>
  </main>
)

export default App