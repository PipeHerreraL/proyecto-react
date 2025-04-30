import React, {useState} from "react";
import Profile from "../components/Profile";

const Welcome = () => {

    const [isStudent, setIsStudent] = useState(false);
    const [showButton, setShowButton] = useState(true);

    return (
        <div className="flex justify-center mt-6">
            {/* Tarjeta */}
            <div className="w-1/3">
                <Profile 
                    image="https://cdn.pixabay.com/photo/2023/01/19/10/24/castle-7728772_1280.jpg" 
                    title="Bienvenido a React"
                    description="Este es un componente dinámico con contenido personalizado desde props." 
            />
            </div>

            {/* Formulario */}
            <div className="w-1/3">
                <form className='px-8 py-4 border rounded-md'>
                    
                    <span className="block text-sm font-medium text-slate-700">Name</span>
                    <input type="text" className="px-4 py-2 border rounded-md w-full" placeholder='Name'/>

                    <span className="block text-sm font-medium text-slate-700 mt-6">Last name</span>
                    <input type="text" className="px-4 py-2 border rounded-md w-full" placeholder='Last Name'/>

                    <span className="block text-sm font-medium text-slate-700 mt-6">Age</span>
                    <input type="range" className="px-4 py-2 border rounded-md w-full" placeholder='Age'/>

                    <span className="block text-sm font-medium text-slate-700 mt-6">Profile picture</span>
                    <input type="file" className="px-4 py-2 border rounded-md w-full" placeholder='Profile picture' />

                    <div className='mt-8'>
                        <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Save</button>
                    </div>

                </form>

                <div className='m-10'>
                    {showButton && (
                        <button
                            type="button"
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                            onClick={() => {
                                    setIsStudent(true);
                                    setShowButton(false);
                                }}
                        >
                        Show text
                        </button>
                    )}
                    {!showButton && (
                        <button
                            type="button"
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                            onClick={() => {
                                    setIsStudent(false);
                                    setShowButton(true);
                                }}
                        >
                        Hide text
                        </button>
                    )}
                        {
                            isStudent && <p>Welcome 😃</p>
                        }
                </div>
            </div>
        </div>
    );
};

export default Welcome;
