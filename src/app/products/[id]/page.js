// "use client"
// import React from 'react'
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// export default async function DynamicId({params: {id}}) {
//   const [cartItems, setCartItems] = useState([]);
//   const addToCart = (product) => {
//     setCartItems([...cartItems, product]);
//   };
  
//       const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//       const data = await response.json();
     

// console.log("data",data)
//   return (
//     <div class=" lg:m-20 mt-20">
//          <div
//                 class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
//                 <div
//                   class="shrink-1  mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-4/12 xl:w-6/12">
//                                  <Image src={data.image} alt={data.title} width={500} height={500} class="w-full h-96 rounded-lg " />

//                 </div>
          
                
//                 <div class="mb-12  lg:p-12 p-4 rounded-lg md:mb-0 md:w-8/12 lg:w-7/12 xl:w-5/12">
//                 <div class="px-4 py-2 mt-2">
//                 {/* <h1 class="font-bold text-2xl uppercase py-2"  >Type : {data.type} </h1> */}
//                     <h1 class=" pb-2 mr-1 text-xl text-center">
//                    Title : {data.title}
//                     </h1>
                 
//                     <p class=" pb-2 mr-1">
//                    Price : {data.price}
//                     </p>
//                     <p class=" pb-2 mr-1">
//                    Category : {data.category}
//                     </p>
//                     <p class=" pb-2 mr-1">
//                    Rate : {data.rating.rate}
//                     </p>
//                     <p class=" pb-2 mr-1">
//                    Count : {data.rating.count}
//                     </p>
//                   <p class=" pb-2 mr-1">
//                    Description : {data.description}
//                     </p>
//             </div>
//             <button
//   onClick={() => addToCart(curElem)}
//   className="bg-[#c60000] text-white px-4 py-2 rounded-lg my-2 mx-4"
// >
//   Add to Cart
// </button>

//                 </div>
//               </div>
            
//     </div>
//   )
// }

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';

// export default function DynamicId({ params: { id } }) {
//   const [cartItems, setCartItems] = useState([]);
  
//   const addToCart = (product) => {
//     setCartItems([...cartItems, product]);
//   };

//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//       const data = await response.json();
//       setData(data);
//     };

//     fetchData();
//   }, [id]);

//   if (!data) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="lg:m-20 mt-20">
//       <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
//         <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-4/12 xl:w-6/12">
//           <Image src={data.image} alt={data.title} width={500} height={500} className="w-full h-96 rounded-lg" />
//         </div>

//         <div className="mb-12 lg:p-12 p-4 rounded-lg md:mb-0 md:w-8/12 lg:w-7/12 xl:w-5/12">
//           <div className="px-4 py-2 mt-2">
//             <h1 className="pb-2 mr-1 text-xl text-center">
//               Title : {data.title}
//             </h1>

//             <p className="pb-2 mr-1">
//               Price : {data.price}
//             </p>
//             <p className="pb-2 mr-1">
//               Category : {data.category}
//             </p>
//             <p className="pb-2 mr-1">
//               Rate : {data.rating.rate}
//             </p>
//             <p className="pb-2 mr-1">
//               Count : {data.rating.count}
//             </p>
//             <p className="pb-2 mr-1">
//               Description : {data.description}
//             </p>
//           </div>
//           <button
//             onClick={() => addToCart(data)}
//             className="bg-[#c60000] text-white px-4 py-2 rounded-lg my-2 mx-4"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client"
import React, { useEffect, useState } from 'react';
import { useCart } from '../../../context/cartContext';
import Image from 'next/image';

export default function DynamicId({ params: { id } }) {
  const { addToCart,cartItems } = useCart();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, [id]);

  if (!data) {
    return <p>Loading...</p>;
  }
  console.log('Cart Items:', cartItems);

  return (
    
    <div className="lg:m-20 mt-20">
      <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
        <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-4/12 xl:w-6/12">
          <Image src={data.image} alt={data.title} width={500} height={500} className="w-full h-96 rounded-lg" />
        </div>

        <div className="mb-12 lg:p-12 p-4 rounded-lg md:mb-0 md:w-8/12 lg:w-7/12 xl:w-5/12">
          <div className="px-4 py-2 mt-2">
            <h1 className="pb-2 mr-1 text-xl text-center">
              Title : {data.title}
            </h1>

            <p className="pb-2 mr-1">
              Price : {data.price}
            </p>
            <p className="pb-2 mr-1">
              Category : {data.category}
            </p>
            <p className="pb-2 mr-1">
              Rate : {data.rating.rate}
            </p>
            <p className="pb-2 mr-1">
              Count : {data.rating.count}
            </p>
            <p className="pb-2 mr-1">
              Description : {data.description}
            </p>
          </div>
          <button
            onClick={() => addToCart(data)}
            className="bg-[#c60000] text-white px-4 py-2 rounded-lg my-2 mx-4"
          >
            Add to Cart
          </button>
    </div>
    </div>
    </div>
  );
}

