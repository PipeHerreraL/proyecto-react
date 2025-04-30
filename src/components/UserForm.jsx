import React, {useState} from 'react'
import FormInput from './FormInput';


const UserForm = ({ handleChangeName, handleChangeDescription, handleChangeImage}) => {

    return (
        <form className='px-8 py-4 border rounded-md'>
                    
                    <FormInput
                    label="Name"
                    type="text"
                    name="name"
                    onChange={handleChangeName}
                    />

                    <FormInput
                    label="Description"
                    type="text"
                    name="description"
                    onChange={handleChangeDescription}
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
                    onChange={handleChangeImage}
                    />

            <div className='mt-8'>
                <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Save</button>
            </div>

        </form>
    )
}

export default UserForm