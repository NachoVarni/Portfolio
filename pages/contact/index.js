import Navbar from '../../components/Navbar'
import styles from './contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'

export default function contact() {
  return(
    <div className={styles.contact}>
      <Navbar />
      <div className={styles.wrapper}>
        <a>Email: nachovarni6@gmail.com</a>
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faFileAlt} />
        <FontAwesomeIcon icon={faEnvelopeOpenText} />
      </div>
      
    </div>
  )
}