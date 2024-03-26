import styles from "@/app/styles/navbar.module.css"
import Image from "next/image"
import Link from "next/link"
import React from 'react'
import Nav from "./Nav"

const Header = () => {
  return (
    <header className={styles.main_header}>

        <div className={styles.navbar_brand}>
        <Link href="/">
            <Image src="/Preview.png" alt=""  width={100} height={5}/>
        </Link>
        </div>
        <Nav/>
    </header>
  )
}

export default Header
