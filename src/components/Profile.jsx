import React from 'react'
import { t } from '../i18n'
import CustomButton from './CustomButton'

const Profile = ({ image, name, description, age }) => {

    const AgeEmoji = () => {
        if (age < 18) {
            return '👶';
        } else if (age < 30) {
            return '🧑';
        } else if (age < 50) {
            return '🧔';
        } else {
            return '👴';
        }
    }

    return (
        <div className='max-w-sm rounded-md shadow-lg'>
            <img className='w-full' src={image} alt="profile" />
            
            <div className='px-6 py-4'>
                <p className='font-bold text-xl mb-2'>{name}</p>
                <p className="text-gray-700 text-base">{description}</p>
                <p className="text-gray-700 text-base"><strong>Edad:</strong> {age} {AgeEmoji()}</p>
            </div>

            <div className='px-6 pt-4 pb-2'>
                <CustomButton>
                    {t('profile.share')}
                </CustomButton>
            </div>
        </div>
    )
}

export default Profile