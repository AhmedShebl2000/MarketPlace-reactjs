export const productValidation = (product: { title: string; description: string; imageURL: string; price: string }) => {
  const errors: { title: string; description: string; imageURL: string; price: string} = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  }

  if (product.title.trim() === "" || product.title.length < 10 || product.title.length >80) {
    errors.title = "Product title must be between 10 and 80 characters!";
  }

  if (product.description.trim() === "" || product.description.length < 10 || product.description.length >900) {
    errors.description = "Product title must be between 10 and 900 characters!";
  }

  const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9_\-]+\.?)+\/?[a-zA-Z0-9_\-#?=&\/]+$/;
  if (product.imageURL.trim() === "" || !urlPattern.test(product.imageURL)) {
    errors.imageURL = "Product image URL must be a valid URL!";
  }

  if (product.price.trim() === "" || isNaN(Number(product.price))) {
    errors.price = "Product price must be a valid price!";
  }


  return errors;
}
