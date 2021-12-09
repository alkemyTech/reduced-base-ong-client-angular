import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export interface IContact {
    id: number,
    name: string,
    email: string,
    phone: string,
    message: string,
    deleted_at?: string,
    created_at?: string,
    updated_at?: string
}