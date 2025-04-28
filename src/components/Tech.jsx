import { motion } from "framer-motion"
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux, SiSass } from "react-icons/si";
import reactRouterImg from '../assets/img/react-router.png'
import { FaGitAlt } from "react-icons/fa";
import { SiGnubash } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoNodejs } from "react-icons/io";
import { useTheme } from './theme/ThemeProvider.jsx'
import Title from "./UI/Title.jsx";
import { useState } from "react";
import { img } from "framer-motion/client";

const Tech = () => {
    const { theme } = useTheme();
    const [flipped, setFlipped] = useState({
        rotateReact: false,
        rotateJs: false,
        rotateHtml: false,
        rotateCss: false,
        rotateTailwind: false,
        rotateSass: false,
        rotateGit: false,
        rotateBash: false,
        rotateRedux: false,
        rotateTS: false,
        rotateNode: false,
        rotateRouter: false
    });

    return (
        <section
            className={`${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}
        >
            <Title title="Technologies" />
            <div
                className='w-10/12 mx-auto flex flex-col justify-between items-center'
            >
                <motion.ul
                    className='grid lg:grid-cols-3 grid-cols-1 gap-21 lg:mt-0 mt-10'
                >
                    <motion.li
                        whileHover={{ scale: 1.2 }}
                        animate={{ rotateY: flipped.rotateNode ? 180 : 0 }}
                        transition={{ duration: 0.4 }}
                        onClick={() => setFlipped({ ...flipped, rotateNode: !flipped.rotateNode })}
                        className={`${theme === 'dark' ? 'bg-zinc-800' : 'bg-gray-200'}  
                        relative cursor-pointer rounded-xl lg:w-70 lg:h-35 w-80 h-40 flex items-center justify-center`}
                    >
                        {!flipped.rotateNode ?
                            <IoLogoNodejs
                                className='lg:h-15 lg:w-15 h-20 w-20 text-[#7fba00]'
                            />
                            :
                            <motion.h1
                                initial={{
                                    rotateY: flipped.rotateNode ? 180 : 0,
                                    opacity: 0
                                }}
                                animate={{
                                    rotateY: flipped.rotateNode ? 180 : 0,
                                    opacity: flipped.rotateNode ? 1 : 0,
                                }}
                                className={`lg:text-2xl text-3xl ${theme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>
                                Node.js
                            </motion.h1>
                        }
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.2 }}
                        animate={{ rotateY: flipped.rotateTS ? 180 : 0 }}
                        transition={{ duration: 0.4 }}
                        onClick={() => setFlipped({ ...flipped, rotateTS: !flipped.rotateTS })}
                        className={`${theme === 'dark' ? 'bg-zinc-800' : 'bg-gray-200'}  
                        relative cursor-pointer rounded-xl lg:w-70 lg:h-35 w-80 h-40 flex items-center justify-center`}
                    >
                        {!flipped.rotateTS ?
                            <BiLogoTypescript
                                className='lg:h-15 lg:w-15 h-20 w-20 text-[#3178c6]'
                            />
                            :
                            <motion.h1
                                initial={{
                                    rotateY: flipped.rotateTS ? 180 : 0,
                                    opacity: 0
                                }}
                                animate={{
                                    rotateY: flipped.rotateTS ? 180 : 0,
                                    opacity: flipped.rotateTS ? 1 : 0,
                                }}
                                className={`lg:text-2xl text-3xl ${theme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>
                                Typescript
                            </motion.h1>
                        }
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.2 }}
                        animate={{ rotateY: flipped.rotateRedux ? 180 : 0 }}
                        transition={{ duration: 0.4 }}
                        onClick={() => setFlipped({ ...flipped, rotateRedux: !flipped.rotateRedux })}
                        className={`${theme === 'dark' ? 'bg-zinc-800' : 'bg-gray-200'}  
                        relative cursor-pointer rounded-xl lg:w-70 lg:h-35 w-80 h-40 flex items-center justify-center`}
                    >
                        {!flipped.rotateRedux ?
                            <SiRedux
                                className='lg:h-15 lg:w-15 h-20 w-20 text-[#764abc]'
                            />
                            :
                            <motion.h1
                                initial={{
                                    rotateY: flipped.rotateRedux ? 180 : 0,
                                    opacity: 0
                                }}
                                animate={{
                                    rotateY: flipped.rotateRedux ? 180 : 0,
                                    opacity: flipped.rotateRedux ? 1 : 0,
                                }}
                                className={`lg:text-2xl text-3xl ${theme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>
                                Redux + RTK
                            </motion.h1>
                        }
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.2 }}
                        animate={{ rotateY: flipped.rotateRouter ? 180 : 0 }}
                        transition={{ duration: 0.4 }}
                        onClick={() => setFlipped({ ...flipped, rotateRouter: !flipped.rotateRouter })}
                        className={`${theme === 'dark' ? 'bg-zinc-800' : 'bg-gray-200'}  
                        relative cursor-pointer rounded-xl lg:w-70 lg:h-35 w-80 h-40 flex items-center justify-center`}
                    >
                        {!flipped.rotateRouter ?
                            <img className="w-25 h-15 lg:w-20 lg:h-12" src={reactRouterImg} alt="react-router" />
                            :
                            <motion.h1
                                initial={{
                                    rotateY: flipped.rotateRouter ? 180 : 0,
                                    opacity: 0
                                }}
                                animate={{
                                    rotateY: flipped.rotateRouter ? 180 : 0,
                                    opacity: flipped.rotateRouter ? 1 : 0,
                                }}
                                className={`lg:text-2xl text-3xl ${theme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>
                                React-router
                            </motion.h1>
                        }
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.2 }}
                        animate={{ rotateY: flipped.rotateReact ? 180 : 0 }}
                        transition={{ duration: 0.4 }}
                        onClick={() => setFlipped({ ...flipped, rotateReact: !flipped.rotateReact })}
                        className={`${theme === 'dark' ? 'bg-zinc-800' : 'bg-gray-200'}  
                        relative cursor-pointer rounded-xl lg:w-70 lg:h-35 w-80 h-40 flex items-center justify-center`}
                    >
                        {!flipped.rotateReact ?
                            <FaReact
                                className='absolute text-[#61dafb] lg:h-15 lg:w-15 h-20 w-20'
                            />
                            :
                            <motion.h1
                                initial={{
                                    rotateY: flipped.rotateReact ? 180 : 0,
                                    opacity: 0
                                }}
                                animate={{
                                    rotateY: flipped.rotateReact ? 180 : 0,
                                    opacity: flipped.rotateReact ? 1 : 0,
                                }}
                                className={`lg:text-2xl text-3xl ${theme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>
                                react
                            </motion.h1>
                        }
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.2 }}
                        animate={{ rotateY: flipped.rotateTailwind ? 180 : 0 }}
                        transition={{ duration: 0.4 }}
                        onClick={() => setFlipped({ ...flipped, rotateTailwind: !flipped.rotateTailwind })}
                        className={`${theme === 'dark' ? 'bg-zinc-800' : 'bg-gray-200'}  
                        relative cursor-pointer rounded-xl lg:w-70 lg:h-35 w-80 h-40 flex items-center justify-center`}
                    >
                        {!flipped.rotateTailwind ?
                            <RiTailwindCssFill
                                className='absolute text-[#39b5f3] lg:h-15 lg:w-15 h-20 w-20'
                            />
                            :
                            <motion.h1
                                initial={{
                                    rotateY: flipped.rotateTailwind ? 180 : 0,
                                    opacity: 0
                                }}
                                animate={{
                                    rotateY: flipped.rotateTailwind ? 180 : 0,
                                    opacity: flipped.rotateTailwind ? 1 : 0,
                                }}
                                className={`lg:text-2xl text-3xl ${theme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>
                                Tailwind CSS
                            </motion.h1>
                        }
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.2 }}
                        animate={{ rotateY: flipped.rotateSass ? 180 : 0 }}
                        transition={{ duration: 0.4 }}
                        onClick={() => setFlipped({ ...flipped, rotateSass: !flipped.rotateSass })}
                        className={`${theme === 'dark' ? 'bg-zinc-800' : 'bg-gray-200'}  
                        relative cursor-pointer rounded-xl lg:w-70 lg:h-35 w-80 h-40 flex items-center justify-center`}
                    >
                        {!flipped.rotateSass ?
                            <SiSass
                                className='absolute text-[#c46494] lg:h-15 lg:w-15 h-20 w-20'
                            />
                            :
                            <motion.h1
                                initial={{
                                    rotateY: flipped.rotateSass ? 180 : 0,
                                    opacity: 0
                                }}
                                animate={{
                                    rotateY: flipped.rotateSass ? 180 : 0,
                                    opacity: flipped.rotateSass ? 1 : 0,
                                }}
                                className={`lg:text-2xl text-3xl ${theme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>
                                SCSS
                            </motion.h1>
                        }
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.2 }}
                        animate={{ rotateY: flipped.rotateBash ? 180 : 0 }}
                        transition={{ duration: 0.4 }}
                        onClick={() => setFlipped({ ...flipped, rotateBash: !flipped.rotateBash })}
                        className={`${theme === 'dark' ? 'bg-zinc-800' : 'bg-gray-200'}  
                        relative cursor-pointer rounded-xl lg:w-70 lg:h-35 w-80 h-40 flex items-center justify-center`}
                    >
                        {!flipped.rotateBash ?
                            <SiGnubash
                                className={`lg:h-15 lg:w-15 h-20 w-20 ${theme === 'dark' ? 'text-white' : 'text-zinc-800'}`}
                            />
                            :
                            <motion.h1
                                initial={{
                                    rotateY: flipped.rotateBash ? 180 : 0,
                                    opacity: 0
                                }}
                                animate={{
                                    rotateY: flipped.rotateBash ? 180 : 0,
                                    opacity: flipped.rotateBash ? 1 : 0,
                                }}
                                className={`lg:text-2xl text-3xl ${theme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>
                                Bash
                            </motion.h1>
                        }
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.2 }}
                        animate={{ rotateY: flipped.rotateGit ? 180 : 0 }}
                        transition={{ duration: 0.4 }}
                        onClick={() => setFlipped({ ...flipped, rotateGit: !flipped.rotateGit })}
                        className={`${theme === 'dark' ? 'bg-zinc-800' : 'bg-gray-200'}  
                        relative cursor-pointer rounded-xl lg:w-70 lg:h-35 w-80 h-40 flex items-center justify-center`}
                    >
                        {!flipped.rotateGit ?
                            <FaGitAlt
                                className='text-[#f15233] lg:h-15 lg:w-15 h-20 w-20'
                            />
                            :
                            <motion.h1
                                initial={{
                                    rotateY: flipped.rotateGit ? 180 : 0,
                                    opacity: 0
                                }}
                                animate={{
                                    rotateY: flipped.rotateGit ? 180 : 0,
                                    opacity: flipped.rotateGit ? 1 : 0,
                                }}
                                className={`lg:text-2xl text-3xl ${theme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>
                                Git
                            </motion.h1>
                        }
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.2 }}
                        animate={{ rotateY: flipped.rotateJs ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setFlipped({ ...flipped, rotateJs: !flipped.rotateJs })}
                        className={`${theme === 'dark' ? 'bg-zinc-800' : 'bg-gray-200'}  
                        relative cursor-pointer rounded-xl lg:w-70 lg:h-35 w-80 h-40 flex items-center justify-center`}
                    >
                        {!flipped.rotateJs ?
                            <FaJsSquare
                                className='absolute text-yellow-500 lg:h-15 lg:w-15 h-20 w-20'
                            />
                            :
                            <motion.h1
                                initial={{
                                    rotateY: flipped.rotateJs ? 180 : 0,
                                    opacity: 0
                                }}
                                animate={{
                                    rotateY: flipped.rotateJs ? 180 : 0,
                                    opacity: flipped.rotateJs ? 1 : 0,
                                }}
                                className={`lg:text-2xl text-3xl ${theme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>
                                JavaScript
                            </motion.h1>
                        }
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.2 }}
                        animate={{ rotateY: flipped.rotateCss ? 180 : 0 }}
                        transition={{ duration: 0.4 }}
                        onClick={() => setFlipped({ ...flipped, rotateCss: !flipped.rotateCss })}
                        className={`${theme === 'dark' ? 'bg-zinc-800' : 'bg-gray-200'}  
                        relative cursor-pointer rounded-xl lg:w-70 lg:h-35 w-80 h-40 flex items-center justify-center`}
                    >
                        {!flipped.rotateCss ?
                            <FaCss3Alt
                                className='absolute text-[#1471b5] lg:h-15 lg:w-15 h-20 w-20'
                            />
                            :
                            <motion.h1
                                initial={{
                                    rotateY: flipped.rotateCss ? 180 : 0,
                                    opacity: 0
                                }}
                                animate={{
                                    rotateY: flipped.rotateCss ? 180 : 0,
                                    opacity: flipped.rotateCss ? 1 : 0,
                                }}
                                className={`lg:text-2xl text-3xl ${theme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>
                                CSS3
                            </motion.h1>
                        }
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.2 }}
                        animate={{ rotateY: flipped.rotateHtml ? 180 : 0 }}
                        transition={{ duration: 0.4 }}
                        onClick={() => setFlipped({ ...flipped, rotateHtml: !flipped.rotateHtml })}
                        className={`${theme === 'dark' ? 'bg-zinc-800' : 'bg-gray-200'}  
                        relative cursor-pointer rounded-xl lg:w-70 lg:h-35 w-80 h-40 flex items-center justify-center`}
                    >
                        {!flipped.rotateHtml ?
                            <FaHtml5
                                className='absolute text-[#e5532d] lg:h-15 lg:w-15 h-20 w-20'
                            />
                            :
                            <motion.h1
                                initial={{
                                    rotateY: flipped.rotateHtml ? 180 : 0,
                                    opacity: 0
                                }}
                                animate={{
                                    rotateY: flipped.rotateHtml ? 180 : 0,
                                    opacity: flipped.rotateHtml ? 1 : 0,
                                }}
                                className={`lg:text-2xl text-3xl ${theme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>
                                HTML5
                            </motion.h1>
                        }
                    </motion.li>
                </motion.ul>
            </div>
        </section>
    )
}

export default Tech