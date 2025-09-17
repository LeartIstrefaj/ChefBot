import React, { useEffect, useState } from 'react';
import Ingredients from '../components/Ingredients';
import GenerateRecipe from '../components/GenerateRecipe';
export default function Index() {
    const [ingredients, setIngredients] = useState([]);
    const [recipeShown, setRecipeShown] = useState(false);

    const toggleRecipe = () => {
        setRecipeShown(prevRecipe => !prevRecipe);
    }


    const addIngredient = (formData) => {
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }

    return (
        <>
            <form action={addIngredient} className="form">
                <input type="text" placeholder="Enter ingredients: e.g. Milk" className="form-control" name='ingredient' required />
                <button className="btn" type="button">Add ingredient</button>
            </form>

            {ingredients.length > 0 && <Ingredients ingredients={ingredients} toggleRecipe={toggleRecipe} />}
            {recipeShown && <GenerateRecipe />}
            
        </>
    );
}