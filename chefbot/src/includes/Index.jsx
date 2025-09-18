import React, { useEffect, useState } from 'react';
import Ingredients from '../components/Ingredients';
import GenerateRecipe from '../components/GenerateRecipe';
import { getRecipeFromMistral } from '../Ai';
export default function Index() {
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState("");

    async function getRecipe(){
        // setRecipeShown(prevRecipe => !prevRecipe);
        const generateRecipe = await getRecipeFromMistral(ingredients);
        setRecipe(generateRecipe);
        // console.log(generateRecipe);
    }


    const addIngredient = (formData) => {
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }

    return (
        <>
            <form action={addIngredient} className="form">
                <input type="text" placeholder="Enter ingredients: e.g. Milk" className="form-control" name='ingredient' required />
                <button className="btn" type="submit">Add ingredient</button>
            </form>

            {ingredients.length > 0 && <Ingredients ingredients={ingredients} getRecipe={getRecipe} />}
            {recipe && <GenerateRecipe recipe={recipe} />}
            
        </>
    );
}