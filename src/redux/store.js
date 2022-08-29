import { configureStore} from "@reduxjs/toolkit";
import usersReducer from "./features/users/usersSlice";
import loginReducer from "./features/login/loginSlice";

export default configureStore({
  reducer: {
    users: usersReducer,
    login: loginReducer,
  },
});
