import Navbar from '../Navbar'
import Information from '../Information'
import About from '../About'
import styles from './Hero.module.scss'
import Skills from '../Skills'
import Work from '../Work'
import Contact from '../Contact'

export default function Hero() {
  return(
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.columns}>
        <Information />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
    </div>
  )
}