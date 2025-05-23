import {useTheme} from './theme/ThemeProvider.jsx'
import heroImg from '../assets/img/hero.jpg'
import Title from "./UI/Title.jsx";

const Hero = () => {
    const {theme} = useTheme()

    return (
        <section
            className={`w-full py-20 flex flex-col items-center ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}
        >
            <Title title="About"/>
            <div
                className='w-10/12 flex justify-between mx-auto'
            >

                <div
                    className='w-full flex lg:flex-row flex-col justify-between items-center lg:text-left text-center'
                >

                    <div
                        className={`${theme === 'dark' ? 'text-white flex flex-col gap-4'
                            : 'text-zinc-900 flex flex-col gap-4'}`}
                    >
                        <div>
                            <h1
                                className='lg:text-5xl text-3xl font-bold'
                            >
                                Dima Lanovenko
                            </h1>
                            <h2
                                className={`lg:text-xl text-lg font-light 
                                ${theme === 'dark' ? 'text-pink-400' : 'text-blue-500'}`}
                            >
                                Front End developer
                            </h2>
                        </div>

                        <p className="lg:text-lg text-sm">
                            I am a Frontend Developer with a passion <br/>
                            for creating intuitive, responsive, <br/>
                            and visually appealing web applications. <br/>
                            With expertise in HTML, CSS, JavaScript <br/>
                            and React. I specialize in building seamless <br/>
                            user experiences that enhance engagement <br/>
                            and functionality.
                        </p>
                    </div>
                    <img
                        src={heroImg}
                        alt='portfolio'
                        className='lg:w-130 lg:h-120 w-80 h-80 lg:mt-0 mt-10 rounded-lg'
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero