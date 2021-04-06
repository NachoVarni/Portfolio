import styles from './About.module.scss'

export default function about() {
  return(
    <>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h3>About</h3>
        </div>
        <div className={styles.textWrapper}>
          <p className={styles.text}>Hi there, I'm just really excited to make my first steps in the world of development. Always ready to learn new things and get better.</p>
        </div>
        
      </div>
      
    </>
  )
}