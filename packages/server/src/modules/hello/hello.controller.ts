import { Controller, Get } from '@nestjs/common'

@Controller('hello')
export class HelloController {
    @Get()
    findAll() {
        return 'This action returns all cats'
    }
}
