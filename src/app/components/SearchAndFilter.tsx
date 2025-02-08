"use client";

import { useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface SearchAndFilterProps {
  products: Product[];
  onFilter: (filteredProducts: Product[]) => void;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({ products, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    applyFilters(e.target.value, minPrice, maxPrice);
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(e.target.value);
    applyFilters(searchTerm, e.target.value, maxPrice);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(e.target.value);
    applyFilters(searchTerm, minPrice, e.target.value);
  };

  const applyFilters = (search: string, min: string, max: string) => {
    let filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    if (min) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= parseFloat(min)
      );
    }

    if (max) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= parseFloat(max)
      );
    }

    onFilter(filteredProducts);
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
        className="p-2 border rounded w-full md:w-1/3"
      />
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={handleMinPriceChange}
        className="p-2 border rounded w-full md:w-1/6"
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={handleMaxPriceChange}
        className="p-2 border rounded w-full md:w-1/6"
      />
    </div>
  );
};

export default SearchAndFilter;

