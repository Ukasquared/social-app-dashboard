import { Link } from "react-router-dom"
import {faMagnifyingGlass, faBell, faPlus} from '@fortawesome/free-solid-svg-icons'

function LogoBar() {
    return (
        <section className="logo p-4 bg-gray-100 shadow-md">
            {/* desktop view */}
            <div  className="hidden md:flex justify-between items-center">
                <Link to={"/"} className="text-lg font-bold">Logo</Link>
                <div  className="flex items-center space-x-4">
                    <span><FontAwesomeIcon icon={faBell} className="text-gray-700 text-lg" /></span>
                    <img src="../assets/images/user1.jpg" alt="user" srcset="" className="w-8 h-8 rounded-full bg-gray-300" />
                </div>

            </div>

            {/* mobile view */}
            <div className="flex md:hidden justify-between items-center">
            <Link to={"/"} className="text-lg font-bold">Logo</Link>
                <div>
                    <span><FontAwesomeIcon icon={faPlus} className="text-gray-700 text-lg" /></span>
                    <span><FontAwesomeIcon icon={faBell} className="text-gray-700 text-lg"/></span>
                    <span><FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-700 text-lg"/></span>
                </div>
            </div>
        </section>
    )
}

export default LogoBar;