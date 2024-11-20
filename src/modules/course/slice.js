import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	openEdit: false,
	openCreate: false,
	openDelete: false,
};

const courseSlice = createSlice({
  name: "accountUser",
  initialState,
  reducers: {
	setOpenEdit(state, action) {
	  state.openEdit = action.payload;
	},
	setOpenCreate(state, action) {
	  state.openCreate = action.payload;
	},
	setOpenDelete(state, action) {
	  state.openDelete = action.payload;
	},
  },
});

export const { setOpenEdit, setOpenCreate, setOpenDelete } = courseSlice.actions;
export default courseSlice.reducer;
