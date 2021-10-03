import { useState } from "react";
// import useNotifications from "./useNotification";


const productsData = [
  {
    id: 1,
    name: "Fruits",
    imageURL:
      "https://www.kirbysproduce.com/wp-content/uploads/2020/04/produce-box.jpg",
    description: "Wonderful fruits from all over the world",
    price: "50",
    currency: "DKK",
  },
  {
    id: 2,
    name: "Vegetables",
    imageURL:
      "https://www.kirbysproduce.com/wp-content/uploads/2020/04/produce-box.jpg",
    description: "Wonderful vegetables from all over the world",
    price: "50",
    currency: "DKK",
  },
  {
    id: 3,
    name: "Juice Box",
    imageURL:
      "https://www.kirbysproduce.com/wp-content/uploads/2020/04/produce-box.jpg",
    description: "Great box for your juicer",
    price: "50",
    currency: "DKK",
  },
];

let initialProducts = productsData.map((item) => {
  return { ...item, selected: false };
});

function useProducts() {
  const [products] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  // const { notifications, createNotification } = useNotifications();

  
  const addProduct = (product) => {
    let newCart = cart.concat(product);
    setCart(newCart);
    // createNotification("product added")
  };

  const removeProduct = (product) => {
    setCart(cart.filter((item) => item.id != product.id));
    // createNotification("product removed")
  };
  const calculateSum =()=>{   
    const priceOfProducts= cart.reduce((intialValue, product)=>{
      
    console.log( cart, product.price)
    return intialValue+ Number(product.price);
    },0)
    return priceOfProducts;
    
  }

  return { products, cart, addProduct, removeProduct, total:calculateSum()};
}

export default useProducts;
