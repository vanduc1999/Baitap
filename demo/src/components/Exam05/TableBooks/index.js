import { Table } from "antd";
import { Actions, ButtonAction } from './styles'

const TableBooks = (props) => {
  const columns = [
    {
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
      width: "15%"
    },
    {
      title: "Tác giả",
      dataIndex: "author",
      key: "author",
      width: "15%"
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Thể loại",
      dataIndex: "type",
      key: "type",
      width: "10%"
    },
    {
      title: "Số trang",
      dataIndex: "page",
      key: "page",
      width: "10%"
    },
    {
      title: "",
      dataIndex: "actions",
      width: "20%",
      render: (text, item) => {
        return (
          <Actions>
            <ButtonAction
              loading={props.itemloading}
              onClick={() => {
                props.onEdit(item.id);
              }}
            >
              Edit
            </ButtonAction>
            <ButtonAction
              disabled={props.itemloading}
              onClick={() => {
                props.onDelete(item.id);
              }}
            >
              Delete
            </ButtonAction>
          </Actions>
        );
      },
    },
  ];

  return <Table loading={props.loading}dataSource={props.dataSource} columns={columns} />;
};

export default TableBooks;
