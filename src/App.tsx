import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./components/ProductCard";
import {Modal} from "./components/ui/Modal";
import { FormInputsList, productList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";

const App = () => {
  
  const defaultProduct = {
    id: "",
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    }
  }

  const [isOpen, setIsOpen] = useState(false)
  const [product, setProduct] = useState<IProduct>(defaultProduct)
  const [error, setError] = useState({title: "", description: "", imageURL: "", price: "",})

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target;

    setProduct({
      ...product,
      [name]: value,
    });

      setError({
        ...error,
        [name]: ""
      })
    


  };
  
  
  
  const handleCancel = () => {
    console.log("Canceled");
    setProduct(defaultProduct);
    close();
  }
  
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log(product);
    const errors = productValidation({title: product.title, description: product.description, imageURL: product.imageURL, price: product.price})

    const hasErrorMsg = Object.values(errors).some(value => value !== "");
    
    if(hasErrorMsg) {
      setError(errors);
      console.log(error);
    } else {

    }
    
    
  }
  
  // RENDER //
  const renderedProductList = productList.map((product) => {return <ProductCard key={product.id}  productList={product}/>})
  const renderedFormInputList = FormInputsList.map((input) => (
    <div className="flex flex-col space-y-2" key={input.id}>
      <label htmlFor={input.id} className="mb-[2px] text-sm font-medium">
        {input.label}
      </label>
      <Input type={input.type} id={input.id} name={input.name} value={product[input.name]} onChange={handleChange}/>
      <ErrorMessage msg={error[input.name]} />
    </div>
  ))

  


  return (
    <main className="container mx-auto">
      <Button
        className="bg-indigo-700"
        width="w-full"
        onClick={open}
      >
        Add Product
      </Button>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2 rounded-md">
      {renderedProductList}
      </div>
      <Modal isOpen={isOpen} close={close} title="Add Product">
        <form onSubmit={handleSubmit}>
        {renderedFormInputList}
        <div className="flex justify-center space-x-2">
        <Button 
          className="bg-indigo-700 hover:bg-indigo-800"
          width="w-full"
          // onClick={close}
          >
          Submit
        </Button>
        <Button 
          className="bg-gray-700 hover:bg-gray-800"
          width="w-full"
          onClick={handleCancel}
          >
          Cancel
        </Button>
        </div>
        </form>
      </Modal>
    </main>
  )
}

export default App;