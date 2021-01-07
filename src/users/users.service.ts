import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import * as crypto from 'crypto';
import { exception } from 'console';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository : Repository<User>,
    ) {}

    findAll() : Promise<User[]> {
        return this.usersRepository.find();
    }

    findOne(user_id : string) : Promise<User> {
        return this.usersRepository.findOne({
            where : {
                user_id : user_id,
                useyn : 'y'
            }
        });
    }

    async remove(user_no : number) : Promise<void> {
        await this.usersRepository.delete(user_no);
    }

    async signUp(userData : CreateUserDto) {
        // 아이디 사용여부 체크
        const checkUserId = this.findOne(userData.user_id);
        if ( checkUserId ) return {cd : '409', msg : '이미 사용중인 아이디입니다.'};

        // 아이디 유효성 체크
        

        // 비밀번호 sha512 암호화
        userData.user_pw = crypto.createHash('sha512').update(userData.user_pw).digest('base64');
        await this.usersRepository.save(userData);
    }
}
