import { Navbar } from "./componets/navbar";
import { Right } from "./componets/right";
import { Input } from "./componets/input_box";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-2">

          <div className="left flex flex-col items-start justify-start p-10 m-10">
            <div className="font-semibold text-4xl leading-[50px]">Start Exploring by Entering the Address</div>
            <div className="text-gray-600 py-4">Lorem ipsum dolor sit amet consectetur. In dolor lacus turpis
            convallis odio tincidunt turpis ac tristique. Velit sit ultricies
            tortor.</div>
            <div className="flex">
              <div className="font-bold py-1 my-1 pr-3">Follow us</div>
              <img className=" p-1 m-1" alt="" src="/vector.svg" />
              <img className=" p-1 m-1" alt="" src="/vector1.svg" />
              <img className=" p-1 m-1" alt="" src="/vector2.svg" />
              <img className=" p-1 m-1" src="public\group-1000007542.svg"/>
            </div>
            <Input className=""></Input>
          </div>
          <div className="right bg-black h-full">
            <Right/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
