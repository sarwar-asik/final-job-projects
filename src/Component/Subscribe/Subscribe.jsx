import React from 'react';

const Subscribe = () => {
    const user = {email: "rubel@gmail.com"}

    const handleSubscribe = () => {
        fetch(`http://localhost:5000/users/subscribe/${user.email}`, {
            method: "PUT",
            headers: {
                "content-type" : "application/json"
            }
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
    }

    return (
        <div className='text-white'>
            <h2 className="text-white text-center font-bold text-xl">Get premium service</h2>
            <label htmlFor="subscribetion">
                <input type="email" placeholder='Enter your email' className='p-2 rounded' />
                <button onClick={handleSubscribe} className='bg-blue-700 p-2 ml-1 rounded text white'>Subscribe</button>
            </label>
        </div>
    );
};

export default Subscribe;