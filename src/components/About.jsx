import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <br />
        <br />
        <p className={styles.sectionSubText}>
          Introduction</p>
        <h2 className={styles.sectionHeadText}>
          Overview</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <p className='mb-4'>
          I'm a CRM Developer and Data Analyst based in Winnipeg with a B.S. in Computer Science (Database Management specialization). I specialize in building robust backend systems and data pipelines - from Salesforce customization (Apex, LWC, Lightning Flows, REST API integrations) to SQL-based data modeling, Power BI dashboards, and workflow automation with Power Automate.
        </p>
        <p className='mb-4'>
          Currently at Nexom, I design and build custom Salesforce solutions, develop Power Automate flows for cross-platform automation, and maintain API integrations connecting Salesforce with third-party platforms like Smartsheet and Epicor. I also lead end-to-end data integration for newly acquired companies - handling data discovery, schema analysis, migration and build Power BI dashboards that surface real-time pipeline and operational metrics across the organization.
        </p>
        <p>
          Outside of work, I enjoy building data-focused personal projects that let me explore areas like business intelligence, data modeling, and analytics engineering - bridging the gap between raw data and meaningful insight.
        </p>
      </motion.div>
    </>
  )
}

export default SectionWrapper(About, "about")