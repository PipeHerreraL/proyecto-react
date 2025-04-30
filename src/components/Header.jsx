import { useI18n } from '../i18n';

const Header = () => {
    const { langCode, setLanguage, languages } = useI18n();

    return (
        <header className="w-full flex justify-between items-center px-6 py-4 bg-gray-100 shadow-md">
            <h1 className="text-xl font-semibold">🌐 Mi Aplicación</h1>
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
