import '../css/Navbar.css'
import { Link } from "react-router-dom";

export default function Navbar () {
    return (
        <>
        <nav className="Navbar-body">
            <div>
                <Link to = "/" className='Navbar-title'>NeWorld</Link>
                <Link to = "/aboutpage" className='Navbar-text'>About Page</Link>
                <Link to = "/country" className='Navbar-text'>Country</Link>
            </div>
        </nav>
        </>
    );
}