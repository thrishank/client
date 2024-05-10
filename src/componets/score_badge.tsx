import { Social_links } from "./social";
export function Scorebadge({ handleClose }: any) {
  const handleBadgeCloseClick = () => {
    handleClose(); // Call the function received from props to close Scorebadge
  };
  return (
    <div className="rounded-xl bg-white">
      <div className="text-center text-3xl bg-[#F9F1DE] py-3 rounded-t-xl grid grid-cols-12">
        <div className="col-span-11 text-center pl-10">Kurbli Score Badge</div>
        <button className="text-2xl" onClick={handleBadgeCloseClick}>
          &times;
        </button>
      </div>
      
      <div className="flex flex-col justify-center items-center">
        <img
          src="/scorebadgeimg.jpg"
          width="300px"
          height="257.38px"
          className="pt-4"
        ></img>
        <p className="relative bottom-28 right-[-2px] text-4xl font-semibold">
          5
        </p>
        <p className="px-4 text-lg">
          Download or share your property score badge with your circle
        </p>
        <Social_links text="" />

        <button className="px-6 py-3 my-3 mx-4 rounded-full bg-[#D9A831] font-bold cursor-pointer relative z-10">
          DOWNLOAD BADGE
        </button>
      </div>
    </div>
  );
}
