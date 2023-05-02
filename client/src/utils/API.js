import axios from 'axios';
// import.meta.env.VITE_API_KEY;
// import.meta.env.VITE_API_ID;
const key = "f4b2d975df0d3a4ac22eda741e986516";
const id = "be90a860";


const find = async (query) =>
    axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${id}&app_key=${key}`);


export default { find };
