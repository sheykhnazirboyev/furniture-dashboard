import { useEffect, useState } from "react";
import {
  Button,
  Flex,
  Form,
  Input,
  InputNumber,
  Modal,
  Popconfirm,
  Table,
  Typography,
} from "antd";
import axios from "axios";

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
const CategoryPage = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/categories`
        );
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getCategories();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/categories/${id}`
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    setIsModalOpen(false);
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/categories/${
          selectedCategory._id
        }`,
        {
          name: selectedCategory.name,
          image: selectedCategory.image,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleCategoryChange = (e) => {
    const { name, value } = e.target;
    setSelectedCategory((categoryPreviousValue) => ({
      ...categoryPreviousValue,
      [name]: value,
    }));
  };

  // CreateModal
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newCategory, setNewCategory] = useState({ name: "", image: "" });

  const showCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const handleCreateModalOk = async () => {
    console.log(newCategory);
    if (newCategory.name || newCategory.image) return;
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/categories`,
      {
        ...newCategory,
      }
    );
    if(response) {
      setIsCreateModalOpen(false);
    }
    console.log(response)
  };

  const handleCreateModalCancel = () => {
    setIsCreateModalOpen(false);
  };

  const handleNewCategorychange = (e) => {
    const { name, value } = e.target;
    setNewCategory((prevCategory) => ({ ...prevCategory, [name]: value }));
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      width: "25%",
      editable: false,
      render: (imgUrl) => {
        return <img width={100} src={imgUrl} alt={imgUrl} />;
      },
    },
    {
      title: "name",
      dataIndex: "name",
      width: "25%",
      editable: true,
    },

    {
      title: "Edit",
      dataIndex: "editOperation",
      render: (_, record) => {
        return (
          <Typography.Link onClick={() => showModal(record)}>
            Edit
          </Typography.Link>
        );
      },
    },
    {
      title: "Delete",
      dataIndex: "deleteP[eration",
      render: (_, record) => {
        return (
          <Typography.Link onClick={() => handleDelete(record._id)}>
            Delete
          </Typography.Link>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "age" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        // editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Button onClick={showCreateModal}>Create</Button>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
      />
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form action="">
          <Flex gap="middle" vertical>
            <div>
              <Input
                placeholder="Name"
                value={selectedCategory?.name}
                onChange={handleCategoryChange}
                name="name"
              />
            </div>
            <div>
              <Input
                placeholder="ImageUrl"
                value={selectedCategory?.image}
                onChange={handleCategoryChange}
                name="image"
              />
            </div>
          </Flex>
        </form>
      </Modal>
      {/* Create modal */}
      <Modal
        title="Create Category"
        open={isCreateModalOpen}
        onOk={handleCreateModalOk}
        onCancel={handleCreateModalCancel}
      >
        <form action="">
          <Flex gap="middle" vertical>
            <div>
              <Input
                placeholder="Name"
                value={newCategory?.name}
                onChange={handleNewCategorychange}
                name="name"
              />
            </div>
            <div>
              <Input
                placeholder="ImageUrl"
                value={newCategory?.image}
                onChange={handleNewCategorychange}
                name="image"
              />
            </div>
          </Flex>
        </form>
      </Modal>
    </Form>
  );
};
export default CategoryPage;
