import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img
        src={ imgURL }
        className='rounded-full object-cover w-[12px0] h-[120px]' />
      <p className='mt-6 max-w-sm text-center info-text '>{ feedback }</p>
      <div className='mt-3 flex flex-col justify-center items-center gap-2'>
          <img
            src={ star }
            width={ 24 }
            height={ 24 }
            className='object-contain'
          />
          <p className='texr-xl font-montserrat text-slate-gray'> ({ rating })</p>
        <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>{ customerName }</h3>
      </div>
    </div>
  )
}

export default ReviewCard
