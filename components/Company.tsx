import React from 'react'
import * as Types from '../lib/types'
import Styles from '../styles/CV.module.scss'
import { StructuredText } from 'react-datocms';
import { formatDate } from '../lib/dateFormat';
import { byName } from '../lib/sort';



const Company = ({ companyName, address, skills, roles, customIcon }: Types.Company): JSX.Element => {

  return (
    <div className={Styles["company-container"]}>
      <div className={Styles.company}>

        <h1 className={Styles["company-name"]}>{companyName}</h1>
        <p className={Styles["address"]}>{address}</p>

        {skills &&
          <div className={Styles.skills}>
          {skills
            .sort(byName)
            .map(
              skill => (
                <div className={Styles.icon} key={skill.id}>
                  <img src={skill.icon.url} alt={skill.name} title={skill.name} />
                </div>
              )
            )}
          </div>
        }

      </div>
      <div className={Styles.icon}>
        {console.log("icon", customIcon)}
        {
          customIcon
            ? <img src={customIcon.url} />
            : <img src={'/img/heroicons-solid_briefcase.svg'} />
        }
      </div>
      <div className={Styles["line"]} />

      {roles &&
        <div className={Styles["roles"]}>
          {roles.map(
            role => {
              console.log(role)
              return (
                <div key={role.id}>
                  <h2 className={Styles["role-title"]}>
                    <span className={Styles["date"]}>
                      {`${formatDate(role.startDate)} to ${role.endDate ? formatDate(role.endDate) : 'Present'} `}
                    </span>
                    <span className={Styles["job-title"]}>
                      {role.jobTitle}
                    </span>
                  </h2>
                  {role.summary && <StructuredText data={role.summary} />}
                </div>
              )
            }
          )}
        </div>
      }

    </div >
  )
}

export default Company
