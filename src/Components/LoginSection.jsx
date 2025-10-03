import React from 'react'

const LoginSection = ({heading , para1 ,para2, role }) => {
  return (
    <div className={`h-80 flex flex-col ${role==='student'? "bg-[#007BBF]" : ""} justify-center items-center`}>
        <h1 className={`${role==="student" ? "text-white" : ""} text-5xl font-bold mb-5`}>{heading}</h1>
        <p className={`${role==="student" ? "text-white" : ""} text-center font-extralight mb-5 mt-5`} style={{fontFamily:'Montserrat',fontSize:'18px'}}>{para1} <br /> {para2}</p>
        <button className={`${role ==='student' ? "bg-white":"bg-[#007BBF] text-white"} border-1 rounded-sm py-[12px] px-[24px]`}>Login to Dashboard</button>
    </div>
  )
}

export default LoginSection