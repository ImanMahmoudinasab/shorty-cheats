import logo from "./logo.svg";
import "./App.css";
import "./theme/theme.css";

function App() {
  return (
    <div className="App">
      <header className="bg-[#282c34] min-h-screen flex flex-col items-center justify-center text-[calc(10px_+_2vmin)] text-[white];">
        <img src={logo} className="App-logo size-60" alt="logo" />
      </header>
    </div>
  );
}

export default App;
