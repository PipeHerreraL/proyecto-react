import React from "react";
import { t } from "../i18n";

const FormInput = ({ label, type, name, value, onChange, className = '', ...rest }) => {
    return (
        <div className="mt-6 first:mt-0">
            <span className="block text-sm font-medium text-slate-700 mb-2">{label}</span>

            {type === "file" ? (
                <label
                    htmlFor={name}
                    className="flex flex-col items-center justify-center w-full h-16 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
                >
                    <div className="flex flex-col items-center justify-center pt-7 pb-6">
                        <svg
                            className="w-4 h-4 mb-2 text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">{t("form.upload")}</span> {t("form.dragAndDrop")}
                        </p>
                    </div>
                    <input
                        id={name}
                        name={name}
                        type="file"
                        onChange={onChange}
                        className="hidden"
                        {...rest}
                    />
                </label>
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={type !== 'range' ? `${label}` : undefined}
                    className={`px-4 py-2 border rounded-md w-full ${className}`}
                    {...rest}
                />
            )}
        </div>
    );
};

export default FormInput;
