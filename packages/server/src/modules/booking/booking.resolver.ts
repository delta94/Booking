import { Resolver, Args, Mutation, Query } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'

import { BookingService } from './booking.service'
import { GqlAuthGuard } from '../auth/guards/GqlAuthGuard'
import { BookingDto } from './dto/booking.dto'
import { Usr } from '../user/user.decorator'

@Resolver()
export class BookingResolver {
    constructor(private readonly bookingService: BookingService) {}

    @Query('bookings')
    findAll() {
        return this.bookingService.findAll()
    }

    @Query('booking')
    findOne(@Args('id') id: number) {
        return this.bookingService.findOne(id)
    }

    @Mutation('createBooking')
    @UseGuards(new GqlAuthGuard())
    create(@Args('input') input: BookingDto, @Usr() user) {
        return this.bookingService.create(input, user)
    }
}
