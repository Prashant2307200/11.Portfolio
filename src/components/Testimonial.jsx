import Section from "./Section";
import List from "./List";
import { motion } from "framer-motion";
import { TESTIMONIALS as testimonials } from "../constants";

const childVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 1 * 0.5
    }
  }
};

function Testimonial() {
  return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <List 
      data={testimonials}
      getKey={null}
      getRow={testimonial => (
        <motion.div
          className="relative rounded-lg p-6 h-full backdrop-blur-3xl bg-stone-500/10 "
          initial="hidden"
          whileInView="visible"
          variants={childVariant}
        >
          <div className="flex-items-center mb-4">
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="w-12 h-12 rounded-full mr-4"
              loading="lazy"
            />
            <div className="text-lg font-semibold">
              <h2>{testimonial.name}</h2>
              <p className="text-sm font-tight">{testimonial.title}</p>
            </div>
          </div>
          <p className="leading-relaxed">{testimonial.feedback}</p>
        </motion.div>
      )}
    />
  </div>
  );
}

export default Testimonial;