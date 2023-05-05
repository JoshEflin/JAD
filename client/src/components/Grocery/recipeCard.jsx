const HealthLabels = ({ healthLabels }) => {
  // console.log(healthLabels)

  const labelSpan = healthLabels.map((val, i) => {
    console.log(val);
    return <span key={i}>{val}</span>;
  });
  return labelSpan;
};
const Ingredients = ({ ingredients }) => {
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
const MealType = ({ mealType }) => {
  // console.log(healthLabels)

  const mealTypeSpan = mealType.map((val, i) => {
    console.log(val);
    return <span key={i}>{val}</span>;
  });
  return mealTypeSpan;
};
// import { GET_RECIPE } from '../../utils/mutations'
export  function RecipeCard({ cardData }) {
  if (cardData === null) {
    return (
      <div className="box-border h-100 w-100 ">
        hi
      </div>
    );
  } else {
    const { getRecipe } = cardData;
    return getRecipe.map((recipe,key) => {
      
      const calories = recipe.calories;
      
      const healthLabels = recipe.healthLabels; //array of strings
      
      const image = recipe.image; //string
      const ingredients = recipe.ingredients; //array of string
      const label = recipe.label; //String
      const mealType = recipe.mealType; //array of string
      return (
        <>
          <div key={key} className="group">
          <h3 className="mt-4 text-sm text-gray-700">{label}</h3>
            <MealType mealType={mealType} />
            <p>{Math.floor(calories)} Calories</p>
            {/* <HealthLabels healthLabels={healthLabels} /> */}
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src={image} className="h-full w-full object-cover object-center group-hover:opacity-75"/>
            </div>
            {/* <Ingredients ingredients={ingredients} /> */}
            
            </div>
          
        </>
      );
    });
  }
}
