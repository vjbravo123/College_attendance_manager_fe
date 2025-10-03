import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import StudentLogin from './Components/StudentLogin.jsx'
import TeacherLogin from './Components/TeacherLogin.jsx'
import TeacherDashboard from './Components/TeacherDashboard.jsx'
import Attendance from './Components/Attendance.jsx'
import StudentQueries from './Components/StudentQueries.jsx'
import CheckAttendance from './Components/CheckAttendance.jsx'
import store from './Store/Store.js'
import {Provider} from 'react-redux';
import StudentDashboard from './Components/StudentDashboard.jsx'
import SubjectAttendance from './Components/SubjectAttendance.jsx'
import TeacherWelcome from './Components/TeacherPage.jsx'
import StudentWelcome from './Components/StudentPage.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/Studentslogin',
    element:<StudentLogin/>
  }
  ,
  {
    path:'/Teacherlogin',
    element:<TeacherLogin/>
  },
  {
    path:'/TeacherWelcome',
    element:<TeacherWelcome/>
  },
  {
    path:'/StudentWelcome',
    element:<StudentWelcome/>
  },
  {
    path:'/TeacherDashboard',
    element:<TeacherDashboard/>
  },
  {
    path:'/Attendance',
    element:<Attendance/>
  },
  {
    path:'/queries',
    element:<StudentQueries/>
  }
  ,
  {
    path:'/checkAttendance',
    element:<CheckAttendance/>
  },
  {
    path:'/StudentDashboard',
    element:<StudentDashboard/>
  },
  {
    path:'/subjectAttendance/:subject',
    element:<SubjectAttendance/>
  }
])

createRoot(document.getElementById('root')).render(

<Provider store={store}>
  <RouterProvider router={router}/>
</Provider>
 
)
