
import React, { useEffect, useState } from 'react';
import { ServerApi } from '../../AllApi/MainApi';
import Jobs from './Jobs';

const FindJob = () => {

    const [search, setSearch] = useState("all")
    const [allJobs, setAllJobs] = useState([]);
    const [checked, setChecked] = useState([]);
    const checkList = ["Remote", "On-Site", "Hybrid", "Contract"];
    const [expChecked, setExpChecked] = useState([]);
    const expCheckList = ["Fresher", "1 years Experience", "2 years Experience", "3 years Experience"];

    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };

    // const checkedItems = checked.length
    //     ? checked.reduce((total, item) => {
    //         return total + ", " + item;
    //     })
    //     : "";
    // console.log(checked);

    var isChecked = (item) =>
        checked.includes(item) ? "checked-item" : "not-checked-item";

    const handleExpCheck = (event) => {
        var updatedExpList = [...expChecked];
        if (event.target.checked) {
            updatedExpList = [...expChecked, event.target.value];
        } else {
            updatedExpList.splice(checked.indexOf(event.target.value), 1);
        }
        setExpChecked(updatedExpList);
    };

    // const checkedExpItems = expChecked.length
    //     ? expChecked.reduce((total, item) => {
    //         return total + ", " + item;
    //     })
    //     : "";
    // console.log(expChecked);

    var isExpChecked = (item) =>
        expChecked.includes(item) ? "checked-item" : "not-checked-item";

    useEffect(() => {
        fetch(`${ServerApi}/jobs?jobstype=${search}`)
            .then(res => res.json())
            .then(data => {
                setAllJobs(data)
            })
    }, [search])

    // this is for exp 

    const handleToExp = () => {

        fetch(`${ServerApi}/jobs/exp`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify([...expChecked])
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllJobs(data)
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className='bg-white'>
            <div className="drawer drawer-end drawer-mobile bg-white ">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content">
                    <Jobs allJobs={allJobs} setSearch={setSearch}></Jobs>
                </div>

                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <div className="menu p-4 w-80 text-bold bg-blue-200">
                        <h2 className='text-xl font-bold text-center mb-10'>Filter Your Favorite Job</h2>

                        <div>
                            <h2 className='text-xl font-bold underline text-center mb-5'>Filter Experience</h2>
                            <div className='flex items-center'>
                                <div className='w-full'>
                                    {expCheckList.map((item, index) => (
                                        <div key={index}>
                                            <input className='mx-2' value={item} type="checkbox" onChange={handleExpCheck} />
                                            <span className={isExpChecked(item)}>{item}</span>
                                        </div>
                                    ))}
                                    <div className='flex mt-2 justify-center'>
                                        <button onClick={handleToExp} className='btn w-full btn-sm bg-green-600' type="submit">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className='text-xl font-bold underline text-center mt-7 mb-5'>Filter With Location</h2>
                            <div className='flex items-center'>
                                <div className='w-full'>
                                    {checkList.map((item, index) => (
                                        <div key={index}>
                                            <input className='mx-2' value={item} type="checkbox" onChange={handleCheck} />
                                            <span className={isChecked(item)}>{item}</span>
                                        </div>
                                    ))}
                                    <div className='flex mt-2 justify-center'>
                                        <button className='btn w-full btn-sm bg-green-600' type="submit">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        </div>
    );
};

export default FindJob;