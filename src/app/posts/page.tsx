import { getPosts } from '@/app/api';
import { BlogPost } from '@/app/contentfulTypes';

const Posts = async () => {
    const { posts } = await getPosts();

    return (
        <section className="section">
            <div className="container">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10">
                    {posts?.map((post, i) => (
                        <h3 key={post.fields.slug}>
                            {post?.fields?.title ?? ''}
                        </h3>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Posts;
