import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { HelloModule } from './modules/hello/hello.module'

@Module({
    imports: [
        HelloModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'db',
            port: 5431,
            username: 'root',
            password: 'root',
            database: 'booking',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true
        })
    ]
})
export class AppModule {}
