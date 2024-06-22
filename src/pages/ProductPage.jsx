import CreateProduct from "../components/CreateProduct";
import ProductsTable from "../components/ProductsTable";
import useGetProducts from "../hooks/useGetProducts";

function ProductPage() {
  const products = useGetProducts();

  return (
    <div>
      <CreateProduct />
      <ProductsTable products={products} />
    </div>
  );
}

export default ProductPage;
