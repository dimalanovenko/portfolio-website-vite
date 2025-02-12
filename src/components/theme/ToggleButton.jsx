import {motion} from "framer-motion"
import { useTheme } from './ThemeProvider.jsx'
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const ToggleButton = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <motion.div
            whileTap={{rotate: 90}}
            onClick={() => toggleTheme(!theme)}
            className='cursor-pointer'
        >
            {theme === 'light' ?
                <FaSun
                    className='lg:w-5 lg:h-5 w-7 h-7 text-zinc-900'
                />
                :
                <FaMoon
                    className='lg:w-5 lg:h-5 w-7 h-7 text-white'
                />
            }
        </motion.div>
    )
}

export default ToggleButton