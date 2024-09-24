import React from "react";
import Meal from "./MealPage";

export default function MealListPage({ mealData }) {
  const nutrients = mealData.nutrients;

  return (
    <main>
      <section >
        <h2>Macros</h2>
        <ul>
          <li>Amount of Calories: {nutrients.calories.toFixed(0)}</li>
          <li>Amount of Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
          <li>Amount of Fat: {nutrients.fat.toFixed(0)}</li>
          <li>Amount of Protein: {nutrients.protein.toFixed(0)}</li>
        </ul>
      </section>

      <section >
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </main>
  );
}