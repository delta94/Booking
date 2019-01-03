/* tslint:disable */
export class BookingInput {
    type: string;
    startDate: string;
    endDate: string;
}

export class UserDataInput {
    email: string;
    password: string;
}

export class Booking {
    id: number;
    userId: number;
    type: string;
    startDate: string;
    endDate: string;
    user: User;
}

export class LoginResponse {
    ok: boolean;
    token?: string;
}

export abstract class IMutation {
    abstract createBooking(input: BookingInput): boolean | Promise<boolean>;

    abstract deleteBooking(id: number): boolean | Promise<boolean>;

    abstract register(input: UserDataInput): RegisterResponse | Promise<RegisterResponse>;

    abstract login(input: UserDataInput): LoginResponse | Promise<LoginResponse>;
}

export abstract class IQuery {
    abstract bookings(): Booking[] | Promise<Booking[]>;

    abstract booking(id: number): Booking | Promise<Booking>;

    abstract me(): User | Promise<User>;

    abstract temp__(): boolean | Promise<boolean>;
}

export class RegisterResponse {
    ok: boolean;
}

export class User {
    id: number;
    email: string;
    bookings: Booking[];
}
