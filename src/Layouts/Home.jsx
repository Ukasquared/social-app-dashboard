import Navbar from "../Components/Home/Navbar";
import LogoBar from "../Components/Home/logo";
import { Outlet } from "react-router-dom";


function Home() {
    return (
        <section>
        <div className="min-h-screen bg-gray-950">
            {/* desktop layout */}
            <div className="hidden md:flex flex-col h-screen">
                <LogoBar />
                <div className="flex flex-1">
                    <Navbar className="w-1/5 bg-gray-100 p-4" />
                    <main className="flex-1 p-6">
                        <Outlet />
                    </main>
                </div>
            </div>
            {/* mobile layout */}
            <div className="flex md:hidden flex-col">
                <LogoBar />
                <main className="p-4">
                    <Outlet />
                </main>
                <Navbar className="fixed bottom-0 left-0 w-full bg-gray-100 p-2" />
            </div>
        </div>
    </section>
    )
    
}

export default Home;