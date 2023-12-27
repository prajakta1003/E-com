import React, { useState, useEffect } from 'react';
import './NewCollections.css';
import new_collections from '../Assets/new_collections';
import Item from '../Item/Item';

const NewCollections = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/product/getallproduct');
        if (!response.ok) {
          return ('Error');
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {products.map((product) => (
          <Item key={product.id} id={product.id} name={product.name} img={product.img} des={product.dec} />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
