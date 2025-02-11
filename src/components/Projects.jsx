import {useTheme} from "./theme/ThemeProvider.jsx";
import Title from "./UI/Title.jsx";

const Projects = () => {
    const {theme} = useTheme()
    return (
        <section className={`w-full py-20 flex flex-col items-center 
            ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}>
            <div className="w-10/12 mx-auto flex flex-col items-center">
                <Title title="Projects" />
                <div className="grid grid-cols-3 gap-12">
                    <div className={`${theme === 'light' ? 'bg-gray-100' : 'bg-zinc-800'} w-80 h-80 rounded-xl`}>
                        <h1></h1>
                    </div>
                    <div className={`${theme === 'light' ? 'bg-gray-100' : 'bg-zinc-800'} w-80 h-80 rounded-xl`}>

                    </div>
                    <div className={`${theme === 'light' ? 'bg-gray-100' : 'bg-zinc-800'} w-80 h-80 rounded-xl`}>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
