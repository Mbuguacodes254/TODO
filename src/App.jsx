import MoonIcon from "./assets/icon-moon.svg";
import AddForm from "./components/AddForm";
import BottomNav from "./components/BottomNav";


function App() {

  return (
    <div className="bg-white min-h-screen-100 pb-20 relative">
      <div className="bg-bg_light_header_image_mobile lg:bg-light_header_image bg-no-repeat bg-cover h-52 px-5 lg:px-0 pt-10">
        <div className= "flex justify-between lg:w=3/6 lg-:mx-auto">
          <p className="text-3xl font-semibold text-white tracking-[2px]">TODO</p>
          
          <img src={MoonIcon} alt="Moon Icon" className= "h-5 cursor-pointer"/>
          </div>
          <div className= "mt-8 lg:w=3/6 mx-auto">
            <AddForm/>
            <BottomNav/>
          </div>
      </div>
      <div className="bg-white lg:w-3/6 lg:mx-auto mx-5 relative -top-5 rounded-md">

      </div>
    </div>
    );

}

export default App

