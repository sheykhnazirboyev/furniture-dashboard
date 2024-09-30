import { Button } from "antd";
import { deleteProduct } from "../api";

function DeleteProduct({ productId, refetchProducts }) {

  const handleDelete = async () => {
    const isAgree = confirm("Are you agree to delete product");
    if (isAgree) {
      const response = await deleteProduct(productId);
      if (response) {
        refetchProducts();
      }
    }
  };

  return (
    <div>
      <Button onClick={handleDelete} type="primary">
        Delete
      </Button>
    </div>
  );
}

export default DeleteProduct;
