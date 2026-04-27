import coffee from '../../../assets/img/Cofe.svg'
import cofe from '../../../assets/img/chapTarafSariqButilka.svg'
import bottleCofe from "../../../assets/img/o'ngTarafButilka.svg";
import girl2 from "../../../assets/img/MaskGroupTwo.svg";
import backLine from '../../../assets/icon/orqaChiziq.svg'
import girl1 from "../../../assets/img/MaskGroup.svg";
import otash from '../../../assets/img/otash.jpg'
import back from '../../../assets/img/back.svg'

// --

import logo from "../../../assets/icon/logo.svg";
import call from '../../../assets/icon/call.svg'
import email from '../../../assets/icon/email.svg'
import face from '../../../assets/icon/face.svg'
import insta from '../../../assets/icon/insta.svg'
import bird from '../../../assets/icon/bird.svg'
import link from '../../../assets/icon/link.svg'
import right from '../../../assets/icon/rightOne.svg'



import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';




function FourthFloor() {
  return (
    <div className="w-full bg-white py-24 overflow-hidden relative">

      <div className="absolute w-[180px] sm:w-[220px] lg:w-[250px] -top-10 left-0 sm:block md: hidden">
        <img src={cofe} alt="" className='' />
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10">

        <div className="w-full lg:w-1/2 text-center lg:text-left">

          <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-bold text-gray-900 leading-tight lg:-mt-40">
            Instant Coffee <br /> At Your Home
          </h2>

          <p className="text-gray-500 mt-4 lg:mt-6 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>

          <button className="cursor-pointer mt-6 lg:mt-8 bg-black text-white px-6 lg:px-8 py-3 rounded-full hover:opacity-80 transition">
            DOWNLOAD OUR APP
          </button>

        </div>

        <div className="relative w-full lg:w-1/2 flex justify-center items-center">

          <div className="absolute w-[200px] sm:w-[250px] lg:w-[300px] h-[200px] sm:h-[250px] lg:h-[300px] bg-gray-200 rounded-full blur-3xl opacity-50 z-0"></div>

          <div className="absolute hidden w-120 lg:block z-0">
            <img src={backLine} alt="" />
          </div>

          <img
            src={coffee}
            alt=""
            className="absolute w-[250px] mr-50 mt-10 sm:w-[350px] lg:w-[480px] rotate-[-10deg] z-10"
          />

          <img
            src={coffee}
            alt=""
            className="relative w-[240px] sm:w-[320px] lg:w-[500px] rotate-[15deg] drop-shadow-2xl z-20"
          />

        </div>
        <div className="absolute left-0 hidden lg:block">
          <img src={back} alt="" className="relative top-[350px]" />
        </div>

      </div>

      {/* ------------------------ */}

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12 mt-20">

        <div className="w-full lg:w-1/2">

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }}
          >

            <SwiperSlide>
              <div className="bg-white rounded-[32px] shadow-md overflow-hidden">

                <img
                  src={girl1}
                  alt=""
                  className="w-full h-[260px] object-cover"
                />

                <div className="p-6">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    Brooklyn Simmons
                    <span className="text-yellow-400 text-sm">★★★★★</span>
                  </h4>

                  <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                    “Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit mollit.”
                  </p>
                </div>

              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white rounded-[32px] shadow-md overflow-hidden">

                <img
                  src={girl2}
                  alt=""
                  className="w-full h-[260px] object-cover"
                />

                <div className="p-6">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    Imam White
                    <span className="text-yellow-400 text-sm">★★★★★</span>
                  </h4>

                  <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                    “Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit mollit.”
                  </p>
                </div>

              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white rounded-[32px] shadow-md overflow-hidden">

                <img
                  src={otash}
                  alt=""
                  className="w-full h-[260px] object-cover"
                />

                <div className="p-6">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    Sobirov Otabek
                    <span className="text-yellow-400 text-sm">★★★★★</span>
                  </h4>

                  <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                    “Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit mollit.”
                  </p>
                </div>

              </div>
            </SwiperSlide>

          </Swiper>

        </div>



        <div className="w-full justify-items-center lg:w-1/2 mt-40 ">

          <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-bold text-gray-900 leading-tight lg: -mt-40">
           <span className='pl-7'>What Our</span><br /> Customers Say
          </h2>

          <div className="flex items-center gap-3 mt-6">
            <span className="text-3xl font-bold">4.9</span>
            <span className="text-yellow-400 text-xl">★★★★★</span>
          </div>

          <p className="text-gray-500 mt-2 text-sm">
            based on 2452+ reviews
          </p>


          <div className="flex gap-4 mt-8">

            <button className="custom-prev w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer">
              ←
            </button>

            <button className="custom-next w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer">
              →
            </button>

          </div>

        </div>

      </div>


      <img
        src={bottleCofe}
        alt=""
        className="absolute right-0 top-300 w-[120px] md-hidden  sm:w-[160px] block lg:w-[220px] block mt-30 "
      />

      {/* ------------------------ */}

      <div className="w-full bg-[#f9f9f9] pt-24 pb-10 mt-60">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

            <div>
              <img src={logo} alt="logo" className="w-[200px] mb-6" />

              <p className="text-gray-500 w-[360px] leading-7">
                We made it our mission to create <br />
                community everyday and grow meaningful, <br />
                lasting relationships with our staff, our <br />
                suppliers and of course you, our customers.
              </p>

              <h3 className="text-xl font-bold mt-12 text-black">
                Store Locations
              </h3>

              <p className="text-gray-500 mt-3 max-w-sm leading-7">
                Find your nearest Alowishus store with opening hours, location and contact details.
              </p>

              <button className="mt-5 flex items-center gap-2 font-semibold text-sm tracking-wide">
                FIND MY ALOWISHUS
                <img src={right} alt="" className="w-[18px]" />
              </button>
            </div>

            <div className="flex flex-col gap-12">

              <div>
                <h3 className="text-4xl font-bold mb-6 text-black">
                  Contact Alowishus!
                </h3>

                <div className="flex items-center gap-4 text-gray-600 mb-4">
                  <span className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md">
                    <img src={email} alt="" />
                  </span>
                  <span className="text-2xl">alowishus@gmail.com</span>
                </div>

                <div className="flex items-center gap-4 text-gray-600 mb-6">
                  <span className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md">
                    <img src={call} alt="" />
                  </span>
                  <span className="text-2xl">+110 214 214 2451</span>
                </div>

                <div className="flex gap-4">
                  <div className="flex gap-5 ">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <a href="https://www.facebook.com">
                        <img src={face} alt="" />
                      </a>
                    </div>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <a href="https://www.instagram.com">
                        <img src={insta} alt="" />
                      </a>
                    </div>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl">
                      <a href="http://twich.ru/">
                        <img src={bird} alt="" />
                      </a>
                    </div>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl">
                      <a href="https://www.linkedin.com/">
                        <img src={link} alt="" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              <div>
                <h3 className="text-3xl w-[280px] font-bold mb-5 leading-tight">
                  First One’s On Us!
                </h3>

                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-[320px] bg-white rounded-full px-6 py-3 shadow-sm outline-none"
                />

                <br />

                <button className="mt-5 bg-black text-white px-10 py-3 rounded-full font-semibold tracking-wide hover:opacity-90 transition">
                  SUBSCRIBE
                </button>
              </div>

            </div>
          </div>
        </div>

        <div className="border-t mt-20 pt-6 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between text-sm text-gray-500">
          <p>
            Copyright © 2022 <b className="text-black">Alowishus Delicious</b>
          </p>

          <div className="flex gap-3 mt-3 lg:mt-0">
            <span className="cursor-pointer hover:text-black">Terms of Use</span>
            <span>|</span>
            <span className="cursor-pointer hover:text-black">Privacy Policy</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default FourthFloor;