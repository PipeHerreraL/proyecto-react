import { useI18n } from '../i18n';
import { Link } from "react-router-dom";
import reactLogo from '../assets/react.svg';

const Header = () => {
    const { langCode, setLanguage, languages } = useI18n();

    return (
        <header className="w-full flex justify-between items-center px-6 py-4 bg-gray-100 shadow-md">
            <Link to="/welcome" className="text-xl font-semibold">
                <a href="" className="flex items-center space-x-2">
                    <img src={reactLogo} className="w-8 h-8" alt="React logo" />
                    <span>Mi Aplicación</span>
                </a>
            </Link>

            <select
                value={langCode}
                onChange={(event) => setLanguage(event.target.value)}
                className="px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                {languages.map(({ code, label }) => (
                <option key={code} value={code}>
                    {label}
                </option>
                ))}
            </select>
        </header>
    );
};

export default Header;
