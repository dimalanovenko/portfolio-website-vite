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
                    className='w-5 h-5 text-zinc-900'
                />
                :
                <FaMoon
                    className='w-5 h-5 text-white'
                />
            }
        </motion.div>
    )
}

export default ToggleButton