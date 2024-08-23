import React , {useState} from 'react';

export default function About(){
    return (
        <div className='bg-yellow-100 w-3/4 m-auto h-screen py-20 px-2'>
            <h1 className='text-2xl underline'>About</h1>
            <p className='mt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, autem?</p>
            <button className='mt-2 px-5 py-2 bg-blue-300 text-base'>Explore</button>
        </div>
    )
}