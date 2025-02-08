
// "use client";
// import React, { useState } from "react";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import Image from "next/image";
// import Link from "next/link";
// import { useCart } from "@/context/CartContext";

// const ShoppingCart = () => {
//   const { cart, removeFromCart } = useCart();
//   const [isCartVisible, setIsCartVisible] = useState(false);

//   return (
//     <div className="relative">
//       <button
//         onClick={() => setIsCartVisible(!isCartVisible)}
//         className="text-black p-2 hover:bg-gray-200 rounded"
//         aria-label="Toggle Shopping Cart"
//       >
//         <AiOutlineShoppingCart size={23} />
//       </button>

//       <div
//         className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 ${
//           isCartVisible ? "translate-x-0" : "translate-x-full"
//         } sm:w-[400px] md:w-[450px] lg:w-[500px]`}
//       >
//         <div className="p-4 overflow-y-auto h-full flex flex-col justify-between">
//           <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
//           <hr />

//           {/* Cart Items */}
//           <div className="space-y-4">
//             {cart.length === 0 ? (
//               <p className="text-center text-gray-500">Your cart is empty.</p>
//             ) : (
//               cart.map((item) => (
//                 <div key={item.id} className="flex justify-between items-center">
//                   <div className="flex">
//                     <Image
//                       src={item.image}
//                       height={80}
//                       width={80}
//                       alt={item.name}
//                       className="object-cover"
//                     />
//                     <div className="ml-4">
//                       <h3 className="font-medium">{item.name}</h3>
//                       <p className="text-yellow-600">Rs. {item.price}</p>
//                     </div>
//                   </div>
//                   <button
//                     className="bg-red-500 text-white px-2 py-1 rounded"
//                     onClick={() => removeFromCart(item.id)}
//                   >
//                     X
//                   </button>
//                 </div>
//               ))
//             )}
//           </div>

//           {/* Checkout Buttons */}
//           {cart.length > 0 && (
//             <div className="mt-auto">
//               <hr />
//               <div className="mt-4 flex justify-around mx-auto gap-4">
//                 <Link href="/viewcart">
//                   <button className="rounded-full bg-black text-white px-8 py-2">View Cart</button>
//                 </Link>
//                 <Link href="/checkout">
//                   <button className="rounded-full bg-black text-white px-8 py-2">Checkout</button>
//                 </Link>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShoppingCart;

"use client";

import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

function ShoppingCart() {
  const { cart, removeFromCart } = useCart();
  const [isCartVisible, setIsCartVisible] = useState(false);

  return (
    <div className="relative">
      {/* Cart Icon */}
      <button
        onClick={() => setIsCartVisible(!isCartVisible)}
        className="text-black p-2 hover:bg-gray-200 rounded"
        aria-label="Toggle Shopping Cart"
      >
        <AiOutlineShoppingCart size={23} />
      </button>

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 ${
          isCartVisible ? "translate-x-0" : "translate-x-full"
        } sm:w-[400px] md:w-[450px] lg:w-[500px]`}
      >
        <div className="p-4 overflow-y-auto h-full flex flex-col justify-between">
          <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
          <hr />

          {/* Cart Items */}
          {cart.length === 0 ? (
            <p className="text-center text-gray-600 mt-4">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center my-4">
                <div className="flex">
                  <Image src={item.image} height={80} width={80} alt={item.name} className="object-cover" />
                  <div className="ml-4">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-yellow-600">Rs. {item.price}</p>
                  </div>
                </div>
                <button
                  className="bg-gray-500 h-[30px] w-[30px] text-white rounded-full flex justify-center items-center cursor-pointer"
                  onClick={() => removeFromCart(item.id)}
                >
                  x
                </button>
              </div>
            ))
          )}

          {/* Checkout Section */}
          <hr />
          <div className="mt-4 flex justify-around mx-auto gap-4">
            <button className="rounded-full text-black bg-white hover:bg-gray-800 px-8 py-2 border border-black">
              View Cart
            </button>
            <button className="rounded-full text-black bg-white hover:bg-gray-800 px-8 py-2 border border-black">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
