// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     initialData: {
//         id: null,
//         time: "",
//         user_id: null,
//         created_at: "",
//         updated_at: "",
//         flight_check_id: null,
//     },
//     openEdit: false,
//     openCreate: false,
//     openDelete: false,
//     page: 1,
//     pageSize: 10,
// };

// const afterFlySlice = createSlice({
//     name: "afterFly",
//     initialState,
//     reducers: {
//         setInitialData: (state, action) => {
//             state.initialData = action.payload;
//         },
//         updateField: (state, action) => {
//             const { field, value } = action.payload;
//             state.initialData[field] = value;
//         },
//         setOpenEdit: (state, action) => {
//             state.openEdit = action.payload ?? !state.openEdit;
//         },
//         setOpenCreate: (state, action) => {
//             state.openCreate = action.payload ?? !state.openCreate;
//         },
//         setOpenDelete: (state, action) => {
//             state.openDelete = action.payload ?? !state.openDelete;
//         },
//         setCurrentPageAfterfly: (state, action) => {
//             state.page = action.payload;
//         },
//         setPageSizeAfterfly: (state, action) => {
//             state.pageSize = action.payload;
//             state.page = 1;
//         },
//     },
// });

// export const {
//     setInitialData,
//     updateField,
//     setCurrentPageAfterfly,
//     setPageSizeAfterfly,
//     setOpenEdit,
//     setOpenCreate,
//     setOpenDelete,
// } = afterFlySlice.actions;

// export default afterFlySlice.reducer;
