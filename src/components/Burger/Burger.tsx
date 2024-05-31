import React from "react";

interface Burger {
    ingredientsForBurger: {name: string; count: number}[];
}

const Burger:React.FC<Burger> = ({ingredientsForBurger}) => {
    const burgerMaker = () => {
        const burger: string[] = []
        for (let i = 0; i < ingredientsForBurger.length; i++) {
            if (ingredientsForBurger[i].count > 0) {

                for (let j = 0; j < ingredientsForBurger[i].count; j++){
                    burger.push(ingredientsForBurger[i].name);
                }
            }
        }

        return burger.map((ingredient, i) => (
            <div key={i} className={ingredient}></div>
        ))
    }
    return (
        <>
            {burgerMaker()}
        </>
    );
};

export default Burger;