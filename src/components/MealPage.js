import React, { useState, useEffect } from "react";

export default function MealPage({ meal }) {
  const [imaging, setimaging] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=4bdc3d93e1a144939cd6f927f0060cee&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setimaging(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);

  return (
    <article>
      <h2>{meal.title}</h2>
      <img src={imaging} alt="recipe" />
      <ul className="instructions">
        <li>Time to prepare: {meal.readyInMinutes} minutes</li>
        <li>servings: {meal.servings}</li>
      </ul>

      <a href={meal.sourceUrl}>Click to see the reciepe</a>
    </article>
  );
}