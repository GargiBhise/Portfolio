import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/toggleButton";
import {delay, motion} from 'framer-motion';
import {useState} from 'react';

const Sidebar = () => {
  const [open,setOpen] = useState(false)
  const variants = {
    open:{
      clipPath: "circle(1200px at 50px 50px)",
      transition:{
        type:"spring",
        stiffness: 20,
        restDelta: 2
      }
    },
    closed: {
      clipPath: "circle(30pc at 50px 50px)",
      transition:{
        delay:0.5,
        type:"spring",
        stiffness: 400,
        damping: 40,
      }
    }
  }
  return <motion.div className="sidebar" animate={open ? "open" : "closed"}>
    <motion.div className="bg" variants={variants}>
         <Links/>
      </motion.div>
      <motion.div>
      <ToggleButton setOpen={setOpen}/>
    </motion.div>
    </motion.div>
}

export default Sidebar;
