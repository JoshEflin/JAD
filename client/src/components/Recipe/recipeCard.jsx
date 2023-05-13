import { useState, useEffect } from "react";
import { HealthLabels, Ingredients, MealType } from "./utils";

export function RecipeCard({ cardData }) {
  console.log(cardData);
  const [viewFullRecipe, setViewFullRecipe] = useState(false);
  const [animatedCardIndex, setAnimatedCardIndex] = useState(-1);

  useEffect(() => {
    if (viewFullRecipe) {
      window.scrollTo(0, 0);
    }
  }, [viewFullRecipe]);

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
      console.log(label);
      const mealType = getRecipe[animatedCardIndex].mealType;
      return (
        <div className="w-3/4 mx-auto">
          <h3 className="mb-4 font-semibold text-5xl text-black cursor-default">{label}</h3>
          <button
            className="mb-4 text-white right-2.5 bottom-2.5 bg-green-700 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 cursor-pointer"
            onClick={() => handleModalClick()}
          >
            {" "}
            CLOSE FULL RECIPE
          </button>
          <img
            src={image}
            className="mx-auto lg:h-1/2 lg:w-1/2 object-cover rounded-lg shadow-xl mb-4"
          />

          <MealType mealType={mealType} />
          <p className='cursor-default'>{Math.floor(calories)} Calories</p>
          <p className="mb-6 font-semibold text-2xl cursor-default">
            {" "}
            Are you some kind of Crazy Vegan or something?! Don't fret, this
            recipe is:
          </p>
          <div className="font-medium grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-3 cursor-default">
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
                className={`group rounded-lg pb-4 bg-gray-100 hover:bg-green-300 cursor-pointer ${
                  isAnimated ? "animate-puffOut" : ""
                } shadow-md hover:shadow-xl transitional-all duration-300`}
                onClick={() => handleClick(index)}
              >
                <div className="relative aspect-h-1 aspect-w-1">
                  <img
                    src={image}
                    alt={label}
                    className="absolute inset-0 object-cover w-full h-full rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-800">{label}</h3>
                  <MealType mealType={mealType} />
                  <p className="mt-1 text-sm text-gray-600">
                    {Math.floor(calories)} Calories
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  }
}
