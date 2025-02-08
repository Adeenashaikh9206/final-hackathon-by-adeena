
// "use client";
// import React from "react";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import Link from "next/link";
// import { useCart } from "@/context/CartContext";

// interface Product {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
// }

// const ProductListing = ({ product }: { product: Product }) => {
//   const { addToCart } = useCart();

//   return (
//     <div className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 p-4">
//       <Link href={`/Product/${product.id}`}>
//         {product.image && (
//           <Image
//             src={urlFor(product.image).url()}
//             alt={product.name}
//             height={300}
//             width={300}
//             className="h-[250px] w-full object-cover"
//           />
//         )}
//       </Link>
//       <div className="text-center mt-4">
//         <p className="text-lg font-medium text-gray-800">{product.name}</p>
//         <h3 className="text-xl font-semibold text-gray-900 mt-2">Rs. {product.price}</h3>
//         <button
//           className="mt-4 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800"
//           onClick={() => addToCart(product)}
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductListing;


"use client";

import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

// Product Interface
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

const ProductListing = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <Link href={`/Product/${product.id}`}>
        {product.image && (
          <Image
            src={urlFor(product.image).url()}
            alt={product.name}
            height={300}
            width={300}
            className="h-[250px] w-full object-cover"
          />
        )}
      </Link>
      <div className="p-4 text-center">
        <p className="text-lg font-medium text-gray-800">{product.name}</p>
        <h3 className="text-xl font-semibold text-gray-900 mt-2">${product.price}</h3>
        
        {/* Add to Cart Button */}
        <button
          className="mt-4 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductListing;
