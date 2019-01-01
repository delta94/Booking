import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PassportModule } from '@nestjs/passport'

import { BookingResolver } from './booking.resolver'
import { BookingService } from './booking.service'
import { Booking } from './booking.entity'

@Module({
    imports: [TypeOrmModule.forFeature([Booking]), PassportModule.register({ defaultStrategy: 'jwt' })],
    providers: [BookingResolver, BookingService]
})
export class BookingModule {}
