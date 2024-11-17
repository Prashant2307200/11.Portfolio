import { motion } from "framer-motion";
import Section from "../components/Section";
import { CONTACT_CONTENT as contact_content } from "../constants"; 
import { RiTwitterXFill,RiGithubFill,RiLinkedinFill } from "react-icons/ri";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay,
    }
  }),
}

const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay
    }
  })
}

const icons = { RiTwitterXFill,RiGithubFill,RiLinkedinFill };

function Contact() {
  return (
    <>
    <motion.h3
      className="text-4xl md:text-8xl leading-none"
      initial="hidden"
      whileInView="visible"
      custom={0.4}
      variants={textVariants}
    >{contact_content.headline}</motion.h3>
    <motion.p
      className="text-lg md:text-2xl mt-6 max-w-3xl"
      initial="hidden"
      whileInView="visible"
      custom={0.6}
      variants={textVariants}
    >{contact_content.description}</motion.p>
    <motion.a
      href={`mailto:${contact_content.email}`}
      className="text-2xl md:text-3xl font-medium mt-8"
      initial="hidden"
      whileInView="visible"
      custom={0.8}
      variants={textVariants}
    >{contact_content.email}</motion.a>
    <div className="flex space-x-6 mt-8">
      {
        contact_content
        .socialLinks
        .map((link,index) => {
          const Icon = icons[link.icon];
          return (
            <motion.a
              key={link.icon}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              initial="hidden"
              whileInView="visible"
              custom={1.0 + index * 0.2}
              variants={iconVariants}
            ><Icon size={26} /></motion.a>
          )
        })
      }
    </div>
    <motion.p
      className="text-sm text-stone-400 mt-36"
      initial="hidden"
      whileInView="visible"
      custom={1.6}
      variants={textVariants}
    >{contact_content.footerText}</motion.p>
    </> 
  );
}

export default Contact;