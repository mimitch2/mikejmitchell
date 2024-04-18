'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Heading from '@/app/components/Heading';
import Text from '@/app/components/Text';
import './linkComponent.css';

const LinkComponent = ({
    href,
    children
}: {
    href: string;
    children: string | number;
}) => {
    const currentPath = usePathname();

    return (
        <Link
            href={href}
            prefetch={true}
            className={`hover-underline ${
                currentPath === href ? 'current-underline' : 'other-route'
            }`}
        >
            <motion.div whileTap={{ scale: 0.9 }}>
                <Heading level={6}>{children}</Heading>
            </motion.div>
        </Link>
    );
};

export default LinkComponent;
