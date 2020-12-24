import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository : Repository<User>,
    ) {}

    findAll() : Promise<User[]> {
        return this.usersRepository.find();
    }

    findOne(user_no : string) : Promise<User> {
        return this.usersRepository.findOne(user_no);
    }

    async remove(user_no : string) : Promise<void> {
        await this.usersRepository.delete(user_no);
    }

    async signUp(userData : CreateUserDto) {
        await this.usersRepository.save(userData);
    }
}
