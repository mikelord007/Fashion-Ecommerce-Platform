import {useState, useEffect} from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import ImageWrapper from '../components/ImageWrapper'
import Navbar from '../components/Navbar';
import { gsap } from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import styles from '../styles/Home.module.css'

//assets
import ModelPic0 from '../public/assets/images/model5.png'
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


const Home = () => {

  const [activeModelPic, setactiveModelPic] = useState(0)

  useEffect(() => {
    gsap.registerPlugin(CustomEase);
    
    setTimeout(() => {

      
      var tl = gsap.timeline();
      tl.to('.stagger_slide_up_title', { duration: 0.4, y: '-14rem', stagger: { amount: 0.3}})
        
      .fromTo('.stagger_slide_up',{ y: '6rem', opacity: 0.5 }, {duration: 0.4, height: 'inherit',y: '0rem', opacity: 1, stagger: { amount: 0.3} })
        
      .fromTo('.image_shrink_animation',{height: '150%', transformOrigin: 'top left'}, {height: '100%', duration: 0.8, stagger: { amount: 0.3}, onComplete: function ()  {
              gsap.set(this.targets(), {clearProps: 'all'})
              gsap.set(this.targets(), {height: '100%'})
      }}, '0.5', )
        
      .fromTo('.model_carousel_animation', {x: 0 }, {duration: 0.8, x: '-10rem', stagger: { amount: 0.3}, opacity: '1'} , '0.5')
        
      .fromTo(`.${styles.initial_modelpic}`,{},{ ease: "circ.out", duration: 1.8, x: '-11rem', ease: CustomEase.create("custom", "M0,0 C0.046,0.49 0.172,0.653 0.448,0.83 0.526,0.88 0.656,0.934 1,1 ")}, '0.15')
    
      .fromTo(`.${styles.move_circle_right}`,{},{duration: 1.7, x: '23rem', stagger: { amount: 0.2}}, '0.25')

      .to(`.${styles.popup_animation}`, {scale: 1, stagger: { amount: 0.3}}, 0.45)

      .to(`.${styles.animate_toleft}`, {onComplete: function () {
        this.targets().forEach(e => {e.classList.remove(styles.animate_toleft);
      })}}, 0.45)
      
    },200000)
  
  }, [])
  

  return (
    <>
      <Navbar />
      <div className="maxw-wrapper">
          <div className={styles.productpage}>
            <div className={styles.productpage__left}>
              <div className={styles.productpage__left__info}>
                <h1 className={styles.productpage__left__info__title}>
                  <span className={['newline', 'stagger_slide_up_title', 'stagger_slide_up_title_1'].join(' ')}>TIED GREEN</span>
                  <span className={['newline', 'stagger_slide_up_title', 'stagger_slide_up_title_2'].join(' ')}>V-NECK SHIRT</span>
                </h1>
                <h2 className={[styles.productpage__left__info__price, 'stagger_slide_up'].join(' ')}>
                  $110
                </h2>
                <p className={styles.productpage__left__info__desc}>
                  <span className={['newline', 'stagger_slide_up'].join(' ')}>
                    V-neck shirt with lapel collar. Long sleeves with cuffs.
                  </span>
                  <span className={['newline', 'stagger_slide_up'].join(' ')}>
                    Front tie at hem. Front button closure.
                  </span>
                </p>
                <button  className={[styles.productpage__left__info__addbtn, styles.popup_animation].join(' ')}>ADD</button>
              </div>
              <div className={styles.productpage__left__size}>
                <h2 className={[styles.productpage__left__size__title, 'stagger_slide_up'].join(' ')}>
                  Select Size
                </h2>
                <div className={[styles.productpage__left__size__select, 'stagger_slide_up'].join(' ')}>
                  <button className={styles.productpage__left__size__select__btn}>S</button>
                  <button className={styles.productpage__left__size__select__btn}>M</button>
                  <button className={styles.productpage__left__size__select__btn}>L</button>
                  <button className={styles.productpage__left__size__select__guide} >SIZE GUIDE</button>
                </div>
              </div>
              <div className={styles.productpage__left__carousel} >
                <div className={[styles.productpage__left__carousel__imgcontainer, 'model_carousel_animation'].join(' ')} >
                  <button onClick={() => setactiveModelPic(1)} className={[styles.productpage__left__carousel__imgcontainer__img, styles.productpage__left__carousel__imgcontainer__img1, 'image_shrink_animation'].join(' ')} />
                </div>
                <div className={[styles.productpage__left__carousel__imgcontainer, 'model_carousel_animation'].join(' ')} >
                  <button onClick={() => setactiveModelPic(2)} className={[styles.productpage__left__carousel__imgcontainer__img, styles.productpage__left__carousel__imgcontainer__img2, 'image_shrink_animation'].join(' ')} />
                </div>
                <div className={[styles.productpage__left__carousel__imgcontainer, 'model_carousel_animation'].join(' ')} >
                  <button onClick={() => setactiveModelPic(3)} className={[styles.productpage__left__carousel__imgcontainer__img, styles.productpage__left__carousel__imgcontainer__img3, 'image_shrink_animation'].join(' ')} />
                </div>
                <div className={[styles.productpage__left__carousel__imgcontainer, 'model_carousel_animation'].join(' ')} >
                  <button onClick={() => setactiveModelPic(4)} className={[styles.productpage__left__carousel__imgcontainer__img, styles.productpage__left__carousel__imgcontainer__img4, 'image_shrink_animation'].join(' ')} />
                </div>
                <button className={styles.productpage__left__carousel__morebtn}>
                  <IoIosArrowForward className={styles.productpage__left__carousel__morebtn__icon}/>
                </button>
              </div>
            </div>
            <div className={styles.productpage__right}>
              <div className={styles.productpage__right__imgcontainer}>
                <ImageWrapper absolute={true} className={`${styles.productpage__right__imgcontainer__modelpic} ${activeModelPic === 0? styles.modelpic__active:styles.modelpic__passive} ${styles.initial_modelpic}`} src={ModelPic0} quality={100} priority/>
                <ImageWrapper absolute={true} className={`${styles.productpage__right__imgcontainer__modelpic} ${activeModelPic === 1? styles.modelpic__active:styles.modelpic__passive}`} src={ModelPic1} quality={100} />
                <ImageWrapper absolute={true} className={`${styles.productpage__right__imgcontainer__modelpic} ${activeModelPic === 2? styles.modelpic__active:styles.modelpic__passive}`} src={ModelPic2} quality={100} />
                <ImageWrapper absolute={true} className={`${styles.productpage__right__imgcontainer__modelpic} ${activeModelPic === 3? styles.modelpic__active:styles.modelpic__passive}`} src={ModelPic3} quality={100} />
                <ImageWrapper absolute={true} className={`${styles.productpage__right__imgcontainer__modelpic} ${activeModelPic === 4? styles.modelpic__active:styles.modelpic__passive}`} src={ModelPic4} quality={100} />
                <div className={`${styles.productpage__right__imgcontainer__modelcirclemain} ${styles.move_circle_right}`} />
                <div className={`${styles.productpage__right__imgcontainer__modelcirclesecondary} ${styles.move_circle_right}`} />
                <div className={`${styles.productpage__right__imgcontainer__modelcirclesecondary2} ${styles.move_circle_right}`} />
                <div className={`${styles.productpage__right__imgcontainer__modelcirclesecondary3} ${styles.move_circle_right}`} />
                <div className={`${styles.productpage__right__imgcontainer__modelcirclesecondary4} ${styles.move_circle_right}`} />
                <ImageWrapper absolute={true} className={[styles.productpage__right__imgcontainer__filledcircle, styles.productpge__right__imgcontainer__bitsnpieces, styles.popup_animation].join(' ')} src={filledcircle}/>
                <ImageWrapper absolute={true} className={[styles.productpage__right__imgcontainer__hollowcircle, styles.productpge__right__imgcontainer__bitsnpieces, styles.popup_animation].join(' ')} src={hollowcircle}/>
                <ImageWrapper absolute={true} className={[styles.productpage__right__imgcontainer__ribbon, styles.productpge__right__imgcontainer__bitsnpieces, styles.popup_animation].join(' ')} src={ribbon}/>
                <ImageWrapper absolute={true} className={[styles.productpage__right__imgcontainer__curvyarrowup, styles.animate_toleft].join(' ')} src={curvyarrowup}/>
                <ImageWrapper absolute={true} className={[styles.productpage__right__imgcontainer__curvyarrowleft, styles.animate_toleft].join(' ')} src={curvyarrowleft}/>
                <ImageWrapper absolute={true} className={[styles.productpage__right__imgcontainer__bladeleaf, styles.productpge__right__imgcontainer__bitsnpieces, styles.popup_animation].join(' ')} src={bladeleaf}/>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Home;