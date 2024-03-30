import Link from 'next/link';
import Image from 'next/image';

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
            <div className="h-96 w-full relative hover:opacity-50 transition ease-in-out duration-300">
                <Image
                    src={`https:${img.fields.file.url}`}
                    alt={title}
                    layout="fill"
                    objectFit="cover" // Adjusts the size of the image to fill the container while preserving its aspect ratio
                    objectPosition="center" // Optional: Adjusts the alignment of the image
                />
                <h1 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-4xl font-bold p-4 h-2/4">
                    {title}
                </h1>
            </div>
        </Link>
    );
};

export default PhotoPostLink;
