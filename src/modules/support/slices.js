
// import { createAsyncThunk, createSlice } from "../../components/custom/Toolkit"
// import { createUser, getUser } from "./api"

// const defaultFormSearch= {
//     keyword: "",
//     type: false
// };

// const initialState = {
//     listUser: [],
//     page: 1,
//     pageSize: 10,
//     openCreate :false,
//     initialData: {
//         id: null,
//         userId: '',
//         title: '',
//         body: ''
//     },
//     formSearchUser: defaultFormSearch
// }

// export const getListUserAsync = createAsyncThunk(
//     'getListUser',
//     async (param) => {
//         const response = await getUser(param)
//         return response.data;
//     }
// )


// export const createUserAsync = createAsyncThunk(
//     'createUser',
//     async (param) => {
//         const response = await createUser(param)
//         return response.data;
//     }
// )




// const userSlices = createSlice({
//     name: 'user',
//     initialState: initialState,
//     reducers: {
//         setCurrentPage: (state, action) => {
//             state.page = action.payload;
//         },
//         setPageSize: (state, action) => {
//             state.pageSize = action.payload;
//             state.page = 1;
//         },
//         setSearchKeyword: (state, action) => {
//             state.formSearchUser.keyword = action.payload;
//         },
//         setValueSearchUser: (state, action) => {
//             state.formSearchUser = action.payload || defaultFormSearch;
//         },
//         setInitialData: (state, action) => {
//             state.initialData = action.payload;
//         },
//         setOpenCreate: (state, action) => {
//             state.openCreate = action.payload ?? !state.openCreate;
//         },
        
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(getListUserAsync.pending, () => {})
//             .addCase(getListUserAsync.fulfilled, (state, action) => {
//                 state.listUser = action.payload;
//             })
//             .addCase(getListUserAsync.rejected, () => {})
//             .addCase(createUserAsync.pending, () => {})
//             .addCase(createUserAsync.fulfilled, (state, action) => {
//                 state.listUser = [...state.listUser, action.payload];
//                 state.openCreate = false;
//             })
//             .addCase(createUserAsync.rejected, () => {});
//     }
// })

// export const { setCurrentPage,setOpenCreate,setPageSize, setInitialData,setSearchKeyword ,setValueSearchUser} = userSlices.actions;
// export default userSlices.reducer;
