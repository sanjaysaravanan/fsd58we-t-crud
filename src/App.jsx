import { useState } from "react";

import { v4 } from "uuid";
import "./App.css";
import ProductAddForm from "./components/ProductAddForm";
import Product from "./components/Product";

const initialProducts = [
  {
    productName: "IPhone",
    image:
      "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg",
    price: "9.99",
    quantity: "10",
    id: "23c739bd-3a46-4b52-b1a5-6d553cdf6900",
  },
  {
    productName: "Moto Phone",
    image:
      "https://img.freepik.com/free-psd/realistic-mobile-device-isolated_23-2150427385.jpg",
    price: "18.99",
    quantity: "20",
    id: "50989ac3-a035-484d-a044-5589de70f48a",
  },
  {
    productName: "Laptop",
    image:
      "https://img.freepik.com/free-psd/laptop-mock-up-isolated_1310-1458.jpg",
    price: "49.99",
    quantity: "10",
    id: "1772e77d-c333-49ff-86dd-fd4e5b2a13f2",
  },
  {
    productName: "Laptop",
    image:
      "https://img.freepik.com/free-psd/laptop-mock-up-isolated_1310-1458.jpg",
    price: "79.99",
    quantity: "18",
    id: "5747726b-eb03-4ed4-b57c-63d70a136199",
  },
];

function App() {
  // State Variable Array of Products
  const [products, setProducts] = useState(initialProducts);

  const addProduct = (formDetails) => {
    const product = {
      ...formDetails,
      id: v4(),
    };

    // creating a new array of products with the new product
    const newProducts = [...products, product];
    console.log(JSON.stringify(newProducts));

    // changing the state variable
    setProducts(newProducts);
  };

  const deleteProduct = (pdId) => {
    // delete the product with pId from the list
    const newProducts = products.filter((product) => product.id !== pdId);
    console.log(newProducts);
    setProducts(newProducts);
  };

  return (
    <>
      <h1>CRUD Implementation Coming Soon</h1>

      <ProductAddForm addProduct={addProduct} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {/* {products.map((pd) => (
          <Product
            key={pd.id}
            productName={pd.productName}
            price={pd.price}
            quantity={pd.quantity}
            image={pd.image}
          />
        ))} */}
        {products.map((pd) => (
          // Spread the properties from pd to Product component
          <Product
            key={pd.id}
            {...pd}
            isStar={true}
            deleteProduct={deleteProduct}
          />
        ))}
      </div>
    </>
  );
}

export default App;
