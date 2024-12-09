"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ShopPage: React.FC = () => {
  // Example product data for the images
  const desktopProducts = [
    { id: 1, title: 'Product 1', quantity: 10, image: '/shopicons/cd1.png' },
    { id: 2, title: 'Product 2', quantity: 5, image: '/shopicons/cd2.png' },
    { id: 3, title: 'Product 3', quantity: 12, image: '/shopicons/cd3.png' },
    { id: 4, title: 'Product 4', quantity: 7, image: '/shopicons/cd4.png' },
    { id: 5, title: 'Product 5', quantity: 20, image: '/shopicons/cd5.png' },
  ];

  const mobileProducts = [
    { id: 1, title: 'Product 1', quantity: 10, image: '/shopicons/col-1.png' },
    { id: 2, title: 'Product 2', quantity: 5, image: '/shopicons/col-2.png' },
    { id: 3, title: 'Product 3', quantity: 12, image: '/shopicons/col-3.png' },
    { id: 4, title: 'Product 4', quantity: 7, image: '/shopicons/col-4.png' },
    { id: 5, title: 'Product 5', quantity: 20, image: '/shopicons/col-5.png' },
  ];

  // State to store products based on screen size
  const [products, setProducts] = useState(desktopProducts);

  useEffect(() => {
    // Function to handle resizing
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setProducts(mobileProducts);
      } else {
        setProducts(desktopProducts);
      }
    };

    // Call handleResize on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="shop-page">
       

      {/* Shop Section */}
      <section className=" bg-slate-100 pb-14">
        {/* Top Section with Title and Home Link */}
        <div className="flex justify-between py-4  items-center mb-6">
          <h2 className="text-2xl ml-24 font-extrabold">Shop</h2>
          <Link href="/" className="text-black-650 mr-4 text-lg font-bold">
            Home &gt; <span className="text-gray-500">Shop</span>
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:px-40 sm:mr-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {products.map((product) => (
            <div
              className="inline-flex justify-center items-center p-4" // Removed the border class here
              key={product.id}
            >
              <Image
                src={product.image}
                alt={product.title}
                width={300}  // Increased the width of the image
                height={330} // Increased the height of the image
                className="block"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
