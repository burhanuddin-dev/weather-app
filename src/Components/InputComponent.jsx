import { FaMagnifyingGlass } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";

function InputComponent({ setCountryName, countryName }) {
  const [InputValue, setInputValue] = useState("");

  function handleKeyDown(e) {
    if (e.key === "Enter" && InputValue.trim() !== "") {
      setCountryName(InputValue);
    }
  }

  return (
    <div className="flex items-center gap-2.5 bg-[#13192c] text-[#7588a3] px-3.75 py-3 rounded-lg border-2 border-solid border-[#1c253a] mb-5">
      <FaMagnifyingGlass />

      <input
        type="text"
        className="flex-1 bg-transparent border-none outline-none text-[14px] text-white"
        placeholder="Search city..."
        onKeyDown={handleKeyDown}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={InputValue}
      />

      <div className="flex items-center gap-1.25 text-[15px]">
        <CiLocationOn />
        <span>{countryName}</span>
      </div>
    </div>
  );
}

export default InputComponent;
