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
    id: string;
    userId: string;
    type: string;
    startDate: string;
    endDate: string;
}

export class LoginResponse {
    ok: boolean;
    token?: string;
}

export abstract class IMutation {
    abstract createBooking(input: BookingInput): Booking | Promise<Booking>;

    abstract register(input: UserDataInput): RegisterResponse | Promise<RegisterResponse>;

    abstract login(input: UserDataInput): LoginResponse | Promise<LoginResponse>;
}

export abstract class IQuery {
    abstract bookings(): Booking[] | Promise<Booking[]>;

    abstract booking(id: string): Booking | Promise<Booking>;

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
