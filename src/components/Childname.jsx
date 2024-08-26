import React, { useContext } from 'react';
import {UserContext} from '../context/Context.jsx';
import { Link } from 'react-router-dom';
 
export default function Childname(){

    const {users} = useContext(UserContext);
    return (
        <div className=' w-full'>
            <h1 className='text-xl mb-4'>Child List</h1>
            <div className='p-2 text-sm flex flex-col gap-4 w-1/4'>
                {users.map((items)=>{
                    return <Link key={`${items.id}`} to={`/users/${items.id}`} className='bg-yellow-200 p-2'>{items.userName + ` in ` + items.city}</Link>
                })}
            </div>
        </div>
    )
}