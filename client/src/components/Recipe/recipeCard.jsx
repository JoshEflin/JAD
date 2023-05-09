import { useState } from "react";
import FullRecipe from "./FullRecipe";
import { HealthLabels, Ingredients, MealType } from "./utils";

export function RecipeCard({ cardData}) {
  const [viewFullRecipe, setViewFullRecipe] = useState(false);
  const [animatedCardIndex, setAnimatedCardIndex] = useState(-1);

  const handleClick = (index) => {
    setAnimatedCardIndex(index);
    setViewFullRecipe(!viewFullRecipe)
  };
  const handleModalClick = ()=>{
    setAnimatedCardIndex(-1)
    setViewFullRecipe(false);
  }

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
      const mealType = getRecipe[animatedCardIndex].mealType;
      return (
        <div >
          <button onClick={() => handleModalClick()}> CLOSE FULL RECIPE</button>
          <h3 className="mt-4 text-lg text-white">{label}</h3>
          <MealType mealType={mealType} />
          <p>{Math.floor(calories)} Calories</p>
          <HealthLabels healthLabels={healthLabels} />
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img
              src={image}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <Ingredients ingredients={ingredients} />
        </div>
      );
    } else {
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
      });
    }
  }
}
