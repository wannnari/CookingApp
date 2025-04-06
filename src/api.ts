import axios from "axios";

const API_KEY = "50780a7ec1a24bd1bf8bb94c36a127d7"; // APIキーを設定
const BASE_URL = "https://api.spoonacular.com/recipes/complexSearch";

export const fetchRecipes = async (query: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apiKey: API_KEY,
        query: query,
        number: 10,
      },
    });
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};
