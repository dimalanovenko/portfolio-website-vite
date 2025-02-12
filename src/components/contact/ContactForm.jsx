import {motion} from "framer-motion";
import {useRef, useState} from "react";
import emailjs from "emailjs-com";
import {useTheme} from "../theme/ThemeProvider.jsx";

const ContactForm = () => {
    const form = useRef();
    const [value, setValue] = useState({name: "", email: "", message: ""});
    const {theme} = useTheme()
    const [isValid, setIsValid] = useState({name: false, email: false, message: false});

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const handleEmailChange = (e) => {
        setValue({...value, email: e.target.value})
        emailRegex.test(e.target.value) ? setIsValid({...isValid, email: true})
            : setIsValid({...isValid, email: false})
    }

    const handleNameChange = (e) => {
        setValue({...value, name: e.target.value})
        e.target.value.length < 16 && e.target.value.length > 2 ? setIsValid({...isValid, name: true})
            : setIsValid({...isValid, name: false})
    }

    const handleMessageChange = (e) => {
        setValue({...value, message: e.target.value})
        e.target.value.length < 5000 && e.target.value.length > 2 ? setIsValid({...isValid, message: true})
            : setIsValid({...isValid, message: false})
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_dimalandy",
            "portfolio_contact",
            form.current,
            "mdQ6w2pZJ0eKEW09I"
        )
            .then((result) => {
                alert("The message has been successfully sent!");
            }, (e) => {
                alert("Error!");
            });
        setValue({
            name: "",
            email: "",
            message: "",
        })
    };

    return (
        <form className="flex flex-col lg:gap-4 gap-2.5"
            ref={form}
            onSubmit={sendEmail}>
            <h1 className={`${theme === 'dark' ? 'text-white' : 'text-zinc-800'} 
                font-light text-lg lg:text-2xl`}>
                Name
            </h1>
            <input
                value={value.name}
                onChange={handleNameChange}
                className={`lg:w-120 w-70 lg:py-2 py-1 px-2 border rounded-lg ${theme === 'dark' ? 'border-pink-400 text-white' : 'border-blue-500 text-zinc-800'} `}
                type="text"
                name="name"
                placeholder="Your Name"
                required/>
            <h1 className={`${!isValid.name && value.name !== '' ? 'inline' : 'hidden'} text-red-500`}>
                Write down the valid name
            </h1>
            <h1 className={`${theme === 'dark' ? 'text-white' : 'text-zinc-800'} 
                font-light text-lg lg:text-2xl`}>
                Email
            </h1>
            <input
                value={value.email}
                onChange={handleEmailChange}
                className={`lg:w-120 w-70 lg:py-2 py-1 px-2 border rounded-lg ${theme === 'dark' ? 'border-pink-400 text-white' : 'text-zinc-800 border-blue-500 '} `}
                type="email"
                name="email"
                placeholder="Your Email"
                required/>
            <h1 className={`${!isValid.email && value.email !== '' ? 'inline' : 'hidden'} text-red-500`}>
                Write down the valid email address
            </h1>
            <h1 className={`${theme === 'dark' ? 'text-white' : 'text-zinc-800'} 
                font-light text-lg lg:text-2xl`}>
                Message
            </h1>
            <textarea
                value={value.message}
                onChange={handleMessageChange}
                className={`lg:w-120 w-70 lg:h-50 h-30 py-1 px-2 border rounded-lg resize-none ${theme === 'dark' ? 'border-pink-400 text-white' : 'border-blue-500 text-zinc-800'} `}
                name="message"
                placeholder="Your Message"
                required/>
            <h1 className={`${!isValid.message && value.message !== '' ? 'inline' : 'hidden'} text-red-500`}>
                Write down the valid message
            </h1>
            <div className="flex items-center">
                <motion.button
                    whileHover={{scale: 1.1,}}
                    className={`w-full cursor-pointer lg:py-4 py-3 lg:px-8 mt-3 rounded-2xl mb-20 text-lg
                ${theme === 'dark' ? 'bg-zinc-800 text-pink-400 hover:bg-pink-400 hover:text-zinc-800'
                        : 'border bg-blue-500 text-white hover:bg-gray-100 hover:text-blue-500 hover:border-blue-500'} `}
                    onClick={() => isValid.name && isValid.email && isValid.message ? sendEmail
                        : alert('Please enter a valid information')}
                >
                    Send
                </motion.button>
            </div>
        </form>
    );
};

export default ContactForm;

