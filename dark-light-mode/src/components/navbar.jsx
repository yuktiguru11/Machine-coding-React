import { Link} from "react-router-dom"

const Navbar =()=>{
    return (
        <>
        <nav className= "navbar">
            <div>
                <Link to = "/">Home</Link>
                <Link to = "/about">About</Link>
                <Link to = "/blog">Blog</Link>
            </div>
        </nav>
        </>
    )
}

export default Navbar;