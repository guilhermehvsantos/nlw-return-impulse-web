import { Widget } from "./components/widget";
import logo from "./assets/lightUsAppIcon.png"


export function App(){
  return (
    <>
      <div className="w-full flex-wrap flex-row max-w-full flex items-center justify-center">
        <img
          className="md:w-96 sm:w-40 lg:w-96 xl:w-96"
          src={logo}
          alt="lightUsApp logo"
        />
        <div className="w-full flex-wrap flex-col flex items-center justify-center">
        <h1 className="text-[5rem] font-bold italic">lightUsApp</h1>
        <span className="text-orange-500 text-[1.7rem]">Feedback Widget - <span className="text-yellow-400">Give us a light</span></span>
        
        </div>
      </div>
      <Widget />
    </>
  )
}