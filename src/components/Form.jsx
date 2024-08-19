import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form({handleFormSubmitData}){
    const {register, handleSubmit, reset} = useForm();
    return (
        <div className='mt-10 flex justify-center'>
            <form className='flex gap-4' onSubmit={handleSubmit((data) =>{
                handleFormSubmitData(data);
                reset();
            })}>
                <input {...register('name')} className='outline-none rounded-sm border-none px-2 py-1 text-base' type='text' placeholder='name' />
                <input {...register('email')} className='outline-none rounded-sm border-none px-2 py-1 text-base' type='email' placeholder='email' />
                <input {...register('image')} className='outline-none rounded-sm border-none px-2 py-1 text-base' type='text' placeholder='image url' />
                <input className='rounded-md px-5 py-2 bg-blue-500 text-white' type='submit' value='Add Card' />
            </form>
        </div>
    )
}