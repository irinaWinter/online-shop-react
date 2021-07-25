import cucumberImg from "./assets/img/cucumber.jpg";
import onionImg from "./assets/img/onion.jpg";
import champignonsImg from "./assets/img/champignons.jpg";
import orangesImg from "./assets/img/oranges.jpg";
import nectarinesImg from "./assets/img/nectarines.jpg";
import tomatoesImg from "./assets/img/tomatoes.jpg";

export default [
  {
    name: "Огурцы",
    category: "овощи",
    price: 239.9,
    discount: 60,
    rating: [4, 5, 3, 5],
    isFavorite: true,
    img: cucumberImg,
    id: "p1",
    inCart: false,
    nutritionalValue: {
      energyValue: 100,
      proteins: 20,
      fats: 30,
      carbohydrates: 4,
    },
    storageConditions: {
      bestBefore: 5,
      storageTemperatureMin: 2,
      storageTemperatureMax: 20,
    }
  },
  {
    name: "Лук репчатый",
    category: "овощи",
    price: 54.9,
    discount: 0,
    rating: [5, 1, 2],
    isFavorite: false,
    img: onionImg,
    id: "p2",
    inCart: false,
    nutritionalValue: {
      energyValue: 200,
      proteins: 200,
      fats: 300,
      carbohydrates: 40,
    },
    storageConditions: {
      bestBefore: 50,
      storageTemperatureMin: 20,
      storageTemperatureMax: 200,
    }
  },
  {
    name: "Шампиньоны",
    category: "грибы",
    price: 239.9,
    discount: 0,
    rating: [3, 2, 1],
    isFavorite: false,
    img: champignonsImg,
    id: "p3",
    inCart: false,
    nutritionalValue: {
      energyValue: 500,
      proteins: 26,
      fats: 24,
      carbohydrates: 456,
    },
    storageConditions: {
      bestBefore: 23,
      storageTemperatureMin: -1,
      storageTemperatureMax: 34,
    }
  },
  {
    name: "Апельсины",
    category: "фрукты",
    price: 94.9,
    discount: 0,
    rating: [5, 4, 5],
    isFavorite: false,
    img: orangesImg,
    id: "p4",
    inCart: false,
    nutritionalValue: {
      energyValue: 140,
      proteins: 45,
      fats: 34,
      carbohydrates: 5,
    },
    storageConditions: {
      bestBefore: 54,
      storageTemperatureMin: 12,
      storageTemperatureMax: 20,
    }
  },
  {
    name: "Нектарины",
    category: "фрукты",
    price: 249.9,
    discount: 20,
    rating: [5, 5, 4],
    isFavorite: false,
    img: nectarinesImg,
    id: "p5",
    inCart: false,
    nutritionalValue: {
      energyValue: 100,
      proteins: 20,
      fats: 30,
      carbohydrates: 4,
    },
    storageConditions: {
      bestBefore: 5,
      storageTemperatureMin: 2,
      storageTemperatureMax: 20,
    }
  },
  {
    name: "Помидоры",
    category: "овощи",
    price: 169.9,
    discount: 0,
    rating: [5, 5, 5],
    isFavorite: false,
    img: tomatoesImg,
    id: "p6",
    inCart: false,
    nutritionalValue: {
      energyValue: 100,
      proteins: 20,
      fats: 30,
      carbohydrates: 4,
    },
    storageConditions: {
      bestBefore: 5,
      storageTemperatureMin: 2,
      storageTemperatureMax: 20,
    }
  },
];
