import { getPosts } from '@/app/api';
import { BlogPost, Items } from '@/app/contentfulTypes';
import PhotoPostLink from '@/app/components/PhotoPostLink';

const Photos = async () => {
    const items = await getPosts();
    const { posts } = items;

    return (
        <section className="section">
            <div className="container">
                <div className="flex flex-col gap-4">
                    {posts?.map((post, i) => (
                        <PhotoPostLink
                            key={post.fields.slug}
                            slug={post.fields.slug as string}
                            img={post.fields.heroImage}
                            title={post.fields.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Photos;
