import { useState } from "react";

import { HealthLabels, Ingredients, MealType } from "./utils";

export function RecipeCard({ cardData }) {
  const [viewFullRecipe, setViewFullRecipe] = useState(false);
  const [animatedCardIndex, setAnimatedCardIndex] = useState(-1);

  const handleClick = (index) => {
    setAnimatedCardIndex(index);
    setViewFullRecipe(!viewFullRecipe);
  };
  const handleModalClick = () => {
    setAnimatedCardIndex(-1);
    setViewFullRecipe(false);
  };

  if (cardData === null) {
    return (
      <div className="box-border h-100 w-100 ">
        Search for a Dish to see the Magic
      </div>
    );
  } else {
    const { getRecipe } = cardData;
    if (animatedCardIndex != -1) {
      const calories = getRecipe[animatedCardIndex].calories;
      const healthLabels = getRecipe[animatedCardIndex].healthLabels;
      const image = getRecipe[animatedCardIndex].image;
      const ingredients = getRecipe[animatedCardIndex].ingredients;
      const label = getRecipe[animatedCardIndex].label;
      console.log(label)
      const mealType = getRecipe[animatedCardIndex].mealType;
      return (
        <div className="w-3/4 mx-auto">
          <h3 className="mb-4 font-recipe text-5xl text-black">{label}</h3>
          <button className="mb-4 text-white right-2.5 bottom-2.5 bg-green-700 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 " onClick={() => handleModalClick()}> CLOSE FULL RECIPE</button>
          <img
              src={image}
              className=" mx-auto lg:h-1/2 lg:w-1/2 object-cover  hover:opacity-75"
            />
          
          <MealType mealType={mealType} />
          <p>{Math.floor(calories)} Calories</p>
            <p className="mb-6 font-recipe text-2xl"> Are you some kind of Crazy Vegan or something?! Don't fret, this recipe is:</p>
          <div className = "grid grid-cols-4 gap-x-1">
          <HealthLabels healthLabels={healthLabels} />
          <Ingredients ingredients={ingredients} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        
        {getRecipe.map((recipe, index) => {
        const isAnimated = animatedCardIndex === index;
        const calories = recipe.calories;
        const image = recipe.image; //string
        const label = recipe.label; //String
        const mealType = recipe.mealType; //array of string

        return (
          <div
            key={index}
            className={`group bg-green-700 rounded p-3 ${
              isAnimated ? "animate-puffOut" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            <h3 className="mt-4 text-lg text-white">{label}</h3>
            <MealType mealType={mealType} />
            <p>{Math.floor(calories)} Calories</p>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src={image}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
          </div>
        );
      })
    }</div>);
    }
  }
}
