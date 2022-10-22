import "./App.css";
import Input from "./Components/Input";
import logo from "./images/logo.svg";
import photo from "./images/illustration-dashboard.png";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { TfiFacebook } from "react-icons/tfi";

function App() {
  return (
    <main className=" bg-[black] h-[100vh] ">
      <div className="contain bg-[white] w-[375px] mx-auto py-[4rem] md:w-[1440px]  ">
        <div className=" flex flex-col items-center mb-8  ">
          <img src={logo} alt="" />
          <h1 className=" md:text-3xl mt-10 text-2xl font-Libre text-Gray ">
            {" "}
            We are launching{" "}
            <span className=" font-[700] text-VeryDarkBlue ">soon!</span>
          </h1>
          <p className="mt-4 text-[15px] font-Libre font-[300] ">
            Subscribe and get notified
          </p>
        </div>
        <Input />

        <img src={photo} alt="" className=" md:w-[40%]  mx-auto " />

        <div className="  w-[100%] flex justify-center gap-4 mt-20">
          <button className="p-2 rounded-full  border-[1px] border-Gray hover:bg-Blue ">
            <TfiFacebook className="w-5 h-5  text-Blue hover:text-white " />
          </button>
          <button className=" p-2 rounded-full  border-[1px] border-Gray hover:bg-Blue">
            <BsTwitter className=" text-Blue w-5 h-5  hover:text-white   " />
          </button>
          <button className="p-2 rounded-full  border-[1px] border-Gray text-Blue hover:bg-Blue hover:text-white">
            <BsInstagram className="w-5 h-5" />
          </button>
        </div>
        <p className=" text-center mt-11 text-Gray font-Libre">
          {" "}
          © Copyright Ping.All rights reserved{" "}
        </p>
      </div>
    </main>
  );
}

export default App;
