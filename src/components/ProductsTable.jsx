import { Table } from "antd";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";

const columns = [
  {
    title: "Image",
    dataIndex: "image",
    render: (imgUrl) => {
      return <img width={100} src={imgUrl} alt={imgUrl} />;
    },
  },
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "SubTitle",
    dataIndex: "subtitle",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Edit",
    dataIndex: "edit",
    render: (_, record) => {
      return <EditProduct productId={record._id} />;
    }
  },
  {
    title: "Delete",
    dataIndex: "delete",
    render: (_, record) => {
      return <DeleteProduct productId={record._id} />;
    }
  },
];

function ProductsTable({ products }) {
  return (
    <div>
      <Table columns={columns} dataSource={products} size="middle" />
    </div>
  );
}

export default ProductsTable;
