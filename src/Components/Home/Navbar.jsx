import {useLocation} from "react-router-dom";
import {Link} from 'react-router-dom'
import { navigationItems, mobileItems } from "./icons";

function Navbar () {
    const location = useLocation()

    return (
        <nav className="navcbg-blue-600 text-white p-4 bg-gray-950">
        {/* Desktop navigation */}
        <div className="desktop-nav container mx-auto">
            <ul className="hidden md:flex flex-col space-x-6">
                {navigationItems.map((items) => (
                    <li className="mb-5" key={items.pathname}>
                        <Link to={items.pathname} className={` ${location.pathname === items.pathname ? "" : ""}`}>
                            <span className="inline-block mr-5">{items.icon}</span>
                            <span className="inline-block" >{items.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

        {/* mobile navication */}
        <div className="mobile-nav fixed bottom-0 left-0 right-0 bg-gray-950 p-3 md:hidden">
            <ul className="flex justify-around">
                {mobileItems.map((items) => (
                    <li key={items.pathname}>
                        <Link to={items.pathname} className={` ${location.pathname === items.pathname ? "bg-blue-700 p-2 rounded-lg" : ""}`}>
                            <span>{items.icon}</span>
                            <span>{items.label}</span>
                        </Link>
                    </li>
                    ))}
            </ul>
            
        </div>
    </nav>
    )
}

export default Navbar;