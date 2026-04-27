import Navbar from "./components/navbar/Navbar";
import ExploreOurAlowishus from "./components/pages/firstfloor/ExploreOurAlowishus";
import FourthFloor from "./components/pages/firstfloor/InstantCoffee";
import SecondFloor from "./components/pages/firstfloor/FavouriteCoffee";
import ThirdFloor from "./components/pages/firstfloor/BestSellingCoffee";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const BestSellingCoffee = lazy(() => import("./components/pages/firstfloor/BestSellingCoffee"))
function App() {


  return (
    <div className="">
      <Navbar />
        {/* <Routes>
          <Route path="/bestSellingCoffee" element={<BestSellingCoffee />} />
        </Routes> */}
      <ExploreOurAlowishus />
      <SecondFloor />
      <ThirdFloor />
      <FourthFloor /> 

    </div>
  );
}

export default App;
