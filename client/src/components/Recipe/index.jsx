import { useState } from "react";
import { useMutation } from "@apollo/client";
import { RecipeCard } from "./recipeCard";
import { GET_RECIPE } from "../../utils/mutations";


const Recipe = () => {
  const [searchString, setSearchString] = useState("");
  const [getRecipe, { error, data }] = useMutation(GET_RECIPE);
  const [cardData, setCardData] = useState(null);
  const handleSearch = (event) => {
    const { name, value } = event.target;

    setSearchString(value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    const mutationObj = {
      foodStr: searchString,
    };
    console.log(mutationObj);
    try {
      const { data } = await getRecipe({
        variables: { ...mutationObj },
      });
      await setCardData(data);
      console.log(cardData);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <form className="justify-center flex">
  <label
    htmlFor="default-search"
    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
  >
    Search
  </label>

  <div className="relative flex justify-center w-4/5 sm:w-1/3 mt-6">
    <input
      type="search"
      id="default-search"
      onChange={handleSearch}
      value={searchString.foodStr}
      className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:bg-green-50 focus:outline-none focus:border-green-100"
      placeholder="Search Recipes, foods, and other goodies!"
      required
    />
    <button
      type="submit"
      onClick={handleSearchSubmit}
      className="absolute right-0 flex items-center justify-center w-12 h-full text-white bg-green-700 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-lg text-sm"
    >
      <svg
        aria-hidden="true"
        className="w-5 h-5 mx-2 text-gray-100"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
    </button>
  </div>
</form>

      <div className="bg-white">
        <div className=" mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Recipe</h2>
          <RecipeCard cardData={cardData} />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
