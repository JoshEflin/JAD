import { useState, } from "react";
import FullRecipe from './FullRecipe'

export const HealthLabels = ({ healthLabels }) => {
  // console.log(healthLabels)

  const labelSpan = healthLabels.map((val, i) => {
    console.log(val);
    return <span key={i}>{val}</span>;
  });
  return labelSpan;
};
export const Ingredients = ({ ingredients }) => {
  // console.log(healthLabels)

  const ingredientSpan = ingredients.map((val, i) => {
    console.log(val);
    return (
      <div key={i}>
        <span>{val.food}</span>
        {/* <span >{val.foodId}</span> */}
        <img src={val.image} />
        <span>{val.measure}</span>
        <span>{val.quantity}</span>
        <span>{val.text}</span>
        <span>{val.weight}</span>
      </div>
    );
  });
  return ingredientSpan;
};
export const MealType = ({ mealType }) => {
  // console.log(healthLabels)

  return mealType.map((val, i) => {
    const types = val.split("/");
    console.log(types);
    if (types[1]) {
      return (
        <>
          <div key={i}>
            <span className=" rounded p-2 text-lg"> Perfect for {types[0]} or {types[1]} </span>
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


 
// import { GET_RECIPE } from '../../utils/mutations'
export function RecipeCard({ cardData }) {
  const [animatedCardIndex, setAnimatedCardIndex] = useState(-1);
  const [showModal, setShowModal] = useState(false);

  
  
  const handleAnimation = (index) => {
    setAnimatedCardIndex(index);
    setShowModal(true)
  };
  const closeModal = ()=> {
    setShowModal(false)
  }
  
  if (cardData === null) {
    return <div className="box-border h-100 w-100 ">Something Went Wrong</div>;
  } else {
    const { getRecipe } = cardData;
    return getRecipe.map((recipe, index) => {
      const isAnimated = animatedCardIndex === index;
      const calories = recipe.calories;
      // const healthLabels = recipe.healthLabels; //array of strings
      const image = recipe.image; //string
      // const ingredients = recipe.ingredients; //array of string
      const label = recipe.label; //String
      const mealType = recipe.mealType; //array of string

      return (
        <div
          key={index}
          className={`group bg-green-700 rounded p-3 ${
            isAnimated ? 'animate-puffOut' : ''
          }`}
          onClick={() => handleAnimation(index)}
        >
          <h3 className="mt-4 text-lg text-white">{label}</h3>
          <MealType mealType={mealType} />
          <p>{Math.floor(calories)} Calories</p>
          {/* <HealthLabels healthLabels={healthLabels} /> */}
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img
              src={image}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          {/* <Ingredients ingredients={ingredients} /> */}
          
        </div>
      );
    });
  }
}
