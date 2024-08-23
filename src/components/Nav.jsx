import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Nav(){
    return (
        <nav className='flex p-6 space-x-24 w-full justify-center bg-slate-100 fixed top-0'>
            <NavLink style={(elem)=>{
                if(elem.isActive){
                   return { color: "#FCA5A5", fontWeight: "bold"};
                }
            }} to='/'>Home</NavLink>

            <NavLink className={(elem)=>{
                if(elem.isActive){
                    return "text-red-300 font-bold";
                }
            }} to='/about'>About</NavLink>

            <NavLink style={(elem)=>{
                if(elem.isActive){
                   return { color: "tomato"};
                }
            }} to='/contact'>Contact</NavLink>
        </nav>
    )
}