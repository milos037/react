import React, { Component } from "react";
import Aux from "../../hoc/Auxilaity";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/buildControls/buildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  beacon: 0.4,
  cheese: 1.3,
  meat: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      beacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  };
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updateCounter = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updateCounter;
    const priceAddition = INGREDIENT_PRICES[type];

    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) return;
    const updateCounter = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updateCounter;
    const priceDeducacation = INGREDIENT_PRICES[type];

    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeducacation;

    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };
  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
