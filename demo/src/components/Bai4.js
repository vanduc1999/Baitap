import { useState, useEffect, useMemo } from "react";
import FormUser from "./FormUser";
import SreachBox from "./SreachBox";
import TableUserList from "./TableUserList";


const DEFAULT_USER = { name: "", email: "", phone: "" };

const Bai4 = () => {
  const [formData, setFormData] = useState(DEFAULT_USER);
  const [userList, setUserList] = useState([]);
  // const [searchUserList, setSearchUserList] = useState([]);
  const [keyword, setKeyword] = useState("");

  // useEffect(() => { // update nhieu du lieu
  //   if (keyword !== "") {
  //     const newUserList = userList.filter((item) => {
  //       return item.name.includes(keyword) || item.email.includes(keyword)
  //     });

  //     setSearchUserList(newUserList);
  //   } else {
  //     setSearchUserList(userList);
  //   }
  // }, [keyword, userList]);
  const searchUserList = useMemo(() => {
    // update 1 du lieu
    if (keyword !== "") {
      const newUserList = userList.filter((item) => {
        return (
          item.name.includes(keyword) ||
          item.email.includes(keyword) ||
          item.phone.includes(keyword)
        );
      });

      return newUserList;
    } else {
      return userList;
    }
  }, [keyword, userList]);

  const onClick = () => {
    if (formData.id) {
      const newUserList = userList.map((item) => {
        if (item.id === formData.id) {
          return formData;
        }

        return item;
      });

      setUserList(newUserList);
    } else {
      setUserList([
        ...userList,
        {
          id: Math.random(),
          ...formData,
        },
      ]);
    }

    setFormData(DEFAULT_USER);
  };

  const onEdit = (item) => {
    setFormData(item);
  };

  const onDelete = (item) => {
    const newUserList = userList.filter((user) => {
      return user.id !== item.id;
    });

    setUserList(newUserList);
  };

  return (
    <div>
      <FormUser
        formData={formData}
        setFormData={setFormData}
        onSubmit={onClick}
      />

      <SreachBox keyword={keyword} setKeyword={setKeyword} />

      <TableUserList
        dataSource={searchUserList}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  );
};

export default Bai4;
