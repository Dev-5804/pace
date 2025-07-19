// import React from 'react'
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { shoes, statistics } from '../constants';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../components/ShoeCard';
import { useState } from 'react';

const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)
  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container p-2'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className='text-3xl font-montserrat text-coral-red'>Out Summer Collection</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[1] font-bold'>
          <span className=' xl:whitesPACE-nowrap relative z-10 pr-10'>The New Arrival</span>
          <br />
          <span className='text-coral-red inline-block mt-3'>PACE</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mb-4 sm:max-w-sm text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quisquam, totam vel vero id pariatur.</p>
        <Button
          label="Shop now"
          iconURL={ arrowRight }
        />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          { statistics.map((stat, index) => (
            <div key={ index }>
              <p className='text-4xl font-palanquin font-bold'>{ stat.value }</p>
              <p className='leading-7 font-montserrat text-slate-gray'>{ stat.label }</p>
            </div>
          )) }
        </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={ bigShoeImg }
          alt="shoe collection"
          width={ 610 }
          height={ 500 }
          className='object-contain relative z-10'
        />
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          { shoes.map((shoe, index) => (
            <div key={ index }>
              <ShoeCard
                imgURL={ shoe }
                ChangeBigShoeImage={ (shoe) => setbigShoeImg(shoe) }
                bigShoeImg={ bigShoeImg }
              />
            </div>
          )) }
        </div>
      </div>
    </section>
  )
}

export default Hero
