import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Spinner from '../Spinner/Spinner';
import Payment from './Payment';



const CheckOut = () => {
    const [data, setData] = useState({})
    const [formNum, setFormNum] = useState(0);

    const stripePromise = loadStripe('pk_test_51M6TOhLZ8s0yewmCgFfm6EfzRiWSuPTc6OF3FkESiwmjMsoPJ2PZa0Prfbt9QaiyMsGQTm1QmElc2TwZFUK7J7o800vEyqku9W');


    const handleSubmit1 = (event) => {
        event.preventDefault();
        const form = event.target;
        const f_name = form.f_name.value;
        const l_name = form.l_name.value;
        const name = f_name + " " + l_name;
        const email = form.email.value;
        const amount = form.amount.value;
        const city = form.city.value;
        const state = form.state.value;
        const zip = form.zip.value;


        const data = {
            name, email, amount, city, state, zip
        }
        setData(data)
        setFormNum(1)
    }

    return (
        <div className='flex py-10 justify-center'>
            {formNum === 0 ?
                <form onSubmit={handleSubmit1} id="payment_form" method="Post" class=" bg-slate-400 p-10 rounded-md max-w-lg">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                First Name
                            </label>
                            <input class="appearance-none block w-full 
                        bg-gray-200 text-gray-700 border border-red-500 
                        rounded py-3 px-4 mb-3 leading-tight focus:outline-none 
                        focus:bg-white" id="grid-first-name" type="text"
                                placeholder="Jane" name='f_name' />
                            <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Last Name
                            </label>
                            <input
                                class="appearance-none block w-full
                            bg-gray-200 text-gray-700 border
                            border-gray-200 rounded py-3 px-4 
                            leading-tight focus:outline-none focus:bg-white
                           focus:border-gray-500" id="grid-last-name" type="text"
                                placeholder="Doe" name='l_name' />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Email
                            </label>
                            <input
                                class="appearance-none block w-full
                             bg-gray-200 text-gray-700 border
                             border-gray-200 rounded py-3 px-4 mb-3 
                              leading-tight focus:outline-none focus:bg-white
                             focus:border-gray-500" type="email"
                                name='email' />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Amount
                            </label>
                            <input
                                class="appearance-none block w-full
                             bg-gray-200 text-gray-700 border
                             border-gray-200 rounded py-3 px-4 mb-3 
                              leading-tight focus:outline-none focus:bg-white
                             focus:border-gray-500" type="number"
                                name='amount' />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-2">
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                City
                            </label>
                            <input class="appearance-none block w-full 
                        bg-gray-200 text-gray-700 border 
                        border-gray-200 rounded py-3 px-4 leading-tight 
                        focus:outline-none focus:bg-white focus:border-gray-500"
                                name='city' type="text" placeholder="Albuquerque" />
                        </div>
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                State
                            </label>
                            <div class="relative">
                                <select class="block appearance-none w-full 
                            bg-gray-200 border border-gray-200 
                            text-gray-700 py-3 px-4 pr-8 rounded leading-tight 
                            focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-state" name='state'>
                                    <option>New Mexico</option>
                                    <option>Missouri</option>
                                    <option>Texas</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                Zip
                            </label>
                            <input class="appearance-none block w-full 
                        bg-gray-200 text-gray-700 border 
                        border-gray-200 rounded py-3 px-4 leading-tight 
                        focus:outline-none focus:bg-white focus:border-gray-500"
                                name='zip' type="text" placeholder="90210" />
                        </div>
                        <div className='py-4 flex justify-center w-full'>
                            <input className='btn btn-success' type="submit" value="Pay Now" />
                        </div>
                    </div>
                </form>

                :

                <div className='bg-blue-200 w-4/12 rounded-lg'>
                    {
                        formNum === 1 ? <>
                            <div className='w-11/12 mx-auto my-10'>
                                <h3 className="text-3xl text-center font-bold pt-5">Payment</h3>
                                <p className='text-xl text-center mt-3 mb-7'>Please Pay <strong>${data.amount}</strong></p>
                                {
                                    <Elements stripe={stripePromise}>
                                        <Payment data={data} />
                                    </Elements>
                                }
                            </div>
                        </> :
                            <div>
                                <Spinner />
                            </div>
                    }
                </div>
            }
        </div>
    );
};

export default CheckOut;
