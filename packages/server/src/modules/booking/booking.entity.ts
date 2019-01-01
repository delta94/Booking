import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm'

import { User } from '../user/user.entity'

@Entity()
export class Booking extends BaseEntity {
    @PrimaryGeneratedColumn() id: number

    @Column()
    userId: number

    @Column()
    type: string

    @Column()
    startDate: Date

    @Column()
    endDate: Date

    @OneToOne(() => User)
    @JoinColumn()
    user: User
}
