import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {t, useI18n} from './i18n.jsx'

function App() {
  const [count, setCount] = useState(0)
  const { languages, langCode, setLanguage } = useI18n();

  return (
    <>
  <div className="flex justify-center gap-8 mt-10">
    <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
      <img src={viteLogo} className="w-20 h-20 transition-transform hover:scale-110" alt="Vite logo" />
    </a>
    <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
      <img src={reactLogo} className="w-20 h-20 transition-transform hover:scale-110" alt="React logo" />
    </a>
  </div>

  <h1 className="text-4xl font-bold text-center mt-6">Vite + React</h1>

  <div className="card text-center mt-6">
    <button
      onClick={() => setCount((count) => count + 1)}
      className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
    >
      count is {count}
    </button>
    <p className="mt-4 text-sm text-gray-600">
      Edit <code className="bg-gray-100 px-1 py-0.5 rounded">src/App.jsx</code> and save to test HMR
    </p>
  </div>

  <p className="read-the-docs text-center mt-6 text-gray-500">
    Click on the Vite and React logos to learn more
  </p>

  <div className="flex justify-center mt-8">
    <select
      value={langCode}
      onChange={(e) => setLanguage(e.target.value)}
      className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {languages.map(({ code, label }) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </select>
  </div>
</>

  )
}

export default App
