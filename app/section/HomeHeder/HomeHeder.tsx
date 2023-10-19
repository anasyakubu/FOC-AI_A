import React from 'react'
import Nav from '../../components/HomeNav'
import Image from 'next/image'
import IMG from '../../../public/img-1.jpg'
import './HomeHeader.scss'

const HomeHeder = () => {
  return (
    <div className="HomeHeder">
      <div className="" style={{ backgroundColor: '#f2f7f8', color: '#3d4f60' }}>
        <Nav />
        <div className="lg:px-8">
          <div className="p-10 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            <div className="pl-3 max-w-xl py-24 sm:py-48 lg:py-56 ">
              <div className="text">
                <h1 className="text-xl font-extrabold tracking-wide shadow-2 sm:text-4xl" style={{ color: '#122231' }}>
                  Loved by our Customers
                </h1>
                <p className="mt-6 text-lg leading-8" style={{ color: '#3d4f60' }}>
                  Stories of happy customers who use Kiddo Alert has helped or is helping to protect for what truly matters to them.
                </p>
              </div>
              <div className="mt-10">
                <button className="p-4 mr-5 bg-slate-900 pl-5 pr-5 text-white font-medium rounded-lg hover:bg-slate-800">Get Add Yours</button>
              </div>
            </div>

            {/* <Fade direction="left"> */}
            <div className="text-center flex justify-center items-center">
              <Image className="Img rounded-2xl shadow-lg" src={IMG} alt="" />
            </div>
            {/* </Fade> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHeder
