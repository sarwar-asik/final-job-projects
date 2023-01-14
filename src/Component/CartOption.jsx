import React from 'react';
import image from '../asset/logo/Screenshot.png'
import image1 from '../asset/logo/chart.jpg'
import image3 from '../asset/logo/msg.webp'
import CartOptionData from './CartOptionData';

const CartOption = () => {

    const cardData = [
        {
            id: 1,
            name: 'Free Resume Assignments',
            description: 'employees on average spent 31 second a searching resume to identify potential potential matches',
            icon: image,

        },
        {
            id: 2,
            name: 'Job Fit Scoring',
            description: 'our new feet metal shows you who is jobs are most relevant to your skill and interest',
            icon: image1,
        },
        {
            id: 3,
            name: 'Help Every Step Of The Way',
            description: 'our career advice section is ful of information to help you identify the Right Fit',
            icon: image3,

        },
        
    ]

    return (
        <div className='container mx-auto'>
            <div className='container mx-auto'>
            <div className='text-center my-16'>
                 <h2 className='text-3xl font-semibold '>How It Works?</h2>
                 <p className='mt-4'>Job for anyone, anywhere</p>
            </div>
            <div className='grid mt-16 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card=><CartOptionData
                   key={card.id}
                   card={card}
                ></CartOptionData>)
            }
            </div>
        </div>
        </div>
    );
};

export default CartOption;