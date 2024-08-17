import React, {useState} from "react";

export default function NewCard({name, image, description, friendsStatus, handleClick, index}){
    return (
        <div className='h-64 rounded-md w-52 bg-gray-200 overflow-hidden'>
            <div className='w-[80%] h-[65%] flex justify-center'>
                <img className='ml-11 h-full w-full object-cover rounded-full' src={image} alt="" />
            </div>
            <div className='flex flex-col justify-start gap-1.5 px-2 py-2 w-full h-[40%] '>
                <h3 className='text-lg font-semibold leading-none'>{name}</h3>
                <p className='text-xs font-normal'>{description}</p>
                <button onClick={()=>handleClick(index)} type='button' className={`px-3 py-1 ${friendsStatus? "bg-gray-400" : "bg-blue-500"} text-white text-sm font-bold rounded-md`}>{friendsStatus? "Request Sent" : "Add Friend"}</button>
            </div>
        </div>
    )
}