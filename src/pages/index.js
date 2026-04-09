import React, {useState, useEffect} from "react";
import { NextSeo } from "next-seo";
import ImageCarousel from '../components/ImageCarousel';
import Product from '../components/Product';
import i18n from '../i18n';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const isRTL = i18n.language === "ar"; // true if Arabic
  
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
    title="Pets Suppliers | Cat's Best | Femtotrade | فرش القطط و الكلاب والحيوانات الاليفة فى مصر"
    description="Pet Suppliers in Egypt - Cat's Best - Original litter - Active against urine and odours 
    - 100% natural - 100% biodegradable - Dust-free - Long-lasting - Odour control - Easy to clean
    - فرش القطط و الكلاب والحيوانات الاليفة فى مصر - فرش قطط اورجنال - 
    فرش قطط اكتيف ضد البول والروائح - فرش قطط 100% طبيعي - فرش قطط 100% قابل للتحلل -
     فرش قطط خالي من الغبار - فرش قطط طويل الأمد - فرش قطط مكافحة الروائح - فرش قطط سهل التنظيف"
  />

  <div className="section_container" dir={isRTL ? "rtl" : "ltr"}>
    <div className="carousel_box">
        <ImageCarousel images={images} interval={5000} />
    </div>

    {isRTL ? (
      <div className="perfect_message-ar">
          <p>لو عندك حيوانات اليفة بالمنزل 🐶 🐺 🐭   </p>
          <p>يبقى لازم تجرب المنتج اللألمانى الجديد 🌞 للراحة والامان</p>
          <p>
            أفضل للقطط  والكلاب والحيوانات الاليفة -
            رمل عضوي - حبيبات ذكية - رمل عضوي يمنع التتبع - أصلي - فعال ضد البول والروائح -
            مضاد للبكتيريا بشكل طبيعي - قوة الطبيعة - راحة - غير متكتل وعالي الامتصاص - 
            عالمي - غير متكتل وعالي الامتصاص - أفضل للكلاب - ألياف عضوية طبيعية 100% -
            المكمل المثالي لإخراج الكلب لقضاء حاجته - راحة صديقة للكلاب على مدار الساعة
            - فائق الامتصاص - يوقف الروائح - قابل للتحلل الحيوي والتسميد بنسبة 100%.
          </p>
      </div>

    ) : (
      <div className="perfect_message">
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
    )}

  </div>

  <div>
    <div className="products-heading">
      <h2>المنتجات المميزة - الرمل الألمانى للحيوانات الاليفة </h2>
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



