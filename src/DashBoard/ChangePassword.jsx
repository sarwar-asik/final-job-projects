import React, { useContext, useState } from 'react';
import { AuthContext } from '../ContextApi/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const ChangePassword = () => {
    const { updatePass, setLoading } = useContext(AuthContext);
    const [newPass, setNewPass] = useState("");
    // console.log("pss", newPass);

    const updatePassword = () => {
        // console.log(newPass);
        updatePass(newPass)
            .then((result) => {
                console.log(result)
                setLoading(false)
                toast.success('Password Change successfully')
            }).catch((error) => {
                console.error(error)
            });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="w-full max-w-xl p-5 rounded-md shadow-xl bg-base-100">
                <div className="form-control">
                    <label className="label">
                        <span className="text-xl text-orange-500">New Password</span>
                    </label>
                    <input onChange={event => setNewPass(event.target.value)} type="password" placeholder="Write Your new Password" className="input input-bordered" />
                </div>

                <p className='my-1 text-red-400 text-sm'>Password Must be 8 Character</p>

                <div className="form-control mt-6">
                    <button onClick={updatePassword} className="btn btn-primary">Update Password</button>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;