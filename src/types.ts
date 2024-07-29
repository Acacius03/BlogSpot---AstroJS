export interface BlogData {
    title: string;
    created_at: Date;
    updated_at: Date;
    image?: string | null;
    tags: string[];
    description: string;
}
  
export interface Blog {
    slug: string;
    data: BlogData;
}
  
export interface Props {
    blog: Blog;
}