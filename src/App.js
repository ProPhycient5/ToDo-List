import "./App.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPlusLg } from "react-icons/bs";

function App() {
  return (
    <div className="w-full h-screen bg-teal-900 flex items-center justify-center flex-auto">
      <div className="flex flex-col w-96 rounded-sm">
        <div className="px-2 flex items-center text-gray-700 text-base justify-between h-10 bg-teal-400 font-serif rounded-sm">
          <GiHamburgerMenu className="h-6 w-6"/>
          <span className="">Enlist your tasks</span>
          <div></div>
        </div>
        <div className="h-80 w-96 mt-1 bg-gray-300 flex items-stretch justify-center rounded-sm">
          <button class="btn btn-accent mb-1 text-gray-700 w-20 btn-sm self-end rounded-md flex flex-row px-1">
            <BsPlusLg className="h-3 w-3"/>
            <span className="ml-3 font-serif">Add</span> 
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
