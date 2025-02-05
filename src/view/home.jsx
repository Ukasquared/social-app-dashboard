import Social from "../Components/Home/social";
import Response from "../Components/Home/response";

function HomeOutlet() {
    return (
        <section className="home-outlet">
            <div className="outlet-display">
                <div>
                    <img src="../assets/images/bg.jpg" alt="background" />
                    <Response />
                </div>
                <div className="social">
                    <Social />
                </div>
            </div>
        </section>
    )
}

export default HomeOutlet;