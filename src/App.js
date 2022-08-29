import { useState, useEffect } from "react";
import { Routes, Route, useMatch, useNavigate } from "react-router-dom";

import "./App.css";
import PrimarySearchAppBar from "./component/mui-navbar/mui-navbar";
import { useSelector, useDispatch } from "react-redux";
import { addUsers, addTeacher } from "./redux/features/users/usersSlice";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import PrivateRoute from "./PrivateRoute";

import CreateQuiz from "./pages/createQuiz/createQuiz";
import CreateUser from "./pages/createUser/createUser";
import EditUser from "./pages/editUser/editUser";
import Quiz from "./pages/quiz/quiz";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
function App() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const usersCollectionRef = collection(db, "users");
  const teacherCollectionRef = collection(db, "teacher");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      const teacherData = await getDocs(teacherCollectionRef);
      dispatch(
        addUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
      dispatch(
        addTeacher(
          teacherData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
      );
    };

    getUsers();
  }, []);
  return (
    <div className="App">
      <div className="header">
      <PrimarySearchAppBar />
      </div>
      {/* height: 476px; */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={PrivateRoute(<Home />)} />
        <Route path="/quiz" element={PrivateRoute(<Quiz />)} />
        <Route path="/editUser" element={PrivateRoute(<EditUser />)} />
        <Route path="/createQuiz" element={PrivateRoute(<CreateQuiz />)} />
        <Route path="/createUser" element={PrivateRoute(<CreateUser />)} />
      </Routes>
    </div>
  );
}

export default App;
