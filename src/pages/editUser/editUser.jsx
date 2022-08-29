import React, { useState } from "react";
import "./editUser.css";
import PaginationTable from "../../component/pagination-table/pagination-table";
import { useSelector, useDispatch } from "react-redux";
import { deleteUsers, editUser } from "../../redux/features/users/usersSlice";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import Dialog from "@mui/material/Dialog";
import { TextInput } from "../../component/text_input/text_input";
import UserInfo from "../../component/userInfo/userInfo";
const EditUser = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const [openEdit, setOpenEdit] = useState(false);
  const [userData, setUserData] = useState(users);
  const [editData, setEditData] = useState(null);

  const [click, setValueOnClick] = useState();
  const [data, setData] = useState(null);

  const handelChange = (changeData) => {
    if (changeData) {
      var temp = users.filter((user) => user.name.includes(changeData));
      setUserData(temp);
    } else {
      setUserData(users);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("متأكد انك تريد حذف الطالب ؟")) {
      const userDoc = doc(db, "users", id);
      dispatch(deleteUsers(id));
      alert("تم حذف الطالب بنجاح");
      await deleteDoc(userDoc);
    } else {
      // Do nothing!
      console.log("Thing was not saved to the database.");
    }
  };
  const updateUser = async (data) => {
    const userDoc = doc(db, "users", data.id);
    dispatch(editUser(data));
    setOpenEdit(false);
    await updateDoc(userDoc, data);
    alert("تم تعديل بيانات طالب");
  };
  return (
    <div>
      <div className="search-box">
        <TextInput
          //list={userData ? userData : users}
          setValueOnClick={setValueOnClick}
          setValueOnChange={handelChange}
        />
      </div>
      <PaginationTable
        rows={userData ? userData : users}
        handleDelete={handleDelete}
        setEditData={setEditData}
        setOpenEdit={setOpenEdit}
      />
      <Dialog onClose={() => setOpenEdit(false)} open={openEdit}>
        <UserInfo editData={editData} handelUser={updateUser} />
      </Dialog>
    </div>
  );
};
export default EditUser;
