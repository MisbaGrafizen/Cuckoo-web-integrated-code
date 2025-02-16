import React from 'react'
import blog1 from "../../../public/blog/blogdetails1.avif"
import Footer from '../../Component/footer/Footer'

export default function BlogDetails() {
    return (
        <>
        <div>
            <div className="2xl:w-[1400px] font-Poppins !bg-[#] w-[75%] pt-[160px] pb-[40px] flex flex-col gap-[0px] h-[100%] mx-auto px-2 py-8">
                {/* Hero Banner */}
                <div className="relative w-full h-[450px] mb-8 bg-[#0a192f] rounded-lg overflow-hidden">
                    <img
                        src={blog1}
                        alt="Cuckoo Travel Banner"
                        fill
                        className="object-cover w-[100%] h-[100%]"
                        priority
                    />
                </div>

                {/* Main Content */}
                <article className="space-y-5">
                    <h1 className="text-3xl md:text-3xl font-bold text-gray-900">
                        Cuckoo Travel: Your Gateway to Unforgettable Journeys
                    </h1>

                    <p className="text-gray-600">
                        Explore the world with Cuckoo Travel and experience unparalleled adventures and seamless travel experiences.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        Traveling is more than just visiting new places; it's about discovering cultures, embracing adventure, and creating lifelong memories. Cuckoo Travel ensures that your journey is smooth, exciting, and perfectly curated to your preferences.
                    </p>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Cuckoo Travel?</h2>
                        <p className="text-gray-700 mb-4">
                            We specialize in crafting tailor-made travel experiences, ensuring each trip is unique and unforgettable. Here’s why travelers trust us:
                        </p>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-gray-900">Customized Itineraries:</h3>
                                <p className="text-gray-700">
                                    Whether you’re seeking an adventurous getaway, a romantic escape, or a cultural immersion, we design trips that match your desires.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Seamless Travel Planning:</h3>
                                <p className="text-gray-700">
                                    From flights and accommodations to guided tours and unique experiences, we handle everything so you can travel stress-free.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Exclusive Travel Packages</h2>
                        <p className="text-gray-700">
                            We offer a variety of travel packages tailored to different interests, including adventure trips, luxury vacations, cultural explorations, and more. Our handpicked destinations ensure an exceptional experience for every traveler.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Luxury and Comfort</h2>
                        <p className="text-gray-700">
                            Enjoy top-notch accommodations, seamless transportation, and exclusive experiences that bring an added layer of comfort and excitement to your journey.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Safety and Reliability</h2>
                        <p className="text-gray-700">
                            At Cuckoo Travel, your safety is our priority. We partner with trusted service providers and ensure all our travel plans meet the highest safety standards.
                        </p>
                    </section>
                </article>
            </div>
        </div>
        <Footer />
        </>
    )
}
