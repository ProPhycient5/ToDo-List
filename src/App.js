import "./App.css";

function App() {
  return (
    <div className="w-full h-screen bg-slate-800 flex items-center justify-center flex-auto">
      <div className="flex flex-col">
        <h1 className="text-4xl font-serif animate-bounce text-green-500">
          Hello ReactJS community, I have joined you. Don't worry.
        </h1>
        {/* <button className="bg-blue-600 p-1 text-center w-28 rounded-full text-gray-300">
          Launch
        </button> */}
        <button class="btn btn-primary">daisyUI Button</button>
      </div>
    </div>
  );
}

export default App;
