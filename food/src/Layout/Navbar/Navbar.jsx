import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <div className="mainLogoNavbar">
                <img src="/assets/img.jpg" alt="" />
            </div>

            {/* For Links */}
            <nav className="navbar navbar-expand">
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/" className="nav-link">About</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/" className="nav-link">Shop</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/" className="nav-link">Blogs</Link>
                        </li>



                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Navbar