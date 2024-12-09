import React from 'react';

interface ProductCardProps {
  image: string;
  name: string;
  subName: string;
  regularPrice: string;
  finalPrice: string;
  colors: string[]; // Array of colors represented by hex or color names
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, subName, regularPrice, finalPrice, colors, className }) => {
  return (
    <div className={`product-card flex flex-col items-center h-full ${className}`}>
      {/* Image with height range and proper scaling */}
      <img
        src={image}
        alt={name}
        className="w-full object-cover rounded-t-lg"
        style={{
          height: 'calc(100% - 75px)',
          maxHeight: '360px',
          minHeight: '180px',
          borderRadius: '0',
          objectPosition: 'top',
        }}
      />

      {/* Content Section (without border and shadow) */}
      <div className="product-info flex flex-col items-center p-4" style={{ minHeight: '75px' }}>
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-gray-600 mb-2">{subName}</p>
        <div className="flex items-center mb-2">
          <span className="line-through text-cgray mr-2">{regularPrice}</span>
          <span className="text-green-700 font-bold">{finalPrice}</span>
        </div>
        <div className="flex space-x-2">
          {colors.map((color, index) => (
            <div
              key={index}
              className="w-5 h-5 rounded-full" // Smaller circle size
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts: React.FC = () => {
  return (
    <section className="featured-products-section px-8 py-12 bg-gray-100">
      {/* Container for Centering */}
      <div className="max-w-screen-lg mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h4 className="text-lg font-bold text-gray-600">Featured Products</h4>
          <h2 className="text-3xl font-bold text-gray-900">BESTSELLER PRODUCTS</h2>
          <p className="text-gray-500 mt-2">Problems trying to resolve the conflict between</p>
        </div>

        {/* Grid Layout for Products */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Repeat ProductCard for each product */}
          <ProductCard
            image="/icons3/product5.png"
            name="Graphic Design"
            subName="English Department"
            regularPrice="$16.48"
            finalPrice="$6.4"
            colors={['#23A6F0', '#23856D', '#E77C40', '#737373']} // Custom colors
          />
          <ProductCard
            image="/icons3/product(1).png"
            name="Graphic Design"
            subName="English Department"
            regularPrice="$16.48"
            finalPrice="$6.4"
            colors={['#23A6F0', '#23856D', '#E77C40', '#737373']} // Custom colors
          />
          <ProductCard
            image="/icons3/product(2).png"
            name="Graphic Design"
            subName="English Department"
            regularPrice="$16.48"
            finalPrice="$6.4"
            colors={['#23A6F0', '#23856D', '#E77C40', '#737373']} // Custom colors
          />
          <ProductCard
            image="/icons3/product(3).png"
            name="Graphic Design"
            subName="English Department"
            regularPrice="$16.48"
            finalPrice="$6.4"
            colors={['#23A6F0', '#23856D', '#E77C40', '#737373']} // Custom colors
          />
          <ProductCard
            image="/icons3/product(4).png"
            name="Graphic Design"
            subName="English Department"
            regularPrice="$16.48"
            finalPrice="$6.4"
            colors={['#23A6F0', '#23856D', '#E77C40', '#737373']} // Custom colors
          />
          {/* Image for Mobile */}
          <ProductCard
            image="/icons5/mobileextraimg.png" // New image for mobile
            name="Graphic Design"
            subName="English Department"
            regularPrice="$16.48"
            finalPrice="$6.4"
            colors={['#23A6F0', '#23856D', '#E77C40', '#737373']}
            className="md:hidden" // Hide on desktop, show only on mobile
          />
           <ProductCard
            image="/icons5/mobileextraimg.png" // New image for mobile
            name="Graphic Design"
            subName="English Department"
            regularPrice="$16.48"
            finalPrice="$6.4"
            colors={['#23A6F0', '#23856D', '#E77C40', '#737373']}
            className="md:hidden" // Hide on desktop, show only on mobile
          />
           <ProductCard
  image="/icons3/product(5).png"
  name="Graphic Design"
  subName="English Department"
  regularPrice="$16.48"
  finalPrice="$6.4"
  colors={['#23A6F0', '#23856D', '#E77C40', '#737373']} // Custom colors
  className="hidden md:block" // Hide on mobile, show on desktop
/>

          <ProductCard
            image="/icons3/product(6).png"
            name="Graphic Design"
            subName="English Department"
            regularPrice="$16.48"
            finalPrice="$6.4"
            colors={['#23A6F0', '#23856D', '#E77C40', '#737373']} // Custom colors
          />
          <ProductCard
            image="/icons3/product(7).png"
            name="Graphic Design"
            subName="English Department"
            regularPrice="$16.48"
            finalPrice="$6.4"
            colors={['#23A6F0', '#23856D', '#E77C40', '#737373']} // Custom colors
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
