import { Navbar } from "./componets/navbar";
import { Right } from "./pages/right";
import { LeftText } from "./pages/left";
import { Scorebadge } from "./componets/score_badge";
import { useState } from "react";

function App() {
 
  const [scoreBadgeVisible, setScoreBadgeVisible] = useState(false);

  const toggleScoreBadge = () => {
    setScoreBadgeVisible(!scoreBadgeVisible);
  };
  const hideScoreBadge = () => {
    setScoreBadgeVisible(false);
  };
  return (
    <>
      <div className="">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-2">
          <LeftText toggleScoreBadge={toggleScoreBadge}/>
          <Right />
        </div>
        {scoreBadgeVisible && (
          <div className="flex items-center justify-center absolute top-0 w-full h-full z-50">
            <Scorebadge handleClose={hideScoreBadge} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
