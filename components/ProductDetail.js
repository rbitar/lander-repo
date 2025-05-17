import React, { useState } from 'react';
import { cn } from '../lib/utils';

const ProductDetail = ({
  product = {
    id: '1',
    title: 'Premium Product',
    price: '$299.99',
    description: 'This is a premium product with exceptional quality and features. The product comes with a warranty and excellent customer support. Perfect for those who value quality and durability.',
    images: [
      'https://placehold.co/800x800',
      'https://placehold.co/600x600',
      'https://placehold.co/500x500',
      'https://placehold.co/700x700',
    ],
    sku: 'PROD-12345',
    inStock: true,
    quantity: 10,
  },
  onAddToCart = () => {}
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= product.quantity) {
      setQuantity(value);
    }
  };
  
  const incrementQuantity = () => {
    if (quantity < product.quantity) {
      setQuantity(quantity + 1);
    }
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity });
  };
  
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
              <img 
                src={product.images[selectedImage]} 
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button 
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    "aspect-square bg-gray-100 rounded-md overflow-hidden flex items-center justify-center",
                    selectedImage === index && "ring-2 ring-black"
                  )}
                >
                  <img 
                    src={image} 
                    alt={`${product.title} - ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h1 className="text-3xl font-bold text-black mb-2">{product.title}</h1>
            <p className="text-2xl font-bold text-black mb-4">{product.price}</p>
            
            <div className="mb-6">
              <h2 className="text-lg font-medium text-black mb-2">Description</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="mr-1">SKU:</span>
                <span>{product.sku}</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="mr-1">Availability:</span>
                {product.inStock ? (
                  <span className="text-black">In Stock ({product.quantity} available)</span>
                ) : (
                  <span className="text-gray-500">Out of Stock</span>
                )}
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-lg font-medium text-black mb-2">Quantity</h2>
              <div className="flex">
                <button 
                  onClick={decrementQuantity} 
                  className="bg-gray-100 border border-gray-300 px-3 py-1 rounded-l-md hover:bg-gray-200"
                >
                  <i className="ri-subtract-line"></i>
                </button>
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={handleQuantityChange}
                  min="1" 
                  max={product.quantity} 
                  className="w-16 text-center border-y border-gray-300 py-1 focus:outline-none"
                />
                <button 
                  onClick={incrementQuantity} 
                  className="bg-gray-100 border border-gray-300 px-3 py-1 rounded-r-md hover:bg-gray-200"
                >
                  <i className="ri-add-line"></i>
                </button>
              </div>
            </div>
            
            <button 
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={cn(
                "w-full py-3 rounded-md font-medium",
                product.inStock 
                  ? "bg-black text-white hover:bg-gray-800" 
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              )}
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;