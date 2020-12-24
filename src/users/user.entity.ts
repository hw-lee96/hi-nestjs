import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
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
}
