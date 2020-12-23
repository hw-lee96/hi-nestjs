import { PartialType } from "@nestjs/mapped-types";
import { CreateMovieDto } from "./create-movie.dto";

// 부분 타입으로 생성함. 
// 부분 타입은 베이스 타입이 필요하기 때문에 CreateMovieDto를 기입
// 이렇게 생성한 updateMovieDto는 CreateMovieDto랑 동일하지만 전부 필수 입력이 아니라는 점만 다르다.
export class UpdateMovieDto extends PartialType(CreateMovieDto){}