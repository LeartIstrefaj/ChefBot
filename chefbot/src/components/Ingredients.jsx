export default function Ingredients(props) {
    const ingredientsList = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ));
    return (
        <section className="ingredients">
            <h2>Ingredients on hand:</h2>
            {/* {ingredientsList} */}
            <ul className="ingredients-list">{ingredientsList}</ul>
            {props.ingredients.length > 3 && <div className="get-recipe">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button className="get-recipe-btn" onClick={props.toggleRecipe}>Get a recipe</button>
            </div>}
        </section>
    );
}