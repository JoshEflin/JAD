// This file formats the properties of the getRecipe function so that they display
// correctly on cards
import { useContext } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { CartContext } from "../../utils/cartContext";
import { GET_ITEM } from "../../utils/mutations";

export const HealthLabels = ({ healthLabels }) => {
  let newHealthLabels;
  if (healthLabels.length > 12) {
    newHealthLabels = healthLabels.slice(0, 12);
  } else {
    newHealthLabels = healthLabels;
  }
  const labelSpan = newHealthLabels.map((val, i) => {
    console.log(val);
    return (
      <span className="font-recipe text-base " key={i}>
        {val}{" "}
      </span>
    );
  });
  return labelSpan;
};
export const Ingredients = ({ ingredients }) => {
  const [getItem, { error, data }] = useMutation(GET_ITEM);

  const isInStock = async (string) => {
    const queryObj = { foodItem: string };
    try {
      const { data } = await getItem({
        variables: { ...queryObj },
      });
      return data;
    } catch (e) {
      console.error(e);
    }
  };
  const cart = useContext(CartContext);

  
  const AddIngredientToCart = (str) => {
    const isAvailable = isInStock(str);
    console.log(isAvailable);
    if (isAvailable.item === null) {
      console.log("in if block");
      console.log(isInStock(str));
      return false
      // (
      //   <button className=" mx-auto mb-3 font-recipe text-2xl text-white relative bottom-2.5 bg-yellow-500-700 hover:bg-yellow-600 focus:ring-4 focus:outline-none rounded-md px-2 pt-1">
      //     Out of Stock!
      //   </button>
      // );
    } else {
      console.log("in else block: this  food is available!");
      console.log(isInStock(str));
      return true
      // (
      //   <button
      //     className=" mx-auto mb-3 font-recipe text-2xl text-white relative bottom-2.5 bg-green-700 hover:bg-green-600 focus:ring-4 focus:outline-none rounded-md px-2 pt-1"
      //     onClick={() => cart.AddOnetoCart(str.toUpperCase())}
      //   >
      //     Add to Cart!
      //   </button>
      // );
    }
  };
  const ingredientSpan = ingredients.map((val, i) => {
  
    return (
      <div className="my-4 mx-1 gap-1 bg-green-200 flex flex-col" key={i}>
        <div className="p-2 flex-shrink-0">
          <img
            src={val.image}
            className="object-cover rounded-lg h-64 w-full"
          />
        </div>
        <span className="font-recipe text-2xl font-bold p-2 cursor-default">
          {val.food.toUpperCase()}
        </span>
        <div className="p-3 flex-grow">
          <p className="text-gray-800 cursor-default">{val.text}</p>
        </div>
        <div className="flex-shrink-0">
          <button className=" mx-auto mb-3 font-recipe text-2xl text-white relative bottom-2.5 bg-green-700 hover:bg-green-600 focus:ring-4 focus:outline-none rounded-md px-2 pt-1"
                  onClick={()=>cart.AddOnetoCart(val.food.toUpperCase())}
                  >
                    Add to Cart
          </button>
          
        </div>
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
