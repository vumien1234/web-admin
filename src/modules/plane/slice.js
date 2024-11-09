import { createAsyncThunk, createSlice } from "../../components/custom/Toolkit";
import axios from "axios";

const initialState = {
  page: 1,
  pageSize: 10,
  listPlane: [],
};

export const getListPlaneAsync = createAsyncThunk(
  "plane/getListPlane",
  async (param) => {
    try {
      const response = await axios.get("https://randomuser.me/api", {
        params: param,
      });
      return response.data.results; 
    } catch (error) {
      console.error("Error fetching data: ", error);
      throw error;
    }
  }
);

export const planeSlice = createSlice({
  name: "plane",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.page = action.payload;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getListPlaneAsync.pending, (state) => {
        state.listPlane = null;
      })
      .addCase(getListPlaneAsync.fulfilled, (state, action) => {
        state.listPlane = action.payload;
      })
      .addCase(getListPlaneAsync.rejected, (state) => {
        state.listPlane = null; 
      });
      
  },
});

export const { setCurrentPage, setPageSize } = planeSlice.actions;

export default planeSlice.reducer;
