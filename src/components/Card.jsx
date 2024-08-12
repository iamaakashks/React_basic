import React from "react";
function Card(){
    return (
        <div className="w-full h-screen bg-zinc-400">
            <div className='w-52 absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] rounded-md overflow-hidden'>
                <div className='w-52 h-32 bg-zinc-200 '>
                    <img className='w-full h-full object-cover' src="https://plus.unsplash.com/premium_photo-1708110921398-1fc68e98eacc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWxzfGVufDB8fDB8fHww" alt="" />
                </div>
                <div className='text w-full px-3 py-4 font-["open_sans"] bg-yellow-200'>
                    <h2 className='font-black'>Ipsita Rhea</h2>
                    <p className='text-xs mt-2'>Lorem ipsum dolor sit amet.</p>
                </div>
                
            </div>
        </div>
    )
}
export default Card;