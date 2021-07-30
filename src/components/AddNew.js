import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import {
    addNewUser
} from '../actions'
function AddNew() {

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [dob, setdob] = useState('');
    const [country, setcountry] = useState('');
    const dispatch = useDispatch();
    const [show, setshow] = useState(false)

    const add = (e) => {

        e.preventDefault();
        e.stopPropagation();

        const payload = {
            'Full Name': name,
            'Email': email,
            'Date of birth': new Date(dob).toISOString(),
            'Country': country,
            'Id': Math.floor(Math.random() * 100000),
            'Created at': new Date().toISOString()
        }
        console.log(payload);

        dispatch(addNewUser(payload));
    }

    return (
        <div className="add-new-form">
            <button className="add-new" onClick={() => setshow(!show)}>+ Add New</button>
            {show && 
                <form className="new" onSubmit={add}>
                    <label>
                        <span>Name</span>
                        <input onChange={(e) => setname(e.currentTarget.value)} value={name}  required />
                    </label>
                    <label>
                        <span>Email</span>
                        <input onChange={(e) => setemail(e.currentTarget.value)} value={email}  required />
                    </label>
                    <label>
                        <span>Date of birth</span>
                        <input onChange={(e) => setdob(e.currentTarget.value)} value={dob}  placeholder="dd/mm/yyyy" required />
                    </label>
                    <label>
                        <span>Country</span>
                        <input onChange={(e) => setcountry(e.currentTarget.value)} value={country}  required />
                    </label>
                    <button type="submit">Add</button>
                </form>
            }
        </div>
    )
}

export default AddNew
