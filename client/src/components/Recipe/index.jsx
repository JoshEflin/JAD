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
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-3xl font-medium text-gray-900 mb-4">Recipes</h2>
      <RecipeCard cardData={cardData} />
      <form className="justify-center flex mb-8 sm:mb-12 mt-4">
        <label
          htmlFor="default-search"
          className="sr-only"
        >
          Search
        </label>
        <div className="relative flex items-center w-full max-w-lg">
          <input
            type="search"
            id="default-search"
            onChange={handleSearch}
            value={searchString.foodStr}
            className="block w-full py-3 pl-3 pr-10 text-sm text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="Search Recipes, foods, and other goodies!"
            required
          />
          <button
            type="submit"
            onClick={handleSearchSubmit}
            className="absolute top-0 right-0 h-full px-4 py-3 bg-green-500 text-white rounded-r-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors"
          >
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-gray-100"
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
</div>
  );
};

export default Recipe;
