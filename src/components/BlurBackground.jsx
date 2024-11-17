import { motion } from 'framer-motion';
import List from './List';  

const circleVariants = {
  animate1: {
    scale: [1, 1.1, 1],
    x: [0, 100, 0],
    y: [0, 50, 0],
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity, 
    }
  },
  animate2: {
    scale: [1, 1.2, 1],
    x: [0, 120, 0],
    y: [0, -60, 0],
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity, 
    }
  },
  animate3: {
    scale: [1, 1.3, 1],
    x: [0, 140, 0],
    y: [0, 70, 0],
    transition: {
      duration: 3,
      ease: 'easeInOut',
      repeat: Infinity, 
    }
  },
  animate4: {
    scale: [1, 1.4, 1],
    x: [0, 160, 0],
    y: [0, -80, 0],
    transition: {
      duration: 4,
      ease: 'easeInOut',
      repeat: Infinity, 
    }
  },
  animate5: {
    scale: [1, 1.5, 1],
    x: [0, 180, 0],
    y: [0, 90, 0],
    transition: {
      duration: 3,
      ease: 'easeInOut',
      repeat: Infinity, 
    }
  },
  animate6: {
    scale: [1, 1.6, 1],
    x: [0, 200, 0],
    y: [0, -100, 0],
    transition: {
      duration: 3,
      ease: 'easeInOut',
      repeat: Infinity, 
    }
  },
};

const data = [
  { style: "rounded-full absolute h-[350px] w-[250px] bg-yellow-500", animate: "animate1" },
  { style: "rounded-full absolute h-[360px] w-[260px] bg-orange-500", animate: "animate2" },
  { style: "rounded-full absolute h-[370px] w-[270px] bg-green-500", animate: "animate3" },
  { style: "rounded-full absolute h-[380px] w-[280px] bg-purple-500", animate: "animate4" },
  { style: "rounded-full absolute h-[390px] w-[290px] bg-blue-500", animate: "animate5" },
  { style: "rounded-full absolute h-[400px] w-[300px] bg-pink-500", animate: "animate6" },
];

const CircleItem = ({ item }) => (
  <motion.div 
    className={item.style}
    variants={circleVariants} 
    animate={circleVariants[item.animate]}  
  ></motion.div>
)

function BlurBackground() {
  return (
    <div className='fixed-w-full h-full overflow-hidden -z-10 pointer-events-none flex-center filter blur-[100px] opacity-70'>
      <List 
        data={data}
        getKey={item => `${item.style}-${item.animate}`}
        getRow={item => <CircleItem item={item} />}
      />
    </div>
  );
}

export default BlurBackground;

