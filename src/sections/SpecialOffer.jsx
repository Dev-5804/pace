// import React from 'react'
import Button from '../components/Button'
import { offer } from '../assets/images'
import {arrowRight} from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1 '>
        <img
          src={ offer }
          width={ 473 }
          height={ 487 }
          className='object-contain'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl font-bold lg:max-w-lg'>
          <span className='text-coral-red'>
            Special
          </span> offer
          <br />
        </h2>
        <p className='mt-4 max-w-lg info-text text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, vitae omnis perferendis eius aspernatur consequuntur officia similique enim quasi inventore?</p>
        <p className='mt-4 max-w-lg info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsa!</p>
        <div className='mt-11 flex flex-wrap gap-4 justify-center'>
          <Button
            label="Shop Now"
            iconURL={arrowRight}
          />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
