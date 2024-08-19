import React from 'react';
import Card from './Card';
export default function Cards({users, removeCard}){

    return (
        <div className='w-full max-h-80 p-4 flex overflow-auto flex-wrap justify-center gap-8'>
            {users.map((items, index)=>{
                return <Card id={index} removeCard={removeCard} key={index} users={items}/>
            })}
        </div>
    )
}