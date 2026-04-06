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
    <nav className="navbar" >
        <div className="navitems" logo="true">
            {userInfo?.isAdmin ? (
                <>
                    <Link href="/products/manage">Manage Products</Link>
                    <Link href="/orders/manage">Manage Orders</Link>
                </> ) : (
                <>
                    <Link href="/">Home</Link>
                    <Link href="/pet-suppliers">Pet Suppliers</Link>
                    <Link href="/about">About Us</Link>
                </>
            )}

            {userInfo ? (
                <button onClick={logoutUser} >
                    Logout
                </button>
            ) : (
                <>
                    <Link href="/users/login">
                        <button >
                            Login
                        </button>
                    </Link>
                    <Link href="/users/register">
                        <button >
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
);
}

export default NavBar;
