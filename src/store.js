import { configureStore } from "@reduxjs/toolkit";
// import PlaneReducer from "./modules/overview/slice";
// import globalReducer from "./components/global/slices";
// import afterFlyingReducer from "./modules/checkList/afterFlying/slices";
// import authReducer from "./modules/auth/slices";
// import beforeReducer from "./modules/checkList/beforeFlying/slices";
// import userReducer from "./modules/user/slices";

const store = configureStore({
    reducer: {
        // overview: PlaneReducer,
        // global: globalReducer,
        // afterFly: afterFlyingReducer,
        // auth: authReducer,
        // beforeFly: beforeReducer,
        // user: userReducer,
    },
});
export default store;
