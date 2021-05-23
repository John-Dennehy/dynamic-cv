import Styles from '../styles/CV.module.scss'
import * as Types from '../lib/types'

interface Props {
  data: Array<Types.ContactDetails>
}

const ContactDetails = ({ data }: Props): JSX.Element => {

  return (
    <ul className={Styles["contact-info"]}>
      {data.map(
        contact => (
          <li key={contact.id} >
            <a href={contact.href}>
              <img className={Styles.icon} src={contact.icon.url} />
              {contact.label}
            </a>
          </li>
        )
      )}
    </ul>
  )
}

export default ContactDetails
