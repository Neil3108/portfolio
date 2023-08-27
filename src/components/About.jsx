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
        Full Stack Developer with a strong foundation in TypeScript, Python, Java, JavaScript, C/C++, and MongoDB. 
        Dedicated to honing my programming skills and adept at building web applications. 
        Completed three full-stack projects using frameworks like Angular, React, Node.js, and Three.js. 
        Passionate about solving complex problems and continuously learning new technologies to enhance application development. 
        Eager to apply my project experience and technical expertise to contribute effectively to a dynamic development team.
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about")