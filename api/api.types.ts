export type RegisterUser = {
    username: string;
    password: string;
    email: string;
}

export type VerifyMailData = {
    userId : string,
    code: string,
}

export type LogInUser = {
    username : string,
    password: string,
}