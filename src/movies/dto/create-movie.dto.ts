import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMovieDto {
    @IsString()
    readonly title:string;

    @IsNumber()
    readonly year:number;

    @IsOptional()   // ??
    @IsString({each:true})      // each : 모든 요소를 하나씩 전부 검사할지 여부
    readonly genres:string[];
}