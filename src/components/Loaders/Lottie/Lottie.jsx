import Lottie from 'lottie-react'
import loaderAnimation from '../../../assets/imgs/New Animation.json'
import styles from './lottie.module.css'

const LottieLoader = () => {
  return (
    <Lottie animationData={loaderAnimation} loop={true} className={styles.loader}/>
  )
}

export default LottieLoader