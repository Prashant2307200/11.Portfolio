import List from './List';
import { ABOUT_CONTENT as about_content } from '../constants';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function About() {
  return (
    <div className='max-w-4xl mx-auto'>
    <List 
      data={about_content.paragraphs}
      getKey={null}
      getRow={paragraph => 
        (
        <motion.p 
          className='text-xl md:text-2xl lg:text-4xl mb-10 leading-relaxed'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textVariants}
        >
          {paragraph}
        </motion.p>
      )}
    />
  </div>
  )
}


export default About;