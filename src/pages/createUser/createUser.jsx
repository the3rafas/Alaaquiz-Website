import React from "react";
import "./createUser.css";
import FormBuilder from "form007/dist/FormBuilder";
import { db } from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import UserInfo from "../../component/userInfo/userInfo";
import { adduser } from "../../redux/features/users/usersSlice";
import { useSelector, useDispatch } from "react-redux";

const CreateUser = () => {
  const dispatch = useDispatch();
  const usersCollectionRef = collection(db, "users");
  const createUser = async (values) => {
    dispatch(adduser(values));
    await addDoc(usersCollectionRef, { ...values, score: [] });
    alert("تم اضافة طالب !");
    console.log("odksokdsokdosd");
  };
  return (
    <div className="create-user">
      <div className="form-div">
        <UserInfo handelUser={createUser} />
      </div>
    </div>
  );
};
export default CreateUser;
