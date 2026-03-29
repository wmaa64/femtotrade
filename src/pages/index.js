import React, {useState, useEffect} from "react";
import Link from "next/link";
import PerfectBanner from "../components/PerfectBanner";
import Newsletter from "../components/Newsletter";
import { NextSeo } from "next-seo";
import ImageCarousel from '../components/ImageCarousel';
import Product from "../components/Product"; // adjust path if needed

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const images = [
    '/images/image1u.jpg',
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
  {/*<NextSeo
    title="Macaron Magic"
    description="Great tasting home made macarons"
  />*/}

  <div style={{ marginTop: "10px", }}>
    <ImageCarousel images={images} interval={5000} />
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



