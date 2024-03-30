import { notFound } from 'next/navigation';
import Link from 'next/link';

import { getPosts } from '@/app/api';

// export const dynamicParams = false;

export async function generateStaticParams() {
    const { posts } = await getPosts();

    return posts.map((post) => ({
        slug: post.fields.slug
    }));
}

const Post = async ({
    params
}: {
    params: {
        slug: string;
        data: any;
    };
}) => {
    const { posts } = await getPosts();
    const post = posts.find((post) => post.fields.slug === params.slug);

    if (!post) {
        return notFound();
    }

    return (
        <div>
            <h1 className="text-2xl font-bold">{post.fields.title}</h1>
        </div>
    );
};

export default Post;
