import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
    let service: MoviesService;

    // 테스트 하기 전 실행
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [MoviesService],
        }).compile();

        service = module.get<MoviesService>(MoviesService);
    });

    // service가 정의 되었는지 확인
    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    // getAll()을 했을 때 return 되는 결과 타입이 Array인지 확인
    describe('getAll()', () => {
        it('should return an array', () => {
            const result = service.getAll();
            expect(result).toBeInstanceOf(Array);
        });
    });

    // getOne()을 했을 때 제대로 정의 되었는지, 생성한 아이디와 일치하는지 확인
    describe('getOne', () => {
        it("should return a movie", () => {
            service.create({
                title:'Test Movie',
                genres:['test'],
                year:2000
            });
            const movie = service.getOne(1);
            expect(movie).toBeDefined();
            expect(movie.id).toEqual(1);
        });

        // 존재하지 않는 id를 가저오려 했을 때 에러가 정상적으로 발생하는지
        it("should throw 404 error", () => {
            try {
                service.getOne(999);
            } catch(e) {
                expect(e).toBeInstanceOf(NotFoundException);
            }
        })
    });

    // deleteOne을 했을 때 삭제 전 전체 길이보다 삭제 후 전체 길이가 더 짧은지
    describe('deleteOne', () => {
        it('deletes a movie', () => {
            service.create({
                title:'Test Movie',
                genres:['test'],
                year:2000
            });
            const beforeDelete = service.getAll().length;
            service.deleteOne(1);
            const afterDelete = service.getAll().length;

            expect(afterDelete).toBeLessThan(beforeDelete);
        });

        // 존재하지 않는 id를 삭제하려고 했을 때 에러가 정상적으로 발생하는지
        it('should return a 404', () => {
            try {
                service.deleteOne(999);
            } catch(e) {
                expect(e).toBeInstanceOf(NotFoundException);
            }
        });
    });

    // create를 했을 때 생성 전 전체 길이보다 생성 후 전체 길이가 더 긴지
    describe('create', () => {
        it('should create a movie', () => {
            const beforeCreate = service.getAll().length;
            service.create({
                title:'Test Movie',
                genres:['test'],
                year:2000
            });
            const afterCreate = service.getAll().length;
            console.log(beforeCreate, afterCreate);
            expect(afterCreate).toBeGreaterThan(beforeCreate);
        });
    });

    // update를 했을 때 바꾸려는 대상이 바꾸려는 제목으로 변경되었는지
    describe('update', () => {
        it('should update a movie', () => {
            service.create({
                title:'Test Movie',
                genres:['test'],
                year:2000
            });
            service.update(1, {title:'Update Test'});
            const movie = service.getOne(1);
            expect(movie.title).toEqual('Update Test');
        });

        // 존재하지 않는 id 수정하려고 했을 때 에러가 정상적으로 발생하는지
        it('should throw a NotFoundException', () => {
            try {
                service.update(999, {});
            } catch(e) {
                expect(e).toBeInstanceOf(NotFoundException);
            }
        });
    });
});
