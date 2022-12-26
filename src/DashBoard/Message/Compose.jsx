import React from 'react';

const Compose = () => {

    const handleBooking = (event) => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;

        console.log(email)

    }
    return (
        <>

            <input type="checkbox" id="Compose_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box bg-white relative">
                    <label htmlFor="Compose_modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-2xl font-bold text-secondary">Sand Message</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <label htmlFor="email">Send to</label>
                        <input name='email' type="email" placeholder="Email Address" className="input input-bordered w-full " />
                        <label htmlFor="header"></label>
                        <input name='header' type="text" placeholder="Subject" className="input input-bordered w-full " />

                        <textarea name='phone' type="text" placeholder="Write Massage" className="textarea input-bordered w-full " ></textarea>
                        <input type="submit" className='w-full  btn btn-accent' value="Sand Message" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Compose;