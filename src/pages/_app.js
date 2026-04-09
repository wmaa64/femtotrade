import React, {useEffect} from "react";
import {Toaster} from "react-hot-toast";
import {Layout} from "../components";
import "../styles/globals.css"; /* common page elements */
import "../styles/index.scss";  /* main styles */
import "../styles/overrides/portable.css"; /* override tablet styles for portrait */
import '../i18n';
import { useTranslation } from "react-i18next";
import { StateContext } from "../../context/StateContext";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";


function MyApp({ Component, pageProps }) {
  const { i18n } = useTranslation();
  
  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    
    document.documentElement.dir = dir;   // ✅ RTL/LTR
    document.documentElement.lang = i18n.language; // ✅ SEO + accessibility

  }, [i18n.language]);

return (
  <>
    <DefaultSeo
      {...SEO}
        title="Pets Suppliers | Cat's Best | Femtotrade | فرش القطط و الكلاب والحيوانات الاليفة فى مصر"
        description="Pet Suppliers in Egypt - Cat's Best - Original litter - Active against urine and odours 
    - 100% natural - 100% biodegradable - Dust-free - Long-lasting - Odour control - Easy to clean
    - فرش القطط و الكلاب والحيوانات الاليفة فى مصر - فرش قطط اورجنال - 
    فرش قطط اكتيف ضد البول والروائح - فرش قطط 100% طبيعي - فرش قطط 100% قابل للتحلل -
     فرش قطط خالي من الغبار - فرش قطط طويل الأمد - فرش قطط مكافحة الروائح - فرش قطط سهل التنظيف"
      twitter={{
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      }}
      openGraph={{
        type: 'website',
        locale: 'en_EG',
        url: 'https://femtotrade.shop/',
        site_name: 'Pet Suppliers',
    }}
    />
    
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  </>

);
}
export default MyApp;


