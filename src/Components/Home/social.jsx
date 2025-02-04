import { faShare, faBookmark, faComment, faHeart} from "@fortawesome/free-solid-svg-icons";


function Social () {
    return (
        <div class="flex flex-col space-y-4">
            {/* <!-- Item 1 --> */}
            <div class="flex items-center space-x-2">
                <span><FontAwesomeIcon icon={faShare} /></span> 
                <span>40k</span>
            </div>

            {/* <!-- Item 2 --> */}
            <div class="flex items-center space-x-2">
                <span><FontAwesomeIcon icon={faBookmark} /></span>
                <span>40k</span>
            </div>

            {/* <!-- Item 3 --> */}
            <div class="flex items-center space-x-2">
                <span><FontAwesomeIcon icon={faComment} /></span>
                <span>40k</span>
            </div>

            {/* <!-- Item 4 --> */}
            <div class="flex items-center space-x-2">
                <span><FontAwesomeIcon icon={faHeart} /></span>
                <span>40k</span>
            </div>
        </div>
    )
  
}

export default Social