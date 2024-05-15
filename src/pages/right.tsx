
export function Right({
  isLoading,
}: any) {
  return (
    <div className="bg-black flex flex-col-reverse md:flex-col">
      {!isLoading && (
        <div className="bg-white">
          <img className="" src="/home.png" height="600px" width="1200px" />
        </div>
      )}
      {isLoading && (
        <div className="bg-white">
          <img className="" src="/homeLoading.svg" height="600px" width="1200px" />
        </div>
      )}
      <div>

        <div className="text-2xl font-semibold text-gray-300 m-2 p-2">
          How does kurbli work?
        </div>
        <div className="text-gray-300 m-2 p-2">
          Krubli uses a proprietary combination of artificial intelligence and predictive analytics to determine how investible your property may be to potential investors
        </div>
      </div>
    </div>
  );
}
