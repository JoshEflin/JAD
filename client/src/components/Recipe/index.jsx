import { useState } from "react";
import { useMutation } from "@apollo/client";
import { RecipeCard } from "./RecipeCard";
import { GET_RECIPE } from "../../utils/mutations";
import FullRecipe from "./FullRecipe";

const Recipe = () => {
  const [viewFullRecipe, setViewFullRecipe] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [getRecipe, { error, data }] = useMutation(GET_RECIPE);
  const [cardData, setCardData] = useState(null);
  const handleSearch = (event) => {
    const { name, value } = event.target;

    setSearchString(value);
  };
  // const closeModal = () => {
  //   setShowModal(!showModal);
  // };
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
      setCardData(data);
      console.log(cardData)
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-2 -left-1 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
          </div>
          <input
            type="search"
            id="default-search"
            onChange={handleSearch}
            value={searchString.foodStr}
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Recipes, foods, and other goodies!"
            required
          />
          <button
            type="submit"
            onClick={handleSearchSubmit}
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Recipe</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <RecipeCard cardData={cardData} />
            {/* <FullRecipe recipe={cardData.getRecipe[0]} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
