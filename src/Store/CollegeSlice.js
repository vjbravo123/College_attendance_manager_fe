import { createSlice } from "@reduxjs/toolkit";

const collegeSlice = createSlice({
    name:"college",
    initialState:{subject:'' , data : [] , roll_no:null , attendance:[] , queryStudentid:null},
    reducers:{
        setSubject : (state , action)=>{
            state.subject=action.payload
        },
        setData : (state , action )=>{
            state.data=action.payload
        },
        set_roll_no : (state , action)=>{
            state.roll_no=action.payload
        },
        setAttendance : (state , action )=>{
            state.attendance = action.payload
        },
        setQueryStudentID : (state , action)=>{
            state.queryStudentid = action.payload;
        }
    }
})

export const {setSubject ,setData , set_roll_no ,setAttendance ,setQueryStudentID} = collegeSlice.actions;

export default collegeSlice.reducer;