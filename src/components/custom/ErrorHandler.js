import { routes } from "../../routes";
import { setMessageText, setseverity } from "../global/slices";

// Write common error handling here.
export const errorHandler = async (error, thunkAPI) => {
  if (typeof error.response == "undefined") {
    return;
  }

  const { status, data, config } = error.response;
  // Perform processing according to error.response below here.
  if (status !== 401) {
    if (config.url === "https://reqres.in/api/login") {
      window.location.href = routes.login.path;
    } else {
      thunkAPI.dispatch(
        setMessageText(data?.message || data?.messageCode || data?.mess || "exception_api")
      );
      thunkAPI.dispatch(setseverity("error"));
    }
  }
  return thunkAPI.rejectWithValue(data);
};