import React, { useRef, useState } from "react";
import { t } from "../i18n";

const FormInput = ({ label, type, name, value, onChange, className = '', ...rest }) => {
    const fileInputRef = useRef(null);
    const [fileName, setFileName] = useState('');

    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const file = event.dataTransfer.files[0];
        if (fileInputRef.current) {
            fileInputRef.current.files = event.dataTransfer.files;
            onChange({ target: { name, files: event.dataTransfer.files } });
            setFileName(file.name);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const handleFileChange = (event) => {
        setFileName(event.target.files[0]?.name || '');
        onChange(event);
    };


    return (
        <div className="mt-6 first:mt-0">
            <span className="block text-sm font-medium text-slate-700 mb-2">{label}</span>

            {type === "file" ? (
                <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
                    onClick={() => fileInputRef.current?.click()}
                >
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
                    <p className="text-sm text-gray-500 text-center">
                        <span className="font-semibold">{t("form.upload")}</span> {t("form.dragAndDrop")}
                    </p>
                    {fileName && (
                        <p className="text-xs text-gray-500 mt-1 truncate">{fileName}</p>
                    )}
                    <input
                        id={name}
                        name={name}
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                        {...rest}
                    />
                </div>
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
