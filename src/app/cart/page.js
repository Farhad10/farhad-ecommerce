// "// pages/cart.js
// "use client"
// import { useState, useEffect } from 'react';

// export default function Cart() {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const response = await fetch('https://fakestoreapi.com/carts');
//         const data = await response.json();
//         setCartItems(data[0].products); // Assuming the API structure has an array of products in the first cart
//       } catch (error) {
//         console.error('Error fetching cart items:', error);
//       }
//     };

//     fetchCartItems();
//   }, []);
// console.log(cartItems)
//   return (
//     <div>
//       <h1>Cart Page</h1>
//       <ul>
//         {cartItems.map((item, index) => (
//           <li key={index}>
//             <p>Title: {item.title}</p>
//             <p>Price: ${item.price}</p>
//             {/* Other item details */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
"use client"
import React from 'react';
import { useCart } from '../../context/cartContext';

const CartPage = () => {
  const { cartItems } = useCart();

  return (
    <div className='mt-20'>
      <h1>Cart Page</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              Product: {item.title}, Price: {item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
