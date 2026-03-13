"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch meal ideas");
  }

  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadMealIdeas() {
    if (!ingredient) {
      setMeals([]);
      return;
    }

    try {
      setLoading(true);
      setError("");
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);
    } catch (err) {
      setError("Unable to load meal ideas.");
      setMeals([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="rounded-lg bg-white/5 p-6">
      <h2 className="mb-4 text-xl font-bold">Meal Ideas</h2>

      {!ingredient && (
        <p className="text-sm opacity-80">
          Select an item to see meal ideas.
        </p>
      )}

      {loading && <p>Loading meal ideas...</p>}

      {error && <p className="text-red-400">{error}</p>}

      {!loading && !error && ingredient && meals.length === 0 && (
        <p>No meal ideas found for "{ingredient}".</p>
      )}

      {!loading && !error && meals.length > 0 && (
        <ul className="space-y-2">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="rounded-md bg-white/10 p-3"
            >
              {meal.strMeal}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}