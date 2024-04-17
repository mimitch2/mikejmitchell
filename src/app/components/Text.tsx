import { Source_Code_Pro } from 'next/font/google';

const font = Source_Code_Pro({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    style: ['normal']
});

type Tag = 'p' | 'span';
type Weight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';

const Text = ({
    children,
    tag = 'p',
    weight = 'normal'
}: {
    children: string | number;
    tag?: Tag;
    weight?: Weight;
}) => {
    const Tag = tag as keyof JSX.IntrinsicElements;
    const className = `font-${weight} ${font.className}`;

    return <Tag className={className}>{children}</Tag>;
};

export default Text;
