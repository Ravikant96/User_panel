import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    deleteUser,
    updateUser
} from '../actions'

const formatDate = (dateString) => {
    
    const options = { year: "numeric", month: "long", day: "numeric" }
    
    return new Date(dateString).toLocaleDateString(undefined, options)
}

function Card(props) {

    const { user } = props;
    const [name, setname] = useState(user['Full Name']);
    const [email, setemail] = useState(user['Email']);
    const [dob, setdob] = useState(user['Date of birth']);
    const [country, setcountry] = useState(user['Country']);
    const [editMode, seteditMode] = useState(false)

    const id = user['Id'];

    const dispatch = useDispatch();

    const deleteSelectedUser = () => {

        dispatch(deleteUser(id));
    }

    const updateSelectedUser = () => {

        seteditMode(false);

        const payload = {
            'Full Name': name,
            'Email': email,
            'Date of birth': new Date(dob).toISOString(),
            'Country': country,
            'Id': id,
            'Created at': user['Created at']
        }

        dispatch(updateUser(payload));
    }

    return (
        <div className="card">
            <div className="details">
                <label>
                    <span>Name: </span>
                    {!editMode && <span><b>{name}</b></span>}
                    {editMode &&<input onChange={(e) => setname(e.currentTarget.value)} value={name} />}
                </label>
                <label>
                    <span>Email: </span>
                    {!editMode && <span><b>{email}</b></span>}
                    {editMode &&<input onChange={(e) => setemail(e.currentTarget.value)} value={email} />}
                </label>
                <label>
                    <span>Date of birth: </span>
                    {!editMode && <span><b>{formatDate(dob)}</b></span>}
                    {editMode &&<input onChange={(e) => setdob(e.currentTarget.value)} value={dob}  placeholder="dd/mm/yyyy" />}
                </label>
                <label>
                    <span>Country: </span>
                    {!editMode && <span><b>{country}</b></span>}
                    {editMode &&<input onChange={(e) => setcountry(e.currentTarget.value)} value={country} />}
                </label>
            </div>
            <div className="icon">
                <span onClick={deleteSelectedUser}>Delete</span>
                {!editMode && <span className="yellow" onClick={() => seteditMode(true)}>Edit</span>}
                {editMode && <span className="green" onClick={updateSelectedUser}>Save</span>}
            </div> 
        </div>
    )
}

export default Card
