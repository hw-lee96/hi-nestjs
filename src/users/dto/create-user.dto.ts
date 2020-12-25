import { IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    readonly user_id : string;

    @IsString()
    user_pw : string;

    @IsString()
    readonly user_nm : string;
}
