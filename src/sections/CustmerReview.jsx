// import React from 'react'
import {reviews} from '../constants'
import ReviewCard from '../components/ReviewCard'

const CustmerReview = () => {
  return (
    <section className='max-container '>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        What Our <span className='text-coral-red'>Customer</span> Say?
      </h3>
      <p className='indo-text m-auto mt-4 max-w-lg text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, sint. Ad voluptate dicta atque aut illo! Iusto eveniet minus nam.</p>

      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 '>
        {reviews.map((reviews) => (
          <ReviewCard
            key={reviews.customerName} imgURL={reviews.imgURL}
            rating={reviews.rating} customerName={reviews.customerName} feedback={reviews.feedback}
          />
        ))}

      </div>
    </section>
  )
}

export default CustmerReview
