import React, { useState } from 'react';
import Select from "react-select";

const Compose = () => {
    const [selectedOptions, setSelectedOptions] = useState();


    const optionList = [
        { value: "developer@gmail.com", label: "developer@gmail.com" },
        { value: "designer@gmail.com", label: "designer@gmail.com" },
        { value: "graphics@gmail.com", label: "graphics@gmail.com" },
        { value: "appDeveloper@gmail.com", label: "appDeveloper@gmail.com" },
        { value: "figmaDesigner@gmail.com", label: "figmaDesigner@gmail.com" }
    ];


    function handleSelect(data) {
        setSelectedOptions(data);
        // console.log(data);
    }



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
                        <div className="">
                            <label>
                                <span className="text-gray-700 mb-2">Sand To</span>
                                <div className="dropdown-container">
                                    <Select
                                        className='input-bordered'
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