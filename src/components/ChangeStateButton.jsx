import React, {useState} from 'react'
import { t } from '../i18n';

const ChangeStateButton = () => {

    const [isStudent, setIsStudent] = useState(false);
    const [showButton, setShowButton] = useState(true);

    return (
        <div className="m-10">
            <button
                type="button"
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 hover:text-gray-800 transition"
                onClick={() => {
                setIsStudent(!isStudent);
                setShowButton(!showButton);
                }}
            >
                {showButton ? t("changeStateButton.show") : t("changeStateButton.hide")}
            </button>

            {isStudent && <p>{t("changeStateButton.message")}</p>}
        </div>
    )
}

export default ChangeStateButton