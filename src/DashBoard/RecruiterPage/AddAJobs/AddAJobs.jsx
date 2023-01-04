import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { TagsInput } from "react-tag-input-component";
import { useTitle } from 'react-use';
import { AuthContext } from '../../../ContextApi/AuthProvider/AuthProvider';
import Spinner from '../../../Component/Spinner/Spinner';
import PrimaryButton from '../../../Component/Button/PrimaryButton';
import SmallSpinner from '../../../Component/Spinner/SmallSpinner';

const AddAJobs = () => {

    useTitle('Dashboard - Add A Job')
    const [currencys, setCurrencys] = useState([]);

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    const [addLoading, setAddLoading] = useState(false)
    const { user, loading } = useContext(AuthContext);

    const [selected, setSelected] = useState([]);

    console.log(selected);

    const { register, formState: { errors }, handleSubmit } = useForm();
    console.error(errors)
    const navigate = useNavigate();

    useEffect(() => {
        setAddLoading(true)
        fetch('http://localhost:5000/currency')
            .then(res => res.json())
            .then(data => {
                setCurrencys(data)
                setAddLoading(false)
            })
            .catch(error => {
                console.error(error)
                setAddLoading(false)
            })

    }, [])

    const handleAddProduct = (data) => {
        // setAddLoading(true)
        const job_title = data.title;
        const salary = data.salary;
        const pay_duration = data.pay_duration;
        const currency = data.currency;
        const jobType = data.job_type;
        const experience = data.experience;
        const description = data.description;
        const time = new Date().toLocaleString();

        let jobInfo = {
            job_details: {
                job: {
                    job_title,
                    jobType
                },
                recruiter_email: user.email,
                experience
            },
            required_skilled: selected,
            pay: {
                payment: salary,
                currency: currency,
                pay_duration: pay_duration
            },
            job_description: description,
            job_visible: [startDate.toLocaleString(), endDate.toLocaleString()],
            job_post_time: time
        }
        console.log(currency)
        setDoctorToDB(jobInfo)
    }
    //     // save information to the database 

    const setDoctorToDB = (jobInfo) => {

        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(jobInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Your Jobs added successfully');
                    navigate('/dashboard')
                    setAddLoading(false)
                }
            })
    }

    if (addLoading) {
        return <Spinner />
    }


    return (
        <div className='flex justify-center items-center py-5 '>
            <div className='flex flex-col w-11/12  p-6 rounded-md sm:p-10 bg-gray-200 text-gray-900'>
                <div className='mb-5 text-center'>
                    <h1 className='text-4xl font-bold'>Add A Job</h1>
                </div>
                <form onSubmit={handleSubmit(handleAddProduct)} className='space-y-6 ng-untouched ng-pristine ng-valid' >
                    <div className='space-y-4'>
                        <div className='flex md:flex-row lg:flex-row flex-col gap-3'>
                            <div className="form-control w-full md:w-6/12 lg:w-6/12">
                                <label className="label">
                                    <span className="label-text font-bold">Job Title</span>
                                </label>
                                <input type="text" className='w-full px-3 py-2 border rounded-md border-gray-600 focus:outline-green-500 bg-blue-200 focus:bg-white text-gray-900' {...register("title", {
                                    required: "Title is required"
                                })} />

                            </div>
                            <div className="form-control w-full md:w-6/12 lg:w-6/12">
                                <label className="label">
                                    <span className="label-text font-bold">Salary</span>
                                </label>
                                <input type="number"
                                    className='w-full px-3 py-2 border rounded-md border-gray-600 focus:outline-green-500 bg-blue-200 focus:bg-white text-gray-900' {...register("salary", {
                                        required: "Salary is required"
                                    })} />
                            </div>
                        </div>

                        <div className='flex md:flex-row lg:flex-row flex-col gap-3'>
                            <div className="form-control w-full md:w-6/12 lg:w-6/12">
                                <label className="label">
                                    <span className="label-text font-bold">Payment Duration</span>
                                </label>
                                <select
                                    className='w-full px-3 py-2 border rounded-md border-gray-600 focus:outline-green-500 bg-blue-200 focus:bg-white text-gray-900' {...register("pay_duration", {
                                        required: "Jobs type is required"
                                    })}>
                                    <option value={''} disabled selected>Select Payment Duration</option>
                                    <option value={'Par Month'}>Par Month</option>
                                    <option value={'Par Year'}>Par Year</option>
                                    <option value={'Par Hours'}>Par Hours</option>
                                    <option value={'Contract'}>Contract</option>
                                </select>

                            </div>
                            <div className="form-control w-full md:w-6/12 lg:w-6/12">
                                <label className="label">
                                    <span className="label-text font-bold">Currency</span>
                                </label>
                                <select
                                    className='w-full px-3 py-2 border rounded-md border-gray-600 focus:outline-green-500 bg-blue-200 focus:bg-white text-gray-900' {...register("currency", {
                                        required: "Currency is required"
                                    })}>
                                    <option value={''} disabled selected>Add Currency</option>
                                    {
                                        currencys.map(currency => <option
                                            key={currency._id}
                                            value={currency.sort}
                                        >{currency.sort} - {currency.name}</option>)
                                    }

                                </select>
                            </div>
                        </div>

                        <div className='flex md:flex-row lg:flex-row flex-col gap-3'>
                            <div className="form-control w-full md:w-6/12 lg:w-6/12">
                                <label className="label">
                                    <span className="label-text font-bold">Job Type</span>
                                </label>
                                <select
                                    className='w-full px-3 py-2 border rounded-md border-gray-600 focus:outline-green-500 bg-blue-200 focus:bg-white text-gray-900' {...register("job_type", {
                                        required: "Jobs type is required"
                                    })}>
                                    <option value={''} disabled selected>Select Your Jobs type</option>
                                    <option value={'Remote'}>Remote</option>
                                    <option value={'On-Site'}>On-Site</option>
                                    <option value={'Hybrid'}>Hybrid</option>
                                    <option value={'Contract'}>Contract</option>
                                </select>

                            </div>
                            <div className="form-control w-full md:w-6/12 lg:w-6/12">
                                <label className="label">
                                    <span className="label-text font-bold">Required Skilled</span>
                                </label>
                                <TagsInput
                                    className='w-full px-3 py-2 border rounded-md border-gray-600 focus:outline-green-500 bg-blue-200 focus:bg-white'
                                    value={selected}
                                    onChange={setSelected}
                                    name="fruits"
                                    placeHolder="Inter Required Skills"
                                />

                            </div>
                        </div>

                        <div className='flex md:flex-row lg:flex-row flex-col gap-3'>
                            <div className="form-control w-full md:w-6/12 lg:w-6/12">
                                <label className="label">
                                    <span className="label-text font-bold">Experience Level</span>
                                </label>
                                <select
                                    className='w-full px-3 py-2 border rounded-md border-gray-600 focus:outline-green-500 bg-blue-200 focus:bg-white text-gray-900' {...register("experience", {
                                        required: "Brand is required"
                                    })}>
                                    <option value={''} disabled selected>Select Experience Level</option>
                                    <option value={'fresher'}>0 to 1 Years</option>
                                    <option value={'Minimum 1 Years'}>Minimum 1 Years</option>
                                    <option value={'Minimum 2 Years'}>Minimum 2 Years</option>
                                    <option value={'Over 2 Years'}>Over 2 Years</option>
                                </select>

                            </div>
                            <div className="form-control w-full md:w-6/12 lg:w-6/12">
                                <label className="label">
                                    <span className="label-text font-bold">Set View Time</span>
                                </label>
                                <DatePicker
                                    className='w-full px-3 py-2 border rounded-md border-gray-600 focus:outline-green-500 bg-blue-200 focus:bg-white text-gray-900'
                                    selectsRange={true}
                                    startDate={startDate}
                                    endDate={endDate}
                                    onChange={(update) => {
                                        setDateRange(update);
                                    }}
                                    withPortal
                                />
                            </div>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">Job Description</span>
                            </label>
                            <textarea className='w-full px-3 py-2 border rounded-md border-gray-600 focus:outline-green-500 bg-blue-200 text-gray-900' {...register("description", {
                                required: "description is required"
                            })}></textarea>
                        </div>
                    </div>
                    <div>
                        <PrimaryButton
                            type='submit'
                            classes='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
                        >
                            {loading ? <SmallSpinner /> : 'ADD JOB FOR VIEW'}
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAJobs;