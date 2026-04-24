import React from "react";
import coffee from "../../../assets/img/coffeBottels.svg";
import photo from '../../../assets/img/black.svg'


function SecondFloor() {
    return (
        <div className="w-full bg-white mt-15 py-20">
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-around gap-80">

                <div className="relative w-full lg:w-1/2 flex justify-center items-center">
                    <div className="absolute w-full lg:w-1/2 h-20 bg-gray-300 rounded-full blur-2xl opacity-60"></div>

                    <img
                        src={coffee}
                        alt="coffee"
                        className="relative w-[350px] drop-shadow-2xl"
                    />
                </div>

                <div className="w-full -mt-40 lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        Order Your <br /> Favourite Coffee
                    </h1>

                    <p className="text-gray-500 mt-6 max-w-md mx-auto lg:mx-0">
                        Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor do amet sint. Velit officia consequat <br /> duis enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud amet.
                    </p>

                    <button className="cursor-pointer mt-8 bg-black text-white px-8 py-3 rounded-full hover:opacity-80 transition">
                        ORDER NOW
                    </button>
                </div>
            </div>
            <div className="absolute w-400px right-0 hidden " >
                <img src={photo} alt="" className='relatove w-[200px] ' />
            </div>

        </div>
    );
}

export default SecondFloor;