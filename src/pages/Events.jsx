import React, { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout.jsx";
import { t } from "../i18n";

const tabs = [
    "click",
    "mouse",
    "keyboard",
    "form",
    "clipboard",
    "drag",
    "scrollAndResize",
    "select"
];

const EventExamples = () => {
    const [activeTab, setActiveTab] = useState("click");
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
    const handleMouseOver = () => setHoverMessage(t("mouse.hoverMessage"));
    const handleMouseOut = () => setHoverMessage("");
    const handleChange = (e) => setInputValue(e.target.value);
    const handleKeyDown = (e) => setKeyDownMessage(`${t("keyboard.keyDown")}: ${e.key}`);
    const handleKeyUp = (e) => setKeyUpMessage(`${t("keyboard.keyUp")}: ${e.key}`);
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    const handleDoubleClick = () => {
        setDoubleClickMessage(t("mouse.doubleClickMessage"));
        setTimeout(() => setDoubleClickMessage(""), 2000);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitMessage(`${t("formEvent.submitMessage")}: ${inputValue}`);
        setTimeout(() => setSubmitMessage(""), 3000);
    };
    const handleCopy = () => {
        setClipboardMessage(t("clipboard.copyMessage"));
        setTimeout(() => setClipboardMessage(""), 2000);
    };
    const handlePaste = () => {
        setClipboardMessage(t("clipboard.pasteMessage"));
        setTimeout(() => setClipboardMessage(""), 2000);
    };
    const handleDragStart = () => setDragStatus(t("drag.dragging"));
    const handleDragEnd = () => {
        setDragStatus(t("drag.dragEnd"));
        setTimeout(() => setDragStatus(""), 2000);
    };
    const handleSelectChange = (e) => setSelectedOption(e.target.value);

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
                    {t("eventExamples.title")}
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
                            {t(`tabs.${tab}`)}
                        </button>
                    ))}
                </div>

                <div className="space-y-4">
                    {activeTab === "click" && (
                        <div>
                            <button
                                onClick={handleClick}
                                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                            >
                                {t("click.clickButton")}
                            </button>
                            <p className="text-gray-700 mt-2">
                                {t("click.clickCount")} {clickCount} {t("click.times")}.
                            </p>
                        </div>
                    )}

                    {activeTab === "mouse" && (
                        <div>
                            <div
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                                onDoubleClick={handleDoubleClick}
                                className="p-4 bg-yellow-100 rounded-lg cursor-pointer hover:bg-yellow-200 transition"
                            >
                                {t("mouse.interactHere")}
                            </div>
                            <p className="text-gray-700">{hoverMessage}</p>
                            <p className="text-purple-700">{doubleClickMessage}</p>
                        </div>
                    )}

                    {activeTab === "keyboard" && (
                        <div>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                                onKeyUp={handleKeyUp}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                placeholder={t("keyboard.placeholder")}
                                className="border border-gray-300 p-3 rounded-lg w-full"
                            />
                            <p className="text-gray-700">
                                {t("keyboard.currentValue")}: {inputValue}
                            </p>
                            {isFocused && (
                                <p className="text-sm text-green-500">{t("keyboard.inputFocused")}</p>
                            )}
                            <p className="text-sm text-blue-500">{keyDownMessage}</p>
                            <p className="text-sm text-indigo-500">{keyUpMessage}</p>
                        </div>
                    )}

                    {activeTab === "form" && (
                        <form onSubmit={handleSubmit} className="space-y-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={handleChange}
                                className="border border-gray-300 p-3 rounded-lg w-full"
                                placeholder={t("form.name")}
                            />
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                            >
                                {t("form.save")}
                            </button>
                            <p className="text-green-700">{submitMessage}</p>
                        </form>
                    )}

                    {activeTab === "clipboard" && (
                        <div>
                            <input
                                type="text"
                                onCopy={handleCopy}
                                onPaste={handlePaste}
                                placeholder={t("clipboard.placeholder")}
                                className="border border-gray-300 p-3 rounded-lg w-full"
                            />
                            <p className="text-sm text-indigo-500 mt-2">{clipboardMessage}</p>
                        </div>
                    )}

                    {activeTab === "drag" && (
                        <div>
                            <div
                                draggable
                                onDragStart={handleDragStart}
                                onDragEnd={handleDragEnd}
                                className="p-4 bg-red-100 rounded-lg cursor-move hover:bg-red-200 transition"
                            >
                                {t("drag.draggableText")}
                            </div>
                            <p className="text-red-700 mt-2">{dragStatus}</p>
                        </div>
                    )}

                    {activeTab === "scrollAndResize" && (
                        <div
                            className="border border-gray-300 rounded-lg overflow-auto"
                            style={{ height: "300px", position: "relative", paddingTop: "3rem" }}
                            onScroll={handleScrollContainer}
                        >
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
                                <div>
                                    {t("scroll.scrollY")}: {scrollContainerY}px
                                </div>
                                <div>
                                    {t("scroll.windowSize")}: {windowSize.width} x {windowSize.height}
                                </div>
                            </div>

                            <div style={{ height: "800px", padding: "1rem" }}>
                                <p>{t("scroll.contentLine")}</p>
                                <p>
                                    {/* Puedes poner más contenido aquí */}
                                </p>
                            </div>
                        </div>
                    )}

                    {activeTab === "select" && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                {t("select.label")}
                            </label>
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
