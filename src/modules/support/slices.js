import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	openDelete: false,
};

const supportSlice = createSlice({
  name: "accountUser",
  initialState,
  reducers: {
	setOpenDelete(state, action) {
	  state.openDelete = action.payload;
	},
  },
});

export const { setOpenDelete } = supportSlice.actions;
export default supportSlice.reducer;
