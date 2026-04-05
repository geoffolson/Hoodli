import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { MobileBottomNav } from "./components/mobile-bottom-nav";
import "./App.css";

function App() {
  return (
    <div className="pb-20">
      <div className="text-3xl font-bold underline">Hoodli</div>
      <div className="hero">
        <img src={heroImg} className="base" width="170" height="179" alt="" />
        <img src={reactLogo} className="framework" alt="React logo" />
        <img src={viteLogo} className="vite" alt="Vite logo" />
      </div>
      <MobileBottomNav />
    </div>
  );
}

export default App;
