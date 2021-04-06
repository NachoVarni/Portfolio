import styles from './Navbar.module.scss'
import Link from 'next/link'

export default function Navbar() {
  return(
    <header className={styles.header}>
      <Link href='#information'><span className={styles.home}>Home</span></Link>
      <ul className={styles.list}>
        <Link href='#projects'><li className={styles.item}>My work</li></Link>
        <Link href='#contact'><li className={styles.item}>Contact</li></Link>
      </ul>
    </header>
  )
}