import { useState } from "react";
import { Input } from "../UI/input_box";

export function LeftText({
  toggleScoreBadge,
  setKurbilScore,
  kurbilScore,
  setIsLoading,
  isLoading,
}: any) {
  const [score_page, setScore_page] = useState(false);

  const intervalId = setInterval(() => {
    const check = document.getElementsByClassName("check");
    if (check[0]) {
      setScore_page(true);
      clearInterval(intervalId);
    }
  }, 1000);
  return (
    <div className="flex flex-col items-start justify-start p-4 m-4 sm:p-10 sm:m-10 overflow-hidden">
      {!score_page && (
        <div>
          <div className="font-semibold text-4xl leading-[50px]">
            Get Your Kurbil Score and see how appealing your home could be to
            inverstors.
          </div>
          <div className="text-gray-600 py-4 text-md">
            Get Started By entering your email address below.
          </div>
        </div>
      )}
      {score_page && (
        <div>
          <div className="font-semibold text-4xl leading-[50px]">
            Congratulations! Your home has GREAT kurbli appeal!
          </div>
          <div className="text-gray-600 py-4 text-md">
            Knowing your kurbli score lets you value your home the same way an
            investor might. Feel free to brag your property deservers it!
          </div>
        </div>
      )}

      <Input
        toggleScoreBadge={toggleScoreBadge}
        fn={setKurbilScore}
        final_score={kurbilScore}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
      />
    </div>
  );
}
