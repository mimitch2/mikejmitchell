'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
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
                currentPath === href ? 'current-underline' : ''
            }`}
        >
            <motion.div whileHover={{ fontSize: 20 }} whileTap={{ scale: 0.9 }}>
                <Text>{children}</Text>
            </motion.div>
        </Link>
    );
};

export default LinkComponent;
