'use client';
import { motion } from 'framer-motion';

import Heading from '@/app/components/Heading';

const About = () => {
    return (
        <section className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <Heading level={1}>About Me</Heading>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
