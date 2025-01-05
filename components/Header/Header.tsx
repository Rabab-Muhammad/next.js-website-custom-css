import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'
import cssStyle from "./Header.module.css"
import React from 'react'

const Header = () => {
  return (
    <header className={cssStyle.header}>
        <h1 className={cssStyle.logo}>Timeluxe</h1>
        <nav>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/watches"}>Watches</Link>
            <Link href={"/contact"}>Contact</Link>
            <FaShoppingCart size={20}/>
        </nav>
    </header>
  )
}

export default Header

