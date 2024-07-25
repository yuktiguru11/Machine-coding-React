import { Link} from "react-router-dom"
import {useThemeContext} from "../theme-context"

const Navbar =()=>{
    const {theme, themeToggle} = useThemeContext();

    const toggleMode = ()=>{
        themeToggle()
    }
    return (
        <>
        <nav className= {`navbar ${theme}`}>
            <div>
                <Link to = "/">Home</Link>
                <Link to = "/about">About</Link>
                <Link to = "/blog">Blog</Link>
            </div>
            <div className = "mode-switch">
                <label>
                    <input type="checkbox"
                    onChange={toggleMode}
                    checked = {theme === "dark"}>
                    </input>
                    <span className="slider round"></span>
                </label>
            </div>
        </nav>
        </>
    )
}

export default Navbar;