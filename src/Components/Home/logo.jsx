import { Link } from "react-router-dom"
import {faMagnifyingGlass, faBell, faPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import user1 from "../../assets/images/user1.jpg"

function LogoBar() {
    return (
        <section className="logo p-4 bg-gray-950 shadow-sm shadow-white">
            {/* desktop view */}
            <div  className="hidden md:flex justify-between items-center">
                <Link to={"/"} className="text-lg text-white font-bold">Logo</Link>
                <div  className="flex items-center space-x-4">
                    <span><FontAwesomeIcon icon={faBell} className="text-white text-lg" /></span>
                    <img src={user1} alt="user" className="w-8 h-7 rounded-full bg-gray-300" />
                </div>

            </div>

            {/* mobile view */}
            <div className="flex md:hidden justify-between items-center">
                <Link to={"/"} className="text-lg font-bold">Logo</Link>
                <div  className="flex items-center space-x-4" >
                    <span><FontAwesomeIcon icon={faPlus} className="text-gray-700 text-lg" /></span>
                    <span><FontAwesomeIcon icon={faBell} className="text-gray-700 text-lg"/></span>
                    <span><FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-700 text-lg"/></span>
                </div>
            </div>
        </section>
    )
}

export default LogoBar;