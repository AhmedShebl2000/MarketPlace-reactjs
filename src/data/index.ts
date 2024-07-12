import { ICategories, IFormInput, IProduct } from "../interfaces";
import { v4 as uuidv4 } from 'uuid';


export const productList: IProduct[] = [
  {
    id: "1",
    title: "2022 Genesis GV70: Nominee",
    description: "As luxury brands go, South Korea's Genesis is still in its infancy",
    imageURL: "https://images.hgmsites.net/hug/2022-genesis-gv70_100801180_h.jpg",
    price: "500000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageURL:"https://images.hgmsites.net/hug/2022-genesis-gv70_100801180_h.jpg",
    }
  },
  {
    id: "2",
    title: "2021 Genesis GV70: Nominee",
    description: "As luxury brands go, South Korea's Genesis is still in its infancy",
    imageURL: "https://images.hgmsites.net/hug/2022-genesis-gv70_100801180_h.jpg",
    price: "500000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageURL:"https://images.hgmsites.net/hug/2022-genesis-gv70_100801180_h.jpg",
    }
  } ,
  {
    id: "3",
    title: "2024 Genesis GV70: Nominee",
    description: "As luxury brands go, South Korea's Genesis is still in its infancy",
    imageURL: "https://images.hgmsites.net/hug/2022-genesis-gv70_100801180_h.jpg",
    price: "500000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageURL:"https://images.hgmsites.net/hug/2022-genesis-gv70_100801180_h.jpg",
    }
  } ,
  {
    id: "4",
    title: "2020 Genesis GV70: Nominee",
    description: "As luxury brands go, South Korea's Genesis is still in its infancy",
    imageURL: "https://images.hgmsites.net/hug/2022-genesis-gv70_100801180_h.jpg",
    price: "500000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageURL:"https://images.hgmsites.net/hug/2022-genesis-gv70_100801180_h.jpg",
    }
  } ,
  {
    id: "5",
    title: "2023 Genesis GV70: Nominee",
    description: "As luxury brands go, South Korea's Genesis is still in its infancy",
    imageURL: "https://images.hgmsites.net/hug/2022-genesis-gv70_100801180_h.jpg",
    price: "500000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageURL:"https://images.hgmsites.net/hug/2022-genesis-gv70_100801180_h.jpg",
    }
  }  
]

export const FormInputsList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "product title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "product description",
    type: "text",
  },
  {
    id: "imageURL",
    name: "imageURL",
    label: "product imageURL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "product price",
    type: "text",
  },

]

export const ColorsList: string[] = [
  "#F0F8FF",
  "#FAEBD7",
  "#000000",
  "#0000FF",
  "#DC143C",
  "#B8860B",
  "#8B008B",
  "#E9967A",
  "#2F4F4F",
  "#808080",
  "#7CFC00",
  "#FF00FF"
]

export const categories: ICategories[] = [
  {
    id: uuidv4(),
    name: "Nike",
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAHSjq7Gk3-FboSL_OMkC42bdCkxD12e4mw&s"
  },
  
  {
    id: uuidv4(),
    name: "Adidas",
    imageURL: "https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg"
  },
  {
    id: uuidv4(),
    name: "Polo",
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWi07fwIePWx5nlZAoviMHA0FBdxUixhwzCw&s"
  },
  {
    id: uuidv4(),
    name: "Timberland",
    imageURL: "https://i.pinimg.com/736x/9b/5d/f4/9b5df4328849de6c220d2d2d8feff838.jpg"
  },

]