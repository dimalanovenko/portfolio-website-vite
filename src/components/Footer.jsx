import {FaTiktok, FaInstagram, FaLinkedin} from 'react-icons/fa'
import {FaSquareXTwitter} from "react-icons/fa6";
import {useTheme} from "./theme/ThemeProvider.jsx";
import {IoLogoGithub} from "react-icons/io";

const Footer = () => {
    const {theme} = useTheme();

    return (
        <div
            className={`${theme === 'dark' ? 'bg-pink-400' : 'bg-blue-500'} flex gap-5 py-20`}
        >
            <ul
                className="w-10/12 mx-auto flex lg:flex-row flex-col items-center justify-between lg:gap-0 gap-20"
            >
                <li>
                    <a href='https://github.com/dimalanovenko/portfolio-website-vite'>
                        <IoLogoGithub
                            className="text-white lg:w-20 lg:h-20 w-25 h-25"
                        />
                    </a>
                </li>
                <li>
                    <a href='https://x.com/LanovenkoDmytro'>
                        <FaSquareXTwitter
                            className="text-white lg:w-20 lg:h-20 w-25 h-25"
                        />
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/_dima_lanovenko_/'>
                        <FaInstagram
                            className="text-white lg:w-20 lg:h-20 w-25 h-25"
                        />
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/dima-lanovenko-93123824a'>
                        <FaLinkedin
                            className="text-white lg:w-20 lg:h-20 w-25 h-25"
                        />
                    </a>
                </li>
                <li>
                    <a href='https://www.tiktok.com/@dimalandy'>
                        <FaTiktok
                            className="text-white lg:w-20 lg:h-20 w-25 h-25"
                        />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Footer