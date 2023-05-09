// This file formats the properties of the getRecipe function so that they display
// correctly on cards
export const HealthLabels = ({ healthLabels }) => {
  const labelSpan = healthLabels.map((val, i) => {
    console.log(val);
    return <span key={i}>{val}</span>;
  });
  return labelSpan;
};
export const Ingredients = ({ ingredients }) => {
  const ingredientSpan = ingredients.map((val, i) => {
    console.log(val);
    return (
      <div key={i}>
        <span>{val.food}</span>
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
  return mealType.map((val, i) => {
    const types = val.split("/");
    // console.log(types);
    if (types[1]) {
      return (
        <>
          <div key={i}>
            <span className=" rounded p-2 text-lg">
              Perfect for {types[0]} or {types[1]}
            </span>
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
