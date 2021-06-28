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
  },
];
