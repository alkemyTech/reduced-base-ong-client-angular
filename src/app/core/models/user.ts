export interface IUser {
    id?: number,
    name: string,
    email: string,
    password: string,
    address?: string,
    role_id: number,
    profile_image: string,
    email_verified_at?: string,
    remember_token?: string,
    created_at?: string,
    updated_at?: string,
    deleted_at?: string,
    group_id?: number,
    latitude?: number,
    longitude?: number,
}
