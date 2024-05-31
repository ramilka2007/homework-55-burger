import './App.css'
import {Ingredient} from "../types";
import saladImage from "../assets/saladImg.png";
import cheeseImage from "../assets/cheeseImg.png";
import baconImage from "../assets/baconImg.png";
import meatImage from "../assets/meatImg.png";
import {useState} from "react";
import Ingredients from "../components/Ingredients/Ingredients";

const App = () => {
    const INGREDIENTS: Ingredient[] = [
        {name: 'Salad', price: 10, image: `${saladImage}`},
        {name: 'Cheese', price: 50, image: `${cheeseImage}`},
        {name: 'Bacon', price: 60, image: `${baconImage}`},
        {name: 'Meat', price: 80, image: `${meatImage}`},
    ];

    const [ingredients, setIngredients] = useState([
        {name: 'Salad', count: 0},
        {name: 'Cheese', count: 0},
        {name: 'Bacon', count: 0},
        {name: 'Meat', count: 0},
    ]);

    const ingredientsList = ingredients.map((ingredient, index) => ({
        ...ingredient, ...INGREDIENTS[index]}));

    const increaseCount = (name: string) => {
        setIngredients((prevIngredients) => {
            return prevIngredients.map((ingredient) => {
                if (ingredient.name === name) {
                    return {...ingredient, count: ingredient.count + 1};
                }
                return ingredient;
            });
        });
    };

    const clearCounter = (name: string) => {
        setIngredients((prevIngredients) => {
            return prevIngredients.map((ingredient) => {
                if (ingredient.name === name) {
                    return {...ingredient, count: ingredient.count - 1};
                }
                return ingredient;
            });
        });
    };
    return (
        <div className="menu">
            <div className="chooseIngredients">
                <div className="title"><h1>Ingredients</h1></div>
                {ingredientsList.map((ingredient) => (
                    <Ingredients
                        key={ingredient.name + ingredient.count}
                        name={ingredient.name}
                        image={ingredient.image}
                        count={ingredient.count}
                        increaseIngredient={() => {increaseCount(ingredient.name)}}
                        deleteIngredients={() => {clearCounter(ingredient.name)}}/>
                ))}
            </div>
            <div className="burgerDiv">
                <div className="title"><h1>Burger</h1></div>
                <div className="Burger">
                    <div className="BreadTop">
                        <div className="Seeds1"></div>
                        <div className="Seeds2"></div>
                    </div>
                    <div className="BreadBottom"></div>
                </div>
            </div>
        </div>
    );
};

export default App
