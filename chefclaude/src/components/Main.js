import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientList from "./IngredientList"

export default function Main() {

    //ingredients is the array obj name
    const [ingredients, setIngredients] = React.useState([])

    const [recipeShown, setRecipeShown] = React.useState(false)
    function getRecipe()
    {
        setRecipeShown(prev=>!prev)
    }
   

    
    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 && <IngredientList ingredients ={ ingredients} toggleRecipeShown={getRecipe} />}

           {recipeShown && <ClaudeRecipe/>}
        </main>
    )
}