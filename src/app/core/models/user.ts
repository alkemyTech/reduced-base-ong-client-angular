export interface IUser {
    id?: number,
    name: string,
    email: string,
    password: string,
    address?: string | null,
    role_id: number,
    profile_image: string | null,
    email_verified_at?: string | null,
    remember_token?: string | null,
    created_at?: string | null,
    updated_at?: string | null,
    deleted_at?: string | null,
    group_id?: number | null,
    latitude?: number | null | string,
    longitude?: number | null | string,
}
