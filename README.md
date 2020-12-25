# nest, mariaDB 연동 참고 사이트 
- https://docs.nestjs.com/techniques/database

# mariaDB 커맨드 참고 사이트
- https://estenpark.tistory.com/358

# 에러난거
- WARN_DATA_TRUNCATED: Data truncated for column 'upd_dt' at row 3
    - dist 삭제하고 다시 하니까 잘 됨

# 암호화
- createHash(알고리즘, 옵션) = 알고리즘을 이용해 Hash 객체를 생성하여 반환
- createHmac(알고리즘, 키, 옵션) = 알고리즘과 키를 이용해 암호화 후 HMAC 객체를 생성하여 반환

# DB synchronize
- synchronize : true 옵션을 넣으니까 테이블이 entity 파일 기준으로 변경됨.