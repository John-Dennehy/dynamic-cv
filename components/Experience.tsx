
import Company from './Company'
import * as Types from '../lib/types'
import Styles from '../styles/CV.module.scss'

const Experience = ({ companies }: Types.Experience): JSX.Element => {
  console.log("companies", companies);
  return (
    <div className={Styles["experience"]} >
      {companies.map(
          (company) => {
            console.log("company:", company)
            return (
              <Company
                id={company.id}
                key={company.id}
                companyName={company.companyName}
                address={company.address}
                roles={company.roles}
                skills={company.skills}
                customIcon={company.customIcon}
              />
            )
          }
        )}
    </div>
  )
}

export default Experience
