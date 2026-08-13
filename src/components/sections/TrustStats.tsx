"use client"

import { statistics } from "@/data/mockData"
import { motion } from "framer-motion"

export function TrustStats() {
  return (
    <section className="bg-gray-900 pb-16 pt-0 relative z-20 -mt-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <span className="text-3xl md:text-4xl font-black text-white mb-1">
                {stat.value}
              </span>
              <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
