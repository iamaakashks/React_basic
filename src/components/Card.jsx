import React from "react";
function Card(){

    const data = [
        {image: "https://images.unsplash.com/photo-1512469082103-409afe900e9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D" , name: "Meera Ratia", description:"Lorem ipsum dolor sit amet."},
        {image: "https://plus.unsplash.com/premium_photo-1664882424626-f2f4cb557527?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D", name:"Ipsita Raina", description:"Lorem ipsum dolor sit amet consectetur."},
        {image: "https://images.unsplash.com/photo-1617632679997-4382a0f0ff78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D", name: "Rubina Sasse", description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."}
    ]

    return (
        <div className="w-full h-screen flex py-[2.5%] justify-center gap-8 bg-zinc-400">
            {data.map((elem, index)=>(
                <div key={index} className='w-52 rounded-md overflow-hidden'>
                    <div className='w-52 h-32 bg-zinc-200 '>
                        <img className='w-full h-full object-cover' src={elem.image} alt="" />
                    </div>
                    <div className='rounded-md rounded-t-none text w-full h-1/6 px-3 py-4 font-["open_sans"] bg-yellow-200'>
                        <h2 className='font-black'>{elem.name}</h2>
                        <p className='text-xs mt-2'>{elem.description}</p>
                    </div>
                </div>
            ))}
            
        </div>
        
    )
}
export default Card;