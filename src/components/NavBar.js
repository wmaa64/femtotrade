import React, { useState, useEffect } from "react";
import Link from "next/link";
import {AiOutlineShopping} from "react-icons/ai";
import { Cart } from "./";
import Styles from "../styles/navbar.module.css";
import { useStateContext } from "../../context/StateContext";
import { blue } from "@mui/material/colors";

const NavBar = () => {
  const { showCart, setShowCart, totalQuantities, userInfo, logoutUser } = useStateContext();
  const [open, setOpen] = useState(false);
  
return (
<div className="navbar-container">
    <div>
        <h1>Pet Suppliers</h1>
    </div>
    <div className="navbar" logo="true">
        <nav className={Styles.navbar}>
            <div className={Styles.navItem} logo="true">
                {userInfo?.isAdmin ? (
                    <>
                        <Link href="/products/manage">Manage Products</Link>
                        <Link href="/orders/manage">Manage Orders</Link>
                    </> ) : (
                    <>
                        <Link href="/">Home</Link>
                        <Link href="/pet-suppliers">Pet Suppliers Shop</Link>
                        <Link href="/about">About Us</Link>

            
                    </>
                )}

                {userInfo ? (
                    <button onClick={logoutUser} style={{ color: "red" , border: "none", background: "transparent", cursor: "pointer" }}>
                        Logout
                    </button>
                ) : (
                    <>
                        <Link href="/users/login">
                            <button style={{ color: "red", border: "none", background: "transparent", cursor: "pointer" }}>
                                Login
                            </button>
                        </Link>
                        <Link href="/users/register">
                            <button style={{color: "red", border: "none", background: "transparent", cursor: "pointer" }}>
                                Register
                            </button>

                        </Link>
                    </>
                )}
                
                <button  type="button"   className="cart-icon"  onClick={() => setShowCart(true)}>
                    <AiOutlineShopping />
                    <span className="cart-item-qty">{totalQuantities}</span>
                </button>
                {showCart && <Cart />}
            </div>
        </nav>
    </div>
</div>
);
}

export default NavBar;
