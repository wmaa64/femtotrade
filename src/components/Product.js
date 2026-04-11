import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NextSeo } from "next-seo";
import i18n from "../i18n"

const  toTitleCase = (str)=> {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

const Product = ({ product }) => {
    const seoProductName = product.name.en  + " "  + product.name.ar || "Cat's Best - Dog's Best"; // Fallback if name is missing
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // 🔥 prevents hydration error

    const isRTL = i18n.language === "ar"; // true if Arabic


return (
<>
    <NextSeo
        title={`${toTitleCase(seoProductName)} - فرش القطط و الكلاب والحيوانات الاليفة فى مصر منتج المانى اصلى `}
        description="Pet Suppliers in Egypt - Cat's Best - Original litter - Active against urine and odours 
    - 100% natural - 100% biodegradable - Dust-free - Long-lasting - Odour control - Easy to clean
    - فرش القطط و الكلاب والحيوانات الاليفة فى مصر - فرش قطط اورجنال - 
    فرش قطط اكتيف ضد البول والروائح - فرش قطط 100% طبيعي - فرش قطط 100% قابل للتحلل -
     فرش قطط خالي من الغبار - فرش قطط طويل الأمد - فرش قطط مكافحة الروائح - فرش قطط سهل التنظيف"
    />

    <div>
        <Link href={`/product/${product._id}`}>
            <div className="product-card">
                <figure className="fliptile">
                    <img   src={product.image}    width={250}   height={250}  className="product-image"  />
                    <figcaption>
                        <p className="product-name">{isRTL ? product.name.ar : product.name.en}</p>
                    </figcaption>
                </figure>

                <p className="product-name">{isRTL ? product.name.ar : product.name.en}</p>
                <p className="product-price">
                    جنيه مصرى
                    {product.price.toLocaleString("ar-EG", {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                    })}
                </p>
                <p className="product-description">{isRTL ? product.description.ar : product.description.en}</p>
            </div>
        </Link>
    </div>
</>

);
};

export default Product;
