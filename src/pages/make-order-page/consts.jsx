import img1 from "../../assets/image/car 1.png";
import img2 from "../../assets/image/car 2.png";
import img3 from "../../assets/image/car 3.png";
import img4 from "../../assets/image/car 4.png";

const locations = [
  {
    id: 0,
    city: "Казань",
    points: [
      { id: 0, name: "Нариманова 42" },
      { id: 1, name: "Нариманова 43" },
      { id: 2, name: "Нариманова 44" },
      { id: 3, name: "Нариманова 45" },
    ],
  },
  {
    id: 1,
    city: "Ульяновск",
    points: [{ id: 0, name: "Нариманова 42" }],
  },
  {
    id: 2,
    city: "Москва",
    points: [{ id: 0, name: "Нариманова 42" }],
  },
  {
    id: 3,
    city: "Самара",
    points: [{ id: 0, name: "Нариманова 42" }],
  },
];

export const cars = [
  {
    id: 0,
    company: "Hyndai",
    model: "ELANTRA",
    price: "12 000 - 25 000 ₽",
    img: img1,
    type: "economy",
  },
  {
    id: 1,
    company: "Hyndai",
    model: "i30 N",
    price: "10 000 - 32 000 ₽",
    img: img2,
    type: "economy",
  },
  {
    id: 2,
    company: "Hyndai",
    model: "CRETA",
    price: "12 000 - 25 000 ₽",
    img: img3,
    type: "premium",
  },
  {
    id: 3,
    company: "Hyndai",
    model: "SONATA",
    price: "10 000 - 32 000 ₽",
    img: img4,
    type: "premium",
  },
  {
    id: 4,
    company: "Hyndai",
    model: "ELANTRA",
    price: "12 000 - 25 000 ₽",
    img: img1,
    type: "premium",
  },
  {
    id: 5,
    company: "Hyndai",
    model: "ELANTRA",
    price: "12 000 - 25 000 ₽",
    img: img2,
    type: "premium",
  },
  {
    id: 6,
    company: "Hyndai",
    model: "ELANTRA",
    price: "12 000 - 25 000 ₽",
    img: img3,
    type: "premium",
  },
];
export default locations;
