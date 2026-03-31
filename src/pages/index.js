import React, {useState, useEffect} from "react";
import Link from "next/link";
import PerfectBanner from "../components/PerfectBanner";
import Newsletter from "../components/Newsletter";
import { NextSeo } from "next-seo";
import ImageCarousel from '../components/ImageCarousel';
import Product from "../components/Product"; // adjust path if needed
import Styles from "../styles/index.module.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const images = [
    '/images/image1.jpeg',
    '/images/image2.jpeg',
    '/images/image3.jpeg',
    '/images/image4.jpeg',
    '/images/image5.jpeg',
    '/images/image6.jpeg',
    '/images/image7.jpeg',
  ];

  // ✅ Fetch data client-side from API route
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products/featured");
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

return (
<>
  <NextSeo
    title="Pets Suppliers | Cat's Best | Femtotrade"
    description="Pet Suppliers in Egypt - Cat's Best - Original litter - Active against urine and odours - 100% natural - 100% biodegradable - Dust-free - Long-lasting - Odour control - Easy to clean "
  />

  <div style={{marginTop: "10px", }}>
    <div>
        <ImageCarousel images={images} interval={5000} />
    </div>
    <div className="perfect-message">
        <p>Perfect for </p>
        <p>Cats, Dogs & Small Animals</p>
        <p>
            Cat's Best - Organic Litter - Smart Pellets - Prevent Tracking
            Organic Litter - Original - active against urine and odours
            Sensitive - Naturally Anti-bacterial
            The Power of Nature - Confort - Non Clumping & High ABsorption
            Universal - Non Clumping & High ABsorption
            
            Dog's Best - 100% natural organic fibres - 
            the ideal supplement to taking dog out to "do its business - 
            Dog freindly confort round the clock - super absorbent - 
            stops odeur - 100% biodegradable compostable.
        </p>
    </div>
  </div>

  <div>
    <div className="products-heading">
      <h2>Featured Pets Suppliers</h2>
    </div>

    { (loading) ? (
        <p>Loading products...</p>
      ) : (
        <div className="products-container">
          {(products.length > 0) ? 
            (products.map((product) => (
              <Product key={product._id} product={product} />
            ))) : (
              <p>No featured products available.</p>
            )
          }
        </div>
        ) 
    }
  </div>
    
</>

)
};
/* ADD SERVERSIDE PROPS HERE */

export default Home;



