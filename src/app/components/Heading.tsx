import { Space_Grotesk, Ubuntu, Saira_Condensed } from 'next/font/google';

const font = Saira_Condensed({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700'],
    style: ['normal']
});

type Level = 1 | 2 | 3 | 4 | 5 | 6;
type Weight = 'light' | 'normal' | 'medium' | 'bold';

const LEVEL_TO_FONT_SIZE_MAP: { [key in Level]: string } = {
    1: 'text-6xl',
    2: 'text-5xl',
    3: 'text-4xl',
    4: 'text-3xl',
    5: 'text-2xl',
    6: 'text-xl'
};

const Heading = ({
    children,
    level,
    weight = 'medium'
}: {
    children: string;
    level: Level;
    weight?: Weight;
}) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    const className = `${LEVEL_TO_FONT_SIZE_MAP[level]} font-${weight} ${font.className}`;

    return <Tag className={className}>{children}</Tag>;
};

export default Heading;
