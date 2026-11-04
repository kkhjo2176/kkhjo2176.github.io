# 💼 김동현 | Full-stack Developer Portfolio

> **업무를 이해하고, 문제를 해결해 서비스로 만듭니다.**

약 7년간 기업용 ERP 연계 웹서비스를 개발·운영하며 쌓은 경험과, Java·Spring Boot 기반 팀 프로젝트를 정리한 개발자 포트폴리오입니다.

🌐 **포트폴리오:** https://kkhjo2176.github.io/

💻 **GitHub:** https://github.com/kkhjo2176

---

## 👋 소개

2018년 11월부터 2025년 10월까지 **㈜엔터인**에서 ERP 연계 웹서비스의 개발·유지보수와 서버 운영을 담당했습니다.

* **웹서비스 개발·운영:** PHP·CodeIgniter 기반 EPS/EPS2, ERP Mobile, B2B·B2C 서비스 개발 및 유지보수
* **ERP 웹 전환:** PowerBuilder 기반 업무를 Vue 3·TypeScript·RealGrid 환경으로 전환하는 프로젝트 참여
* **서버·클라우드:** CentOS·Apache·NHN Cloud 운영, Shell Script·Cron 기반 점검·알림 자동화
* **기술 확장:** Java·Spring Boot·JPA 기반 그룹웨어 및 날씨·생활 추천 팀 프로젝트 수행

새로운 기능을 구현하는 것뿐 아니라, **기존 시스템의 코드와 데이터 흐름을 분석하고 운영 중 발생하는 문제를 개선하는 작업**을 중요하게 생각합니다.

## ⚙️ 기술 스택

| 분야                 | 실무 활용                                             | 교육 프로젝트·학습                              |
| ------------------ | ------------------------------------------------- | --------------------------------------- |
| **Frontend**       | JavaScript, TypeScript, Vue 3, RealGrid, HTML/CSS | Thymeleaf, React(학습)                    |
| **Backend**        | PHP, CodeIgniter                                  | Java, Spring Boot, JPA, Spring Security |
| **Database**       | Oracle, MySQL, SQL                                | MariaDB                                 |
| **Server / Cloud** | CentOS, Apache, NHN Cloud, Shell Script, Cron     | Docker                                  |
| **Tools**          | SVN, TOAD                                         | Git, GitHub, IntelliJ IDEA              |

## 📂 주요 프로젝트

### 🏢 실무 프로젝트

#### 01. ERP 웹 전환 — PowerBuilder → Vue 3

**기간:** 2022.09 ~ 2025.09
**기술:** Vue 3, TypeScript, RealGrid, JavaScript

* 품목·매출·매입·입출고·BOM 등 ERP 업무 화면 개발
* RealGrid 행 조작·검색·클립보드·입력 검증 기능 공통화
* 청크 단위 비동기 조회 및 응답 순번 기반 데이터 위치 제어
* **100만 건 규모를 가정한 테스트 데이터**로 분할 조회 동작 검증

#### 02. TAS Mobile — ERP 변경 대응 및 레거시 SQL 개선

**기간:** 2023.11 ~ 2024.01
**기술:** PHP, CodeIgniter, Oracle, SQL

* NTK Korea ERP 변경사항의 모바일 서비스 반영
* 기존 SQL 및 PHP 데이터 처리 흐름 분석·개선
* 조회 조건·프로모션 관련 오류 수정
* **2024.01.17 서버 적용 및 테스트 완료**

#### 03. 웹서버 모니터링·운영 대응 자동화

**기간:** 2021.06 ~ 2025.09
**기술:** CentOS, Apache, Shell Script, Cron, NHN Cloud

* 약 30분 주기의 서버 자원·프로세스 상태 점검 자동화
* 이상 징후 감지 시 기존 사내 문자 발송 시스템 연동
* Apache Graceful 방식을 활용한 운영 대응 로직 구성

#### 04. KG이니시스 결제 API 전환 및 예외 처리

**기간:** 2023.04 ~ 2023.05
**기술:** PHP, CodeIgniter, JavaScript, SQL, KG이니시스 API

* 기존 결제 모듈을 KG이니시스 API 방식으로 전환
* 결제 함수 단계별 서버 로그를 통한 처리 흐름 추적
* 세션 만료에 따른 내부 DB 저장 누락 문제 분석·개선
* 운영서버 적용 및 결제·취소 테스트 수행

> 실무 프로젝트의 내부 소스코드와 고객사 데이터는 비공개이며, 포트폴리오에서 공개 가능한 범위의 기술 구현 과정과 문제 해결 경험을 확인할 수 있습니다.

---

### 🎓 교육 팀 프로젝트

#### 05. Weather Mate — 날씨·생활 추천 서비스

**기간:** 2026.10
**기술:** Java, Spring Boot, JPA, MariaDB, Docker

**담당:** 백엔드 개발, 외부 API 연동, 스케줄러, 추천 로직

* 기상청 단기예보 API 수집 및 백엔드 구현
* 예보 발표 시각에 맞춘 **일 8회 데이터 수집**
* 서울 25개 구 대표 격자 기반 날씨 조회 API
* 예보 데이터 중복 저장 방지 및 오래된 데이터 정리
* 기상 조건·계절 가중치를 활용한 복장 추천
* 외부 AI 예측 결과 연동

**GitHub:** https://github.com/kkhjo2176/weather-mate

#### 06. Company Talk — 그룹웨어

**기간:** 2026.07 ~ 2026.08
**기술:** Java, Spring Boot, JPA, Spring Security, Thymeleaf, MariaDB, Docker

**담당:** 전자결재, 결재라인, 댓글·대댓글, 첨부파일, 권한 예외

* 결재라인에 따른 순차 승인·반려 및 상태 처리
* 계층형 댓글·대댓글 구현 및 삭제 제한 처리
* 결재 사인 이미지와 첨부파일 관리
* Spring Security 접근 권한 관련 예외 개선

**GitHub:** https://github.com/kkhjo2176/company-talk

---

## 🧩 그 밖의 실무 경험

* **ERP 연계 웹서비스 유지보수:** EPS 계열, EPS2, ERP Mobile, B2B·B2C 서비스 기능 개선 및 운영
* **NHN Cloud Object Storage:** PHP 기반 파일 업로드·다운로드 및 API 중계 기능 구현
* **Android 바코드 연동:** 고객사 앱의 네이티브 스캔 기능과 ERP 웹 화면 연계
* **고객사 현장 오류 해결:** EPS2 에디터 이미지 붙여넣기 오류 분석 및 입력 검증 개선
* **데이터 이전·호환성 개선:** ERP 데이터 마이그레이션, Flash 기반 기능 대체 및 공통 파일 업로더 적용

## 🖥️ 포트폴리오 웹사이트

**HTML · CSS · JavaScript**로 제작한 GitHub Pages 기반 정적 웹사이트입니다.

주요 기능은 다음과 같습니다.

* 실무 / 교육 팀 프로젝트 필터 및 상세보기
* 기술별 활용 경험과 관련 프로젝트 연결
* 프로젝트별 기술 구현 과정, STAR 요약 및 처리 흐름도
* 모바일 반응형 레이아웃
* 키보드 접근성 및 팝업 인터랙션

### 프로젝트 구조

```text
.
├── index.html       # 페이지 구조
├── style.css        # 디자인 및 반응형 스타일
├── script.js        # 프로젝트 데이터 및 인터랙션
├── assets/          # 이미지 및 공개 자료
└── README.md        # 저장소 소개
```

별도의 프레임워크나 빌드 과정 없이 `index.html`을 브라우저에서 열어 실행할 수 있습니다.

## 📫 Links

**Portfolio:** https://kkhjo2176.github.io/

**GitHub:** https://github.com/kkhjo2176

**Weather Mate:** https://github.com/kkhjo2176/weather-mate

**Company Talk:** https://github.com/kkhjo2176/company-talk
