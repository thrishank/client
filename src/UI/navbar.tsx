export function Navbar() {
  return (
    <div
      className="shadow-md h-16 items-center flex justify-start cursor-pointer"
      onClick={() => {
        window.location.reload();
      }}
    >
      <img
        className="p-2 m-2 rounded-2xl"
        src="/logo.jpeg"
        width="80px"
        height="20px"
      ></img>
    </div>
  );
}
