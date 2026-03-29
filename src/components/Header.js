// Header.js
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';
import { MdEmail } from "react-icons/md";
import { useStateContext } from "../../context/StateContext";
import i18n from '../i18n';
import Link from "next/link";
import Image from 'next/image';


const Header = () => {
  const { t} = useTranslation();
  const { userInfo, setUserInfo } = useStateContext();
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Load userInfo from localStorage if available
    const storedUserInfo = localStorage.getItem('userInfo');
    storedUserInfo ? setUserInfo(JSON.parse(storedUserInfo)) : setUserInfo(null);
  }, []);

  useEffect(() => {
    if (i18n?.language) {
      setLanguage(i18n.language);
    }
  }, [i18n]);


  const handleLanguageChange = (lng) => {
    if (!i18n) return;
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  const toggleLanguage = () => {
    const next = language === 'en' ? 'ar' : 'en';
    handleLanguageChange(next);
  };

  return (
    <div className='headerContainerStyle'>
      {/* Left: language toggle */}
      <div className='leftStyle'>
        <button className="langButtonStyle"
          type="button"
          onClick={toggleLanguage}
          aria-label="Toggle language"
          title={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}

        >
          {language === 'en' ? (
            <>
              <Flag code="EG" style={{ width: 26, height: 18 }} />
              <span style={{ fontSize: 14 }}>AR</span>
            </>
          ) : (
            <>
              <Flag code="US" style={{ width: 26, height: 18 }} />
              <span style={{ fontSize: 14 }}>EN</span>
            </>
          )}
        </button>
      </div>

      {/* Center: logo */}
      <div className='centerStyle'>
        {/* Using /public/images/MunchixLogo.jpeg -> ensure file exists at public/images/... */}
        <Link href="/" title="Go to Home" style={{ display: 'inline-block' }}>
          <Image
            src="/images/femtotradelogo.jpg"
            alt="FemtoTrade Logo"
            width={400}
            height={100}
          />
        </Link>
      </div>

      {/* Right: user welcome */}
      <div className='rightStyle'>   
        {/* Telephone icon + number */}
        <div>
          <span className="phone-icon">Order By Phone: 📞</span>
          <a href="tel:+2 01005126629" className="phone-number" >
            +2 01005126629
          </a><br/>
          
          <span className="phone-icon">EmailTo: </span>
          {/*<MdEmail size={20} color="#d5272e" />*/}
          <a href="mailto:sales@femtotrade.com?subject=Inquiry&body=Hello" className="phone-number" >
            📧 sales@femtotrade.com
          </a><br/>
          
          {userInfo ? (
            <div style={{ fontSize: 16 }}>
              <span style={{ marginRight: 8 }}>Welcome,</span>
              <strong>{(userInfo.name).substring(0, (userInfo.name).indexOf(' '))}</strong>
            </div>
            ) : (
            /* you can replace with login/signup links/buttons if needed */
            <div style={{ fontSize: 14, opacity: 0.9 }}>Guest</div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Header;
