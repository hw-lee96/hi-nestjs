import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UsersModule } from './users/users.module';

/* 데코레이터
  @Module
 - 클래스에 함수 기능을 추가

*/
@Module({
  imports: [MoviesModule, TypeOrmModule.forRoot({autoLoadEntities:true}), UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
