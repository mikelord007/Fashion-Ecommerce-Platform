import Head from 'next/head'
import { IoIosArrowForward } from 'react-icons/io';
import ImageWrapper from '../components/ImageWrapper'
import ModelPic1 from '../public/assets/images/model1.png'
import ModelPic2 from '../public/assets/images/model2.png'
import ModelPic3 from '../public/assets/images/model3.png'
import ModelPic4 from '../public/assets/images/model4.png'
import bladeleaf from '../public/assets/svgs/bladeleaf.svg'
import curvyarrowleft from '../public/assets/svgs/curvyarrowleft.svg'
import curvyarrowup from '../public/assets/svgs/curvyarrowup.svg'
import filledcircle from '../public/assets/svgs/filledcircle.svg'
import hollowcircle from '../public/assets/svgs/hollowcircle.svg'
import modelcirclemain from '../public/assets/svgs/modelcirclemain.svg'
import modelcirclesecondary from '../public/assets/svgs/modelcirclesecondary.svg'
import ribbon from '../public/assets/svgs/ribbon.svg'
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="maxw-wrapper">
          <div className={styles.productpage}>
            <div className={styles.productpage__left}>
              <div className={styles.productpage__left__info}>
                <h1 className={styles.productpage__left__info__title}>
                  TIED GREEN <br/> V-NECK SHIRT
                </h1>
                <h2 className={styles.productpage__left__info__price}>
                  $110
                </h2>
                <p className={styles.productpage__left__info__desc}>
                  V-neck shirt with lapel collar. Long sleeves with cuffs. Front tie at hem. Front button closure.
                </p>
                <button className={styles.productpage__left__info__addbtn}>ADD</button>
              </div>
              <div className={styles.productpage__left__size}>
                <h2 className={styles.productpage__left__size__title}>
                  Select Size
                </h2>
                <div className={styles.productpage__left__size__select}>
                  <button className={styles.productpage__left__size__select__btn}>S</button>
                  <button className={styles.productpage__left__size__select__btn}>M</button>
                  <button className={styles.productpage__left__size__select__btn}>L</button>
                  <button className={styles.productpage__left__size__select__guide} >SIZE GUIDE</button>
                </div>
              </div>
              <div className={styles.productpage__left__carousel} >
                <div className={styles.productpage__left__carousel__imgcontainer} >
                  <div className={[styles.productpage__left__carousel__imgcontainer__img, styles.productpage__left__carousel__imgcontainer__img1].join(' ')} />
                </div>
                <div className={styles.productpage__left__carousel__imgcontainer} >
                  <div className={[styles.productpage__left__carousel__imgcontainer__img, styles.productpage__left__carousel__imgcontainer__img2].join(' ')} />
                </div>
                <div className={styles.productpage__left__carousel__imgcontainer} >
                  <div className={[styles.productpage__left__carousel__imgcontainer__img, styles.productpage__left__carousel__imgcontainer__img3].join(' ')} />
                </div>
                <div className={styles.productpage__left__carousel__imgcontainer} >
                  <div className={[styles.productpage__left__carousel__imgcontainer__img, styles.productpage__left__carousel__imgcontainer__img4].join(' ')} />
                </div>
                <button className={styles.productpage__left__carousel__morebtn}>
                  <IoIosArrowForward className={styles.productpage__left__carousel__morebtn__icon}/>
                </button>
              </div>
            </div>
            <div className={styles.productpage__right}>
              <div className={styles.productpage__right__imgcontainer}>
                <ImageWrapper absolute={true} className={styles.productpage__right__imgcontainer__modelpic} src={ModelPic2} />
                <div absolute={true} className={styles.productpage__right__imgcontainer__modelcirclemain} src={modelcirclemain}/>
                <div absolute={true} className={styles.productpage__right__imgcontainer__modelcirclesecondary} src={modelcirclesecondary}/>
                <div absolute={true} className={styles.productpage__right__imgcontainer__modelcirclesecondary2} src={modelcirclesecondary}/>
                <div absolute={true} className={styles.productpage__right__imgcontainer__modelcirclesecondary3} src={modelcirclesecondary}/>
                <div absolute={true} className={styles.productpage__right__imgcontainer__modelcirclesecondary4} src={modelcirclesecondary}/>
                <ImageWrapper absolute={true} className={styles.productpage__right__imgcontainer__filledcircle} src={filledcircle}/>
                <ImageWrapper absolute={true} className={styles.productpage__right__imgcontainer__hollowcircle} src={hollowcircle}/>
                <ImageWrapper absolute={true} className={styles.productpage__right__imgcontainer__ribbon} src={ribbon}/>
                <ImageWrapper absolute={true} className={styles.productpage__right__imgcontainer__curvyarrowup} src={curvyarrowup}/>
                <ImageWrapper absolute={true} className={styles.productpage__right__imgcontainer__curvyarrowleft} src={curvyarrowleft}/>
                <ImageWrapper absolute={true} className={styles.productpage__right__imgcontainer__bladeleaf} src={bladeleaf}/>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}
