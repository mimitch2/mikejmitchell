import { client } from '@/app/api';
import { BlogPost } from '@/app/contentfulTypes';

export const getPosts = async () => {
    const response = await client.getEntries({ content_type: 'blogPost' });

    return {
        posts: response.items
    };
};

const Posts = async () => {
    const { posts } = await getPosts();

    return (
        <section className="section">
            <div className="container">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10">
                    {posts.map((post, i) => (
                        <h3 key={post.fields.slug}>{post.fields.title}</h3>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Posts;
