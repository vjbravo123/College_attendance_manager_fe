import {configureStore} from '@reduxjs/toolkit';
import collegeReducer from "./CollegeSlice.js"
const store = configureStore({
    reducer : collegeReducer
})

export default store;