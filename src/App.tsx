import { Navbar } from "./componets/navbar";
import { Right } from "./pages/right";
import { LeftText } from "./pages/left";
import { Scorebadge } from "./componets/score_badge";
function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-2">
          <LeftText />
          <Right />
        </div>
        <div className="flex items-center justify-center absolute top-0 w-full h-full z-50">
          <Scorebadge/>
        </div>

      </div>
    </>
  );
}

export default App;
