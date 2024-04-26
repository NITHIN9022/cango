import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails(props) {
  
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // http://localhost:5173/product/${productId}
    fetch(`http://localhost:8080/products/${props.productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product details:', error));
  }, []);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        {product && (
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt={product.name} className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product.productImg} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.category}</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
              <p className="leading-relaxed">{product.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                {/* Display product details like color, size, etc. */}
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to Cart</button>
                {/* Add to cart button and other product actions */}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductDetails;
