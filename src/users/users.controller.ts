import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from 'src/users/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService:UsersService){}

    @Get()
    getAllUsers() : Promise<User[]> {
        return this.usersService.findAll();
    }

    @Post()
    /* 
        {
            "user_id" : "testId1",
            "user_pw" : "testpw1",
            "user_nm" : "testnm1"
        }
     */
    signUp(@Body() userData : CreateUserDto) {
        return this.usersService.signUp(userData);
    }
}
