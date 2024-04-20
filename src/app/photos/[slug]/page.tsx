import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { getPosts } from '@/app/api';

// export const dynamicParams = false;

export async function generateStaticParams() {
    const { posts } = await getPosts();

    return posts.map((post) => {
        return { slug: post.fields.slug };
    });
}

const Post = async ({
    params
}: {
    params: {
        slug: string;
    };
}) => {
    const { posts } = await getPosts();
    const post = posts.find((post) => {
        return post.fields.slug === params.slug;
    });

    if (!post) {
        return notFound();
    }

    return (
        <div>
            <h1 className="text-2xl font-bold">
                {post.fields.title as string}
            </h1>
            {/* @ts-ignore */}
            {post?.fields?.photos?.map((photo: any) => {
                return (
                    <Image
                        key={photo.sys.id}
                        src={`https:${photo.fields.file.url}`}
                        alt={photo.fields.title}
                        width={400}
                        height={300}
                    />
                );
            })}
            {/* <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry>
                    {post?.fields?.photos?.map((photo) => {
                        return (
                            <img
                                key={photo.sys.id}
                                src={`https:${photo.fields.file.url}`}
                                alt={photo.fields.title}
                            />
                        );
                    })}
                </Masonry>
            </ResponsiveMasonry> */}
        </div>
    );
};

export default Post;
