import React from "react";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function SucessModal() {
    const successIconVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
          pathLength: 1,
          opacity: 1,
          transition: { duration: 0.5, ease: "easeInOut" },
        },
      }
      
  return (
    <>
      <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm z-50"
        >
          <motion.div
            className="w-full max-w-sm overflow-hidden bg-white rounded-2xl shadow-2xl border-4 border-green-500"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="p-6">
              <div className="mb-6 flex justify-center">
                <div className="relative w-24 h-24">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-green-100"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center text-green-500"
                    initial="hidden"
                    animate="visible"
                  >
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <motion.path
                        d="M20 6L9 17L4 12"
                        variants={successIconVariants}
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
              <motion.h2
                className="text-2xl font-bold text-center mb-2 text-green-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Success!
              </motion.h2>
              <motion.p
                className="text-center text-gray-600 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Payment processed successfully.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  onClick={onAction}
                  className="w-full bg-green-500 hover:bg-green-600"
                >
                  Great!
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
