import React, { useState, useEffect } from "react";
import Profile from "../components/Profile";
import ChangeStateButton from "../components/ChangeStateButton";
import UserForm from "../components/UserForm";

const Welcome = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        profilePicture: null,
    });

    useEffect(() => {
        setFormData({
            name: 'Bienvenido a React',
            description: 'Shoulder drumstick leberkas velit ad ground round. Jowl voluptate pork chop ham hock veniam reprehenderit pork loin minim.',
            profilePicture: 'https://cdn.pixabay.com/photo/2023/01/19/10/24/castle-7728772_1280.jpg',
        });
    }, []);

    const handleChange = (event) => {
        const { name, value, files } = event.target;

        if (name === 'profilePicture' && files && files[0]) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prev) => ({
                    ...prev,
                    profilePicture: reader.result,
                }));
            };
            reader.readAsDataURL(files[0]);
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', formData);
    
        alert(`Guardado con éxito:\n\nNombre: ${formData.name}\nDescripción: ${formData.description}`);
    };
    

    return (
        <div className="flex justify-center mt-6">
            {/* Tarjeta */}
            <div className="w-1/3">
                <Profile
                    image={formData.profilePicture}
                    name={formData.name}
                    description={formData.description}
                />
                <ChangeStateButton />
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
    );
};

export default Welcome;
