import { faShare, faBookmark, faComment, faHeart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Social () {
    return (
        <div className="flex flex-col space-y-4">
            {/* <!-- Item 1 --> */}
            <div className="flex items-center space-x-2">
                <span className="rounded-full p-3 bg-gray-500"><FontAwesomeIcon icon={faShare} className="text-white" /></span> 
                <span className="text-white">40k</span>
            </div>

            {/* <!-- Item 2 --> */}
            <div className="flex items-center space-x-2">
                <span className="rounded-full p-3 bg-gray-500"><FontAwesomeIcon icon={faBookmark} className="text-white" /></span>
                <span className="text-white">40k</span>
            </div>

            {/* <!-- Item 3 --> */}
            <div className="flex items-center space-x-2">
                <span className="rounded-full p-3 bg-gray-500"><FontAwesomeIcon icon={faComment} className="text-white"/></span>
                <span className="text-white">40k</span>
            </div>

            {/* <!-- Item 4 --> */}
            <div className="flex items-center space-x-2">
                <span className="rounded-full p-3 bg-gray-500"><FontAwesomeIcon icon={faHeart} className="text-white"/></span>
                <span className="text-white">40k</span>
            </div>
        </div>
    )
  
}

export default Social