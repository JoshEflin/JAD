require('dotenv').config()
const id = process.env.API_ID;
const key = process.env.API_KEY;
const axios = require('axios');
const query = "chinese";


axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${id}&app_key=${key}`).then(({ data }) => {
    const dataArr = data.hits[0].recipe;
    const { uri, label, image, healthLabels, cautions, ingredients, calories, mealType, dishType, totalNutrients } = dataArr;
    // dataArr.map((recipe, index) => {
    //     console.log(`${JSON.stringify(recipe, null, 2)}\n ${index}`)
    // })
    console.log(dataArr);
    // console.log(`I like to eat ${label}!`)
});

