// Defining the PizzaSize Enum
enum PizzaSize {
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
  Family = "Family"
}

// Defining the PizzaIngredients Enum
enum PizzaIngredients {
  Cheese = "Cheese",
  Onion = "Onion",
  Salami = "Salami",
  Pepperoni = "Pepperoni",
  Mushrooms = "Mushrooms",
  Pineapple = "Pineapple",
  Bacon = "Bacon",
  Olives = "Olives",
  Tomatoes = "Tomatoes",
  Peppers = "Peppers"
}

// Defining the Pizza type
type Pizza = {
  size: PizzaSize;
  ingredients: PizzaIngredients[];
};

// Creating 4 Pizza objects
const pizza1: Pizza = {
  size: PizzaSize.Small,
  ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Onion]
};

const pizza2: Pizza = {
  size: PizzaSize.Medium,
  ingredients: [PizzaIngredients.Salami, PizzaIngredients.Mushrooms, PizzaIngredients.Cheese]
};

const pizza3: Pizza = {
  size: PizzaSize.Large,
  ingredients: [PizzaIngredients.Pepperoni, PizzaIngredients.Bacon, PizzaIngredients.Olives]
};

const pizza4: Pizza = {
  size: PizzaSize.Family,
  ingredients: [PizzaIngredients.Pineapple, PizzaIngredients.Tomatoes, PizzaIngredients.Peppers, PizzaIngredients.Cheese]
};

// Logging the Pizza objects to the console
console.log("Pizza 1:", pizza1);
console.log("Pizza 2:", pizza2);
console.log("Pizza 3:", pizza3);
console.log("Pizza 4:", pizza4);