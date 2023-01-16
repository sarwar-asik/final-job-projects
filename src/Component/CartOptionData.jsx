import React from 'react';

const CartOptionData = ({card}) => {
    const {description,name,icon}=card
    return (
        <div>
        <div id='Style-shadow' className={`card h-52 card-side shadow-xl mr-10 bg-base-100`}>
            <figure ><img className='h-[200px]' src={icon} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    </div>
    );
};

export default CartOptionData;