import { Widget } from "./components/widget";
import logo from "./assets/lightUsAppIcon.png"


export function App(){
  return (
    <>
      <div className="w-full flex-wrap flex-row max-w-full flex items-center justify-center">
        <img
          className="md:w-72 sm:w-40 lg:w-80 xl:w-96"
          src={logo}
          alt="lightUsApp logo"
        />
        <div className="w-full flex-wrap flex-col flex items-center justify-center">
        <h1 className="sm:text-[5rem] font-bold italic text-[2rem]">lightUsApp</h1>
        <span className="text-orange-500 sm:text-[1.7rem] text-xs">Feedback Widget - <span className="text-yellow-400">Give us a light</span></span>
        
        </div>
      </div>
      <Widget />
    </>
  )
}