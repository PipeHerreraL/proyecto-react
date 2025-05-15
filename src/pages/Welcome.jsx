import React, { useState, useEffect } from "react";
import Profile from "../components/Profile";
import ChangeStateButton from "../components/ChangeStateButton";
import UserForm from "../components/UserForm";
import MainLayout from "../layouts/MainLayout";

const Welcome = () => {

    const defaultValues = {
        name: "Bienvenido a React",
        description: "Shoulder drumstick leberkas velit ad ground round. Jowl voluptate pork chop ham hock veniam reprehenderit pork loin minim.",
        profilePicture: "https://cdn.pixabay.com/photo/2023/01/19/10/24/castle-7728772_1280.jpg",
        age: 25
    };

    const [initialValues, setInitialValues] = useState(defaultValues);
    const [formData, setFormData] = useState(defaultValues);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('userFormData'));
        if (saved) {
            setFormData(saved);
            setInitialValues(saved);
        }
    }, []);

    const handleChange = (event) => {
        const { name, value, files } = event.target;

        if (name === 'profilePicture' && files.length > 0) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({
                    ...prev,
                    profilePicture: reader.result
                }));
            };
            reader.readAsDataURL(files[0]);
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value === '' ? initialValues[name] : value
            }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        localStorage.setItem('userFormData', JSON.stringify(formData));
    
        alert(`Guardado con éxito:\n\nNombre: ${formData.name}\nDescripción: ${formData.description}\nEdad: ${formData.age}`);
    };

    const restore = () => {
        setFormData(initialValues);
        localStorage.removeItem('userFormData');
        location.reload();
    }

    return (
        <MainLayout>
            <div className="flex gap-4 justify-center mt-6">
                {/* Tarjeta */}
                <div className="w-1/3">
                    <Profile
                        image={formData.profilePicture}
                        name={formData.name}
                        description={formData.description}
                        age={formData.age}
                    />

                    {/*
                        <div className="m-10">
                            <button
                                type="button"
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                onClick={restore}
                            >
                                Restore data
                            </button>
                        </div>
                    */}

                </div>

                {/* Formulario */}
                <div className="w-1/3">
                    <UserForm 
                        formData={formData} 
                        handleChange={handleChange} 
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
            
            <div className="flex justify-center mt-4">
                <ChangeStateButton />
            </div>
        </MainLayout>
    );
};

export default Welcome;
