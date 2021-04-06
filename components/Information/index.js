import styles from './Information.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'

export default function Information() {
  return(
    <div className={styles.hero} id='information'>

      <div className={styles.title}>
        <h3>Name</h3>
      </div>


      <div className={styles.wrapper}>
        <div className={styles.nameWrapper}>
          <h2 className={styles.name}>Ignacio Varni</h2>
          <p className={styles.info}>Web developer</p>
        </div>

      </div>

      <div className={styles.contact}>
        <h3 className={styles.contactTitle}>Lets keep in contact!</h3>
        <span className={styles.contactData}><FontAwesomeIcon icon={faEnvelopeOpenText} />nachovarni6@gmail.com</span>
        {/* <span className={styles.contactData}><FontAwesomeIcon icon={faFileAlt} /><a href='/public/files/CV-IGNACIO-VARNI.docx' download='IGNACIO VARNI CV'>CV</a></span> */}
        <span className={styles.contactData}><FontAwesomeIcon icon={faLinkedin} /><a href='https://www.linkedin.com/in/ignacio-varni-337970203/'>https://www.linkedin.com/in/ignacio-varni</a></span>
      </div>
    </div>
  )
}