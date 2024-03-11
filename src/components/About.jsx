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
      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Full Stack Developer with a strong foundation in TypeScript, Python, Java, JavaScript, C++, and MongoDB and a strong background in customer service, data analysis, database management, programming and workforce management. Possesses excellent communication and interpersonal skills. Proven ability to anticipate customer needs, build relationships and exceed performance goals. Highly organized and motivated to exceed expectations. Motivated and logical individual talented in data analysis, data modeling, and data visualization. Experienced in using various tools such as PowerBI, Microsoft Excel, and Python to obtain insights from data. Proven history of developing actionable insights from data to drive business decisions.
        
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about")