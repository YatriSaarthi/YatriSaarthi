import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";


const LandingPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            const bg2 = document.getElementById("bg-2");
            const title = document.getElementById("title");

            // Parallax background movement
            if (bg2) {
                bg2.style.transform = `translateY(${scrolled * 0.2}px)`;
            }

            // Font size scaling (less aggressive)
            if (title) {
                let newFontSize = 100 + scrolled * 0.2; // reduced from 0.5 to 0.2 for subtle scaling
                newFontSize = Math.min(Math.max(newFontSize, 60), 150); // keep within reasonable range
                title.style.fontSize = `${newFontSize}px`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="bg-black text-white font-poppins">
            {/* Parallax container */}
            <div className="relative overflow-hidden h-screen">
                {/* Background Image */}
                <img
                    id="bg-2"
                    src="https://wallpaperaccess.com/full/125018.jpg"
                    alt="parallax"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />

                <Navbar />

                {/* Hero content */}
                <div className="absolute bottom-48 left-1/2 transform -translate-x-1/2">
                    <h1 id="title" className="text-[120px] font-bold">
                        WeLcOmE to YaTriSaaRthi
                    </h1>
                </div>

            </div>

            {/* About Section */}
            <section className="py-24 px-8 space-y-20 bg-black">
                <div className="space-y-20">
                    {[
                        {
                            text: "Find the best places to stay and eat in every city with our trusted recommendations. From cozy budget stays to luxurious resorts, and street food gems to fine dining spots—we've got it all covered. Our curated lists ensure comfort, taste, and a truly local experience wherever you go.",
                            reverse: false,
                            image: "/landing1.jpg",
                        },
                        {
                            text: "Our expertly crafted city guides help you explore like a local. From historical landmarks and cultural festivals to food spots and hidden treasures, each guide offers handpicked recommendations. Whether you're planning a quick getaway or a deep dive into local traditions, our guides have you covered every step of the way.",
                            reverse: true,
                            image: "/landing2.jpg",
                        },
                        {
                            text: "Explore the top tourist places each city has to offer—from iconic monuments to serene natural escapes. Our guides highlight must-visit attractions, complete with tips, history, and nearby experiences. Whether you're chasing adventure, culture, or relaxation, there's something for every traveler.",
                            reverse: false,
                            image: "/landing3.jpg",
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col md:flex-row ${item.reverse ? "md:flex-row-reverse" : ""
                                } items-center gap-12 max-w-7xl mx-auto`}
                        >
                            <div
                                className="w-[350px] h-[350px] rounded-full bg-cover bg-center shadow-[3px_6px_20px_white]"
                                style={{
                                    backgroundImage: `url(${item.image})`,
                                }}
                            ></div>
                            <div className="text-lg md:w-1/2 text-justify">{item.text}</div>
                        </div>
                    ))}
                </div>

                <div className="max-w-3xl mx-auto text-center text-xl mt-16">
                    Our platform integrates local guides with real-time recommendations and
                    essential services, streamlining trip planning and enhancing the travel
                    experience in one seamless solution.
                </div>

                <div className="text-center mt-8">
                    <button
                        onClick={() => navigate("/home")}
                        className="bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-300 transition"
                    >
                        Explore More
                    </button>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
