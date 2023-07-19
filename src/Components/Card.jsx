import { useContext } from "react"
import { ThemeContext } from "../ThemeContext"

export default function Card({ title, description }) {
    // const { isDarkMode } = useContext(ThemeContext)


    return (
        <ThemeContext.Consumer>
            {({ isDarkMode }) => (
                <main className={`w-1/2 h-full p-1 mx-1 rounded-md border transition-all duration-300 flex flex-col font-semibold ${isDarkMode ? "text-black bg-white " : "text-white bg-black"}`}>
                    <div className="w-full h-[10%] border-b flex">
                        <div className="m-auto">{title}</div>
                    </div>
                    <div className="w-full h-full ">{description}</div>
                </main>
            )}

        </ThemeContext.Consumer>
    )
}
