import React from 'react'
import Link from 'next/link'
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { GiCrystalGrowth } from 'react-icons/gi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagDash } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import styles from './index.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <button className={[styles.navbar__menu, styles.navbar__item].join(' ')}>
            <HiOutlineMenuAlt1 className={styles.navbar__item__icon} />
        </button>
        <button className={[styles.navbar__logo, styles.navbar__item].join(' ')}>
            <GiCrystalGrowth className={styles.navbar__item__icon} />
        </button>
        <ul className={[styles.navbar__links, styles.navbar__item].join(' ')}>
            <Link href="#"><li className={styles.navbar__links__linkitem}>NEW</li></Link>
            <Link href="#"><li className={styles.navbar__links__linkitem}>SALE</li></Link>
            <Link href="#"><li className={styles.navbar__links__linkitem}>MEN</li></Link>
            <Link href="#"><li className={styles.navbar__links__linkitem}>WOMEN</li></Link>
        </ul>
        <div className={[styles.navbar__search, styles.navbar__item].join(' ')}>
            <button className={styles.navbar__search__fav}>
                <AiOutlineHeart className={styles.navbar__search__fav__icon}/>
            </button>
            <button className={styles.navbar__search__searchbtn}>
                SEARCH
            </button>
        </div>
        <div className={[styles.navbar__utils, styles.navbar__item].join(' ')}>
            <button className={[styles.navbar__utils__item,styles.navbar__utils__bag].join(' ')}>
                <BsBagDash className={styles.navbar__utils__item__icon}/>
            </button>
            <button className={[styles.navbar__utils__item,styles.navbar__utils__account].join(' ')}>
                <BsPerson className={styles.navbar__utils__item__icon}/>
            </button>
        </div>
    </nav>
  )
}

export default Navbar