import React, { useState } from "react";
import useStore1 from "../store/dataStore1";

export default function Section1() {
  const [txt, setTxt] = useState("");
  const { array, addArray, delArray ,lineThrough} = useStore1((state) => ({
    array: state.array,
    addArray: state.addArray,
    delArray: state.delArray,
    lineThrough: state.lineThrough,
  }));

  const hdlChange = (e) => {
    setTxt(e.target.value);
  };
  const hdlClick = (e, id, str) => {
    str === "inc"
      ? (addArray(txt), alert(`Adding...`))
      : ""
    str === "del"
      ?(delArray(id), alert(`Deleted...`))
      : ""
    str === "line"
      ?lineThrough(id)
      : ""
  };

  console.log(array);
  return (
    <div className=" flex flex-col text-start items-center gap-3 border rounded-xl w-min p-4 bg-gray-100 shadow-xl">
      <h1 className="text-3xl font-bold">Section1</h1>

      <div className="flex justify-between w-[300px]">
        <input
          className="border rounded-xl w-[78%] pl-4 "
          type="text"
          onChange={hdlChange}
        />
        <button
          className="border p-1 rounded-xl w-[20%] bg-white"
          onClick={(e) => hdlClick(e, "", "inc")}
        >
          Add
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {array.map((el) => (
          <ul key={el.id}>
            <li className="border p-2 w-[300px] rounded-xl bg-red-300 flex justify-between">
              <div className={`${el.isStrikethrough ? "line-through" : ""} ml-2`}>{el.name} 
                <input onChange={()=>hdlChange(e,el.id,"inc")}/>
              </div>
              

              <div className=" flex gap-3">
                <button className="border w-10 rounded-full" onClick={(e)=>hdlClick(e,el.id,"line")}>
                  {" "}
                  Edit{" "}
                </button>
                <button
                  className="border w-6 rounded-full bg-white text-red-500 font-bold"
                  onClick={(e) => hdlClick(e, el.id, "del")}
                >
                  {" "}
                  X{" "}
                </button>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}