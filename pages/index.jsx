import Head from 'next/head'
import Image from 'next/image'
import { IoIosArrowForward } from 'react-icons/io';
import ImageWrapper from '../components/ImageWrapper'
import ModelPic1 from '../public/assets/images/model1.png'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="maxw-wrapper">
      <Navbar />
        <div className="productpage maxcontentw-warpper">
          <div className="productpage__left">
            <div className="productpage__left__info">
              <h1 className="productpage__left__info__title">
                TIED GREEN V-NECK SHIRT
              </h1>
              <h2 className="productpage__left__info__price">
                $110
              </h2>
              <p className="productpage__left__info__desc">
                V-neck shirt with lapel collar. Long sleeves with cuffs. Front tie at hem. Front button closure.
              </p>
              <button className="productpage__left__info__addbtn">ADD</button>
            </div>
            <div className="productpage__left__size">
              <h2 className="productpage__left__size__title">
                Select Size
              </h2>
              <div className="productpage__left__size__select">
                <button className="productpage__left__size__select__btn">S</button>
                <button className="productpage__left__size__select__btn">M</button>
                <button className="productpage__left__size__select__btn">L</button>
                <p className="productpage__left__size__select__guide" >SIZE GUIDE</p>
              </div>
            </div>
            <div className="productpage__left__carousel" >
              <div className="productpage__left__carousel__imgcontainer" >
                <div className="productpage__left__carousel__imgcontainer__img" />
              </div>
              <div className="productpage__left__carousel__imgcontainer" >
                <div className="productpage__left__carousel__imgcontainer__img" />
              </div>
              <div className="productpage__left__carousel__imgcontainer" >
                <div className="productpage__left__carousel__imgcontainer__img" />
              </div>
              <div className="productpage__left__carousel__imgcontainer" >
                <div className="productpage__left__carousel__imgcontainer__img" />
              </div>
              <button className="productpage__left__carousel__morebtn">
                <IoIosArrowForward className="productpage__left__carousel__morebtn__icon"/>
              </button>
            </div>
          </div>
          <div className="productpage__right">
            <ImageWrapper src={ModelPic1} />
          </div>
        </div>
    </div>
  )
}
