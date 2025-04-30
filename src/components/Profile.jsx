import React from 'react'
import { t } from '../i18n'
const Profile = ({ image, name, description }) => {

    return (
        <div className='max-w-sm rounded-md shadow-lg'>
            <img className='w-full' src={image} alt="profile" />
            
            <div className='px-6 py-4'>
                <p className='font-bold text-xl mb-2'>{name}</p>
                <p className="text-gray-700 text-base">{description}</p>
            </div>

            <div className='px-6 pt-4 pb-2'>
                <button className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{t('profile.share')}</button>
            </div>
        </div>
    )
}

export default Profile