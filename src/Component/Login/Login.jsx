import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import img2 from '../../asset/find.png';
import PrimaryButton from '../Button/PrimaryButton';
import SmallSpinner from '../Spinner/SmallSpinner';
import { AuthContext } from '../../ContextApi/AuthProvider/AuthProvider';
import { checkUserType } from '../../AllApi/CheckUserType/CheckUserType';
import { setAuthToken } from '../../AllApi/GetTokenApi/GetTokenApi';
import image from '../../asset/login/login.webp'

const Login = () => {
    const [userEmail, setUserEmail] = useState('')
    const { login, loading, setLoading, signInWithGoogle, resetPassword, userVerification, LogOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = '/' || location.state?.from?.pathname;

    const handleSubmit = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value

        // console.log(email, password)
        const userType = checkUserType(email)
        const userData = {
            email, userType
        }

        login(email, password)
            .then(result => {
                // console.log(result)
                if (result.user) {
                    const user = result.user;
                    if (!user.emailVerified === true) {
                        toast.error('Please Verify You email.....!')
                        userVerification()
                            .then(() => {
                                toast.success('Please Check your email');
                                LogOut();
                                const myTimeout = setTimeout(navigate('/verification'), 2000);
                                setLoading(false)
                            })
                    }
                    else {
                        setAuthToken(userData);
                        toast.success('Login Successful.....!')
                        navigate(from, { replace: true })
                    }
                }
            })
            .catch(err => {
                toast.error(err.message)
                console.error(err)
                setLoading(false)
            })
    }


    const handleGoogleSignin = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                toast.success('Login Successful.....!')
                setLoading(false)
                navigate(from, { replace: true })
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
            })
    }

    // // Password reset
    const handleReset = () => {
        if (!userEmail) {
            toast.error('Please Enter Your Email')
        }
        resetPassword(userEmail)
            .then(() => {
                toast.success('Please check your email for reset link')
                setLoading(false)
            })
            .catch(err => {
                toast.error(err.message)
                console.log(err)
                setLoading(false)
            })
    }
    return (
        <div>
           <h1 className="text-4xl text-center font-bold">Login now!</h1>
           <div className="hero">
              <div className="hero-content flex-col lg:flex-row">
                  <img src={image} alt='' className="max-w-sm rounded-lg shadow-2xl" />
              <div>
              <div  className="hero mt-3 text-black">
                <div className="">
                    <form
                        onSubmit={handleSubmit}
                        noValidate=''
                        action=''
                        className='space-y-6 p-5  ng-untouched ng-pristine ng-valid'
                    >
                        <div className='space-y-4'>
                            <div>
                                <label htmlFor='email' className='block mb-2  text-sm'>
                                    Email address
                                </label>
                                <input onBlur={event => setUserEmail(event.target.value)} type='email' name='email' id='email' required placeholder='Enter Your Email Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-200 focus:outline-green-500 bg-blue-200 text-gray-900'

                                />
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <label htmlFor='password' className='text-sm  mb-2'>
                                        Password
                                    </label>
                                </div>
                                <input type='password' name='password' id='password' required placeholder='*******'
                                    className='w-full px-3 py-2 border rounded-md border-gray-200 bg-blue-200 text-gray-900'
                                />
                            </div>
                        </div>

                        <div>
                            <PrimaryButton
                                type='submit'
                                classes='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover: '
                            >
                                {loading ? <SmallSpinner /> : 'Sign in'}
                            </PrimaryButton>
                        </div>
                    </form>
                    <div className='space-y-1 w-11/12 mx-auto'>
                        <button
                            onClick={handleReset}
                            className='text-xs hover:underline '
                        >
                            Forgot password?
                        </button>
                    </div>
                    <div>
                        <p className='px-3 text-sm text-center my-2 '>
                            Direct Login with social accounts
                        </p>
                    </div>
                    <div className='flex justify-center w-11/12 mx-auto'>
                        <PrimaryButton handler={handleGoogleSignin} type='submit'
                            classes='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover: '
                        >
                            {loading ? <SmallSpinner /> : <div className='flex items-center justify-around'>Continue With <FaGoogle className='ml-2' /></div>}
                        </PrimaryButton>
                    </div>
                    <p className='p-6 text-sm text-center '>
                        Don't have an account yet?{' '}
                        <Link to='/register' className='hover:underline font-semibold text-purple-500 '>
                            Register Now
                        </Link>
                        .
                    </p>
                </div>
            </div>       
           </div>
    </div>
</div>
 </div>
    );
};

export default Login;



