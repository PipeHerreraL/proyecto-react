import React, {useState} from 'react'
const ChangeStateButton = () => {

    const [isStudent, setIsStudent] = useState(false);
    const [showButton, setShowButton] = useState(true);

    return (
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
    )
}

export default ChangeStateButton