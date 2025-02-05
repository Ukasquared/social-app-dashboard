import Social from "../Components/Home/social";
import Response from "../Components/Home/response";
import bgImg from "../assets/images/bg.jpg"

function HomeOutlet() {
    return (
        <section className="home-outlet ml-15">
            <div className="flex outlet-display space-x-4">
                <div>
                    <img src={bgImg} className="w-70 rounded-md h-auto" alt="background" />
                    <Response />
                </div>
                <div className="social self-end">
                    <Social />
                </div>
            </div>
        </section>
    )
}

export default HomeOutlet;