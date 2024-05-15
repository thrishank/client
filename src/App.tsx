import { Navbar } from "./UI/navbar";
import { Right } from "./pages/right";
import { LeftText } from "./pages/left";
import { ScoreBadge } from "./UI/score_badge";
import { useState } from "react";
import { useKurbilScore } from "./components/kurbilScore";
import MoonLoader from "react-spinners/MoonLoader";



function App() {
  const [scoreBadgeVisible, setScoreBadgeVisible] = useState(false);
  const { kurbilScore, setKurbilScore } = useKurbilScore();
  const [isLoading, setIsLoading] = useState(false);

  const toggleScoreBadge = () => {
    setScoreBadgeVisible(!scoreBadgeVisible);
  };
  const hideScoreBadge = () => {
    setScoreBadgeVisible(false);
  };
  return (
    <>
      <div className={scoreBadgeVisible ? "bg-gray-300" : ""}>
        <Navbar />
        <div className={isLoading?"hidden":"md:grid md:grid-cols-2 flex flex-col-reverse"}>
            <LeftText
              toggleScoreBadge={toggleScoreBadge}
              setKurbilScore={setKurbilScore}
              kurbilScore={kurbilScore}
              setIsLoading={setIsLoading}
              isLoading={isLoading}
            />
            <Right />

        </div>
        <div className={isLoading?"flex justify-center items-center mt-4":"hidden"}><MoonLoader  size={200} color="#d9a831"></MoonLoader></div>

        {scoreBadgeVisible && (
          <div className="flex items-center justify-center absolute top-0 w-full h-full z-50">
            <ScoreBadge handleClose={hideScoreBadge} score={kurbilScore} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
