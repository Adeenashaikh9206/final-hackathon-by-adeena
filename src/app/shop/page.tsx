
// "use client";

// import { useState, useEffect } from "react";
// import { client } from "@/sanity/lib/client";
// import Header from "../components/header";
// import Image from "next/image";
// import Link from "next/link";
// import ProductGrid from "../components/ProductGrid";
// import SearchAndFilter from "../components/SearchAndFilter"; // Import SearchAndFilter
// import Field from "../components/Feild";

// interface Product {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
// }

// // Fetch products from Sanity (Server-side)
// async function fetchProducts(): Promise<Product[]> {
//   const query = `*[_type == "product"]{
//     "id": _id,
//     name,
//     price,
//     "image": image.asset._ref
//   }`;
//   return await client.fetch(query);
// }

// const Shop = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const loadProducts = async () => {
//       const data = await fetchProducts();
//       setProducts(data);
//       setFilteredProducts(data); // Initialize with all products
//     };
//     loadProducts();
//   }, []);

//   return (
//     <div>
//       <div className="bg-[#faf4f4]">
//         <Header />
//       </div>
//       <div className="relative text-black">
//         <Image
//           src="/shop.jpeg"
//           alt="Shop Banner"
//           height={400}
//           width={1600}
//           className="w-full h-40 md:h-auto object-cover"
//         />
//         <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl sm:text-2xl md:text-5xl font-semibold">
//           Shop
//         </h1>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
//           <p className="text-gray-700 text-xs sm:text-sm md:text-lg flex items-center">
//             <Link href="/" className="font-bold hover:underline">Home</Link>
//             <span className="font-bold mx-2">{'>'}</span>
//             <Link href="/shop" className="hover:underline">Shop</Link>
//           </p>
//         </div>
//       </div>

//       {/* Search and Filter Component */}
//       <div className="container mx-auto px-4 sm:px-6 md:px-8">
//         <SearchAndFilter products={products} onFilter={setFilteredProducts} />
//       </div>

//       {/* Display Filtered Products */}
//       <div className="container mx-auto px-4 sm:px-6 md:px-8">
//         <ProductGrid products={filteredProducts} />
//       </div>

//       <Field />
//     </div>
//   );
// };

// export default Shop;
"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Header from "../components/header";
import Image from "next/image";
import Link from "next/link";
import ProductGrid from "../components/ProductGrid";
import SearchAndFilter from "../components/SearchAndFilter"; // Import SearchAndFilter
import Field from "../components/Feild";

// Define the Product interface based on your data
interface Product {
  id: string;
  name: string;
  price: number;
  image: string; // Assuming this is the URL or reference
}

// Fetch products from Sanity (Server-side)
async function fetchProducts(): Promise<Product[]> {
  const query = `*[_type == "product"]{
    "id": _id,
    name,
    price,
    "image": image.asset->url  // Updated to correctly access the image URL
  }`;
  return await client.fetch(query);
}

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setFilteredProducts(data); // Initialize with all products
    };
    loadProducts();
  }, []);

  return (
    <div>
      <div className="bg-[#faf4f4]">
        <Header />
      </div>
      <div className="relative text-black">
        <Image
          src="/shop.jpeg"
          alt="Shop Banner"
          height={400}
          width={1600}
          className="w-full h-40 md:h-auto object-cover"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl sm:text-2xl md:text-5xl font-semibold">
          Shop
        </h1>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
          <p className="text-gray-700 text-xs sm:text-sm md:text-lg flex items-center">
            <Link href="/" className="font-bold hover:underline">Home</Link>
            <span className="font-bold mx-2">{'>'}</span>
            <Link href="/shop" className="hover:underline">Shop</Link>
          </p>
        </div>
      </div>

      {/* Search and Filter Component */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <SearchAndFilter products={products} onFilter={setFilteredProducts} />
      </div>

      {/* Display Filtered Products */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <ProductGrid products={filteredProducts} />
      </div>

      <Field />
    </div>
  );
};

export default Shop;
