// This file formats the properties of the getRecipe function so that they display
// correctly on cards
import { useContext } from "react";
import { CartContext } from "../../utils/cartContext";
import {GET_ITEM} from "../../utils/mutations" 

function addToCard(string) {
  
   
}
export const HealthLabels = ({ healthLabels }) => {
  let newHealthLabels;
  if(healthLabels.length>12){
     newHealthLabels= healthLabels.slice(0,12);
  }else{
    newHealthLabels=healthLabels
  }
  const labelSpan = newHealthLabels.map((val, i) => {
    console.log(val);
    return (
      <span className="font-recipe text-base " key={i}>
        {val},{" "}
      </span>
    );
  });
  return labelSpan;
};
export const Ingredients = ({ ingredients }) => {
  const cart = useContext(CartContext);
  const ingredientSpan = ingredients.map((val, i) => {

    return (
      <div className="my-4 gap-1 bg-indigo-200" key={i}>
        <span className="font-recipe text-2xl font-bold">{val.food.toUpperCase()}</span>
        <img src={val.image} />
        <div className="my-5 h-12">
          <p>{val.text}</p>
        </div>

        <button className=" mx-auto mt-5 font-recipe text-4xl text-white relative right-2.5 bottom-2.5 bg-green-700 hover:bg-green-600 focus:ring-4 focus:outline-none rounded-md px-2 pt-1"
                onClick={()=>cart.AddOnetoCart(val.food.toUpperCase())}
                >
                  Add to Cart
        </button>
      </div>
    );
  });
  return ingredientSpan;
};
export const MealType = ({ mealType }) => {
  return mealType.map((val, i) => {
    const types = val.split("/");
    // console.log(types);
    if (types[1]) {
      return (
        <>
          <div key={i}>
            <span className=" rounded p-2 text-lg">
              Perfect for {types[0]} or {types[1]}
            </span>
          </div>
        </>
      );
    } else {
      return (
        <div key={i}>
          <span className=" rounded p-2 text-lg">Perfect for {types[0]}</span>
        </div>
      );
    }
  });
};
