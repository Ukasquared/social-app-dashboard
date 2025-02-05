import {faHouse, faMagnifyingGlass, faPersonShelter, faMessage, faUser, faBell, faPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const navigationItems = [
    {pathname: "/search", icon: <FontAwesomeIcon icon={faMagnifyingGlass} />, label: "search" },
    {pathname: "/home", icon: <FontAwesomeIcon icon={faHouse} />, label: "Home" },
    {pathname: "/counsellor", icon: <FontAwesomeIcon icon={faPersonShelter} />, label: "counsellor"},
    {pathname: "/message", icon: <FontAwesomeIcon icon={faMessage} />, label: "message" },
    {pathname: "/profile", icon: <FontAwesomeIcon icon={faUser} />, label: "profile" },
    {pathname: "/notification", icon: <FontAwesomeIcon icon={faBell} />, label: "notification" },
    {pathname: "/create", icon: <FontAwesomeIcon icon={faPlus} />, label: "create" }
]

 export const mobileItems = [{pathname: "/home", icon: <FontAwesomeIcon icon={faHouse} />, label: "Home" },
    {pathname: "/counsellor", icon: <FontAwesomeIcon icon={faPersonShelter} />, label: ""},
    {pathname: "/message", icon: <FontAwesomeIcon icon={faMessage} />, label: "" },
    {pathname: "/profile", icon: <FontAwesomeIcon icon={faUser} />, label: "" },
]
