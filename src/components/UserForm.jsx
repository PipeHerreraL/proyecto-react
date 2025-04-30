import React, {useState} from 'react'
const UserForm = ({ handleChangeName, handleChangeDescription, handleChangeImage}) => {

    return (
        <form className='px-8 py-4 border rounded-md'>
                    
            <span className="block text-sm font-medium text-slate-700">Name</span>
            <input type="text" className="px-4 py-2 border rounded-md w-full" placeholder='Name' onChange={handleChangeName} />

            <span className="block text-sm font-medium text-slate-700 mt-6">Description</span>
            <input type="text" className="px-4 py-2 border rounded-md w-full" placeholder='Description' onChange={handleChangeDescription} />

            <span className="block text-sm font-medium text-slate-700 mt-6">Age</span>
            <input type="range" className="px-4 py-2 border rounded-md w-full" placeholder='Age'/>

            <span className="block text-sm font-medium text-slate-700 mt-6">Profile picture</span>
            <input type="file" className="px-4 py-2 border rounded-md w-full" placeholder='Profile picture' onChange={handleChangeImage} />

            <div className='mt-8'>
                <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Save</button>
            </div>

        </form>
    )
}

export default UserForm