import { createClient } from 'contentful';

import { BlogPost, Items } from '@/app/contentfulTypes';

export const createContentClient = () => {
    return createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string
    });
};
export const client = createContentClient();

export const getEntriesByType = async (type: string) => {
    const response = await client.getEntries({
        content_type: type
    });

    return response.items;
};

export const getPosts = async () => {
    const response = await client.getEntries({ content_type: 'blogPost' });

    // <Promise, { posts: BlogPost[] }>
    return {
        posts: response.items
    };
};
