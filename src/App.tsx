import { Navbar } from "./componets/navbar";
import { Right } from "./pages/right";
import { LeftText } from "./pages/left";
import { Scorebadge } from "./componets/score_badge";
import { useScoreBadge } from "./hooks/useScoreBadge";

function App() {
  const { showScoreBadge, handleCloseBadge } = useScoreBadge();
  return (
    <>
      <div className="">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-2">
          <LeftText />
          <Right />
        </div>
        {showScoreBadge && (
          <div className="flex items-center justify-center absolute top-0 w-full h-full z-50">
            <Scorebadge fn={handleCloseBadge} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
