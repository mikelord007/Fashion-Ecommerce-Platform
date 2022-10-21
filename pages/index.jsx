import {useState, useEffect} from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import ImageWrapper from '../components/ImageWrapper'
import Navbar from '../components/Navbar';
import { gsap } from "gsap";
import styles from '../styles/Home.module.css'

//assets
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
    setTimeout(() => {

      
      var tl = gsap.timeline();
      tl.to('.stagger_slide_up_title', { duration: 0.4, y: '-8rem', stagger: { amount: 0.3}})
        
      .fromTo('.stagger_slide_up',{ y: '6rem', opacity: 0.5 }, {duration: 0.4, height: 'inherit',y: '0rem', opacity: 1, stagger: { amount: 0.3} })
        
      .fromTo('.image_shrink_animation',{scale: '1.5'}, {scale: '1',duration: 0.3, stagger: { amount: 0.3}, onComplete: function () {
        gsap.set(this.targets(), { clearProps: "all" }, 0);
      }}, '-=0.9')
        
      .fromTo('.model_carousel_animation', { x: '7rem', display: 'inherit' }, {duration: 0.3, x: '0rem', stagger: { amount: 0.3}}, '-=0.3')
        
      .fromTo('.initial_modelpic',{x: '-39rem'},{duration: 0.3, x: '0', onComplete: function() {
    gsap.set(this.targets(), { clearProps: "all" }, 0);
  }})
    
    
    },2000)
  
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
                <button className={styles.productpage__left__info__addbtn}>ADD</button>
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
                <ImageWrapper absolute={true} className={`${styles.productpage__right__imgcontainer__modelpic} ${activeModelPic === 1? styles.modelpic__active:styles.modelpic__passive} initial_modelpic`} src={ModelPic1} />
                <ImageWrapper absolute={true} className={`${styles.productpage__right__imgcontainer__modelpic} ${activeModelPic === 2? styles.modelpic__active:styles.modelpic__passive}`} src={ModelPic2} />
                <ImageWrapper absolute={true} className={`${styles.productpage__right__imgcontainer__modelpic} ${activeModelPic === 3? styles.modelpic__active:styles.modelpic__passive}`} src={ModelPic3} />
                <ImageWrapper absolute={true} className={`${styles.productpage__right__imgcontainer__modelpic} ${activeModelPic === 4? styles.modelpic__active:styles.modelpic__passive}`} src={ModelPic4} />
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

export default Home;