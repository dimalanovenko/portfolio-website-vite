import logo from '../assets/img/d_logo.svg'
import logoZinc from '../assets/img/d_logo_zinc.svg'
import { useTheme } from './theme/ThemeProvider.jsx'
import ToggleButton from './theme/ToggleButton.jsx';

const Navbar = () => {
    const { theme } = useTheme()

    return (
        <section
            className={`w-full lg:fixed sticky top-0 left-0 z-100 ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}
        >
            <nav
                className='w-10/12 flex mx-auto my-0 p-[10px]'
            >
                <div
                    className='w-full flex flex-row justify-between items-center'
                >
                    <img
                        src={theme === 'dark' ? logo : logoZinc}
                        alt="logo"
                        className='lg:w-10 lg:h-10 w-13 h-13'
                    />
                    <ToggleButton />
                </div>
            </nav>
        </section>

    )
}

export default Navbar