import { createSlice } from "../custom/Toolkit";

const initialState = {
    loadingStatus: false,
    messageText: "",
    severity: "success",
  };
  
  export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
      toggleLoadingStatus: (state) => {
        state.loadingStatus = !state.loadingStatus;
      },
      setseverity: (state, action) => {
        state.severity = action.payload;
      },
      setMessageText: (state, action) => {
        state.messageText = action.payload;
      },
    },
  });
  
  export const { toggleLoadingStatus, setseverity, setMessageText } = globalSlice.actions;
  
  export default globalSlice.reducer;
  
