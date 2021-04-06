import styles from './Skills.module.scss'

export default function Skills() {
  return(
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h3>Skills</h3>
      </div>

      <div className={styles.listWrapper}>
        
        <ul className={styles.list}>
          <li className={styles.item}>GIT</li>
          <li className={styles.item}>HTML</li>
          <li className={styles.item}>CSS, SASS, FLEX</li>
          <li className={styles.item}>LOCALSTORAGE</li>
          <li className={styles.item}>JAVASCRIPT</li>
          <li className={styles.item}>API FETCH, AXIOS</li>
          <li className={styles.item}>REACT.JS, CLASS & FUNCTIONAL COMPONENTS, HOOKS</li>
          <li className={styles.item}>REDUX, PROPS, CALLBACKS, API CONTEXT</li>
          <li className={styles.item}>NEXT.JS, SSR</li>
        </ul>

      </div>  
    </div>
  )
}