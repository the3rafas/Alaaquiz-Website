import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { buttonFormStyle } from "../../styles";
import { useSelector,  } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const login = useSelector((state) => state.login.login);
  return (
    <>
    
      {login ? (
        login.teacher ? (
          <div className="home">
            <Button
              variant="contained"
              size="large"
              sx={{ ...buttonFormStyle, height: "50px", width: "200px" }}
              onClick={() => navigate("/createQuiz")}
            >
              اضافة امتحان
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{ ...buttonFormStyle, height: "50px", width: "200px" }}
              onClick={() => navigate("/createUser")}
            >
              اضافة طالب
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{ ...buttonFormStyle, height: "50px", width: "200px" }}
              onClick={() => navigate("/editUser")}
            >
              تعديل بيانات طالب
            </Button>
          </div>
        ) : (
          <div className="home">
            <Button
              variant="contained"
              size="large"
              sx={{ ...buttonFormStyle, height: "50px", width: "200px" }}
              onClick={() => navigate("/quiz")}
            >
              مادة الرياضيات
            </Button>
          </div>
        )
      ) : null}
    </>
  );
};
export default Home;
