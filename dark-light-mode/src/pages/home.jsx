import { useThemeContext } from "../theme-context";
const Home = ()=>{
    const { theme } = useThemeContext();
    return (
        
    <div className={`page ${theme}`}>
        <h1>Home Page</h1>
        <p>Read our latest homme posts!</p>
        </div>
    )
}
export default Home