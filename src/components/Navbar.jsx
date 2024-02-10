import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="left"></div>
      <div className="right flex space-x-5 m-4 cursor-pointer text-[1.1em] font-bold">
        <div className="home">Home</div>
        <div className="home">About</div>
        <div className="home">Contact</div>
        <div className="home">Services</div>
      </div>
    </div>
  );
};

export default Navbar;
