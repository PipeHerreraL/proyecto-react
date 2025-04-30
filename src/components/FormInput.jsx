import React from "react";

const FormInput = ({ label, type, name, value, onChange, className = '', ...rest }) => (
    <div className={'mt-6 first:mt-0'}>
        <span className="block text-sm font-medium text-slate-700">{label}</span>
        <input
            type={type}
            name={name}
            onChange={onChange}
            placeholder={`${label}`}
            className={`px-4 py-2 border rounded-md w-full ${className}`}
            {...rest}
        />
    </div>
);

export default FormInput;
