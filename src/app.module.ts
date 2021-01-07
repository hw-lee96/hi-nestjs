import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UsersModule } from './users/users.module';
import { env } from './env';

const config = new env.getter().getDev();

/* 데코레이터
  @Module
 - 클래스에 함수 기능을 추가

*/

@Module({
    imports: [MoviesModule, TypeOrmModule.forRoot({
        type: 'mariadb',
        host: config.host,
        port: config.port,
        username: config.username,
        password: config.password,
        database: config.database,
        synchronize: false,
        entities : config.entities,
        autoLoadEntities: true,
        logging : true
    }),
    UsersModule],
    controllers: [AppController],
    providers: [],
})
export class AppModule {
    constructor(private connection: Connection) { }
}
