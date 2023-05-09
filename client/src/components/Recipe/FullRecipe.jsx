import { useState,useEffect } from "react";
import { MealType, Ingredients, HealthLabels } from "./RecipeCard";
export default function FullRecipe({recipe, closeModal}) {
    
    
      const calories = recipe.calories;
      const  healthLabels = recipe.healthLabels
      const image = recipe.image
      const ingredients= recipe.ingredients
      const label = recipe.label
      const mealType= recipe.mealType
      return (
        <div
          
          onClick={() => closeModal()}
        > OOOOP
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
      )
    
  }