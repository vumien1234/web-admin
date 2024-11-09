import {
    createAsyncThunk as _createAsyncThunk,
    configureStore,
    createSlice,
} from "@reduxjs/toolkit";

import { errorHandler } from "./ErrorHandler";
import {
    toggleLoadingStatus,
    setMessageText,
    setseverity,
} from '../global/slices';

const createAsyncThunk = (name,callBack,errorCallBack) => {
    return _createAsyncThunk(name, async(payload,thunkAPI)=>{
        try {
            thunkAPI.dispatch(toggleLoadingStatus());
            const response = await callBack(payload,thunkAPI);
            thunkAPI.dispatch(toggleLoadingStatus());
            if (response?.payload?.message || response?.payload?.error) {
                thunkAPI.dispatch(
                  setMessageText(
                    response?.payload?.message || "An unexpected error has occurred."
                  )
                );
                thunkAPI.dispatch(setseverity("error"));
                localStorage.setItem("isSuccessApi", false);
            } else localStorage.setItem("isSuccessApi", true);
            return response;
        } catch (error) {
            localStorage.setItem("isSuccessApi", false);
            const errorHandlerResult = await errorHandler(error, thunkAPI);
            if (typeof errorHandlerResult === "undefined") {
                thunkAPI.dispatch(toggleLoadingStatus());
                return errorHandlerResult;
            }

            let errorResponse = errorHandlerResult?.payload;
            if (typeof errorCallBack !== "undefined") {
                if (typeof error.response === "undefined") {
                thunkAPI.dispatch(toggleLoadingStatus());
                errorResponse = await errorCallBack(error, thunkAPI);
                } else {
                errorResponse = await errorCallBack(error.response, thunkAPI);
                }
            }
            thunkAPI.dispatch(toggleLoadingStatus());
                return thunkAPI.rejectWithValue(errorResponse);
            }
        })
    }

export {createAsyncThunk ,configureStore,createSlice};
