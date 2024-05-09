import { Social_links } from "./social";
export function Scorebadge() {
    return (
      <div className="rounded-xl">
        <div className="text-center text-3xl bg-[#F9F1DE] py-3 rounded-t-xl">Kurbli Score Badge</div>
        <div className="flex flex-col justify-center items-center">
            <img src="public\scorebadgeimg.jpg" width="300px" height="257.38px" className="pt-4"></img>
            <p className="relative bottom-28 right-[-2px] text-4xl font-semibold">5</p>
            <p className="px-4 text-lg">Download or share your property score badge with your circle</p>
            <div className="flex my-1">
                <img className="cursor-pointer p-1 m-1" alt="" src="/facebook.svg" />
                <img className="cursor-pointer p-1 m-1" alt="" src="/instagram.svg" />
                <img className="cursor-pointer p-1 m-1" alt="" src="/linkedin.svg" />
                <img
                    className="cursor-pointer p-1 m-1"
                    src="tiktok.svg"
                />
            </div>
            
            <button className="px-6 py-3 my-3 mx-4 rounded-full bg-[#D9A831] font-bold cursor-pointer relative z-10">DOWNLOAD BADGE</button>


        </div>
      </div>
    );
  }