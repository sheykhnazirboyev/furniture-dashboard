import { Button, Flex, Input } from "antd";
import React, { useEffect, useState } from "react";

const initialState = {
  title: "",
  subtitle: "",
  description: "",
  size: "",
  price: "",
  color: "",
  image: "",
  rate: "",
};

function ProductForm({ onSubmit, initialValues }) {
  const [prodForm, setProdForm] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProdForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(prodForm);
  };

  useEffect(() => {
    if (initialValues) {
      setProdForm(initialValues);
    }
    return () => {
      setProdForm(initialState);
    };
  }, [initialValues]);

  return (
    <div>
      <form action="">
        <Flex vertical gap="middle">
          <div>
            <Input
              placeholder="Title"
              name="title"
              value={prodForm.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              placeholder="Subtitle"
              name="subtitle"
              value={prodForm.subtitle}
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              placeholder="Description"
              name="description"
              value={prodForm.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              placeholder="Size"
              name="size"
              value={prodForm.size}
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              placeholder="Price"
              name="price"
              value={prodForm.price}
              onChange={handleChange}
              type="number"
            />
          </div>
          <div>
            <Input
              placeholder="Color"
              name="color"
              value={prodForm.color}
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              placeholder="Image"
              name="image"
              value={prodForm.image}
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              placeholder="Rate"
              name="rate"
              value={prodForm.rate}
              onChange={handleChange}
              type="number"
            />
          </div>
          <Button type="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Flex>
      </form>
    </div>
  );
}

export default ProductForm;
