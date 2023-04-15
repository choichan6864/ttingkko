import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const getUserInfo = createAsyncThunk("slice/userInfo", async () => {
  const { data: userInfo } = await axios.get("/api/userInfo");
  return userInfo;
});

const slice = createSlice({
  name: "slice",
  initialState: {
    activeLogin: false,
    loginLink: "/",
    userInfo: {
      id: "",
      email: "",
    },
  },
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(
      getUserInfo.fulfilled,
      (
        state: {
          activeLogin: boolean;
          loginLink: string;
          userInfo: { id: string; email: string };
        },
        action: any
      ) => {
        const { user, loginLink } = action.payload;
        if (user) {
          state.userInfo = user;
          state.activeLogin = true;
        }
        state.loginLink = loginLink;
      }
    );
  },
});

const store = configureStore(slice);

export {store, getUserInfo}