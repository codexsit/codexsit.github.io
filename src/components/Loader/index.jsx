import baffle from "baffle";
import { useEffect, useState } from "react";

function Loader() {
    const [isVisible, setIsVisible] = useState(true);
    const [isDisplayed, setIsDisplayed] = useState(true);

    useEffect(() => {
        const target = baffle('.loader');
        target.set({
            characters: "█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█<░▒ ▓/░>",
            speed: 120
        });
        target.start();
        target.reveal(3000, 100);

        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
                setIsDisplayed(false);
            }, 1000); 
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    if (!isDisplayed) {
        return null;
    }

    return (
        <div
            className={`absolute top-0 left-0 w-full h-full flex justify-center items-center bg-secondary-dark bg-opacity-100 transition-opacity duration-1000 ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ display: isDisplayed ? 'flex' : 'none' }}
        >
            <div className="loader text-secondary-light font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                Welcome to CodeX
            </div>
        </div>
    );
}

export default Loader;