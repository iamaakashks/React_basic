import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Show(){
    const [products, setProducts] = useState([]);
    const getProducts = ()=>{
        const api = "https://api.escuelajs.co/api/v1/products";

        axios
        .get(api)
        .then((products)=> {
        setProducts(products.data);
        })
        .catch((err)=> console.log(err));
    }
    useEffect(()=>{
        getProducts()
    }, []);
    return (
        <>
        
        {products.length > 0 ? products.map((elem, index)=>
            <div key={index} className='h-52 bg-yellow-100 rounded-md m-4 px-2 py-1 text-gray-600 '>
              {
                <div>
                  <h1 className='mb-6 text-sm'>{elem.title}</h1>
                  <div className='flex justify-between gap-2'>
                    <img className='h-32 w-32 rounded-full' src={elem.images[0]} alt="" />
                    <p className='text-sm'>{elem.description}</p>
                  </div>
                </div>
              }
            </div>
          ) : <h1>Loading...</h1>}
        </>
    )
}