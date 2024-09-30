import { useEffect, useState } from "react";
import CreateProduct from "../components/CreateProduct";
import ProductsTable from "../components/ProductsTable";
import useGetProducts from "../hooks/useGetProducts";
import axios from "axios";
import { fetchProducts } from "../api";

function ProductPage() {
  const [products, setProducts] = useState([]);

  const refetchProducts = async () => {
    const response = await fetchProducts();
    if (response) {
      setProducts(response);
    }
  };

  useEffect(() => {
    refetchProducts();
  }, []);

  return (
    <div>
      <CreateProduct refetchProducts={refetchProducts} />
      <ProductsTable products={products} refetchProducts={refetchProducts} />
    </div>
  );
}

export default ProductPage;
