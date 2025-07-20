// import React from 'react';
import { useNavigate } from 'react-router-dom';
import { star } from '../assets/icons';
import Button from './Button';

const PopularProductCard = ({ imgURL, name, price, rating }) => {
    const navigate = useNavigate();

    const handleBuyNow = () => {
        navigate('/thank-you');
    };

    return (
        <div className='flex flex-1 flex-col w-full max-sm:w-full max-sm:items-center '>
            <img
                src={imgURL}
                alt={name}
                className='w-[280px] h-[280px]'
            />
            <div className='mt-8 flex justify-start gap-2.5'>
                <img
                    src={star}
                    alt="rating"
                    width={24}
                    height={24}
                />
                <p className='font-montserrat text-xl leading-normal text-slate-gray'>({rating})</p>
            </div>
            <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
            <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>{price}</p>
            <div className='mt-4 flex flex-col gap-4'>
                <Button label="Buy Now" onClick={handleBuyNow} />
                <Button label="Add to Cart" backgroundColor="bg-transparent" borderColor="border-coral-red" textColor="text-coral-red" />
            </div>
        </div>
    );
};

export default PopularProductCard;
