import React, {useState} from 'react'
import FormInput from './FormInput';


const UserForm = ({ handleChange }) => {

    return (
        <form className='px-8 py-4 border rounded-md'>
                    
            <FormInput
            label="Name"
            type="text"
            name="name"
            onChange={handleChange}
            />

            <FormInput
            label="Description"
            type="text"
            name="description"
            onChange={handleChange}
            />

            <FormInput
            label="Age"
            type="range"
            name="age"
            />

            <FormInput
            label="Profile picture"
            type="file"
            name="profilePicture"
            onChange={handleChange}
            />

            <div className='mt-8'>
                <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Save</button>
            </div>

        </form>
    )
}

export default UserForm