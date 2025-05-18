import React, { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout.jsx";

const tabs = [
    "Click",
    "Mouse",
    "Teclado",
    "Formulario",
    "Clipboard",
    "Drag",
    "Scroll & Resize",
    "Select"
];

const EventExamples = () => {
    const [activeTab, setActiveTab] = useState("Click");
    const [clickCount, setClickCount] = useState(0);
    const [hoverMessage, setHoverMessage] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [doubleClickMessage, setDoubleClickMessage] = useState("");
    const [submitMessage, setSubmitMessage] = useState("");
    const [clipboardMessage, setClipboardMessage] = useState("");
    const [dragStatus, setDragStatus] = useState("");
    const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    const [selectedOption, setSelectedOption] = useState("opcion1");
    const [keyDownMessage, setKeyDownMessage] = useState("");
    const [keyUpMessage, setKeyUpMessage] = useState("");

    const handleClick = () => setClickCount(clickCount + 1);
    const handleMouseOver = () => setHoverMessage("¡Estás pasando el mouse sobre mí!");
    const handleMouseOut = () => setHoverMessage("");
    const handleChange = (e) => setInputValue(e.target.value);
    const handleKeyDown = (e) => setKeyDownMessage(`Tecla presionada: ${e.key}`);
    const handleKeyUp = (e) => setKeyUpMessage(`Tecla soltada: ${e.key}`);
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    const handleDoubleClick = () => {
        setDoubleClickMessage("¡Doble clic detectado!");
        setTimeout(() => setDoubleClickMessage(""), 2000);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitMessage(`Formulario enviado con: ${inputValue}`);
        setTimeout(() => setSubmitMessage(""), 3000);
    };
    const handleCopy = () => {
        setClipboardMessage("Texto copiado al portapapeles");
        setTimeout(() => setClipboardMessage(""), 2000);
    };
    const handlePaste = () => {
        setClipboardMessage("Texto pegado desde el portapapeles");
        setTimeout(() => setClipboardMessage(""), 2000);
    };
    const handleDragStart = () => setDragStatus("Arrastrando...");
    const handleDragEnd = () => {
        setDragStatus("Arrastre finalizado");
        setTimeout(() => setDragStatus(""), 2000);
    };
    const handleSelectChange = (e) => setSelectedOption(e.target.value);

    // Para Scroll & Resize: usaremos un ref para el contenedor scrollable y evento onScroll
    const [scrollContainerY, setScrollContainerY] = useState(0);

    const handleScrollContainer = (e) => {
        setScrollContainerY(e.target.scrollTop);
    };

    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <MainLayout>
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
                    <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                        Ejemplos de Eventos en React
                    </h1>

                    <div className="flex space-x-2 overflow-x-auto pb-4 mb-4 border-b">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 rounded-lg transition text-sm whitespace-nowrap ${
                                    activeTab === tab
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="space-y-4">
                        {activeTab === "Click" && (
                            <div>
                                <button
                                    onClick={handleClick}
                                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                >
                                    Haz clic aquí
                                </button>
                                <p className="text-gray-700 mt-2">Has hecho clic {clickCount} veces.</p>
                            </div>
                        )}

                        {activeTab === "Mouse" && (
                            <div>
                                <div
                                    onMouseOver={handleMouseOver}
                                    onMouseOut={handleMouseOut}
                                    onDoubleClick={handleDoubleClick}
                                    className="p-4 bg-yellow-100 rounded-lg cursor-pointer hover:bg-yellow-200 transition"
                                >
                                    Interactúa con el mouse aquí
                                </div>
                                <p className="text-gray-700">{hoverMessage}</p>
                                <p className="text-purple-700">{doubleClickMessage}</p>
                            </div>
                        )}

                        {activeTab === "Teclado" && (
                            <div>
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={handleChange}
                                    onKeyDown={handleKeyDown}
                                    onKeyUp={handleKeyUp}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    placeholder="Escribe algo"
                                    className="border border-gray-300 p-3 rounded-lg w-full"
                                />
                                <p className="text-gray-700">Valor actual: {inputValue}</p>
                                {isFocused && <p className="text-sm text-green-500">Input enfocado</p>}
                                <p className="text-sm text-blue-500">{keyDownMessage}</p>
                                <p className="text-sm text-indigo-500">{keyUpMessage}</p>
                            </div>
                        )}

                        {activeTab === "Formulario" && (
                            <form onSubmit={handleSubmit} className="space-y-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={handleChange}
                                    className="border border-gray-300 p-3 rounded-lg w-full"
                                />
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                                >
                                    Enviar formulario
                                </button>
                                <p className="text-green-700">{submitMessage}</p>
                            </form>
                        )}

                        {activeTab === "Clipboard" && (
                            <div>
                                <input
                                    type="text"
                                    onCopy={handleCopy}
                                    onPaste={handlePaste}
                                    placeholder="Copia o pega aquí"
                                    className="border border-gray-300 p-3 rounded-lg w-full"
                                />
                                <p className="text-sm text-indigo-500 mt-2">{clipboardMessage}</p>
                            </div>
                        )}

                        {activeTab === "Drag" && (
                            <div>
                                <div
                                    draggable
                                    onDragStart={handleDragStart}
                                    onDragEnd={handleDragEnd}
                                    className="p-4 bg-red-100 rounded-lg cursor-move hover:bg-red-200 transition"
                                >
                                    Arrástrame
                                </div>
                                <p className="text-red-700 mt-2">{dragStatus}</p>
                            </div>
                        )}

                        {activeTab === "Scroll & Resize" && (
                            <div
                                className="border border-gray-300 rounded-lg overflow-auto"
                                style={{ height: "300px", position: "relative", paddingTop: "3rem" }}
                                onScroll={handleScrollContainer}
                            >
                                {/* Sticky header dentro del scroll */}
                                <div
                                    style={{
                                        position: "sticky",
                                        top: 0,
                                        backgroundColor: "white",
                                        padding: "0.5rem 1rem",
                                        borderBottom: "1px solid #ccc",
                                        zIndex: 10,
                                    }}
                                >
                                    <div>Scroll Y actual: {scrollContainerY}px</div>
                                    <div>
                                        Tamaño de ventana: {windowSize.width} x {windowSize.height}
                                    </div>
                                </div>

                                {/* Contenido que permite scroll */}
                                <div style={{ height: "800px", padding: "1rem" }}>
                                    <p>Desplázate dentro de este contenedor para ver el scroll Y cambiar.</p>
                                    <p>
                                        Aquí puedes agregar más contenido para hacer el scroll más visible y
                                        práctico en cualquier dispositivo.
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === "Select" && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Selecciona una opción:</label>
                                <select
                                    value={selectedOption}
                                    onChange={handleSelectChange}
                                    className="border border-gray-300 p-3 rounded-lg w-full"
                                >
                                    <option value="opcion1">Opción 1</option>
                                    <option value="opcion2">Opción 2</option>
                                    <option value="opcion3">Opción 3</option>
                                </select>
                                <p className="text-gray-700 mt-2">Opción seleccionada: {selectedOption}</p>
                            </div>
                        )}
                    </div>
                </div>
        </MainLayout>
    );
};

export default EventExamples;
