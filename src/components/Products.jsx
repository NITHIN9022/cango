import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map(product => (
            <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
               <Link to={`/product/${product.id}`} className="block relative h-48 rounded overflow-hidden">
                <img alt={product.name} className="object-cover object-center w-full h-full block" src={product.productImg} />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                <p className="mt-1">${product.offerPrice}</p> {/* Assuming offer price is shown */}
                <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
