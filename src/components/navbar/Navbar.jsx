import { useState } from "react";
import coffee from "../../assets/img/FirstCoffeBottle.svg";
import logo from "../../assets/icon/logo.svg";
import bsaket from "../../assets/icon/basket.svg";
import cafe from "../../assets/icon/cafe.svg";
import backLines from "../../assets/img/ortgiChiziqlar.svg";
import { NavLink } from "react-router-dom";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full bg-[#eeeff1] min-h-screen ">

            <div className="flex items-center justify-between px-5 md:px-10 lg:px-14 py-5">

                <img className="w-24 md:w-32" src={logo} alt="logo" />

                <div className="flex items-center gap-6">

                    <ul className="hidden lg:flex gap-6 text-gray-600">
                        <li><a href="#">Cafe Menu</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Find Us</a></li>
                        <li><a href="#">Alowishus Catering</a></li>
                    </ul>

                    <div className="flex items-center gap-3 relative">

                        <button className="hidden md:flex w-10 h-10 rounded-full bg-gray-200 items-center justify-center shadow">
                            <img src={bsaket} alt="basket" />
                        </button>

                        <button className="hidden md:block bg-black text-white px-5 py-2 rounded-full text-sm">
                            BUY GIFT VOUCHERS
                        </button>

                        <button
                            onClick={() => setOpen(!open)}
                            className="flex flex-col gap-1 lg:hidden"
                        >
                            <span className="w-6 h-[2px] bg-black"></span>
                            <span className="w-6 h-[2px] bg-black"></span>
                            <span className="w-6 h-[2px] bg-black"></span>
                        </button>

                        {open && (
                            <div className="absolute right-0 top-14 w-56 bg-white shadow-xl rounded-xl p-5 z-50">
                                <ul className="flex flex-col gap-4 text-gray-700">
                                    <li>
                                        <NavLink to="/bestSellingCoffee">Cafe Menu</NavLink>
                                    </li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Find Us</a></li>
                                    <li><a href="#">Catering</a></li>
                                </ul>
                            </div>
                        )}

                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between px-5 md:px-12 lg:px-20 py-10 md:py-16 gap-10">

                <div className="max-w-xl space-y-6 text-center lg:text-left lg:ml-10">

                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05]">
                        Alowishus <br /> Delicious <br />
                        <span className="flex justify-center lg:justify-start gap-2 items-center">
                            Coffee <img src={cafe} alt="" className="w-20 mt-5" />
                        </span>
                    </h1>

                    <p className="text-gray-500 text-sm md:text-base">
                        A drink from the ‘My Alowishus’ bottled brews <br />
                        range OR grab one of our delicious coffee’s.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button className="bg-black text-white px-8 py-3 rounded-full">
                            DOWNLOAD APP
                        </button>

                        <button className="underline">
                            SHOP COFFEE
                        </button>
                    </div>

                </div>


                <div className="coffee-wrapper w-full max-w-[700px] h-[430px] mt-10 sm:h-[500px] md:h-[560px] lg:h-[600px] mx-auto flex items-center justify-center relative">

                    <img src={backLines} alt="" className="back-lines" />

                    <img src={coffee} alt="coffee" className="coffee-img" />

                    <img src={cafe} alt="award" className="cafe-badge" />

                    <div className="absolute bottom-10 left-5 sm:left-10 md:left-16 bg-white rounded-2xl shadow-xl p-4 w-[220px] z-30">
                        <p className="text-yellow-500 text-base sm:text-lg">★★★★★</p>
                        <p className="text-[11px] sm:text-xs text-gray-500 mt-1 leading-4">
                            4.9 out of 5 Overall Star Rating For All Local Business.
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Navbar;