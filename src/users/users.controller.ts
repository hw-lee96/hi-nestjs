import { Controller, Get } from '@nestjs/common';
import { User } from 'src/users/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService:UsersService){}

    @Get()
    getAllUsers() : Promise<User[]> {
        return this.usersService.findAll();
    }
}