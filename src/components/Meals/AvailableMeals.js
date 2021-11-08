import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealsItem from './MealItems/MealsItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch(
        'https://react-http-4bde7-default-rtdb.firebaseio.com/meals.json'
      );

      if (!res.ok) {
        throw new Error('Something went wrong!');
      }

      const resData = await res.json();
      const loadingMeals = [];
      for (const key in resData) {
        loadingMeals.push({
          id: key,
          name: resData[key].name,
          description: resData[key].description,
          price: resData[key].price,
        });
      }

      setMeals(loadingMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>        
          {meals.map((meal) => (
            <MealsItem
              id={meal.id}
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
        {isLoading && <p>Loading...</p>}
        {error && <p className={{color: 'red'}}>{error}</p>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
