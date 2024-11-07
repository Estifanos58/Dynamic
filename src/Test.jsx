import React from 'react'
import {motion} from 'framer-motion'

function Test() {

    const variants ={
        visible: {opacity: 1},
        hidden: {opacity: 0}
    }

  return (
    <div className='course'>
        <motion.div 
            className="box" 
            initial={{opacity:0.5, scale:0.5}} 
            whileHover={{opacity:1, scale:2 }}
            // animate={{opacity: 1, scale:1, x: 100, y: 100}} 
            transition={{duration: 2}}
            drag
            >

            </motion.div>
    </div>
  )
}

export default Test