import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')       // Controller 데코레이터에 기입한 movies가 엔트리포인트(진입 지점)가 된다.
export class MoviesController {

    /* 
        movies.module에서 providers를 통해 의존성 주입(Dependency Injection)이 이뤄졌기 때문에
        생성자(constructor)를 통한 service 선언이 가능하다.
    */
    constructor(private readonly moviesService:MoviesService) {}

    @Get()
    getAll():Movie[] {
        return this.moviesService.getAll();
    }
    
    @Get("/:id")
    getOne(@Param("id") movieId:number):Movie {
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto) {
        return this.moviesService.create(movieData);
    }

    @Delete("/:id") 
    remove(@Param("id") movieId:number) {
        return this.moviesService.deleteOne(movieId);
    }

    // @Put()      // put:모든 리소스를 update
    @Patch('/:id')      // patch: 리소스의 일부만 update
    patch(@Param('id') id:number, @Body() updateData: UpdateMovieDto) {
        return this.moviesService.update(id, updateData);
    }
}
