export interface User{
    usuario: string,
    password: string,
    role?: string,
    id?: string
}

export interface Login{
    token?: string
}