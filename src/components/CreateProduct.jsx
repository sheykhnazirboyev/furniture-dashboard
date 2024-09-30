import { Button, Modal } from "antd";
import { useState } from "react";
import ProductForm from "./ProductForm";
import { createProduct } from "../api";

function CreateProduct({ refetchProducts }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCreate = async (productForm) => {
    const resonse = await createProduct(productForm);
    if (resonse) {
      refetchProducts();
      handleOk();
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button onClick={showModal} type="primary">
        Create
      </Button>
      <Modal
        title="Create Product"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ProductForm onSubmit={handleCreate} />
      </Modal>
    </div>
  );
}

export default CreateProduct;
