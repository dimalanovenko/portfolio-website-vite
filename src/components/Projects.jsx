import {useTheme} from "./theme/ThemeProvider.jsx";
import Title from "./UI/Title.jsx";
import {IoArrowRedoSharp} from "react-icons/io5";
import portfolioImgDark from "../assets/img/portfolioWebsiteDark.png"
import portfolioImgLight from "../assets/img/portfolioWebsiteLight.png"
import {motion} from "framer-motion";
import {useEffect, useState} from "react";

const Projects = () => {
    const {theme} = useTheme()
    const [isVisible, setIsVisible] = useState(false);

    const cards = [
        {id: 1},
        {id: 2},
    ]

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
        <section className={`w-full py-20 flex flex-col items-center 
            ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}>
            <div className="w-10/12 mx-auto flex flex-col items-center">
                <Title title="Projects"/>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-12">
                    <div className={`${theme === 'light' ? 'bg-gray-200 text-zinc-800' : 'bg-zinc-800 text-white'} 
                        w-80 h-80 rounded-xl flex flex-col items-center justify-around `}>
                        <div
                            onClick={scrollToTop}
                            className={`flex items-center gap-1 cursor-pointer font-bold text-xl 
                            ${theme === 'dark' ? 'hover:text-pink-400' : 'hover:text-blue-500'}`}>
                            <a>Portfolio Website</a>
                            <IoArrowRedoSharp/>
                        </div>
                        <motion.div
                            className="cursor-pointer"
                            onClick={scrollToTop}
                            whileHover={{scale: 1.1}}
                            transition={{duration: 0.4}}
                        >
                            {theme === 'dark' ?
                                <img
                                    className="w-[252px] h-[144px] rounded"
                                    src={portfolioImgDark}
                                    alt="portfolio"
                                />
                                :
                                <img
                                    className="w-[252px] h-[144px] rounded"
                                    src={portfolioImgLight}
                                    alt="portfolio"
                                />
                            }

                        </motion.div>
                        <div className="w-full flex justify-center items-center gap-5">
                            <div
                                className={`py-1.5 px-3 rounded-3xl text-white ${theme === 'dark' ? 'bg-pink-400' : 'bg-blue-500'}`}>
                                <h1>react</h1>
                            </div>
                            <div
                                className={`py-1.5 px-3 rounded-3xl text-white ${theme === 'dark' ? 'bg-pink-400' : 'bg-blue-500'}`}>
                                <h1>tailwind</h1>
                            </div>
                            <div
                                className={`py-1.5 px-3 rounded-3xl text-white ${theme === 'dark' ? 'bg-pink-400' : 'bg-blue-500'}`}>
                                <h1>git</h1>
                            </div>
                        </div>
                    </div>
                    {cards.map(card => (
                        <div
                            key={card.id}
                            className={`${theme === 'light' ? 'bg-gray-200 text-zinc-800' : 'bg-zinc-800 text-white'} 
                        w-80 h-80 rounded-xl flex flex-col items-center justify-around `}>
                            <div className={`flex items-center gap-1 cursor-pointer font-bold text-xl 
                            ${theme === 'dark' ? 'hover:text-pink-400' : 'hover:text-blue-500'}`}>
                                <a>Coming soon...</a>
                                <IoArrowRedoSharp/>
                            </div>
                            <motion.div
                                className="cursor-pointer"
                                whileHover={{scale: 1.1}}
                                transition={{duration: 0.4}}
                            >
                                {theme === 'dark' ?
                                    <div className="w-[252px] h-[144px] rounded bg-zinc-900"/>
                                    :
                                    <div className="w-[252px] h-[144px] rounded bg-white"/>
                                }

                            </motion.div>
                            <div className="w-full flex justify-center items-center gap-5">
                                <div
                                    className={`py-1.5 px-3 rounded-3xl text-white ${theme === 'dark' ? 'bg-pink-400' : 'bg-blue-500'}`}>
                                    <h1>tech</h1>
                                </div>
                                <div
                                    className={`py-1.5 px-3 rounded-3xl text-white ${theme === 'dark' ? 'bg-pink-400' : 'bg-blue-500'}`}>
                                    <h1>tech</h1>
                                </div>
                                <div
                                    className={`py-1.5 px-3 rounded-3xl text-white ${theme === 'dark' ? 'bg-pink-400' : 'bg-blue-500'}`}>
                                    <h1>tech</h1>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
