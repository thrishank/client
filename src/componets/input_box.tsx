import { useEffect, useState } from "react";

export function Input() {
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(true);
  const [valid_address, setValid_address] = useState(false);
  const [placeholder, setPlaceholder] = useState("Enter valid Email");
  const [inputType, setInputType] = useState("email");
  const [button_text, setButton_text] = useState("NEXT");
  const [score, setScore] = useState(false);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmail(emailRegex.test(email));
  }, [email]);

  const address = () => {
    if (isEmail) {
      setPlaceholder("Start typing to select the address");
      setInputType("text");
      setButton_text("CALUCULATE SCORE");
      setEmail("");
      setValid_address(true);
    }
    if (valid_address && email.length > 0) {
      setScore(true);
    }
  };

  return (
    <div className="p-10 m-10 flex">
      <div>
        <div className="flex flex-col">
          <input
            type={inputType}
            className="bg-gray-50 border border-gray-300 text-md rounded-lg  block w-full p-1"
            value={email}
            placeholder={placeholder}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          {valid_address ||
            (!isEmail && email.trim() != "" && (
              <p className="text-red-500 ">
                Please Enter a valid email Address
              </p>
            ))}
        </div>
        <button className="px-6" onClick={address}>
          {button_text}
        </button>
      </div>
      {score && <div>Hello World</div>}
    </div>
  );
}
