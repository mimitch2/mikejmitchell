'use client';
import { useState, useEffect } from 'react';
import { getPosts } from '@/app/api';
import { BlogPost, Items } from '@/app/contentfulTypes';
import PhotoPostLink from '@/app/components/PhotoPostLink';
import { motion } from 'framer-motion';

const Photos = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const items = await getPosts();
            setPosts(items.posts);
        };

        fetchPosts();
    }, []);

    return (
        <section className="section">
            <div className="container">
                <div className="flex flex-col gap-4">
                    {posts?.map((post, i) => (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ type: 'just', delay: i && i * 0.1 }}
                            key={post.fields.slug}
                        >
                            <PhotoPostLink
                                slug={post.fields.slug as string}
                                img={post.fields.heroImage}
                                title={post.fields.title}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Photos;
