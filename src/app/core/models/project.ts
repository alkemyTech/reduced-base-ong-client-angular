export interface IProject {
    id: number,
    title: string,
    description: string,
    image: string,
    due_date: string,
    created_at?: string,
    updated_at?: string,
    deleted_at?: string,
}