
import { useThemeContext } from "../theme-context";
const Blog = ()=>{
    const { theme } = useThemeContext();
    return (
        
    <div className={`page ${theme}`}>
        <h1>Blog Page</h1>
        <p>Read our latest blog posts!</p>
        </div>
    )
}
export default Blog