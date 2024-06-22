import axios from "axios";
import React, { useEffect, useState } from "react";

function useGetProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      try {
        const url = import.meta.env.VITE_BACKEND_URL;

        const response = await axios.get(`${url}/api/products`);
        // console.log(response.data);
        if (response.data) setProducts(response.data);
      } catch (eror) {
        console.log(eror);
      }
    }

    getProducts();
  }, []);

  return products
}

export default useGetProducts;
