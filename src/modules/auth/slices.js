import {createAsyncThunk, createSlice} from '../../components/custom/Toolkit';
import { login } from './api';

export const loginAsync = createAsyncThunk(
    "auth/login",
    async (params) => {
        const response = await login(params);
        return response.data;
    }
);


const initialState = {
    status:false,
    isAuthenticated: false,
}

export const authSlice = createSlice({
    name:'auths',
    initialState,
    reducers:{
        cleanup:(state) => {
            state.status = false;
            state.isAuthenticated = false;
            localStorage.clear();
        },
        
    },
    extraReducers:(builder) => {
        builder
            .addCase(loginAsync.pending,(state)=>{
                state.status = true;
            })
            .addCase(loginAsync.fulfilled,(state,action)=>{
                const {token,refreshToken} = action?.payload;
                localStorage.setItem("token", token);
                localStorage.setItem("refreshToken", refreshToken);
                state.status = false; 
                state.isAuthenticated = true;
            })
            .addCase(loginAsync.rejected,()=>{})

    }
})

export const {cleanup} = authSlice.actions;
export default authSlice.reducer;