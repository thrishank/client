import { Navbar } from "./componets/navbar";
import { Right } from "./componets/right";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-2">

          <div className="left">
            
          </div>
          <div className="right">
            <Right/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
