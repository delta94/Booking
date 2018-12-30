/* tslint:disable */
export class UserDataInput {
    email: string;
    password: string;
}

export class LoginResponse {
    ok: boolean;
    token?: string;
}

export abstract class IMutation {
    abstract register(input: UserDataInput): RegisterResponse | Promise<RegisterResponse>;

    abstract login(input: UserDataInput): LoginResponse | Promise<LoginResponse>;
}

export abstract class IQuery {
    abstract me(): User | Promise<User>;

    abstract temp__(): boolean | Promise<boolean>;
}

export class RegisterResponse {
    ok: boolean;
}

export class User {
    id: number;
    email: string;
}
