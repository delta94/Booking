import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'

import { UserModule } from './modules/user/user.module'
import { AuthModule } from './modules/auth/auth.module'
import { BookingModule } from './modules/booking/booking.module'

@Module({
    imports: [
        AuthModule,
        UserModule,
        BookingModule,
        TypeOrmModule.forRoot({
            // type: 'postgres',
            // host: 'db',
            // port: 5432,
            // username: 'root',
            // password: 'root',
            // database: 'booking',
            // entities: [__dirname + '/**/*.entity{.ts,.js}'],
            // synchronize: true
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'marcin',
            password: 'marcin',
            database: 'booking',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true
        }),
        GraphQLModule.forRoot({
            context: ({ req }) => ({ req }),
            typePaths: ['./**/*.graphql'],
            definitions: {
                path: join(process.cwd(), 'src/graphql.schema.ts'),
                outputAs: 'class'
            },
            path: '/'
        })
    ]
})
export class AppModule {}
