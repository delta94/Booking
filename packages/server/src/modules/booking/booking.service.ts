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
        return await this.bookingRepo.find()
    }

    async findOne(id: number) {
        return await this.bookingRepo.findOne(id)
    }

    async create(booking: BookingDto, user) {
        const newBooking = this.bookingRepo.create({ ...booking, userId: user })

        return await this.bookingRepo.save(newBooking)
    }
}
