import {useTheme} from "../theme/ThemeProvider.jsx";
import Title from "../UI/Title.jsx";
import ContactForm from "./ContactForm.jsx";
import {FaGithub, FaInstagram, FaTiktok} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

const Contact = () => {
    const {theme} = useTheme();
    return (
        <section className={`flex ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}>
            <div className='w-10/12 mx-auto flex flex-col justify-between items-center'>
                <Title title="Contact"/>
                <ContactForm />
            </div>
        </section>
    )
}

export default Contact
