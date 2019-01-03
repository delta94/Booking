import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Booking } from './booking.entity'
import { BookingDto } from './dto/booking.dto'

@Injectable()
export class BookingService {
    constructor(
        @InjectRepository(Booking)
        private readonly bookingRepo: Repository<Booking>
    ) {}

    async findAll() {
        return await this.bookingRepo.find({ relations: ['user'] })
    }

    async findOne(id: number) {
        return await this.bookingRepo.findOne(id, { relations: ['user'] })
    }

    async create(booking: BookingDto, user) {
        const bookings = await this.bookingRepo
            .createQueryBuilder('booking')
            .where('booking.startDate < :endDate AND booking.endDate > :startDate', {
                startDate: booking.startDate,
                endDate: booking.endDate
            })
            .getMany()

        if (bookings.length > 0) {
            return false
        }

        const newBooking = this.bookingRepo.create({ ...booking, userId: user })

        await this.bookingRepo.save(newBooking)

        return true
    }

    async delete(id: number) {
        try {
            await this.bookingRepo.delete(id)

            return true
        } catch (err) {
            return false
        }
    }
}
