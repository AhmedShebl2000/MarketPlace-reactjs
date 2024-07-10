import { IFormInput, IProduct } from "../interfaces";

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