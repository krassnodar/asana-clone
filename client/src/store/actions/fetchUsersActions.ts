import { AppDispatch } from "../store";
import { counterSlice, IUser } from "../reducers/counterReducer";
import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/users";

export const fetchUsersActions = () => async (dispatch: AppDispatch) => {
  const { fetchUsers, fetchUsersSuccess, fetchUsersError } =
    counterSlice.actions;
  try {
    console.log("try");
    dispatch(fetchUsers());

    const result = await axios.get<IUser[]>(API);
    console.log("result", result);

    if (result) {
      dispatch(fetchUsersSuccess(result.data));
    } else {
      dispatch(fetchUsersError("Error"));
    }
  } catch (error: any) {
    console.log("error", error);
  }
};
