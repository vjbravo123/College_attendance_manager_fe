import { createSlice } from "@reduxjs/toolkit";

const collegeSlice = createSlice({
    name:"college",
    initialState:{subject:'' , data : [] , roll_no:null},
    reducers:{
        setSubject : (state , action)=>{
            state.subject=action.payload
        },
        setData : (state , action )=>{
            state.data=action.payload
        },
        set_roll_no : (state , action)=>{
            state.roll_no=action.payload
        }
    }
})

export const {setSubject ,setData , set_roll_no} = collegeSlice.actions;

export default collegeSlice.reducer;