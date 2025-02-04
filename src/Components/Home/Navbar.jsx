import {useLocation} from "react-router-dom";
import {Link} from 'react-router-dom'
import {faHouse, faMagnifyingGlass, faPersonShelter, faMessage, faUser, faBell, faPlus} from '@fortawesome/free-solid-svg-icons'


const navigationItems = [
    {pathname: "/search", icon: <FontAwesomeIcon icon={faMagnifyingGlass} />, label: "search" },
    {pathname: "/Home", icon: <FontAwesomeIcon icon={faHouse} />, label: "Home" },
    {pathname: "/counsellor", icon: <FontAwesomeIcon icon={faPersonShelter} />, label: "counsellor"},
    {pathname: "/message", icon: <FontAwesomeIcon icon={faMessage} />, label: "message" },
    {pathname: "/profile", icon: <FontAwesomeIcon icon={faUser} />, label: "profile" },
    {pathname: "/notification", icon: <FontAwesomeIcon icon={faBell} />, label: "notification" },
    {pathname: "/create", icon: <FontAwesomeIcon icon={faPlus} />, label: "create" }
]

const mobileItems = [{pathname: "/Home", icon: <FontAwesomeIcon icon={faHouse} />, label: "Home" },
    {pathname: "/counsellor", icon: <FontAwesomeIcon icon={faPersonShelter} />, label: ""},
    {pathname: "/message", icon: <FontAwesomeIcon icon={faMessage} />, label: "" },
    {pathname: "/profile", icon: <FontAwesomeIcon icon={faUser} />, label: "" },
]
function Navbar () {
    const location = useLocation()

    return (
        <nav className="navcbg-blue-600 text-white p-4">
        {/* Desktop navigation */}
        <div className="desktop-nav container mx-auto flex justify-between items-center">
            <ul className="hidden md:flex space-x-6">
                {navigationItems.map((items) => (
                    <li key={items.pathname}>
                        <Link to={items.pathname} className={` ${location.pathname === items.pathname ? "" : ""}`}>
                            <span>{items.icon}</span>
                            <span>{items.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

        {/* mobile navication */}
        <div className="mobile-nav fixed bottom-0 left-0 right-0 bg-blue-700 p-3 flex justify-around md:hidden">
            {mobileItems.map((items) => (
                <li key={items.pathname}>
                    <Link to={items.pathname} className={` ${location.pathname === items.pathname ? "" : ""}`}>
                        <span>{items.icon}</span>
                        <span>{items.label}</span>
                    </Link>
                </li>
                ))}
        </div>
    </nav>
    )
}

export default Navbar;