/* 구직자 테이블 */
CREATE TABLE interviewer
(
    itv_seq    INT             NOT NULL    AUTO_INCREMENT COMMENT '구직자_SEQ', 
    itv_id     VARCHAR(50)     NOT NULL    COMMENT '구직자ID', 
    pwd        VARCHAR(50)     NOT NULL    COMMENT '비밀번호', 
    name       VARCHAR(50)     NOT NULL    COMMENT '구직자명', 
    birth      VARCHAR(6)      NOT NULL    COMMENT '생년월일', 
    phone      VARCHAR(11)     NOT NULL    COMMENT '연락처', 
    email      VARCHAR(100)    NOT NULL    COMMENT '이메일', 
    area       VARCHAR(100)    NULL        COMMENT '희망산업/직군', 
    location   VARCHAR(100)    NULL        COMMENT '희망근무지역', 
    date_join  VARCHAR(8)      NULL        COMMENT '가입일', 
    PRIMARY KEY (itv_seq)
)DEFAULT CHARSET=utf8;

ALTER TABLE interviewer COMMENT '구직자';



/* 기업 테이블 */
CREATE TABLE corporation
(
    cor_seq    INT             NOT NULL    AUTO_INCREMENT COMMENT '기업_SEQ', 
    cor_id     VARCHAR(50)     NOT NULL    COMMENT '기업ID', 
    pwd        VARCHAR(50)     NOT NULL    COMMENT '비밀번호', 
    name       VARCHAR(50)     NOT NULL    COMMENT '기업명', 
    ceo_name   VARCHAR(50)     NOT NULL    COMMENT '대표명', 
    area       VARCHAR(100)    NOT NULL    COMMENT '산업/직군', 
    pm_name    VARCHAR(50)     NOT NULL    COMMENT '담당자이름', 
    pm_phone   VARCHAR(11)     NOT NULL    COMMENT '담당자연락처', 
    homepage   VARCHAR(100)    NULL        COMMENT '홈페이지', 
    city       VARCHAR(50)     NULL        COMMENT '도시', 
    date_join  VARCHAR(8)      NULL        COMMENT '가입일', 
    PRIMARY KEY (cor_seq)
)DEFAULT CHARSET=utf8;

ALTER TABLE corporation COMMENT '기업';



/* 공고 테이블 */
CREATE TABLE jobnotice
(
    notice_seq     INT              NOT NULL    AUTO_INCREMENT COMMENT '공고_SEQ', 
    title          VARCHAR(100)     NOT NULL    COMMENT '제목', 
    cor_name       VARCHAR(50)      NOT NULL    COMMENT '기업명', 
    content1       VARCHAR(1000)    NULL        COMMENT '내용1', 
    content2       VARCHAR(1000)    NULL        COMMENT '내용2', 
    content3       VARCHAR(1000)    NULL        COMMENT '내용3', 
    content4       VARCHAR(1000)    NULL        COMMENT '내용4', 
    state          VARCHAR(2)       NOT NULL    COMMENT '진행상태', 
    career         VARCHAR(2)       NOT NULL    COMMENT '요구경력', 
    area           VARCHAR(100)     NOT NULL    COMMENT '산업/직군', 
    start_date     VARCHAR(8)       NOT NULL    COMMENT '시작일', 
    last_date      VARCHAR(8)       NOT NULL    COMMENT '마감일', 
    tag_location   VARCHAR(100)     NULL        COMMENT '태그-위치', 
    tag_attribute  VARCHAR(100)     NULL        COMMENT '태그-특성', 
    tag_career     VARCHAR(100)     NULL        COMMENT '태그-경력', 
    PRIMARY KEY (notice_seq)
)DEFAULT CHARSET=utf8;

ALTER TABLE jobnotice COMMENT '공고';



/* 면접 테이블 */
CREATE TABLE alive
(
    live_seq    INT             NOT NULL    AUTO_INCREMENT COMMENT '면접_SEQ', 
    cor_seq     INT             NOT NULL    COMMENT '기업_SEQ', 
    cor_name    VARCHAR(50)     NOT NULL    COMMENT '기업명', 
    state       VARCHAR(2)      NOT NULL    COMMENT '진행상태', 
    start_date  VARCHAR(8)      NOT NULL    COMMENT '시작일시', 
    area        VARCHAR(100)    NOT NULL    COMMENT '모집직군', 
    career      VARCHAR(2)      NOT NULL    COMMENT '모집 경력사항', 
    itv_seq     INT             NOT NULL    COMMENT '면접자_SEQ', 
    itv_name    VARCHAR(50)     NOT NULL    COMMENT '면접자 이름', 
    itv_phone   VARCHAR(11)     NOT NULL    COMMENT '면접자 연락처', 
    PRIMARY KEY (live_seq)
)DEFAULT CHARSET=utf8;

ALTER TABLE alive COMMENT '면접';

ALTER TABLE alive
    ADD CONSTRAINT FK_alive_cor_seq_corporation_cor_seq FOREIGN KEY (cor_seq)
        REFERENCES  (cor_seq) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE alive
    ADD CONSTRAINT FK_alive_itv_seq_interviewer_itv_seq FOREIGN KEY (itv_seq)
        REFERENCES  (itv_seq) ON DELETE RESTRICT ON UPDATE RESTRICT;



/* 자기PR 테이블 */
CREATE TABLE pr
(
    pr_seq         INT              NOT NULL    AUTO_INCREMENT COMMENT '자기PR_SEQ', 
    itv_seq        INT              NOT NULL    COMMENT '구직자_SEQ', 
    phone          VARCHAR(11)      NOT NULL    COMMENT '구직자연락처', 
    title          VARCHAR(100)     NOT NULL    COMMENT '제목', 
    content        VARCHAR(1000)    NULL        COMMENT '내용', 
    area           VARCHAR(100)     NOT NULL    COMMENT '산업/직군', 
    pr_location    VARCHAR(100)     NOT NULL    COMMENT '희망근무지역', 
    tag_location   VARCHAR(100)     NULL        COMMENT '태그-위치', 
    tag_attribute  VARCHAR(100)     NULL        COMMENT '태그-특성', 
    tag_career     VARCHAR(100)     NULL        COMMENT '태그-경력', 
    date_upload    VARCHAR(8)       NULL        COMMENT '업로드일', 
    PRIMARY KEY (pr_seq)
)DEFAULT CHARSET=utf8;

ALTER TABLE pr COMMENT '자기PR';

ALTER TABLE pr
    ADD CONSTRAINT FK_pr_itv_seq_interviewer_itv_seq FOREIGN KEY (itv_seq)
        REFERENCES  (itv_seq) ON DELETE RESTRICT ON UPDATE RESTRICT;