import React from 'react'
import PassportHero from '../../Component/passport/PassportHero'
import ListingPassport from '../../Component/passport/ListingPassport'
import Footer from '../../Component/footer/Footer'


export default function Passport() {
    return (
        <>
            

            <div className=" 2xl:w-[1300px] !bg-[#]    flex flex-col  h-[100%] mx-auto">
<PassportHero />
<ListingPassport />
            </div>

<Footer />
        </>
    )
}
