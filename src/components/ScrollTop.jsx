import {useState, useEffect} from "react";
import {IoIosArrowDropupCircle, IoIosArrowUp} from "react-icons/io";
import {BiSolidUpArrow} from "react-icons/bi";
import {useTheme} from "./theme/ThemeProvider.jsx";

const ScrollToTop = () => {
    const {theme} = useTheme();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    return (
        <button
            onClick={scrollToTop}
            className={`cursor-pointer flex items-center justify-center fixed lg:bottom-15 lg:right-15 bottom-7 right-7
                w-22 h-22 bg-zinc-800 text-pink-400 rounded-full shadow-lg text-2xl 
                transition-all duration-300 hover:bg-pink-400 hover:text-white ${
                isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
            <BiSolidUpArrow
                className={`w-10 h-10 ${theme === 'dark' ? '' : 'text-white'}`}
            />
        </button>
    );
};

export default ScrollToTop;
