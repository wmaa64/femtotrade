import React from "react";
import Head from "next/head";
import Header from "../components/Header"
import NavBar  from "./NavBar";

import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
return (
<>
    <Head>

        {/* الأساسيات */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="WUlB-DC4Ep631yNAivYsTKsJL9q2tN8O0hlLFJcES8c" />

        {/* SEO */}
        <link rel="canonical" href="https://femtotrade.shop/" />
        <title>فرش قطط وكلاب فى مصر | Femto Trade - منتج المانى اورجنال</title>

        <meta
            name="description"
            content="تسوق أفضل فرش القطط والكلاب فى مصر من Femto Trade - منتج ألمانى 100% طبيعى، مضاد للروائح، سهل التنظيف، طويل الأمد، وتوصيل سريع لجميع المحافظات."
        />

        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" sizes="32x32" href="/favicon/favicon32.png" />
        <link rel="icon" sizes="16x16" href="/favicon/favicon16.png" />

        {/* Open Graph (الصورة اللي بتظهر في Google / السوشيال) */}
        <meta property="og:title" content="Femto Trade - فرش قطط وكلاب فى مصر" />
        <meta
            property="og:description"
            content="أفضل فرش للحيوانات الأليفة فى مصر - جودة ألمانية، مضاد للروائح، توصيل سريع."
        />
        <meta property="og:image" content="https://femtotrade.shop/seo-image.jpeg" />
        <meta property="og:url" content="https://femtotrade.shop/" />
        <meta property="og:type" content="website" />

        {/* Twitter (اختياري بس مهم) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://femtotrade.shop/seo-image.jpeg" />

        {/* ألوان */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#da532c" />

        {/* ملفات */}
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/favicon32.png" color="#5bbad5" />

        {/*<meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="WUlB-DC4Ep631yNAivYsTKsJL9q2tN8O0hlLFJcES8c" />
        <link rel="canonical" href="https://femtotrade.shop/" />
        <title>شركة متخصصة فى  فرش القطط و الكلاب والحيوانات الاليفة فى مصر - فرش قطط اورجنال </title>
        <meta name="description" content="تسوق منتج المانى عالى الجودة - فرش القطط و الكلاب والحيوانات الاليفة فى مصر - اورجنال - 
    اكتيف ضد البول والروائح - 100% طبيعي - 100% قابل للتحلل - خالي من الغبار - طويل الأمد - مكافحة الروائح - سهل التنظيف!" />        
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon"  sizes="32x32" href="/favicon/favicon32.png" />
        <link rel="icon"  sizes="16x16" href="/favicon/favicon16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/favicon32.png" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />*/}

    </Head>

    <header>
        <Header />
        <NavBar />
        {/*<DemoBanner />*/}
    </header>
    <div className="layout">
        <main className="main-container">
            {children}
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
</>
);
};

export default Layout;