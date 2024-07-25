import { useThemeContext } from "../theme-context";
const About = ()=>{
    const { theme } = useThemeContext();
    return (
        
    <div className={`page ${theme}`}>
        <h1>About Page</h1>
        <p>Read our latest blog posts!</p>
        </div>
    )
}
export default About