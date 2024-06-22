import { Button, Modal } from "antd";
import { useState } from "react";
import ProductForm from "./ProductForm";
import { createProduct, editProduct, getProductById } from "../api";

function EditProduct({ productId }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singleProduct, setSingleProduct] = useState(null);

  const showModal = async () => {
    setIsModalOpen(true);
    const product = await getProductById(productId);
    setSingleProduct(product.data);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleEdit = async (productForm) => {
    const { _id, __v, ...product } = productForm;
    const resonse = await editProduct(product, productId);
    if (resonse) {
      alert("Sucuessfully Edited");
    }
    handleOk();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button onClick={showModal} type="primary">
        Edit
      </Button>
      <Modal
        title="Edit Product"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ProductForm onSubmit={handleEdit} initialValues={singleProduct} />
      </Modal>
    </div>
  );
}

export default EditProduct;
