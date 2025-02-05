import user2 from "../../assets/images/user2.jpg"

function Response() {
    return (
        <div className="chat-section flex justify-evenly mt-4">
            <img src={user2} alt="user-bg" className="inline-block rounded-full h-7 w-8"/>
            <div className="chat text-white text-xs">
                <p>Anonymous</p>
                <p>How I was raped by my uncle <span className="time">....18hours</span></p>
            </div>
        </div>
    )
}

export default Response;