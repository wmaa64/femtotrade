import React, { useState, useEffect } from "react";
import Link from "next/link";
import {AiOutlineShopping} from "react-icons/ai";
import { Cart } from "./";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import { useStateContext } from "../../context/StateContext";

const NavBar = () => {
  const { t } = useTranslation();
  const { showCart, setShowCart, totalQuantities, userInfo, logoutUser } = useStateContext();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

  if (!mounted) return null; // 🔥 prevents hydration error

  const isRTL = i18n.language === "ar"; // true if Arabic
  

return (
<div className="navbar-container" dir={isRTL ? "rtl" : "ltr"} >
    <div className="navbar-header" >
        {isRTL ? (
            <>
                <div  className= "navbar-header-part1" >
                    <img src="/images/image00.jpg" alt="German Litter" className="logoimage" width={50} height={50} />
                    <h1>الرمل الألمانى المعجزة </h1>
                    <img src="/images/GermanFlag.jpg" alt="German Flag" className="logoimage" width={50} height={50} />
                </div>
                <h1>🦨 🦊 🐿️ 🐾  🐾 🐱 🐶 🐇</h1>
            </>
        ) : (
            <>
                <div className= "navbar-header-part1" >
                    <img src="/images/image00.jpg" alt="German Litter" className="logoimage" width={50} height={50} />
                    <h1>The Miracle German Litter</h1>
                    <img src="/images/GermanFlag.jpg" alt="German Flag" className="logoimage" width={50} height={50} />
                </div>
                <h1>🦨 🦊 🐿️ 🐾  🐾 🐱 🐶 🐇</h1>
            </>
        )}

    </div>
    <nav className="navbar"  >
        <div className="navitems" logo="true"  >
            {userInfo?.isAdmin ? (
                <>
                    <Link href="/products/manage">Manage Products</Link>
                    <Link href="/orders/manage">Manage Orders</Link>
                </> ) : (
                
                <>
                    <Link href="/">{t("home")}</Link>
                    {/*<Link href="/pet-suppliers">{t("petSuppliers")}</Link>*/}
                    <Link href="/about">{t("aboutUs")}</Link>
                </>
            )}

            {userInfo ? (
                <button onClick={logoutUser} >
                    Logout
                </button>
            ) : (
                <>
                    <Link href="/users/login">
                        <button >{t("login")}</button>
                    </Link>
                    <Link href="/users/register">
                        <button >{t("register")}</button>
                    </Link>
                </>
            )}
            
            <button  type="button"   className="cart-icon"  onClick={() => setShowCart(true)}>
                <AiOutlineShopping size={28} />
                <span className="cart-item-qty">{totalQuantities}</span>
            </button>
            {showCart && <Cart />}
        </div>
    </nav>
</div>
);
}

export default NavBar;
