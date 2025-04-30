import React, {useState, useEffect} from "react";
import Profile from "../components/Profile";

const Welcome = () => {

    const [isStudent, setIsStudent] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);

    useEffect(() => {
        setIsStudent(false);
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
                <div className="m-10">
                    <button
                        type="button"
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                        onClick={() => {
                        setIsStudent(!isStudent);
                        setShowButton(!showButton);
                        }}
                    >
                        {showButton ? 'Show text' : 'Hide text'}
                    </button>

                    {isStudent && <p>Welcome 😃</p>}
                </div>
            </div>

            {/* Formulario */}
            <div className="w-1/3">
                <form className='px-8 py-4 border rounded-md'>
                    
                    <span className="block text-sm font-medium text-slate-700">Name</span>
                    <input type="text" className="px-4 py-2 border rounded-md w-full" placeholder='Name' onChange={handleChangeName} />

                    <span className="block text-sm font-medium text-slate-700 mt-6">Description</span>
                    <input type="text" className="px-4 py-2 border rounded-md w-full" placeholder='Description' onChange={handleChangeDescription} />

                    <span className="block text-sm font-medium text-slate-700 mt-6">Age</span>
                    <input type="range" className="px-4 py-2 border rounded-md w-full" placeholder='Age'/>

                    <span className="block text-sm font-medium text-slate-700 mt-6">Profile picture</span>
                    <input type="file" className="px-4 py-2 border rounded-md w-full" placeholder='Profile picture' onChange={handleChangeImage} />

                    <div className='mt-8'>
                        <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Save</button>
                    </div>

                </form>

            </div>

        </div>
    );
};

export default Welcome;
