import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from 'src/users/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService:UsersService){}

    @Get('/findAll')
    getAllUsers() : Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get('/findOne/:id')
    getOneUser(@Param('id') user_id:string) : Promise<User> {
        return this.usersService.findOne(user_id);
    }

    @Post('/singUp')
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
