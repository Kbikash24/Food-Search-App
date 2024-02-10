import React from "react";

const SearchBar = ({search,setSearch,fetchFood}) => {
  return (
    <div className="flex justify-center  my-5 items-center  ">
      <div className="input bg-[#EFE9e8] lg:py-3 lg:w-[19em] py-2 text-center rounded-s-xl outline-none">
        <input 
          value={search}
          onChange={(e)=>{setSearch(e.target.value)}}
          type="text"
          placeholder="Search your food"
          className="w-full px-3  bg-[#EFE9E8] outline-none"
        ></input>
      </div>
      <div className="button bg-black lg:p-3 p-2 text-white rounded-e-xl hover:bg-slate-600  ">
        <button onClick={fetchFood} className="">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
