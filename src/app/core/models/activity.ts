export interface IActivity {
    id: number;
    name: string;
    slug?: string;
    description: string;
    image: string;
    user_id?: number;
    category_id?: number;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string
}