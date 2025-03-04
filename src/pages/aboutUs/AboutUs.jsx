import React from 'react'
import Jouurney from '../../Component/aboutus/Jouurney'
import Celebration from '../../Component/aboutus/Celebration'
import Footer from '../../Component/footer/Footer'
import MasterIdea from '../../Component/aboutus/MasterIdea'
import Blog from '../../Component/HomePage/Blog'
import VisaExperts from '../../Component/HomePage/VisaExperts'
import Testimonials from '../../Component/HomePage/Testimonials'
import Faq from '../../Component/HomePage/faqs/Faq'
import LifeAt from '../../Component/aboutus/LifeAt'

export default function AboutUs() {
    return (
        <>
            <div className=' flex  flex-col gap-[50px] w-[100%] pt-[170px]'>
                <MasterIdea />
                <Jouurney />
                <VisaExperts />

                <Celebration />
                <Faq /> 
                <Blog />
                <LifeAt />
                <Testimonials />

            </div>


            <Footer />
        </>
    )
}
