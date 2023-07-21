// pages/index.js
import Image from 'next/image';
import { motion } from 'framer-motion';
import Layout from '../layout';

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Image src="/next.svg" alt="Next.js Logo" width={180} height={37} />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl font-bold mt-8 text-center"
        >
          Your Name
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-xl mt-2 text-center"
        >
          Web Developer
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-6 bg-purple text-white px-6 py-3 rounded-lg"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-purple inline-block py-2 px-4 rounded-lg"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Home;
