
import React from 'react'
import { motion } from 'framer-motion';
import { StructuredText, StructuredTextDocument } from 'react-datocms';
import SectionContainer from './SectionContainer';
import ContactDetails from './ContactDetails';
import Skills from './Skills';
import Experience from './Experience';
import Styles from '../styles/CV.module.scss'
import * as Types from '../lib/types'


interface CVProps {
  name: string
  personalSummary: StructuredTextDocument
  contactDetails: Array<Types.ContactDetails>,
  skills: Array<Types.Skill>,
  experience: Array<Types.Company>,
}

const CV = ({ name, personalSummary, contactDetails, skills, experience }: CVProps): JSX.Element => {

  console.log("CV: ", contactDetails)

  return (
    <motion.div
      className={Styles['cv-container']}
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{ duration: 0.8 }}
    >
      <header className={Styles.header}>
        <ContactDetails data={contactDetails} />
        <div className={Styles.title}>
          <h1>{name}</h1>
          <StructuredText data={personalSummary} />
        </div>
      </header>

      <div className={Styles.body}>

        <SectionContainer name="skills" label="Technical Skills" iconSrc={"/img/heroicons-solid_code.svg"} >
          <Skills data={skills} />
        </SectionContainer>

        <SectionContainer name="experience" label="Relevant Experience" iconSrc={"/img/fa-solid_globe-europe.svg"}>
          <Experience companies={experience} />
        </SectionContainer>

      </div>

      <footer className={Styles.footer}>

      </footer>

    </motion.div>
  )
}

export default CV



