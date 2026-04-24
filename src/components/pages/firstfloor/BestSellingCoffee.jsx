import frist from '../../../assets/img/grazed.svg'
import second from '../../../assets/img/stopCollaborate.svg'
import third from '../../../assets/img/willisWay.svg'


function ThirdFloor() {
    return (
        <div className="w-full bg-white py-20 ">
            <div className="max-w-7xl mx-auto px-4">


                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Best Selling Coffee
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-xl mx-auto">
                        A drink from the ‘My Alowishus’ bottled brews range OR <br /> grab one of our delicious coffee’s.
                    </p>
                </div>

                <div className="mt-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">

                    <div className="bg-[#f7f7f7] rounded-3xl p-6 relative shadow-sm mt-10 h-100 p-10">

                        <div className="flex ">
                            <img
                                src={frist}
                                alt=""
                                className=" w-38 mx-auto -mt-20 mb-4 drop-shadow-xl flex"
                            />
                            <div className="">
                                <p className="text-sm text-gray-400">#1 Se  lling</p>
                                <h3 className="text-xl font-bold mt-1">Double <br /> Espresso</h3>
                            </div>

                        </div>
                        <p className="text-gray-500 text-sm mt-3">
                            Amet minim mollit non deserunt dolor ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
                        </p>


                        <div className="flex items-center justify-between mt-6">
                            <span className="text-lg font-bold">$59.99</span>
                            <button className="cursor-pointer bg-black text-white px-4 py-2 rounded-full text-sm">
                                ORDER NOW
                            </button>
                        </div>
                    </div>

                    <div className="bg-[#f7f7f7] rounded-3xl p-6 relative shadow-sm mt-10 h-100 p-10">
                        <div className="flex">

                            <img
                                src={second}
                                alt=""
                                className="w-33 mx-auto -mt-20 mb-4 drop-shadow-xl"
                            />
                            <div className="">
                                <p className="text-sm text-gray-400">#2 Selling</p>
                                <h3 className="text-xl font-bold mt-1">Caramel <br /> Frappe</h3>
                            </div>
                        </div>

                        <p className="text-gray-500 text-sm mt-6">
                            Amet minim mollit non deserunt dolor ullamco est sit aliqua dolor do amet sint.
                        </p>

                        <div className="flex items-center justify-between mt-10">
                            <span className="text-lg font-bold">$59.99</span>
                            <button className="cursor-pointer bg-black text-white px-4 py-2 rounded-full text-sm">
                                ORDER NOW
                            </button>
                        </div>
                    </div>

                    <div className="bg-[#f7f7f7] rounded-3xl p-6 relative shadow-sm mt-10 h-100 p-10">
                        <div className="flex">

                            <img
                                src={third}
                                alt=""
                                className="w-35 mx-auto -mt-20 mb-4 drop-shadow-xl"
                            />
                            <div className="">

                                <p className="text-sm text-gray-400">#3 Selling</p>
                                <h3 className="text-xl font-bold mt-1">Iced <br /> Coffee</h3>

                            </div>
                        </div>
                        <p className="text-gray-500 text-sm mt-5">
                            Amet minim mollit non deserunt dolor ullamco est sit aliqua dolor do amet sint.
                        </p>

                        <div className="flex items-center justify-between mt-10">
                            <span className="text-lg font-bold">$59.99</span>
                            <button className="cursor-pointer bg-black text-white px-4 py-2 rounded-full text-sm">
                                ORDER NOW
                            </button>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
}

export default ThirdFloor;