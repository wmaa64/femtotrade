import React from "react";
import Link from "next/link";
import PaymentIcons from "../PaymentIcons";

import MiniCart from "../MiniCart";

import { useStateContext } from "../../../context/StateContext";
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook, AiOutlineWhatsApp } from "react-icons/ai";
import styles from "./Footer.module.css";

const Footer = () => {
  const { showCart } = useStateContext();

  return (
    <>
        <div className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <div>
                    <Link href="/delivery">Delivery</Link>
                    <Link href="/privacy">Privacy</Link>
                    <Link href="/terms">Terms and Conditions of Sale</Link>
                    <Link href="/contact">Contact Us</Link>
                </div>
                <div>Contact: hello@macaronmagic.com</div>

                <MiniCart />
            </div>
                
            <div className={styles.iconContainer}>
                <PaymentIcons />
                <div className={styles.icons}>
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
        <p className={styles.copyright}>2022 Macaron Magic All rights reserved</p>
    </>
  );
};

export default Footer;
