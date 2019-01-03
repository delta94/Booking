import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from 'typeorm'

import { User } from '../user/user.entity'

@Entity()
export class Booking extends BaseEntity {
    @PrimaryGeneratedColumn() id: number

    @Column()
    type: string

    @Column()
    startDate: string

    @Column()
    endDate: string

    @Column({ unique: false })
    userId: number

    @ManyToOne(() => User, user => user.bookings)
    user: User
}
