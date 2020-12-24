import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';

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
}
