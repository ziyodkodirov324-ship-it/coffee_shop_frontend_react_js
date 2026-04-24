import cofe from '../../../assets/img/chapTararfButilka.svg';
import fastfood from '../../../assets/icon/fast-food.svg';
import iceCream from '../../../assets/icon/ice-cream.svg';
import bsaket from '../../../assets/icon/dish.svg';

function FirstFloor() {
    return (
        <div className="py-24 px-6 bg-white relative overflow-hidden mt-15">

            <img
                src={cofe}
                alt="coffee"
                className="absolute left-0 top-20 w-[350px] "
            />

            <div className="max-w-6xl mx-auto relative z-10">

                <div className="text-center max-w-2xl mx-auto">
                    <h1 className="text-5xl font-bold">
                        Explore Our Alowishus
                    </h1>
                    <p className="text-gray-500 mt-4 leading-relaxed">
                        A drink from the "My Alowishus" bottled brews range OR <br />
                        grab one of our delicious coffee’s.
                    </p>
                </div>

                <div className="mt-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">

                    <div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] flex flex-col items-center text-center mx-auto">

                        <h3 className="text-xl font-semibold">
                            Our Catering
                        </h3>

                        <p className="text-gray-500 mt-3 text-sm leading-relaxed max-w-[220px]">
                            Alowishus Catering, delicious drop off Catering
                        </p>

                        <div className="my-10">
                            <img src={bsaket} alt="" />
                        </div>

                        <button className="cursor-pointer mt-auto bg-black text-white px-6 py-2 rounded-full text-sm">
                            ORDER CATERING
                        </button>

                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] flex flex-col items-center text-center mx-auto">

                        <h3 className="text-xl font-semibold">The Food</h3>

                        <p className="text-gray-500 mt-3 text-sm max-w-[220px]">
                            Our entire menu is available as dine in or takeaway.
                        </p>

                        <div className="my-8">
                            <img src={fastfood} alt="" />
                        </div>

                        <button className="cursor-pointer mt-auto bg-black text-white px-6 py-2 rounded-full text-sm">
                            FOOD MENU
                        </button>
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] flex flex-col items-center text-center mx-auto">

                        <h3 className="text-xl font-semibold">The Gelato</h3>

                        <p className="text-gray-500 mt-3 text-sm max-w-[220px]">
                            Life is like GELATO, enjoy it before it melts.
                        </p>

                        <div className="my-8">
                            <img src={iceCream} alt="" />
                        </div>

                        <button className="cursor-pointer mt-auto bg-black text-white px-6 py-2 rounded-full text-sm">
                            DISCOVER MORE   
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default FirstFloor;