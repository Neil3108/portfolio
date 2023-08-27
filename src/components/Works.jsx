import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

const ProjectCard = ({index, name, description, tags, image, source_code_link, website_link}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index*0.5, 0.75)}>
      <Tilt
        options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px] cursor-pointer" onClick={() => window.open(website_link, "_blank")}>
          <img
            src={image}
            alt={name}
            className="w-full h-half objext-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img 
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-white font-bold text-[24px]">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[14px]">
            {description}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants = {textVariant()}>
      <p className={styles.sectionSubText}>
        Side Project
      </p>
      <h2 className={styles.sectionHeadText}>
        Projects
      </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p 
          variants={fadeIn("","", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Highlighted within my portfolio are select projects exemplifying my skills and experience through real-world instances of my work.Each project is accompanied by concise descriptions and direct links to corresponding code repositories. Simply click on the image to visit the website. The server used to host the backend of Winnipeg Buy and Sell and Winnipeg Autoshop has an auto-shutdown mechanism after 15 minutes of inactivity resulting in a brief reactivation delay upon the initial API call. Kindly consider refreshing the page should an initial blank website. 
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
          key={`project-${index}`}
          index={index}
          {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")