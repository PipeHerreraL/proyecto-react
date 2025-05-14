import React, {useState} from 'react'
import FormInput from './FormInput';
import { t } from '../i18n';


const UserForm = ({ formData, handleChange, handleSubmit }) => {

    return (
        <form className='px-8 py-4 border rounded-md' onSubmit={handleSubmit}>
                    
            <FormInput
            label={t("form.name")}
            type="text"
            name="name"
            onChange={handleChange}
            />

            <FormInput
            label={t("form.description")}
            type="text"
            name="description"
            onChange={handleChange}
            />

            <FormInput
            label={`${t("form.age")} (${formData.age ?? 0})`}
            type="range"
            name="age"
            value={formData.age ?? 0}
            onChange={handleChange}
            min="1"
            max="100"
            />

            <FormInput
            label={t("form.profilePicture")}
            type="file"
            name="profilePicture"
            onChange={handleChange}
            />

            <div className='mt-8'>
                <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{t('form.save')}</button>
            </div>

        </form>
    )
}

export default UserForm