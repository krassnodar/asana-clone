import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
  id: number;
  name: string;
  username: string;
}

interface IInitialState {
  count: number;
  isLoading: boolean;
  error: string;
  users: IUser[];
}

const initialState: IInitialState = {
  count: 0,
  isLoading: false,
  error: "",
  users: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.count = state.count - action.payload;
    },
    fetchUsers: (state) => {
      console.log("fetchUsers");
      state.isLoading = true;
    },
    fetchUsersSuccess: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false;
      state.error = "";
      state.users = action.payload;
    },
    fetchUsersError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = "error";
    },
  },
});

export default counterSlice.reducer;
