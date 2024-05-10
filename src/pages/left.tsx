import { Input } from "../componets/input_box";
import { Social_links } from "../componets/social";

export function LeftText({ toggleScoreBadge }: any) {
  return (
    <div className="flex flex-col items-start justify-start p-4 m-4 sm:p-10 sm:m-10">
      <div className="font-semibold text-4xl leading-[50px]">
        Get Your Kurbil Score and see how appealing your home could be to
        inverstors.
      </div>
      <div className="text-gray-600 py-4 text-md">
        Get Started By entering your email address below.
      </div>
      <Social_links text={"Follow Us"} />
      <Input toggleScoreBadge={toggleScoreBadge}/>
    </div>
  );
}
