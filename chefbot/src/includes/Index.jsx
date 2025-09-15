import React, { useEffect, useState } from 'react';
import Ingredients from '../components/Ingredients';
export default function Index() {
    const [ingredients, setIngredients] = useState(["test", "test2", "test3"]);
    // const [recipes, setRecipes] = useState([]);

    return (
        <>
            <form action="#" className="form">
                <input type="text" placeholder="Enter ingredients: e.g. Milk" className="form-control" />
                <button className="btn" type="button">Add ingredient</button>
            </form>
            <Ingredients ingredients={ingredients}/>
            {/* <Recipes /> */}
            
        </>
    );
}