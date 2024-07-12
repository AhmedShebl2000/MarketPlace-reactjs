import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./components/ProductCard";
import {Modal} from "./components/ui/Modal";
import { categories, ColorsList, FormInputsList, productList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";
import CircleColor from "./components/CircleColor";
import { v4 as uuidv4 } from 'uuid';
import SelectMenu from "./components/ui/SelectMenu";


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
  const [isOpenEdit, setIsOpenEdit] = useState(false)
  const [product, setProduct] = useState<IProduct>(defaultProduct)
  const [products, setProducts] = useState<IProduct[]>(productList)
  const [productToEdit, setProductToEdit] = useState<IProduct>(defaultProduct);
  const [productToEditIdx, setProductToEditIdx] = useState<number>(0);
  const [error, setError] = useState({title: "", description: "", imageURL: "", price: "", colors: ""})
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [tempColorsToEdit, setTempColorsToEdit] = useState<string[]>([]);
  const [selected, _] = useState(categories[0]);
  const [selectedEdit, setSelectedEdit] = useState(categories[0]);


  console.log(selectedEdit);
  
  

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  function openEdit() {
    setIsOpenEdit(true)
  }

  function closeEdit() {
    setIsOpenEdit(false)
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
  
  const handleChangeEdit = (e: ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target;

    setProductToEdit({
      ...productToEdit,
      [name]: value,
    });

      setError({
        ...error,
        [name]: ""
      })
    


  };
  
  const handleCancel = () => {
    setProduct(defaultProduct);
    close();
  }
  
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const errors = productValidation({title: product.title, description: product.description, imageURL: product.imageURL, price: product.price, colors:tempColors})

    const hasErrorMsg = Object.values(errors).some(value => value !== "");
    
    if(hasErrorMsg) {
      setError(errors);
    } else {
      setProducts((prevValue) => ([{...product, id: uuidv4(), colors: tempColors, category: selected}, ...prevValue]));
      setProduct(defaultProduct);
      setTempColors([]);
      close();      
    }  
  }
  function handleEditSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const errors = productValidation({title: productToEdit.title, description: productToEdit.description, imageURL: productToEdit.imageURL, price: productToEdit.price})

    const hasErrorMsg = Object.values(errors).some(value => value !== "");
    
    if(hasErrorMsg) {
      setError(errors);
    } else {
    const tempProducts = [...products];
    tempProducts[productToEditIdx] = {...productToEdit, colors: tempColorsToEdit, category: selectedEdit};
    setProducts(tempProducts);
    closeEdit();      
    }  
  }


  
  // RENDER //
  const renderedProductList = products.map((myProduct, idx) => {return <ProductCard key={myProduct.id}  productList={myProduct} setProductToEdit={setProductToEdit} openEdit={openEdit} idx={idx} setProductToEditIdx={setProductToEditIdx} setTempColorsToEdit={setTempColorsToEdit}/>})
  const renderedFormInputList = FormInputsList.map((input) => (
    <div className="flex flex-col space-y-2" key={input.id}>
      <label htmlFor={input.id} className="mb-[2px] text-sm font-medium">
        {input.label}
      </label>
      <Input type={input.type} id={input.id} name={input.name} value={product[input.name]} onChange={handleChange}/>
      <ErrorMessage msg={error[input.name]} />
    </div>
  ))
  const CircularColorsList = ColorsList.map((color) => (
    <CircleColor key={color} color={color} onClick={() => {
      if (tempColors.includes(color)) {
        setTempColors((prevValue) => prevValue.filter((currentColor) => (currentColor !== color)));
      } else {
        setTempColors((prevValue) => ([...prevValue, color]));
      }
    }}/>
  ))
  const addedColors = tempColors.map((color) => (<span key={color} style={{backgroundColor:color, color:"white"}} className="rounded-md text-s p-1" >{color}</span>))

  
  console.log(selected);
  

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

      {/* ADD MODAL */}
      <Modal isOpen={isOpen} close={close} title="Add Product">
        <form onSubmit={handleSubmit}>
        {renderedFormInputList}
        <div className="flex items-center flex-row space-x-3 my-2 flex-wrap">
        {addedColors}
        </div>
        <div className="flex items-center flex-row space-x-3 my-2 flex-wrap">
        {CircularColorsList}
        </div>
        <SelectMenu selected={selectedEdit} setSelected={setSelectedEdit} />
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

      {/* EDIT MODAL */}
      <Modal isOpen={isOpenEdit} close={closeEdit} title="Edit Product">
        <form onSubmit={handleEditSubmit}>

          {FormInputsList.map((input) => (
            <div className="flex flex-col space-y-2" key={input.id}>
              <label htmlFor={input.id} className="mb-[2px] text-sm font-medium">
                {input.label}
              </label>
              <Input type={input.type} id={input.id} name={input.name} value={productToEdit[input.name]} onChange={handleChangeEdit}/>
              <ErrorMessage msg={error[input.name]} />
            </div>
            
          ))}
          <div className="flex items-center flex-row space-x-3 my-2 flex-wrap">
            {tempColorsToEdit.map((color) => (
              <span 
                key={color} 
                style={{backgroundColor: color, color: "white"}} 
                className="rounded-md text-s p-1"
              >
                {color}
              </span>
            ))}
          </div>

        <div className="flex items-center flex-row space-x-3 my-2 flex-wrap">

          {ColorsList.map((color) => (
            <CircleColor key={color} color={color} onClick={() => {
              if (tempColorsToEdit.includes(color)) {
                setTempColorsToEdit((prevValue) => prevValue.filter((currentColor) => (currentColor !== color)));
              } else {
                setTempColorsToEdit((prevValue) => [...prevValue, color]);
              }
            }}/>
          ))}


        </div>

        <SelectMenu selected = {selectedEdit} setSelected = {setSelectedEdit}/>



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