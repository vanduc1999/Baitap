import { useState, useMemo, useEffect } from "react";
import { Modal } from "antd";
import axios from "axios";
import TableBooks from "./TableBooks";
import ModalFormBook from "./ModalFormBook";
import { ButtonCreate, SreachContainer, SreachBox } from "./styles";

const DEFAULT_BOOK = {
  title: "",
  author: "",
  description: "",
  type: "",
  page: 0,
};

const Exam05 = () => {
  const [formData, setFormData] = useState(DEFAULT_BOOK);
  const [dataSource, setDataSource] = useState([]);
  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [tableLoading, setTableLoading] = useState(false);
  const [submitLoading, setSubmitloading] = useState(false);
  const [itemloading, setItemloading] = useState(false);

  //get: lấy thông tin dữ liệu
  //  axios.get(url)
  //post: sử dụng khi muốn tạo mới dữ liệu
  //  axios.post(url, fromData).then //dữ liệu vừa được tạo trên server
  //put / patch: sử dụng khi update dữ liệu
  //  axios.put(url, fromData).then //dữ liệu vừa được cập nhật trên server
  //delete: sử dụng khi muốn xóa dữ liệu đó
  //  axios.detele(url) // true or false
  useEffect(() => {
    fetchData();
  }, []);
  // cach 2
  // useEffect(async () => {
  //   const res = await axios.get("https://6401ddde3779a862625fd459.mockapi.io/demo1");
  //   setDataSource(res.data);
  // }, []);

  const onCreate = () => {
    setFormData(DEFAULT_BOOK);
    setOpen(true);
  };

  const onEdit = (id) => {
    setItemloading(true);
    axios
      .get(`https://6401dc8d3779a862625fb4de.mockapi.io/books/${id}`)
      .then((res) => {
        setFormData(res.data);
        setOpen(true);
        setItemloading(false);
      });
  };

  const onDelete = (id) => {
    Modal.confirm({
      title: "Xóa dữ liệu này?",
      content: "Dữ liệu sẽ bị mất vĩnh viễn.",
      onOk() {
        setItemloading(true);
        axios
          .delete(`https://6401dc8d3779a862625fb4de.mockapi.io/books/${id}`)
          .then((res) => {
            setItemloading(false);
            fetchData();
          });
      },
    });
  };

  const onSubmit = (id, data) => {
    setSubmitloading(true);
    if (id) {
      axios
        .put(`https://6401dc8d3779a862625fb4de.mockapi.io/books/${id}`, data)
        .then((res) => {
          setSubmitloading(false);
          setFormData(DEFAULT_BOOK);
          setOpen(false);
          fetchData();
        });
    } else {
      axios
        .post("https://6401dc8d3779a862625fb4de.mockapi.io/books", data)
        .then((res) => {
          setSubmitloading(false);
          setFormData(DEFAULT_BOOK);
          setOpen(false);
          fetchData();
        });
    }
  };

  const sreachDataSource = useMemo(() => {
    if (keyword) {
      return dataSource.filter((item) => {
        return item.title.includes(keyword) || item.author.includes(keyword);
      });
    }
    return dataSource;
  }, [keyword, dataSource]);

  const fetchData = () => {
    setTableLoading(true);
    axios
      .get("https://6401dc8d3779a862625fb4de.mockapi.io/books")
      .then((res) => {
        setDataSource(res.data);
        setTableLoading(false);
      });
  };

  const onSreach = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div>
      <ModalFormBook
        open={open}
        loading={submitLoading}
        setOpen={setOpen}
        onSubmit={onSubmit}
        formData={formData}
      />

      <SreachContainer>
        <ButtonCreate onClick={onCreate}>New Book</ButtonCreate>
        <SreachBox onChange={onSreach} />
      </SreachContainer>

      <TableBooks
        itemloading={itemloading}
        loading={tableLoading}
        dataSource={sreachDataSource}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  );
};

export default Exam05;
