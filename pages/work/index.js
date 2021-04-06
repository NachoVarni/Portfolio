import Navbar from '../../components/Navbar'
import styles from './work.module.scss'

export default function work() {
  return(
    <div className={styles.work}>
      <Navbar />
      <div className={styles.wrapper}>
        <a href='https://musikit-next.nachovarni.vercel.app/'> <img src={'images/musikitLogo.png'} className={styles.image} /></a>
        <p className={styles.text}>My first big page in which I had to work with the Spotify API</p>
      </div>
    </div>
  )
}