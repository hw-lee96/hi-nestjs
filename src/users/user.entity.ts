import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BeforeInsert } from "typeorm";
import * as crypto from 'crypto';

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    user_no : number;

    @Column()
    user_id : string;

    @Column()
    user_pw : string;

    @Column()
    user_nm : string;

    @Column()
    ins_dt : Date;

    @Column()
    upd_dt : Date;

    @Column({default:'y'})
    useyn : string;

    // @BeforeInsert()가 작동하지 않아서 일단 서비스에서 암호화 처리함
    @BeforeInsert()
    async hashPassword() : Promise<void> {
        this.user_pw = await crypto.createHash('sha512').update(this.user_pw).digest('base64');
    }
}
