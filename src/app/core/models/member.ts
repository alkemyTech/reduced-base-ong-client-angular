export interface IMember {
    id: number,
    name: string,
    image: string,
    description: string,
    facebookUrl?: string,
    linkedinUrl?: string,
    created_at?: string,
    updated_at?: string | null,
    deleted_at?: string | null,
}
