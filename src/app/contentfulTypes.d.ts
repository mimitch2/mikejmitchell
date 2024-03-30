import { Entry, Asset } from 'contentful';
import { metadata } from './layout';
export const BlogPost = 'blogPost';

export interface Items {
    readonly posts?: ReadonlyArray<BlogPost>;
}

export interface BlogPostFields {
    readonly author?: Entry<Person>;
    readonly body: { content: any; data: any; nodeType: string };
    readonly description: { content: any; data: any; nodeType: string };
    readonly heroImage: Asset;
    readonly photos?: ReadonlyArray<Asset>;
    readonly publishDate: string;
    readonly slug: string;
    readonly tags?: ReadonlyArray<'photography'>;
    readonly title: string;
}

export interface BlogPostSys {
    readonly id: string;
    readonly createdAt: string;
    readonly updatedAt: string;
    readonly space: { sys: { type: string; linkType: string; id: string } };
}

export interface BlogPost {
    //Blog Post
    /*  */
    fields: Fields;
    metadata: string[];
    sys: Sys;
}

export const Homepage = 'homepage';
export interface Homepage {
    //Homepage
    /* Phot homepage */
    readonly description: string;
    readonly hero: Asset;
    readonly title: string;
}

export const Person = 'person';
export interface Person {
    //Person
    /*  */
    readonly company: string;
    readonly email?: string;
    readonly facebook?: string;
    readonly github?: string;
    readonly image?: Asset;
    readonly name: string;
    readonly phone?: string;
    readonly shortBio: { content: any; data: any; nodeType: string };
    readonly title: string;
    readonly twitter?: string;
}
