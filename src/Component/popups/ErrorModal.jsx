import React from "react";
import { motion } from 'framer-motion';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';


export default function ErrorModal() {

    const errorIconVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
          scale: 1,
          rotate: 0,
          transition: { type: "spring", stiffness: 200, damping: 10 },
        },
      };
  return (
    <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="fixed inset-0 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm z-50"
      >
        <motion.div
          className="w-full max-w-sm overflow-hidden bg-white rounded-2xl shadow-2xl border-4 border-red-500"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="p-6">
            <div className="mb-6 flex justify-center">
              <div className="relative w-24 h-24">
                <motion.div
                  className="absolute inset-0 rounded-full bg-red-100"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center text-red-500"
                  variants={errorIconVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <X size={60} strokeWidth={3} />
                </motion.div>
              </div>
            </div>
            <motion.h2
              className="text-2xl font-bold text-center mb-2 text-red-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Oops!
            </motion.h2>
            <motion.p
              className="text-center text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Something went wrong with the payment.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                onClick={onAction}
                className="w-full bg-red-500 hover:bg-red-600"
              >
                Try Again
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
  );
}
