import React from "react";

const ProductCard = ({ allFood, loadind }) => {
  return (
    <>
      <div className="p-2 flex flex-wrap justify-evenly ">
        {allFood.map((item, index) => {
          const { image, label, dishType } = item.recipe;
          return (
            <div className="max-w-[18em] p-3 mx-3 my-3 bg-gray-200 border border-gray-200 rounded-lg shadow-lg shadow-gray-300 dark:bg-gray-900 dark:border-gray-900 hover:animate-up">
              <div className=" border ">
                <img src={image} alt="img" className="w-50"></img>
              </div>
              <div className="p-3">
                <h1 className="text-xl">{label.substr(0, 25)}</h1>
                <p>{dishType}</p>
              </div>
              <div className="buttons flex justify-between">
                <button className="border p-2 bg-black text-white rounded-[0.5em] hover:bg-salate-300 ">
                  Add to cart
                </button>
                <button className="border px-4 bg-slate-400 ">Buy now</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductCard;
