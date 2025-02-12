import {useTheme} from "../theme/ThemeProvider.jsx";
import {useState} from "react";

const Title = ({title}) => {
    const [scrollClass, setScrollClass] = useState('');
    const {theme} = useTheme();
    const handleScroll = () =>{
        setScrollClass('');
        setScrollClass('fixed');
    }
    return (
        <div
            onScroll={handleScroll}
            className={`${scrollClass} w-10/12 mx-auto lg:mb-20 mb-10 flex flex-col items-center`}>
            <h1 className={`font-bold lg:text-4xl text-2xl ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
                {title}
                <div className={`${theme === 'dark' ? 'bg-pink-400' : 'bg-blue-500'} w - full h-1  mt-0.5`}/>
            </h1>
        </div>
    )
}

export default Title
