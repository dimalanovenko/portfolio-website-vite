import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tech from './components/Tech';
import Footer from './components/Footer';
import {ThemeProvider} from './components/theme/ThemeProvider.jsx';
import Projects from "./components/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";

function App() {
    return (
        <ThemeProvider>
            <Navbar/>
            <Hero/>
            <Tech/>
            <Projects/>
            <Contact/>
            <Footer/>
        </ThemeProvider>
    )
}

export default App
