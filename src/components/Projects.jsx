import { motion } from 'framer-motion'
import { PROJECTS as projects } from '../constants'
import List from '../components/List'
import { projectVariants } from '../animation/project.variant'
import Section from '../components/Section'

function Projects() {
  return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <List
      data={projects}
      getKey={project => project.link}
      getRow={project => (
        <motion.div 
          className='relative rounded-lg overflow-hidden h-[500px] transition transform'
          initial="hidden" 
          whileInView="visible"
          viewport={{ once: true }}
          variants={projectVariants}
        >
          <img 
            src={project.image} 
            alt={project.name} 
            className='absolute inset-0 w-full h-full object-cover transition-opacity duration-3f00' 
          />
          <div className="relative z-20 p-6 flex justify-between flex-col h-full bg-black/30 text-white">
            <h2 className='text-2xl font-medium mb-4'>{project.name}</h2> 
            <div className="felx-between">
              <p className="mb-4 flex-grow text-2xl">{project.description}</p>
              <a href={project.link}
                target='_blank'
                rel='noreferrer noopener'
                className='bg-white text-stone-900 rounded-full py-2 px-2 w-32 text-sm hover:bg-gray-100 text-center'
              >
                View on GitHub
              </a>
            </div>
          </div>
        </motion.div>
      )}
    />
  </div>
  );
}

export default Projects;
