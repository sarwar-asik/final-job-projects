import React from 'react';
import { useState } from 'react';
import Select from "react-select";

const NewsLetter = () => {

    const [user, setUser] = useState([])
    const [selectedOptions, setSelectedOptions] = useState();
    const [userOptions, setUserOptions] = useState();

    const optionList = [
        { value: "Web Developer", label: "Web Developer" },
        { value: "Web Designer", label: "Web Designer" },
        { value: "Graphics Designer", label: "Graphics Designer" },
        { value: "App Developer", label: "App Developer" },
        { value: "Figma Designer", label: "Figma Designer" }
    ];

    const userOptionList = [
        { value: "Candidate", label: "Candidate" },
        { value: "Recruiter", label: "Recruiter" },
        { value: "All user", label: "All user" },
    ];

    function handleSelect(data) {
        setSelectedOptions(data);
        // console.log(data);
    }

    function handleUserSelect(data) {
        setUserOptions(data);
        // console.log(data);
    }


    const formSubmit = (event) => {
        event.preventDefault()

        const form = event.target;

        const subject = form.subject.value;
        const location = form.location.value;
        const message = form.message.value;
        const data = {
            subject, location, message, selectedOptions
        }

        console.log(data);
    }


    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
            <div className="w-11/12 p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
                    Sand A News Letter
                </h1>
                <form onSubmit={formSubmit} className="mt-6">
                    <div className="mb-2">
                        <label>
                            <span className="text-gray-700">Subject Name</span>
                            <input
                                type="text"
                                name="subject"
                                className="
                                    w-full
                                    block px-16 py-2 mt-2
                                    rounded-md
                                    shadow-sm
                                    input input-bordered input-info
                                    "
                                placeholder="New Update"
                            />
                        </label>
                    </div>
                    <div className='flex'>
                        <div class="flex items-start space-x-3 py-6 mr-10">
                            <input type="checkbox" name='user' value="all" onClick={() => setUser(['candidate', 'recruiter'])} class="border-gray-300 rounded h-5 w-5" />
                            <div class="flex flex-col">
                                <h1 class="text-gray-700 font-medium leading-none">All</h1>
                            </div>
                        </div>

                        <div class="flex items-start space-x-3 py-6 mr-10">
                            <input type="checkbox" name='user' value="candidate" class="border-gray-300 rounded h-5 w-5" />
                            <div class="flex flex-col">
                                <h1 class="text-gray-700 font-medium leading-none">Candidate</h1>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3 py-6">
                            <input type="checkbox" name='user' value="recruiter" class="border-gray-300 rounded h-5 w-5" />
                            <div class="flex flex-col">
                                <h1 class="text-gray-700 font-medium leading-none">Recruiter</h1>
                            </div>
                        </div>
                    </div>

                    {/* <div className="mb-2">
                        <label>
                            <span className="text-gray-700 mb-2">Skills</span>
                            <div className="dropdown-container">
                                <Select
                                    options={userOptionList}
                                    placeholder="Select User"
                                    value={userOptions}
                                    onChange={handleUserSelect}
                                    isSearchable={true}
                                    isMulti
                                />
                            </div>
                        </label>
                    </div> */}
                    <div className="mb-2">
                        <label>
                            <span className="text-gray-700 mb-2">Skills</span>
                            <div className="dropdown-container">
                                <Select
                                    options={optionList}
                                    placeholder="Select Skills"
                                    value={selectedOptions}
                                    onChange={handleSelect}
                                    isSearchable={true}
                                    isMulti
                                />
                            </div>
                        </label>
                    </div>
                    <div className="mb-2">
                        <label>
                            <span className="text-gray-700">Location</span>
                            <select name='location' className="select my-2 select-bordered select-info w-full">
                                <option disabled selected>Who shot first?</option>
                                <option value="All Country">All Country</option>
                                <option value="India">India</option>
                                <option value="Bangladesh">Bangladesh</option>
                            </select>
                        </label>
                    </div>
                    <div className="mb-2">
                        <label>
                            <span class="text-gray-700">Message</span>
                            <textarea
                                name="message"
                                className="
                                        block
                                        w-full
                                        mt-2 px-16 py-8
                                        input input-bordered input-info
                                        rounded-md
                                        shadow-sm
                                        "
                                rows="5"
                            ></textarea>
                        </label>
                    </div>

                    <div class="mb-6">
                        <button
                            type="submit"
                            className="
                                    h-10
                                    px-5
                                    text-indigo-100
                                    bg-indigo-700
                                    rounded-lg
                                    transition-colors
                                    duration-150
                                    focus:shadow-outline
                                    hover:bg-indigo-800
                                    "
                        >
                            Publish
                        </button>
                    </div>
                    <div></div>
                </form>
            </div>
        </div>
    );
};

export default NewsLetter;