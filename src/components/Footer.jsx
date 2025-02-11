import {FaGithub, FaTiktok} from 'react-icons/fa'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa";
import {useTheme} from "./theme/ThemeProvider.jsx";
import {IoLogoGithub} from "react-icons/io";

const Footer = () => {
    const {theme} = useTheme();
    return (
        <div
            className={`${theme === 'dark' ? 'bg-pink-400' : 'bg-blue-500'} flex gap-5 py-20`}
        >
        <ul
            className="w-10/12 mx-auto flex items-center justify-between"
        >
            <li>
                <a href='http://github.com'>
                    <IoLogoGithub
                        className="text-white w-20 h-20"
                    />
                </a>
            </li>
            <li>
                <a href='http://x.com'>
                    <FaSquareXTwitter
                        className="text-white w-20 h-20"
                    />
                </a>
            </li>
            <li>
                <a href='https://www.instagram.com/_dima_lanovenko_/'>
                    <FaInstagram
                        className="text-white w-20 h-20"
                    />
                </a>
            </li>
            <li>
                <a href='http://linkedin.com'>
                    <FaLinkedin
                        className="text-white w-20 h-20"
                    />
                </a>
            </li>
            <li>
                <a href='http://tiktok.com'>
                    <FaTiktok
                        className="text-white w-20 h-20"
                    />
                </a>
            </li>
        </ul>

        </div>
    )
}

export default Footer