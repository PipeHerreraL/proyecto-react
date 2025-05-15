import React, {useState} from 'react'
import FormInput from './FormInput';
import CustomButton from './CustomButton';
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
            max="99"
            />

            <FormInput
            label={t("form.profilePicture")}
            type="file"
            name="profilePicture"
            onChange={handleChange}
            />

            <div className='mt-8'>
                <CustomButton>
                    {t('form.save')}
                </CustomButton>
            </div>

        </form>
    )
}

export default UserForm