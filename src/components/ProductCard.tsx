import { IProduct } from "../interfaces";
import { textSlicer } from "../utils/functions";
import CircleColor from "./CircleColor";
import Image from "./Image";
import Button from "./ui/Button";

interface IProps {
  productList: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openEdit: () => void;
  idx: number;
  setProductToEditIdx: (idx: number) => void;
  setTempColorsToEdit: (colors: string[]) => void;
}

const ProductCard = ({productList, setProductToEdit, openEdit, idx, setProductToEditIdx, setTempColorsToEdit}: IProps) => {

  const CircularColorsList = productList.colors.map((color) => (
    <CircleColor key={color} color={color}/>
  ))

  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">

      <Image 
        imageURL={productList.imageURL} 
        alt={productList.category.name} 
        className={"rounded-md mb-2"} />

      <h3>{productList.title}</h3>
    
      <p>{textSlicer(productList.description)}</p>
    
      <div className="flex items-center flex-row space-x-3 my-2 flex-wrap">
        {CircularColorsList}
        </div>

      <div className="flex items-center justify-between">
        <span>{productList.price}$</span>
        <Image 
        imageURL={productList.category.imageURL}  
        alt={productList.category.name} 
        className={"w-10 h-10 rounded-full object-center"} />
      </div>

      <div className="flex items-center justify-between space-x-2">
        <Button 
          onClick={() => {
            setProductToEdit(productList)
            openEdit();
            setProductToEditIdx(idx);
            setTempColorsToEdit(productList.colors)
          }}
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