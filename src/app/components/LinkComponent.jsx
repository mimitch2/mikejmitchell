import Link from 'next/link';

const LinkComponent = ({ href, children }) => {
    return (
        <Link href={href} className="text-blue-500 hover:underline">
            {children}
        </Link>
    );
};

export default LinkComponent;
