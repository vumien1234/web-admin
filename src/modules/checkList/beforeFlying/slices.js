import { createSlice } from "@reduxjs/toolkit";

const initialState={
    initialData: {
        id: null,
        time: '',
        user_id: null,
        created_at: '',
        updated_at: '',
        flight_check_id: null,
    },
    openEdit: false,
    openCreate: false,
    openDelete: false,
    page: 1,
    pageSize: 10,
}

const beforeFlySlice = createSlice({
    name:'beforeFly',
    initialState:initialState,
    reducers:{
        setInitialData: (state, action) => {
            state.initialData = action.payload;
        },
        setOpenEdit: (state, action) => {
            state.openEdit = action.payload ?? !state.openEdit;
        },
        setOpenCreate: (state, action) => {
        state.openCreate = action.payload ?? !state.openCreate;
        },
        setOpenDelete: (state, action) => {
        state.openDelete = action.payload ?? !state.openDelete;
        },
        setCurrentPageBeforefly: (state, action) => {
        state.page = action.payload;
        },
        setPageSizeBeforefly: (state, action) => {
        state.pageSize = action.payload;
        state.page = 1;
        },
    }
})
export const {
    setCurrentPageBeforefly,
    setPageSizeBeforefly,
    setOpenEdit,
    setOpenCreate,
    setOpenDelete,
    setInitialData,
} = beforeFlySlice.actions;
export default beforeFlySlice.reducer;