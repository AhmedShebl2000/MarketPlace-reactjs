import { IProduct } from "../interfaces";
import { textSlicer } from "../utils/functions";
import Image from "./Image";
import Button from "./ui/Button";

interface IProps {
  productList: IProduct;
}

const ProductCard = ({productList}: IProps) => {
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">

      <Image 
        imageURL={productList.imageURL} 
        alt={productList.category.name} 
        className={"rounded-md mb-2"} />

      <h3>{productList.title}</h3>
    
      <p>{textSlicer(productList.description)}</p>
    
      <div className="flex items-center my-4 space-x-2">
      <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer"></span>
      <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer"></span>
      <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer"></span>
      </div>

      <div className="flex items-center justify-between">
        <span>400$</span>
        <Image 
        imageURL={productList.imageURL}  
        alt={productList.category.name} 
        className={"w-10 h-10 rounded-full object-center"} />
      </div>

      <div className="flex items-center justify-between space-x-2">
        <Button 
          onClick={() => {console.log("Clicked");}}
          className="bg-indigo-700"
          width="w-full"
          >
            EDIT
        </Button>
        <Button 
        className="bg-red-700"
        width="w-full"
        >REMOVE</Button>
      </div>


    </div>
  )
}

export default ProductCard;