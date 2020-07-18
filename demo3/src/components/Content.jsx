import React from 'react';
import CoffeeCard from './CoffeeCard';
import { Grid } from '@material-ui/core';
import coffeeMakerList from './constants';

const Content = () => {
  const getCoffeeMakerCard = (coffeeMakerObj) => {
    const { title, price, description, avatarUrl, imageUrl } = coffeeMakerObj;
    return (
        <Grid item xs={12} sm={4}>
            <CoffeeCard {...coffeeMakerObj} />
        </Grid>
        );
  };
  return (
    <div>
      <Grid container spacing={4}>
          {coffeeMakerList.map((coffeeMakerObj) =>
            getCoffeeMakerCard(coffeeMakerObj)
          )}
      </Grid>
    </div>
  );
};

export default Content;
