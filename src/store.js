import { configureStore } from "@reduxjs/toolkit";
import accountReducer from './modules/account-management/slices'
import courseReducer from './modules/course/slice'
import supportReducer from './modules/support/slices'

const store = configureStore({
    reducer: {
        accountUser: accountReducer,
        course: courseReducer,
        support:supportReducer
    },
});
export default store;
