import React, {useState, useEffect} from "react";
import Profile from "../components/Profile";
import ChangeStateButton from "../components/ChangeStateButton";
import UserForm from "../components/UserForm";

const Welcome = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);

    useEffect(() => {
        setName('Bienvenido a React');
        setDescription('Shoulder drumstick leberkas velit ad ground round. Jowl voluptate pork chop ham hock veniam reprehenderit pork loin minim.');
        setProfilePicture('https://cdn.pixabay.com/photo/2023/01/19/10/24/castle-7728772_1280.jpg');
    }, []);

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    }

    const handleChangeImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePicture(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

    return (
        <div className="flex justify-center mt-6">
            {/* Tarjeta */}
            <div className="w-1/3">
                <Profile 
                    image={profilePicture}
                    name={name}
                    description={description}
            />

                {/* Botón para cambiar el estado */}
                <ChangeStateButton/>
            </div>

            {/* Formulario */}
            <div className="w-1/3">
            <UserForm 
                handleChangeName={handleChangeName}
                handleChangeDescription={handleChangeDescription}
                handleChangeImage={handleChangeImage}
            />

            </div>

        </div>
    );
};

export default Welcome;
