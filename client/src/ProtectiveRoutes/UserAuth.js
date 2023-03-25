
import React from 'react'
import { json, Navigate, Outlet } from 'react-router-dom'

const UserAuth=()=>
{
// const admin=localStorage.getItem('AdminToken');
const admin=true


console.log("token auth..",admin)

return admin?<Outlet/>:<Navigate to='/Login'/>

}

export default UserAuth


