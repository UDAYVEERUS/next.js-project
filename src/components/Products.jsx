'use client'
import React, { useState } from "react";

const Products = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, category: "CATEGORY", title: "The Catalyzer", price: "$16.00", imgSrc: "https://teetimeshop.in/cdn/shop/files/c2c9955c-e890-4c8e-8a08-a6a444aa8fe3.jpg?v=1702644878&width=1445" },
    { id: 2, category: "CATEGORY", title: "Shooting Stars", price: "$21.15", imgSrc: "https://teetimeshop.in/cdn/shop/files/c2c9955c-e890-4c8e-8a08-a6a444aa8fe3.jpg?v=1702644878&width=1445" },
    { id: 3, category: "CATEGORY", title: "Neptune", price: "$12.00", imgSrc: "https://teetimeshop.in/cdn/shop/files/c2c9955c-e890-4c8e-8a08-a6a444aa8fe3.jpg?v=1702644878&width=1445" },
    { id: 4, category: "CATEGORY", title: "The 400 Blows", price: "$18.40", imgSrc: "https://teetimeshop.in/cdn/shop/files/c2c9955c-e890-4c8e-8a08-a6a444aa8fe3.jpg?v=1702644878&width=1445" },
    { id: 5, category: "CATEGORY", title: "The 400 Blows", price: "$18.40", imgSrc: "https://teetimeshop.in/cdn/shop/files/c2c9955c-e890-4c8e-8a08-a6a444aa8fe3.jpg?v=1702644878&width=1445" },
    { id: 6, category: "CATEGORY", title: "The 400 Blows", price: "$18.40", imgSrc: "https://teetimeshop.in/cdn/shop/files/c2c9955c-e890-4c8e-8a08-a6a444aa8fe3.jpg?v=1702644878&width=1445" },
    { id: 7, category: "CATEGORY", title: "The 400 Blows", price: "$18.40", imgSrc: "https://teetimeshop.in/cdn/shop/files/c2c9955c-e890-4c8e-8a08-a6a444aa8fe3.jpg?v=1702644878&width=1445" },
    { id: 8, category: "CATEGORY", title: "The 400 Blows", price: "$18.40", imgSrc: "https://teetimeshop.in/cdn/shop/files/c2c9955c-e890-4c8e-8a08-a6a444aa8fe3.jpg?v=1702644878&width=1445" },
   
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product) => (
              <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden cursor-pointer" onClick={() => openModal(product)}>
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={product.imgSrc}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {product.title}
                  </h2>
                  <p className="mt-1">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {modalIsOpen && selectedProduct && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src={selectedProduct.imgSrc}
            />
            <h2 className="text-gray-900 title-font text-lg font-medium mt-4">
              {selectedProduct.title}
            </h2>
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              {selectedProduct.category}
            </h3>
            <p className="mt-1">{selectedProduct.price}</p>
            <button onClick={closeModal} className="mt-4 text-red-500">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
