import React from "react";
import "./login.css";
import FormBuilder from "form007/dist/FormBuilder";
import { useSelector, useDispatch } from "react-redux";
import { addLogin } from "../../redux/features/login/loginSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  var tempArray = [];
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.users);
  const teacherData = useSelector((state) => state.users.teacher);
  const dispatch = useDispatch();
  const checkLogin = (loginData) => {
    let flag = true;
    tempArray = [...users, ...teacherData];
    console.log(tempArray);
    tempArray.map((user) => {
      if (user.userId === loginData.userId) {
        dispatch(addLogin(user));
        flag = false;
        navigate("home");
      }
    });
    if (flag) {
      alert("رقم الدخول غير صحيح برجاء المحاولة مرة اخري");
    }
  };
  return (
    <div className="d-flex">
      <div className="login">
        <FormBuilder 
          rows={[
            [
              {
                name: "userId",
                label: "رقم المرور ",
                type: "password",
                value: "",
                placeHolder: " ادخل رقم االمرور",
                size: "small",
                helperText: "برجاء ادخال رقم المرور",
                variant: "outlined",
                labelMargin: "0 0 0rem 0",
                registerObject: {
                  required: true,
                },
                fullWidth: false,
                xs: 12,
                md: 12,
                enableLabel: false,
              },
            ],
          ]}
          values={{}}
          dir="rtl"
          submitButtonText="دخول"
          color={"#f00"}
          submitHandler={(values) => {
            checkLogin(values);
          }}
          noSubmit={false}
          grid={{ xs: 12, md: 6 }}
          width={"100%"}
          spacing={0.5}
          margin={"0rem 0rem 0.5rem 0rem"}
        />
      </div>
    </div>
  );
};
export default Login;
