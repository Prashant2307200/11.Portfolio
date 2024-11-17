import Section from "../components/Section";
import { motion } from "framer-motion";
import List from "../components/List";
import { EXPERIENCES as experiences } from "../constants";

const Experience = ({ experience }) => (
  <motion.div variants={childVariants}>
    <div className="flex flex-col md:flex-row md:justify-between"> 
      <div className="text-sm md-w-1/4 mb-2 md:mb-0 p-4">{experience.yearRange}</div>
      <div className="md:w-3/4 mb-10">
        <div className="max-w-3xl backdrop-blur-3xl p-4 bg-stone-600/10 rounded-lg">
          <h2 className="text-xl mb-2">{experience.title}</h2>
          <p className="mb-4 text-sm italic">{experience.location}</p>
          <ul className="list-disc list-inside">
            <List 
              data={experience.description}
              getKey={null}
              getRow={desc => (<li>{desc}</li>)}
            />
          </ul>
        </div>
      </div>
    </div>
  </motion.div>
)

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.3
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    }
  }
};

function Experiences() {
  return ( 
    <motion.div
      className="space-y-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <List 
        data={experiences}
        getKey={(experience => experience.yearRange)}
        getRow={experience => <Experience experience={experience} />}
      />
    </motion.div>
  );
}

export default Experiences;