import React, {useState} from 'react';

export default function Song({data, click, index}){
    const {image, songName, artist, added} = data;
    return (
        <div className='relative w-72 bg-zinc-50 mt-4 p-4 rounded-md flex gap-5'>
            <div className='w-24 h-24 bg-orange-600 rounded-full overflow-hidden'>
                <img src={image} alt="" />
            </div>
            <div className='w-[50%]'>
                <h3 className='text-lg leading-none font-semibold mb-1.5'>{songName}</h3>
                <h6 className='text-xs'>{artist}</h6>
            </div>
            <button onClick={()=>click(index)} type='button' className={`px-3 py-2 ${added? "bg-gray-500" : "bg-orange-600"} text-white text-sm rounded-md absolute bottom-0 left-1/2 translate-x-[-10%] translate-y-[50%]`}>{added? "Favourite": "Add to Favourites"}</button>
        </div>
    )
}