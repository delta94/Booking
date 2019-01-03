import * as bcrypt from 'bcryptjs'
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToMany } from 'typeorm'

import { Booking } from '../booking/booking.entity'

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    password: string

    @OneToMany(() => Booking, booking => booking.user)
    bookings: Booking[]

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10)
    }
}
