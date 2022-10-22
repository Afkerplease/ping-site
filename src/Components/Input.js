import React, { useState } from "react";

function Input() {
  const [error, setError] = useState(false);
  const [text, setText] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (text.includes("@")) {
      setError(false);
    } else {
      setError(true);
    }
  };
  const changeHandler = (event) => {
    let textEntered = event.target.value;
    console.log(textEntered);
    setText(textEntered);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col md:flex-row relative  md:justify-center md:w-[1440px]   mb-20 w-[375px] items-center"
    >
      <input
        type="text"
        onChange={changeHandler}
        placeholder="Your email address.."
        className=" border-Blue border-[1px] rounded-full w-[80%] md:w-[30%] px-8 py-3"
      />

      <p></p>
      {error && (
        <p className=" absolute text-LightRed font-Libre  md:top-[110%] left-[10%] top-[110%]  md:left-[32%] ">
          Please provide a valide email address
        </p>
      )}

      <button className=" md:ml-2 shadow-md shadow-Blue bg-Blue text-white md:w-[10%] mt-2 md:mt-0 py-3 w-[80%] rounded-full px-4">
        Notify Me
      </button>
    </form>
  );
}

export default Input;
