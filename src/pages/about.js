import { useState, useEffect } from "react";
import { NextSeo } from "next-seo";
import i18n from "../i18n";


const About = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
      setMounted(true);
  }, []);

  if (!mounted) return null; // 🔥 prevents hydration error

  const isRTL = i18n.language === "ar"; // true if Arabic
  

  return (
    <>
    <NextSeo
    title="Cat's Best - Organic Litter - Smart Pellets - Prevent Tracking Organic Litter "
    description="كاتس بيست - رمل عضوي - حبيبات ذكية - رمل عضوي يمنع التتبع - أصلي -
     فعال ضد البول والروائح - مضاد للبكتيريا طبيعيًا - قوة الطبيعة - مريح - 
     غير متكتل وعالي الامتصاص - مناسب لجميع أنواع القطط"
    />
    <div className="about-us">
      {isRTL ? (
        <>
          <h1>من نحن</h1>
        <p>نحن شركة متخصصة فى رمل الحيوانات الأليفة بالمنزل</p>
        <p>
             تتميز منتجاتنا بالميزات التالية:

            أفضل رمل للقطط - رمل عضوي - حبيبات ذكية - يمنع التتبع

            رمل عضوي - أصلي - فعال ضد البول والروائح

            لطيف على البشرة الحساسة - مضاد للبكتيريا بشكل طبيعي

            قوة الطبيعة - راحة - غير متكتل وعالي الامتصاص

            مناسب لجميع أنواع الكلاب - غير متكتل وعالي الامتصاص

            أفضل رمل للكلاب - ألياف عضوية طبيعية 100% -

            المكمل المثالي لإخراج الكلب لقضاء حاجته -

            راحة مثالية للكلاب على مدار الساعة - امتصاص فائق -

            يمنع الروائح - قابل للتحلل الحيوي والتسميد بنسبة 100%.       </p>
        </>
      ) : (
        <>
          <h1>About Us</h1>
        <p>We are a specialized company in Organic Litter for home animals</p>
        <p>
            Our products has these Features:
            Cat's Best - Organic Litter - Smart Pellets - Prevent Tracking
            Organic Litter - Original - active against urine and odours
            Sensitive - Naturally Anti-bacterial
            The Power of Nature - Confort - Non Clumping & High ABsorption
            Universal - Non Clumping & High ABsorption
            
            Dog's Best - 100% natural organic fibres - 
            the ideal supplement to taking dog out to "do its business - 
            Dog freindly confort round the clock - super absorbent - 
            stops odeur - 100% biodegradable compostable.        </p>
        </>
      )}
    </div>
    </>
  );
}   

export default About;