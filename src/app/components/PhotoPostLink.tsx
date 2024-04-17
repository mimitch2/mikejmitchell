import Link from 'next/link';
import Image from 'next/image';

import Heading from '@/app/components/Heading';

const PhotoPostLink = ({
    slug,
    img,
    title
}: {
    slug: string;
    img: {
        fields: {
            file: {
                url: string;
                details: {
                    image: {
                        width: number;
                        height: number;
                    };
                };
            };
        };
    };
    title: string;
}) => {
    return (
        <Link href={`/photos/${slug}`}>
            <div className="h-96 relative hover:opacity-50 transition ease-in-out duration-300">
                <Image
                    src={`https:${img.fields.file.url}`}
                    alt={title}
                    layout="fill" // Fills the container with the image
                    objectFit="cover" // Adjusts the size of the image to fill the container while preserving its aspect ratio
                    objectPosition="center" // Optional: Adjusts the alignment of the image
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 h-2/4">
                    <Heading level={3} weight="normal">
                        {title}
                    </Heading>
                </div>
            </div>
        </Link>
    );
};

export default PhotoPostLink;
