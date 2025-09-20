// import React, { useEffect, useState } from 'react';
// import Ingredients from '../components/Ingredients';
// import GenerateRecipe from '../components/GenerateRecipe';
// import { getRecipeFromMistral } from '../Ai';
// export default function Index() {
//     const [ingredients, setIngredients] = useState([]);
//     const [recipe, setRecipe] = useState("");
//     const [loading, setLoading] = useState(false);


//     async function getRecipe() {
//         // setRecipeShown(prevRecipe => !prevRecipe);
//         const generateRecipe = await getRecipeFromMistral(ingredients);
//         setRecipe(generateRecipe);
//         // console.log(generateRecipe);
//     }


//     const addIngredient = (formData) => {
//         const newIngredient = formData.get("ingredient");
//         setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
//     }

//     return (
//         <>
//             <form action={addIngredient} className={`form ${ingredients.length > 0 ? "form--spaced" : ""}`}>
//                 <input type="text" placeholder="Enter ingredients: e.g. Milk" className="form-control" name='ingredient' required  />

//                 <button className="btn" type="submit">Add ingredient</button>
//             </form>


//             {ingredients.length > 0 && <Ingredients ingredients={ingredients} getRecipe={getRecipe} />}

//             {recipe && <GenerateRecipe recipe={recipe} />}

//         </>
//     );
// }


import React, { useEffect, useState } from 'react';
import Ingredients from '../components/Ingredients';
import GenerateRecipe from '../components/GenerateRecipe';

import { getRecipeFromMistral } from '../Ai';
import Thinking from '../components/Thinking'; //

export default function Index() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);


  async function getRecipe() {
    setIsLoading(true);
    try {
      const generateRecipe = await getRecipeFromMistral(ingredients);
      setRecipe(generateRecipe);
    } catch (err) {
      console.error(err);
      setRecipe("Sorry, something went wrong.");
    } finally {
      setIsLoading(false);
    }
  }

  const addIngredient = (formData) => {
    const newIngredient = formData.get("ingredient");
    setIngredients(prev => [...prev, newIngredient]);
  };

  return (
    <>
      <form action={addIngredient} className={`form ${ingredients.length > 0 ? "form--spaced" : ""}`}>
        <input type="text" placeholder="Enter ingredients: e.g. Milk" className="form-control" name='ingredient' required />
        <button className="btn" type="submit">Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <Ingredients
          ingredients={ingredients}
          getRecipe={getRecipe}
          isLoading={isLoading} // optional, if you want to disable a button there
        />
      )}

      {isLoading && <Thinking />}                     {/* ← show while fetching */}
      {!isLoading && recipe && <GenerateRecipe recipe={recipe} />} {/* ← show result */}
    </>
  );
}
