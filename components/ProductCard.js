import React from 'react';

const ProductCard = ({
  id,
  title = "Product Name",
  price = "$99.99",
  image = "/product-image.jpg",
  category = "Category",
  rating = 4.5,
  reviewCount = 12,
  isNew = false,
  isSale = false,
  salePrice,
  onAddToCart = () => {},
  href = "#"
}) => {
  return (
    <div className="group relative bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Badge indicators */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {isNew && (
          <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded">
            New
          </span>
        )}
        {isSale && (
          <span className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded">
            Sale
          </span>
        )}
      </div>
      
      {/* Product image */}
      <a href={href} className="block relative h-48 overflow-hidden">
        <div className="bg-gray-200 h-full w-full flex items-center justify-center">
          {/* Placeholder for image */}
          <i className="ri-image-line text-4xl text-gray-400"></i>
          
          {/* If you want to include an actual image */}
          {/* <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center"
          /> */}
        </div>
      </a>
      
      {/* Product details */}
      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1">{category}</div>
        <a href={href} className="block">
          <h3 className="text-lg font-medium text-black hover:underline mb-1">{title}</h3>
        </a>
        
        {/* Price */}
        <div className="flex items-center mb-3">
          {isSale && salePrice ? (
            <>
              <span className="text-lg font-bold text-black">{salePrice}</span>
              <span className="ml-2 text-sm text-gray-500 line-through">{price}</span>
            </>
          ) : (
            <span className="text-lg font-bold text-black">{price}</span>
          )}
        </div>
        
        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <i 
                key={i} 
                className={`text-sm ${i < Math.floor(rating) ? 'ri-star-fill' : i < rating ? 'ri-star-half-line' : 'ri-star-line'} ${i < rating ? 'text-black' : 'text-gray-300'}`}
              ></i>
            ))}
          </div>
          <span className="ml-2 text-xs text-gray-500">({reviewCount})</span>
        </div>
        
        {/* Add to cart button */}
        <button 
          onClick={onAddToCart}
          className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;