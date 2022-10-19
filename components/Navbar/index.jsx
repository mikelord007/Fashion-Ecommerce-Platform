import React from 'react'
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { GiCrystalGrowth } from 'react-icons/gi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagDash } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav className="navbar">
        <button className="navbar__menu">
            <HiOutlineMenuAlt1 />
        </button>
        <button className="navbar__logo">
            <GiCrystalGrowth />
        </button>
        <ul className="navbar__links">
            <li className="navbar__links__linkitem">NEW</li>
            <li className="navbar__links__linkitem">SALE</li>
            <li className="navbar__links__linkitem">MEN</li>
            <li className="navbar__links__linkitem">WOMEN</li>
        </ul>
        <div className="navbar__search">
            <button className="navbar__search__fav">
                <AiOutlineHeart/>
            </button>
            <button className="navbar__search__searchbtn">
                SEARCH
            </button>
        </div>
        <div className="navbar__utils">
            <button className="navbar__utils__bag">
                <BsBagDash />
            </button>
            <button className="navbar__utils__account">
                <BsPerson />
            </button>
        </div>
    </nav>
  )
}

export default Navbar