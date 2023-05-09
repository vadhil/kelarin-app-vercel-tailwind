"use client"

import {motion} from "framer-motion"


export default function Profile() {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    >
      <h1>profile</h1>
      <p>vercel is fun and good, u just have to make it as next project and connect it with github, then every change will be updated automatically</p>
    </motion.div>
  )
}
