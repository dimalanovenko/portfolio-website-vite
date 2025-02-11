import logo from '../assets/img/d_logo.svg'
import logoZinc from '../assets/img/d_logo_zinc.svg'
import { useTheme } from './theme/ThemeProvider.jsx'
import ToggleButton from './theme/ToggleButton.jsx';

const Navbar = () => {
    const { theme } = useTheme()

    return (
        <section
            className={`w-full fixed z-100 ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}
        >
            <nav
                style={{ margin: '0 auto', padding: '10px' }}
                className='w-10/12 flex'
            >
                <div
                    className='w-full flex flex-row justify-between items-center'
                >
                    <img
                        src={theme === 'dark' ? logo : logoZinc}
                        alt="logo"
                        className='w-10 h-10 '
                    />
                    <ToggleButton />
                </div>
            </nav>
        </section>

    )
}

export default Navbar