import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
// import logo from '../../assets/image/logo.png'
import img from '../../asset/find.png';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'
import { useState } from 'react';
import useSetTitle from '../../Hooks/useSetTitle';
import PrimaryButton from '../Button/PrimaryButton';
import { AuthContext } from '../../ContextApi/AuthProvider/AuthProvider';
import addUser from '../../AllApi/CreateUserApi/CreateUserApi';
import { setAuthToken } from '../../AllApi/GetTokenApi/GetTokenApi';
import image from '../../asset/login/signup.webp'




const Register = () => {
    useSetTitle('Sign Up')
    const navigate = useNavigate()
    const { register, formState: { errors, isValid }, handleSubmit } = useForm({ mode: 'all' });
    const [formStep, setFormStep] = useState(0)
    const { createUser, upDateUser, userVerification, LogOut, setLoading } = useContext(AuthContext)

    const completeFormStep = () => {
        setFormStep(current => current + 1)
    }

    const backPreviousStep = () => {
        setFormStep(current => current - 1)
    }

    const handleUserRegister = data => {
        const userData = {
            name: data.firstName + " " + data.lastName,
            photoURL: data.photo,
            email: data.email,
            pass: data.password,
            userTypes: data.userTypes,
        }
        // console.log(userData);
        createUser(userData.email, userData.pass)
            .then(result => {
                // console.log(result.user);
                if (result.user) {
                    upDateUser({ displayName: userData.name, photoURL: userData.photoURL })
                        .then(() => {
                            userVerification()
                                .then(() => {
                                    toast.success('Please Check your email');
                                    LogOut();
                                    setLoading(false)
                                    navigate('/verification')
                                })
                        }).catch((error) => {
                            console.error(error)
                        });
                    setUserToDB(userData.name, userData.email, userData.photoURL, userData.userTypes)
                }
            })

    }


    const setUserToDB = (name, email, photoURL, userType) => {
        const user = {
            name, email, photoURL, userType
        };
        if (userType === 'recruiter') {
            user.Status = 'nonVerify';
            user.paymentStatus = "Unpaid"
        }
        const userData = {
            email, userType
        }
        addUser(user);
        setAuthToken(userData);

        toast.success('Congratulation! Your Successfully Create an Account.');
    }



    return (
        <div>
        <h1 className="text-4xl text-center font-bold my-5">SignUp!</h1>
        <div className="hero">
           <div className="hero-content flex-col lg:flex-row">
               <img src={image} alt='' className="max-w-sm rounded-lg shadow-2xl" />
           
              <div className=" lg:w-4/12 md:8/12 sm:11/12 mx-auto rounded-lg bg-slate-300 shadow-2xl b">
                <div className='shadow-shadow p-5' data-aos="fade-left" data-aos-duration='2000'>
                    <form onSubmit={handleSubmit(handleUserRegister)}>
                        {
                            formStep === 0 &&
                            <div>
                                <div>
                                    <label className='mb-3  text-sm'>First Name</label>
                                    <input type="text" required {...register("firstName", { required: true })} placeholder="Write your First name" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-blue-200 text-gray-900" />
                                    {errors.firstName && errors.firstName.type === "required" && <p className=' text-xs text-left' role="alert">This field is required</p>}
                                </div>
                                <div className="my-5">
                                    <label className='mb-3  text-sm'>Last Name</label>
                                    <input type="text" required {...register("lastName", { required: true })} placeholder="Write your last name" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-blue-200 text-gray-900" />
                                    {errors.lastName && errors.lastName.type === "required" && <p className=' text-xs text-left' role="alert">This field is required</p>}
                                </div>
                                <div className="text-center mb-10 md:mb-10 lg:mb-[100px] flex gap-4">
                                    {
                                        formStep > 0 &&
                                        <PrimaryButton handler={backPreviousStep} className='text-[#767676] text-sm font-bold flex gap-1 items-center'><HiArrowNarrowLeft /> Back</PrimaryButton>
                                    }
                                    <PrimaryButton handler={completeFormStep} disabled={!isValid} type='button' className={`${!isValid ? 'bg-gray-500' : 'bg-theme-primary'} shadow-shadow-tow text-white w-full py-4 px-5 rounded-2xl  font-medium flex items-center gap-[10px] mx-auto`}>Next Step <HiArrowNarrowRight /></PrimaryButton>
                                </div>
                                {
                                    formStep === 0 &&
                                    <p className='text-center  mt-[-50px] text-sm'>Already have an account?  <Link to='/login' className='uppercase text-theme-primary text-sm font-semibold hover:underline'>Login Here</Link></p>
                                }
                            </div>
                        }
                        {
                            formStep === 1 &&
                            <div>
                                <div>
                                    <label className='mb-3  text-sm'>Your Email Address</label>
                                    <input type="email" required {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} placeholder="Write Email Address" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-blue-200 text-gray-900" />{errors.email && errors.email.type === "required" && <p className=' text-xs text-left' role="alert">This field is required</p>}
                                </div>
                                <div className="my-5">
                                    <label className='mb-3  text-sm'>Your Mobile Number</label>
                                    <input type="text" required {...register("photo", { required: true })} placeholder="Your Photo Url" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-blue-200 text-gray-900" />
                                    {errors.photo && errors.photo.type === "required" && <p className=' text-xs text-left' role="alert">This field is required</p>}
                                </div>
                                <div className="text-center mb-10 flex gap-4">
                                    {
                                        formStep > 0 &&
                                        <PrimaryButton handler={backPreviousStep}><HiArrowNarrowLeft /> Back</PrimaryButton>
                                    }
                                    <PrimaryButton handler={completeFormStep} disabled={!isValid} type='button'  >Next Step <HiArrowNarrowRight  /></PrimaryButton>
                                </div>
                                {
                                    formStep === 0 &&
                                    <p className='text-center text-[#7E7E7E] text-sm'>Already have an account?  <Link to='/login' className='uppercase text-theme-primary text-sm font-semibold hover:underline'>Login Here</Link></p>
                                }
                            </div>
                        }
                        {
                            formStep >= 2 &&
                            <>
                                <div className="mb-10">
                                    <label className='mb-3  text-sm'>Write Your Password</label>
                                    <input type="password" {...register("password", {
                                        required: true,
                                        minLength: { value: 8, message: 'Password must be 8 character or longer!' },
                                    })} placeholder="Write Password" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-blue-200 text-gray-900" />
                                    {errors.password && <p className=' text-xs text-left' role="alert">{errors.password?.message}</p>}
                                </div>
                                <div className="mb-10">
                                    <label className='mb-3  text-sm'>Create Account For</label>
                                    <select type="text" {...register("userTypes", {
                                        required: true,
                                    })} className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-blue-200 text-gray-900">
                                        <option selected value="candidate">Candidate</option>
                                        <option value="recruiter">Recruiter</option>
                                    </select>
                                </div>
                                <div className="text-center mb-10 flex gap-4">
                                    {
                                        formStep > 0 &&
                                        <PrimaryButton handler={backPreviousStep}><HiArrowNarrowLeft /> Back</PrimaryButton>
                                    }
                                    <PrimaryButton handler={completeFormStep} disabled={!isValid} type='submit'>Sign Up</PrimaryButton>
                                </div>
                            </>
                        }
                    </form>
                </div>
            </div>
 </div>
</div>
</div>
    );
};

export default Register;








