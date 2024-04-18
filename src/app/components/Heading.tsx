import { Space_Grotesk, Ubuntu, Saira_Condensed } from 'next/font/google';

const font = Saira_Condensed({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700'],
    style: ['normal']
});

type Level = 1 | 2 | 3 | 4 | 5 | 6;
type Weight = 'light' | 'normal' | 'medium' | 'bold';
type Color = 'base' | 'light' | 'x-light';

const LEVEL_TO_FONT_SIZE_MAP: { [key in Level]: string } = {
    1: 'text-6xl',
    2: 'text-5xl',
    3: 'text-4xl',
    4: 'text-3xl',
    5: 'text-2xl',
    6: 'text-xl'
};

const COLOR_TO_CLASS_MAP: { [key in Color]: string } = {
    base: 'text-slate-700',
    light: 'text-slate-400',
    'x-light': 'text-slate-200'
};

const Heading = ({
    children,
    level = 1,
    weight = 'medium',
    color = 'base'
}: {
    children: string | number;
    level?: Level;
    weight?: Weight;
    color?: Color;
}) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    const className = `${LEVEL_TO_FONT_SIZE_MAP[level]} ${COLOR_TO_CLASS_MAP[color]} font-${weight} ${font.className}`;

    return <Tag className={className}>{children}</Tag>;
};

export default Heading;
