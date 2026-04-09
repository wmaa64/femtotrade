import React from "react";
import Link from "next/link";
import PaymentIcons from "../PaymentIcons";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import MiniCart from "../MiniCart";

import { useStateContext } from "../../../context/StateContext";
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook, AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
  const { showCart } = useStateContext();

  return (
    <>
        <div className="footerContainer">
            <div className="footerContent">
                <div>
                    <Link href="/delivery">Delivery</Link>
                    <Link href="/privacy">Privacy</Link>
                    <Link href="/terms">Terms and Conditions of Sale</Link>
                    <Link href="/contact">Contact Us</Link>
                </div>
                <div>Contact: sales@femtotrade.com</div>

                <MiniCart />
            </div>
                
            <div className="iconContainer">
                <PaymentIcons />
                <div className="icons">
                    <a href="https://www.instagram.com/femtotradepets" target="_blank" rel="noopener noreferrer">
                        <AiFillInstagram   size={30} color="#E1306C" /> {/* Instagram */}
                    </a>
                    <a href="https://twitter.com/femtotradepets" target="_blank" rel="noopener noreferrer">
                        <AiOutlineTwitter  size={30} color="#1DA1F2" /> {/* Twitter */}
                    </a>
                    <a href="https://www.facebook.com/femtotradepets" target="_blank" rel="noopener noreferrer">
                        <AiFillFacebook    size={30} color="#1877F2" /> {/* Facebook */}
                    </a>
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                        <AiOutlineWhatsApp size={30} color="#25D366" /> {/* WhatsApp */}
                    </a>
                </div>
            </div>
        </div>
        <p className="copyright">2026 Femtotrade.shop All rights reserved</p>
    </>
  );
};

export default Footer;
