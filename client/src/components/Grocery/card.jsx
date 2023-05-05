import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { GET_RECIPE } from "../../utils/mutations";


const HealthLabels = ({labels})=> {
  console.log(labels)

  // labels.map((label, key) => <p key={key}>{label}</p>)
}
// import { GET_RECIPE } from '../../utils/mutations'
export function RecipeCard({cardData}) {
  if (cardData === null) {
    return (
      <div className="box-border h-100 w-100 ">
        hi
        {/* <p>{calories}{healthLabels}{image}{ingredients}{label}{mealType}</p> */}
      </div>
    );
  } else {
    const {getRecipe}= cardData
    // console.log("inside card", getRecipe);
    return (getRecipe.map((recipe) => {
      // console.log(recipe)
      const calories = recipe.calories;
      console.log(calories)
      const healthLabels = recipe.healthLabels; //array of strings
      const image = recipe.image;
      const ingredients = recipe.ingredients;
      const label = recipe.label;
      const mealType = recipe.mealType;
      return (
        <>
          <div className="box-border h-100 w-100 ">
            hi
            <p>
              {calories}
            </p>
              <HealthLabels labels={healthLabels} ></HealthLabels>
              <img src ={image}/>
              {/* {ingredients} */}
              {/* {label} */}
              {/* {mealType} */}
          </div>
        </>
      );
    }));
  }
}

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

export function IngredientCard() {
  // const [getRecipe,{error,data}] =useMutation(GET_RECIPE)
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  // onClick= {getRecipe}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
