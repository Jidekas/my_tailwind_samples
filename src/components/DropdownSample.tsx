import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

const list = [
  {
    city: "New York",
    emoticon: "👍",
  },
  {
    city: "Amstredam",
    emoticon: "😄",
  },
  {
    city: "London",
    emoticon: "😜",
  },
  {
    city: "Berlin",
    emoticon: "😦",
  },
];

const DropdownSample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center w-[340px] h-[340px] rounded-lg">
      <button
        className="bg-blue-400 p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Dropdown
        {isOpen ? <GoChevronUp /> : <GoChevronDown />}
      </button>

      {isOpen && (
        <div className="bg-blue-400 absolute top-20 flex flex-col items-start rounded-lg p-2 w-full">
          {list.map((item: any, i: any) => (
            <div
              className="w-full flex justify-between hover:bg-blue-300 cusor-pointer rounded-r-lg border-l-transparent"
              key={i}
            >
              <h3>{item.city}</h3>
              <h3>{item.emoticon}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownSample;
