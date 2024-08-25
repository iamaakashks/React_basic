import React, { useEffect } from 'react';

export default function Services(){
    useEffect(()=>{
        console.log("Service component is created");
        return ()=>{
            console.log("Service component is deleted");
        }
    })
    return (
        <>
            <div>Services</div>
        </>
    )
}