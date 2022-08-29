import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    login: null,
    score:0,
  },
  reducers: {
    addLogin: (state, action) => {
      state.login = action.payload;
      console.log("add login");
      console.log(action.payload);
    },
    increaseScore: (state) => {
      state.score += 2;
      
    },
  },
});

// Action creators are generated for each case reducer function
export const { addLogin ,increaseScore } = loginSlice.actions;

export default loginSlice.reducer;
