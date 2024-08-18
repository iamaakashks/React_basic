import React, {useState} from 'react';

export default function Navigation({data}){
    const {added} = data;
    return (
        <div className='w-full px-20 py-4 flex flex-row justify-between bg-zinc-400'>
            <h3>Orange</h3>
            <div className='flex gap-2 p-2 bg-orange-600 text-sm text-white rounded-md'>
                <h3>Favourites </h3>
                <h4>{data.filter((items) => {
                        return items.added
                    }).length}</h4>
            </div>
        </div>
    )
}