import React, { useEffect, useState } from "react";
import Sun from "./Sun.svg";
import Moon from "./Moon.svg";
import "./DarkMode.css";
import Image from "next/image";

const DarkMode: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem("dark-mode");
        if (savedMode === "true") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        }
    }, []);

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle("dark");
        const isDark = document.documentElement.classList.contains("dark");
        localStorage.setItem("dark-mode", isDark.toString());
        setIsDarkMode(isDark);
    };

    return (
        <div className="dark_mode">
            <input
                className="dark_mode_input"
                type="checkbox"
                id="darkmode-toggle"
                checked={isDarkMode}
                onChange={toggleDarkMode}
            />
            <label className="dark_mode_label" htmlFor="darkmode-toggle">
                {/*<Image src={Sun} alt="Sun Icon" className="sun" width={20} />
                <Image src={Moon} alt="Moon Icon" className="moon" height={20}/>*/}
            </label>
        </div>
    );
};

export default DarkMode;
