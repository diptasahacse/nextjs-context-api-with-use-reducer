import React from 'react'
import ProductCard from '../components/Layout/ProductCard';
import { useProducts } from '../provider/ProductProvider';

const topRated = () => {
    const {
        state: { loading, products, error },
      } = useProducts();
    
      let content;
    
      if (loading) {
        content = <p className="text-center">Product is fetching..</p>;
      }
      if (error) {
        content = <p className="text-center text-danger">Something went wrong.</p>;
      }
      if (!loading && !error && products.length === 0) {
        content = <p className="text-center text-info">Product are empty</p>;
      }
    
      if (!loading && !error && products.length > 0) {
        content = (
          <div className="row g-4">
            {products.filter((item)=> item.rating.rate >= 4).map((item, index) => (
              <ProductCard item={item} key={index} />
            ))}
          </div>
        );
      }
    
      return <>{content}</>;
    }
    export default topRated