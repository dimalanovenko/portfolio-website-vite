import {useTheme} from "../theme/ThemeProvider.jsx";
import Title from "../UI/Title.jsx";
import ContactForm from "./ContactForm.jsx";
import {MdOutlineAlternateEmail} from "react-icons/md";

const Contact = () => {
    const {theme} = useTheme();
    return (
        <section className={`flex flex-col items-center ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}>
            <Title title="Contact"/>
            <div className="w-10/12 mx-auto flex flex-row lg:justify-between justify-center lg:items-start items-center">
                <div className=''>
                    <ContactForm/>
                </div>
                <div className={`lg:flex hidden items-center justify-center lg:h-110 lg:w-110 mt-10 rounded-lg
                ${theme === 'dark' ? 'bg-zinc-800' : 'bg-gray-200'}`}>
                    <MdOutlineAlternateEmail
                        className={`w-60 h-60 ${theme === 'dark' ? 'text-pink-400' : 'text-blue-500'}`}
                    />
                </div>
            </div>
        </section>
    )
}

export default Contact
