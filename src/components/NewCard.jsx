import React from 'react';

function NewCard(chacha){
    return (
        <div className='p-4'>
            <button type='button' className={`px-4 py-1 text-sm text-white ${chacha.color} rounded-full`}>{chacha.name}</button>
        </div>
    )
}
export default NewCard;