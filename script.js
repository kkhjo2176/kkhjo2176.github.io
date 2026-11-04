const projects = [
  {
    id: 'erp-web',
    type: 'work',
    period: '2022.09 — 2025.09',
    title: 'ERP 웹 전환',
    subtitle: 'PowerBuilder 업무를 Vue 3 기반 웹으로 전환',
    organization: '(주)엔터인',
    client: '',
    teamInfo: '기존 ERP 업무를 분석해 웹 화면·공통 모듈을 개발하고 관련 개발자와 협업',
    role: '프론트엔드 · 공통 모듈 개발 · 대용량 조회 방식 검증',
    summary: 'PowerBuilder 기반 ERP 업무를 분석하고 Vue 3 웹 화면, RealGrid 공통 기능, 초기 개발 기반을 구현했습니다.',
    highlight: '100만 건 규모를 가정한 분할 조회 동작 검증',
    technologies: ['Vue 3', 'TypeScript', 'JavaScript', 'RealGrid', 'SQL', 'CentOS', 'SVN'],
    cardVisual: 'grid',
    scope: '담당 범위: ERP 업무 화면, RealGrid 공통 기능, 초기 개발환경·공통 모듈, 대용량 분할 조회 방식 검증',
    contributions: [
      '품목·매출·매입·입출고·BOM·A/S·출하의뢰 업무 화면 개발',
      'Vue 3·TypeScript 초기 개발환경과 화면 공통 모듈 구성',
      'RealGrid 행 조작·검색·클립보드·검증 공통 기능 구현',
      '비동기 청크 조회와 응답 순번 기반 그리드 위치 제어 검증'
    ],
    implementations: [
      {
        title: 'RealGrid 공통 기능',
        description: 'Vue 3·TypeScript 화면에서 반복되는 RealGrid 조작을 공통 함수로 분리해 업무 화면마다 같은 방식으로 호출하도록 구성했습니다.',
        technologies: ['RealGrid', 'Vue 3', 'TypeScript'],
        details: ['행 추가·삭제·이동 및 행 위치 검색', '클립보드 입력값을 그리드 행에 반영하고 저장 전 데이터 검증', '품목·매출·매입 등 여러 화면에서 공통 호출']
      },
      {
        title: '분할 조회와 수신 위치 제어',
        description: '조회 범위를 여러 청크로 나눠 비동기로 요청하고, 각 응답에 포함된 데이터 순번을 기준으로 RealGrid의 삽입 위치를 계산했습니다. 먼저 도착한 응답 순서가 아니라 원래 데이터 순서대로 행을 반영했습니다.',
        technologies: ['JavaScript', 'RealGrid', 'SQL'],
        details: ['청크별 시작 위치와 응답 순번을 그리드 행 위치로 연결', '응답 완료 순서가 달라져도 기존 데이터 순서를 유지하는지 확인', '100만 건 규모를 가정한 테스트 데이터로 요청·반영 동작 검증']
      },
      {
        title: 'ERP 업무 화면 구현',
        description: 'PowerBuilder 화면의 입력 항목과 조회·저장 흐름을 분석해 Vue 컴포넌트와 RealGrid 기반 웹 화면으로 옮겼습니다.',
        technologies: ['Vue 3', 'TypeScript', 'SQL'],
        details: ['품목·매출·매입·입출고 화면', 'BOM·A/S·출하의뢰 관련 화면', '기존 업무 변경사항을 반영한 화면 개선']
      }
    ],
    star: {
      situation: 'ERP 웹 전환 과정에서 업무 화면이 많고 대용량 조회 시 서버와 브라우저에 처리 부담이 집중될 수 있었습니다.',
      task: '공통 개발 기반을 만들고, 기존 전체 조회 요구를 유지하면서 데이터 처리 부담을 나눌 구조가 필요했습니다.',
      action: '반복되는 그리드 동작은 공통화하고, 대량 조회는 청크와 데이터 순번을 기준으로 처리하도록 설계했습니다.',
      result: '공통 조작을 화면마다 중복 구현하지 않고 재사용할 수 있는 개발 기반을 마련했습니다.'
    },
    flow: {
      title: '대용량 데이터 분할 조회 처리 흐름',
      note: '공개 가능한 범위로 일반화한 처리 흐름 개념도입니다.',
      type: 'async-chunks',
      nodes: [
        { title: '조회 범위 계산', text: '전체 범위를 청크 단위로 나눔' },
        { title: '청크 A', text: '비동기 요청' },
        { title: '청크 B', text: '비동기 요청' },
        { title: '청크 N', text: '비동기 요청' },
        { title: '응답 + 순번', text: '완료 순서와 위치 기준을 분리' },
        { title: 'RealGrid', text: '순번에 맞는 행 위치로 반영' }
      ]
    },
    result: '100만 건 규모를 가정한 테스트 데이터로 청크 요청, 응답 순서 변경과 RealGrid 행 위치 반영을 검증했습니다.',
    links: []
  },
  {
    id: 'tas-mobile',
    type: 'work',
    period: '2023.11 — 2024.01',
    title: 'TAS Mobile SQL 개선',
    subtitle: 'ERP 변경에 맞춘 레거시 조회·업무 로직 정비',
    organization: '(주)엔터인',
    client: 'NTK Korea',
    teamInfo: 'ERP 변경사항을 모바일 서비스에 반영하고 서버 적용·테스트 수행',
    role: 'PHP·SQL 분석 · 조회 로직 수정 · 서버 반영',
    summary: '최신 ERP 데이터 처리 방식과 기존 모바일 SQL·PHP 로직의 불일치 구간을 찾아 함께 개선했습니다.',
    highlight: '2024.01.17 서버 적용 및 테스트 완료',
    technologies: ['PHP', 'CodeIgniter', 'Oracle', 'SQL', 'JavaScript'],
    cardVisual: 'legacy',
    scope: '담당 범위: ERP 변경사항 분석, Oracle SQL·PHP 처리 흐름 점검, 조회 조건과 업무 로직 수정, 서버 적용·테스트',
    contributions: [
      'NTK Korea ERP 변경사항과 모바일 조회 기준 비교',
      '기존 Oracle SQL과 PHP 후속 처리 흐름 추적',
      'ERP 기준과 어긋난 조회 조건 및 프로모션 로직 수정',
      '변경 기능 테스트 후 2024.01.17 서버 적용'
    ],
    implementations: [
      {
        title: '레거시 SQL 흐름 분석',
        description: 'CodeIgniter/PHP에서 Oracle SQL에 전달하는 입력값과 분기 조건, 조회 결과를 후속 업무 로직에서 사용하는 지점을 함께 추적했습니다.',
        technologies: ['PHP', 'Oracle', 'SQL'],
        details: ['PHP 로직에서 SQL로 전달되는 조회 조건 확인', '기존 Oracle SQL의 필터 조건과 ERP 변경 기준 비교', '조회 결과를 가공하는 PHP 로직까지 오류 발생 경로 연결']
      },
      {
        title: 'ERP 변경사항 반영',
        description: '분석한 불일치 구간의 Oracle 조회 조건과 PHP 업무 로직을 함께 수정하고, 프로모션 조회 결과가 변경된 ERP 기준과 일치하는지 확인했습니다.',
        technologies: ['CodeIgniter', 'PHP', 'JavaScript'],
        details: ['ERP 변경사항과 일치하지 않던 프로모션 조회 조건 수정', '관련 조회 화면과 후속 처리 결과를 개발서버에서 확인', '변경 기능 테스트 후 서버 적용']
      }
    ],
    star: {
      situation: 'ERP 변경사항을 모바일에 반영하는 과정에서 기존 SQL·PHP 로직이 최신 데이터 처리 방식과 맞지 않는 구간이 확인됐습니다.',
      task: '레거시 코드의 데이터 흐름을 파악하고 기존 기능을 유지하면서 조회 오류를 바로잡아야 했습니다.',
      action: '쿼리만 분리하지 않고 입력 조건부터 PHP 후속 처리까지 연결해 불일치 지점을 찾았습니다.',
      result: 'ERP 기준과 모바일 조회 흐름의 불일치를 해소했습니다.'
    },
    flow: {
      title: 'ERP 데이터와 모바일 조회 로직의 관계',
      note: '비공개 내부 구조를 일반화한 데이터 관계 개념도입니다.',
      type: 'relation',
      nodes: [
        { title: 'ERP 변경 기준', text: 'NTK Korea 데이터 처리 기준' },
        { title: 'PHP 입력·분기', text: '모바일 요청 조건과 업무 로직' },
        { title: 'Oracle SQL', text: '조회·조인·필터 조건' },
        { title: '모바일 결과', text: '프로모션 등 조회 화면' }
      ]
    },
    result: '2024년 1월 17일 수정 기능의 서버 적용과 프로모션 조회 테스트를 완료했습니다.',
    links: []
  },
  {
    id: 'server-monitoring',
    type: 'work',
    period: '2021.06 — 2025.09',
    title: '서버 모니터링 자동화',
    subtitle: '정기 점검·알림·Apache 운영 대응 자동화',
    organization: '(주)엔터인',
    client: '',
    teamInfo: '웹서비스 운영 담당자로 서버 상태 확인과 장애 대응 흐름 구성',
    role: '웹서버 운영 · 점검 스크립트 · 장애 알림·대응',
    summary: 'CentOS·Apache 서버의 자원과 프로세스 상태를 정기 확인하고 이상 시 알림과 범위 내 대응을 수행하도록 구성했습니다.',
    highlight: '약 30분 주기 상태 점검과 문자 알림 연동',
    technologies: ['CentOS', 'Linux', 'Apache', 'Shell Script', 'Cron', 'NHN Cloud'],
    cardVisual: 'terminal',
    scope: '담당 범위: 웹서버 운영, Shell Script 상태 점검, Cron 등록, 사내 문자 시스템 연동, Apache Graceful 대응',
    contributions: [
      '웹서버 자원과 주요 프로세스 상태를 확인하는 Shell Script 구현',
      'Cron을 이용해 약 30분 주기로 점검 실행',
      '이상 징후 발견 시 기존 문자 발송 시스템과 연동',
      'Apache Graceful 처리를 활용한 범위 내 운영 대응 로직 구성'
    ],
    implementations: [
      {
        title: '정기 상태 점검',
        description: 'Shell Script가 서버 자원과 주요 프로세스의 상태를 확인하고, Cron이 약 30분마다 스크립트를 실행하도록 등록했습니다.',
        technologies: ['CentOS', 'Shell Script', 'Cron'],
        details: ['Cron에서 점검 스크립트를 약 30분 주기로 호출', '점검 결과를 정상과 이상 징후로 분기', '이상 분기에서만 알림·대응 단계로 연결']
      },
      {
        title: '알림과 Apache 대응',
        description: '이상 징후가 감지되면 기존 사내 문자 발송 시스템에 상태를 전달해 담당자에게 알리고, 적용 가능한 경우 Apache Graceful 방식으로 운영 대응을 수행했습니다.',
        technologies: ['Apache', 'Shell Script', 'NHN Cloud'],
        details: ['기존 문자 발송 기능과 연동', 'Graceful 처리는 완전 중단 후 재시작과 구분', '자동 처리 범위를 벗어난 상황은 담당자가 확인']
      }
    ],
    star: {
      situation: '야간이나 주말에는 서버 이상을 즉시 확인하기 어려워 대응이 늦어질 수 있었습니다.',
      task: '반복 점검을 자동화하고 이상 징후를 담당자가 빠르게 인지할 수 있는 흐름이 필요했습니다.',
      action: '점검 결과를 정상·이상으로 나누고, 이상일 때만 사내 알림과 적용 가능한 Apache 대응을 실행하도록 구성했습니다.',
      result: '반복 점검을 자동화하고 담당자가 이상 징후를 인지하는 운영 흐름을 마련했습니다.'
    },
    flow: {
      title: '서버 점검과 상황별 대응 흐름',
      note: '구체적인 임계값을 제외하고 점검 결과에 따른 대응 관계만 표현한 개념도입니다.',
      type: 'decision',
      nodes: [
        { title: 'Cron 실행', text: '약 30분 주기로 스크립트 호출' },
        { title: '상태 점검', text: '자원·프로세스 이상 징후 확인' },
        { title: '정상', text: '다음 주기까지 대기' },
        { title: '이상 징후', text: '사내 문자 시스템으로 알림' },
        { title: '운영 대응', text: '적용 가능한 경우 Graceful, 그 외 직접 확인' }
      ]
    },
    result: '약 30분 주기 실행, 문자 알림 연동과 적용 가능한 조건의 Apache Graceful 동작을 운영 범위에서 확인했습니다.',
    links: []
  },
  {
    id: 'payment-api',
    type: 'work',
    period: '2023.04 — 2023.05',
    title: 'KG이니시스 결제 API 전환',
    subtitle: '결제·DB 저장 사이의 예외를 로그로 추적',
    organization: '(주)엔터인',
    client: '',
    teamInfo: '기존 웹서비스의 결제 API 전환과 운영 테스트 수행',
    role: '결제 API 전환 · 오류 분석 · 세션 예외 처리',
    summary: '외부 결제 이후 내부 DB 저장이 누락될 수 있는 상황을 주요 단계의 서버 로그로 추적하고 세션 만료 예외를 개선했습니다.',
    highlight: '외부 결제 성공과 내부 저장 사이의 정합성 점검',
    technologies: ['PHP', 'CodeIgniter', 'JavaScript', 'KG이니시스 API', 'SQL'],
    cardVisual: 'payment',
    scope: '담당 범위: 기존 PHP 결제 흐름 분석, KG이니시스 API 전환, 서버 로그 추적, 세션 만료 예외 처리, 결제·취소 테스트',
    contributions: [
      'KG이니시스 결제 API 전환과 결제 취소 기능 개선',
      '결제 관련 함수의 주요 처리 단계에 서버 로그 추가',
      '외부 결제 결과와 내부 DB 저장 흐름을 로그로 비교',
      '세션 만료에 따른 예외 처리 후 운영서버 적용·테스트'
    ],
    implementations: [
      {
        title: '결제 처리 단계 관찰',
        description: '기존 PHP 결제 함수에서 요청 준비, 외부 결제 결과 수신, 내부 저장 직전·직후에 서버 로그를 추가해 흐름이 끊기는 지점을 추적했습니다.',
        technologies: ['PHP', 'CodeIgniter', 'KG이니시스 API'],
        details: ['민감한 결제 정보는 제외하고 처리 단계와 식별 가능한 상태만 기록', 'KG이니시스 응답 이후 내부 DB 저장 함수 진입 여부 비교', '결제·취소 함수의 단계별 로그로 오류 발생 구간 특정']
      },
      {
        title: '세션 만료 예외 처리',
        description: '외부 결제 성공 뒤 세션이 만료되면 내부 DB 저장에 필요한 값이 누락되는 경로를 로그로 확인하고, 해당 예외 처리와 저장 흐름을 보완했습니다.',
        technologies: ['PHP', 'JavaScript', 'SQL'],
        details: ['세션 의존 구간과 DB 저장 단계 확인', '예외 상황에서 필요한 처리 보완', '운영서버에서 결제·취소 흐름 테스트']
      }
    ],
    star: {
      situation: '외부 결제는 진행됐지만 세션 만료 등으로 내부 DB 저장이 누락될 수 있는 상황이 있었습니다.',
      task: '어느 단계에서 흐름이 끊기는지 확인하고 결제 결과와 내부 데이터의 정합성을 지켜야 했습니다.',
      action: '외부 응답과 내부 저장 사이에 관찰 지점을 두고, 세션 의존 구간에서 흐름이 끊기는 조건을 확인했습니다.',
      result: '로그를 통해 외부 결제 이후 내부 저장이 끊기는 조건을 특정했습니다.'
    },
    flow: {
      title: '결제 요청부터 내부 저장까지',
      note: '민감한 결제 정보와 실제 로그는 제외하고 세션 만료가 영향을 주던 구간만 표시했습니다.',
      type: 'risk',
      nodes: [
        { title: '사용자 결제 요청', text: '기존 PHP 결제 함수 진입' },
        { title: 'KG이니시스 API', text: '결제 결과 수신' },
        { title: '내부 결과 처리', text: '단계별 서버 로그 기록' },
        { title: '세션 만료 구간', text: 'DB 저장값 누락 원인 추적' },
        { title: 'DB 저장·검증', text: '예외 보완 후 결제·취소 테스트' }
      ]
    },
    result: '세션 만료 예외 처리 수정 후 운영서버에서 결제·취소 흐름 테스트를 완료했습니다.',
    links: []
  },
  {
    id: 'weather-mate',
    type: 'team',
    period: '2026.10',
    title: 'Weather Mate',
    subtitle: '예보 수집과 서비스 조회를 분리한 날씨·복장 추천',
    organization: '교육 팀 프로젝트',
    client: '',
    teamInfo: '팀 전체 서비스 중 기상청 데이터 수집, 백엔드 API, 스케줄러, 복장 추천 담당',
    role: '백엔드 · 기상청 API · 스케줄러 · 추천 로직',
    summary: '기상청 예보를 발표 시각에 맞춰 수집·저장하고, 사용자 요청에는 DB 데이터를 제공하도록 수집과 조회를 분리했습니다.',
    highlight: '서울 25개 구 예보 수집·중복 방지·오래된 데이터 정리',
    technologies: ['Java', 'Spring Boot', 'JPA', 'MariaDB', 'Docker', 'REST API'],
    cardVisual: 'image',
    cardImage: 'assets/weather.png',
    scope: '담당 범위: 기상청 API 수집·저장, 스케줄러, 날씨·복장 추천 API, 외부 AI 예측 결과 연동',
    contributions: [
      '기상청 발표 이후 1일 8회 단기예보 수집과 DB 저장',
      '서울 25개 구 대표 격자 기반 날씨 조회 API 구현',
      '예보 중복 저장 방지와 오래된 데이터 정리 기능 구현',
      '기상 조건·계절 가중치를 반영한 복장 추천과 외부 AI 예측 결과 연동'
    ],
    implementations: [
      {
        title: '수집과 조회 분리',
        description: '<code>weather.collection.enabled</code>가 활성화된 경우 스케줄러가 02:20부터 3시간 간격으로 하루 8회 서울 25개 구의 대표 격자를 수집하고, 사용자 조회 API는 외부 호출 없이 DB만 읽도록 분리했습니다.',
        technologies: ['Spring Boot', 'REST API', 'MariaDB'],
        details: ['공유 격자는 대표 구만 호출해 중복 API 요청 생략', '외부 응답 대기와 DB 트랜잭션을 분리한 뒤 검증 데이터만 저장', '사용자 요청은 지역·날짜에 해당하는 DB 예보를 시간순 조회']
      },
      {
        title: '예보 데이터 관리',
        description: '<code>grid_x + grid_y + forecast_at</code> 유일 제약을 두고 최신 발표 데이터만 <code>INSERT</code> 또는 <code>UPDATE</code>했습니다. 핵심 항목이 불완전한 새 응답은 기존 정상 예보를 덮지 않도록 건너뛰었습니다.',
        technologies: ['JPA', 'MariaDB', 'Spring Boot'],
        details: ['JPA 조회로 기존 행을 찾아 신규·갱신·미변경을 구분', '매일 00:05에 당일 이전 예보 행 정리', '발표시각이 섞이거나 응답 페이지가 불완전하면 저장 중단']
      },
      {
        title: '복장 추천과 외부 예측 연동',
        description: '기온·습도·바람·강수 조건으로 복장 세트를 점수화하고, 봄·가을의 겹치는 기온대에는 달력 계절을 보조 가중치로 사용했습니다. Spring Boot는 별도 AI 서버를 호출해 모델명·날짜·예측시각·기온만 서비스 응답으로 중계했습니다.',
        technologies: ['Java', 'REST API'],
        details: ['강수·바람에 따라 신발·겉옷·소품 후보 조정', '저장된 시간별 예보를 추천 요청으로 변환', 'AI 모델 개발이 아닌 별도 예측 서버 호출과 응답 검증·중계 담당']
      }
    ],
    star: {
      situation: '사용자 요청마다 기상청 API를 호출하면 이용자 수에 따라 외부 요청도 함께 증가하는 구조가 됩니다.',
      task: '예보 수집 시점과 사용자 조회를 분리하고 지역별 데이터를 안정적으로 제공해야 했습니다.',
      action: '수집 스케줄과 사용자 조회 경로를 분리하고, 유일 키·최신 발표시각·응답 완전성을 저장 판단 기준으로 정했습니다.',
      result: '사용자 요청이 기상청 API 응답에 직접 의존하지 않는 조회 구조를 구현했습니다.'
    },
    flow: {
      title: '예보 데이터 수집과 서비스 조회 구조',
      note: '외부 예보 수집 경로와 사용자 조회 경로를 분리한 실제 백엔드 구조입니다.',
      type: 'dual-lane',
      lanes: [
        { label: 'COLLECT', nodes: [
          { title: '기상청 API', text: '발표 이후 1일 8회' },
          { title: 'Scheduler', text: '25개 구 대표 격자 수집' },
          { title: 'MariaDB', text: '검증·중복 제어·갱신' }
        ] },
        { label: 'SERVE', nodes: [
          { title: '사용자 요청', text: '지역·날짜·시간 조건' },
          { title: 'Spring Boot API', text: 'DB 예보 조회·추천 변환' },
          { title: '날씨·복장 응답', text: '저장 데이터 기반 제공' }
        ] }
      ]
    },
    result: 'GitHub 저장소에서 스케줄 수집, 예보 중복 제어, DB 조회 API와 규칙 기반 복장 추천 코드를 확인할 수 있습니다.',
    images: [
      { src: 'assets/weather.png', title: '날씨 비교 화면', caption: '담당 기능: 기상청·외부 예측 데이터 연동 및 백엔드 API' },
      { src: 'assets/outfit.png', title: '생활 추천 화면', caption: '담당 기능: 날씨·복장 추천 정보 제공 백엔드' }
    ],
    links: [{ label: 'GitHub 저장소', url: 'https://github.com/kkhjo2176/weather-mate' }]
  },
  {
    id: 'company-talk',
    type: 'team',
    period: '2026.07 — 2026.08',
    title: 'Company Talk',
    subtitle: '결재 흐름과 협업 기능을 구현한 그룹웨어',
    organization: '교육 팀 프로젝트',
    client: '',
    teamInfo: '팀 전체 그룹웨어 중 전자결재·결재라인·댓글·파일·권한 예외 담당',
    role: '전자결재 · 결재라인 · 댓글 · 파일 · 보안 예외',
    summary: '결재자별 승인·반려 흐름과 계층형 댓글, 사인 이미지, 첨부파일, 접근 권한 예외를 구현했습니다.',
    highlight: '결재라인 상태 흐름과 계층형 댓글 삭제 제약 구현',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'JPA', 'Thymeleaf', 'MariaDB', 'Docker'],
    cardVisual: 'image',
    cardImage: 'assets/approval.png',
    scope: '담당 범위: 전자결재·결재라인, 승인·반려 상태, 댓글 관계, 사인·첨부파일, Spring Security 접근 권한 예외',
    contributions: [
      '결재라인에 따른 결재자별 승인·반려 업무 흐름 구현',
      '계층형 댓글·대댓글과 하위 댓글 존재 시 삭제 제한 구현',
      '결재 사인 이미지 등록·표시와 첨부파일 업로드·다운로드',
      'Spring Security 접근 권한 오류와 예외 상황 개선'
    ],
    implementations: [
      {
        title: '전자결재와 결재라인',
        description: '상신 시 문서를 <code>IN_PROGRESS</code>로 두고 선택한 개인 결재라인을 순서대로 복사해 첫 결재자는 <code>PENDING</code>, 이후 결재자는 <code>WAITING</code> 상태로 저장했습니다.',
        technologies: ['Spring Boot', 'JPA', 'Thymeleaf'],
        details: ['현재 결재자 승인 시 다음 <code>WAITING</code> 결재자를 <code>PENDING</code>으로 전환', '마지막 승인 시 문서를 <code>APPROVED</code>, 반려 시 즉시 <code>REJECTED</code> 처리', '작성자 또는 결재자만 조회하며 대기 결재자는 자기 순서 전 접근 제한']
      },
      {
        title: '댓글·대댓글 관계 처리',
        description: '댓글 엔티티가 부모 댓글을 참조하도록 구성하고, 답글 등록 시 부모 ID를 연결했습니다. 하위 댓글이 남아 있으면 상위 댓글 삭제 요청을 <code>409 Conflict</code>로 차단했습니다.',
        technologies: ['Java', 'JPA', 'MariaDB'],
        details: ['부모 댓글 ID가 있으면 자기 참조 관계로 대댓글 저장', '게시글별 작성시각·댓글 ID 순으로 조회', '댓글 수정은 <code>204 No Content</code>, <code>existsByParentComment_ComId</code>가 참이면 삭제 요청은 <code>409 Conflict</code>']
      },
      {
        title: '파일·사인·접근 권한',
        description: '결재 문서 첨부파일과 로그인 사용자의 사인 이미지를 각각 별도 저장 경로로 관리하고, 사용자·문서 상태에 따라 변경 가능 범위를 제한했습니다.',
        technologies: ['Spring Security', 'Spring Boot', 'Thymeleaf'],
        details: ['첨부파일 원본명과 UUID 저장명을 분리하고 정규화 경로가 업로드 폴더 안인지 검증', '작성자만 첨부 가능하며 결재 시작·종료 후 추가·삭제 차단', '사인 이미지는 로그인 사용자 기준으로 등록·교체하며 이미지 형식과 5MB 제한 검증', 'Spring Security로 일반 화면은 인증, 관리자 경로는 <code>ADMIN</code> 역할 요구']
      }
    ],
    star: {
      situation: '전자결재는 결재 순서와 문서 상태, 사용자 권한이 함께 맞아야 하고 댓글은 계층 관계를 보존해야 했습니다.',
      task: '업무 규칙에 맞는 결재 흐름과 안전한 협업 기능을 구현해야 했습니다.',
      action: '결재 순서를 명시적인 상태로 관리하고, 댓글·파일 작업에는 관계와 사용자 권한을 먼저 검증하도록 구성했습니다.',
      result: '현재 결재자만 처리하고 승인·반려에 따라 다음 상태를 일관되게 전환하도록 구현했습니다.'
    },
    flow: {
      title: '결재라인 기반 전자결재 흐름',
      note: '실제 코드의 PENDING·WAITING·APPROVED·REJECTED 전환을 단순화한 상태 흐름도입니다.',
      type: 'state',
      nodes: [
        { title: '문서 작성·상신', text: '결재라인과 문서 정보 구성' },
        { title: 'PENDING', text: '현재 순서의 결재자' },
        { title: 'WAITING → PENDING', text: '승인 시 다음 결재자 활성화' },
        { title: 'APPROVED', text: '마지막 결재자 승인' },
        { title: 'REJECTED', text: '현재 결재자가 반려' }
      ]
    },
    result: 'GitHub 저장소에서 결재 상태 전환, 댓글 삭제 제약, 첨부파일·사인 이미지와 Spring Security 설정을 확인할 수 있습니다.',
    images: [
      { src: 'assets/approval.png', title: '전자결재 문서 상세', caption: '담당 기능: 결재 상태, 첨부파일, 승인·반려 처리' },
      { src: 'assets/approval-route.png', title: '결재라인 관리', caption: '담당 기능: 결재라인과 결재자 관리' },
      { src: 'assets/signature.png', title: '사인 이미지 관리', caption: '담당 기능: 사인 등록과 결재 화면 표시' },
      { src: 'assets/comments.png', title: '댓글·대댓글 테스트 화면', caption: '담당 기능: 답글이 있는 댓글의 삭제 제한' }
    ],
    links: [{ label: 'GitHub 저장소', url: 'https://github.com/kkhjo2176/company-talk' }]
  }
];

const techGroups = [
  {
    name: 'Frontend',
    technologies: [
      { name: 'HTML', levels: ['professional', 'project'], usage: '기업용 웹서비스 화면과 교육 팀 프로젝트의 마크업 구성.', projects: ['erp-web', 'weather-mate', 'company-talk'] },
      { name: 'CSS', levels: ['professional', 'project'], usage: '기업용 웹서비스 UI 유지보수와 반응형 프로젝트 화면 구성.', projects: ['erp-web', 'weather-mate', 'company-talk'] },
      { name: 'JavaScript', levels: ['professional', 'project'], usage: 'ERP 웹 화면, 결제 처리, 바코드 연동과 기업용 서비스의 사용자 동작·예외 처리.', projects: ['erp-web', 'tas-mobile', 'payment-api'] },
      { name: 'TypeScript', levels: ['professional'], usage: 'Vue 3 기반 ERP 웹 화면과 공통 모듈 개발.', projects: ['erp-web'] },
      { name: 'Vue 3', levels: ['professional'], usage: 'PowerBuilder ERP의 웹 전환 화면과 공통 개발 기반 구현.', projects: ['erp-web'] },
      { name: 'RealGrid', levels: ['professional'], usage: 'ERP 업무 화면의 행 조작·검색·검증·클립보드 공통 기능과 대용량 데이터 표시.', projects: ['erp-web'] },
      { name: 'Thymeleaf', levels: ['project'], usage: 'Company Talk의 전자결재·협업 화면 구성.', projects: ['company-talk'] }
    ]
  },
  {
    name: 'Backend',
    technologies: [
      { name: 'PHP', levels: ['professional'], usage: '2018.11~2025.10 다수 ERP 연계 웹서비스의 기능 개발·유지보수, 결제 API와 클라우드 파일 중계에 사용.', projects: ['tas-mobile', 'payment-api'], experience: 'EPS 계열 2종 · EPS2 쇼핑몰 · ERP Mobile · B2B · B2C' },
      { name: 'CodeIgniter', levels: ['professional'], usage: '장기간 기업용 서비스의 조회·업무 로직, 고객사별 기능, 운영 오류를 분석·개선.', projects: ['tas-mobile', 'payment-api'], experience: '상품 · 주문 · 배송 · 재고 · 거래 기능 개발·운영' },
      { name: 'Java', levels: ['project', 'learning'], usage: 'Spring Boot 팀 프로젝트의 날씨·추천·전자결재 기능 구현.', projects: ['weather-mate', 'company-talk'] },
      { name: 'Spring', levels: ['project', 'learning'], usage: 'Spring Boot 기반 팀 프로젝트에서 웹 요청·서비스 구조 학습과 구현.', projects: ['weather-mate', 'company-talk'] },
      { name: 'Spring Boot', levels: ['project', 'learning'], usage: 'Weather Mate 백엔드 API와 Company Talk 그룹웨어 기능에 사용했으며 현재도 학습 중.', projects: ['weather-mate', 'company-talk'] },
      { name: 'JPA', levels: ['project'], usage: '예보 데이터 관리와 전자결재·댓글 관계 처리.', projects: ['weather-mate', 'company-talk'] },
      { name: 'Spring Security', levels: ['project'], usage: 'Company Talk의 접근 권한 오류와 예외 상황 개선.', projects: ['company-talk'] }
    ]
  },
  {
    name: 'Database',
    technologies: [
      { name: 'Oracle', levels: ['professional'], usage: 'ERP 연계 모바일 서비스의 장문 SQL, 조회 조건과 데이터 처리 흐름 분석·수정.', projects: ['tas-mobile'] },
      { name: 'MySQL', levels: ['professional'], usage: 'PHP·CodeIgniter 기반 기업용 웹서비스의 상품·주문·거래 데이터 조회와 운영.', projects: [], experience: '대표 프로젝트 외 ERP 연계 서비스 유지보수' },
      { name: 'MariaDB', levels: ['project'], usage: '날씨 예보 저장·정리와 전자결재·댓글 데이터 관리.', projects: ['weather-mate', 'company-talk'] },
      { name: 'SQL', levels: ['professional', 'project'], usage: 'ERP 변경 분석, 결제 데이터 확인, 예보·결재 데이터 조회와 정합성 점검.', projects: ['erp-web', 'tas-mobile', 'payment-api', 'weather-mate', 'company-talk'] }
    ]
  },
  {
    name: 'Server & Cloud',
    technologies: [
      { name: 'CentOS', levels: ['professional'], usage: 'ERP 웹 개발환경과 기업 웹서비스 서버 운영·상태 점검 자동화.', projects: ['erp-web', 'server-monitoring'] },
      { name: 'Linux', levels: ['professional'], usage: '웹서버 배포·운영, 로그 확인과 장애 대응.', projects: ['server-monitoring'] },
      { name: 'Apache', levels: ['professional'], usage: '웹서버 운영과 Graceful 방식의 범위 내 대응.', projects: ['server-monitoring'] },
      { name: 'NHN Cloud', levels: ['professional'], usage: '클라우드 서버 운영과 Object Storage 파일 다운로드 중계.', projects: ['server-monitoring'] },
      { name: 'Shell Script', levels: ['professional'], usage: '서버 자원·프로세스 상태 점검과 알림·대응 로직.', projects: ['server-monitoring'] },
      { name: 'Cron', levels: ['professional'], usage: '약 30분 주기의 서버 상태 점검 실행.', projects: ['server-monitoring'] },
      { name: 'Docker', levels: ['project'], usage: 'Spring Boot 교육 팀 프로젝트의 개발·실행 환경 구성.', projects: ['weather-mate', 'company-talk'] }
    ]
  },
  {
    name: 'Tools & Collaboration',
    technologies: [
      { name: 'Git', levels: ['project'], usage: '교육 팀 프로젝트의 버전 관리와 협업.', projects: ['weather-mate', 'company-talk'] },
      { name: 'GitHub', levels: ['project'], usage: 'Weather Mate와 Company Talk 저장소 관리·공개.', projects: ['weather-mate', 'company-talk'] },
      { name: 'SVN', levels: ['professional'], usage: 'ERP 웹 전환을 포함한 실무 소스 버전 관리.', projects: ['erp-web'] },
      { name: 'IntelliJ IDEA', levels: ['project', 'learning'], usage: 'Java·Spring Boot 개발과 디버깅.', projects: ['weather-mate', 'company-talk'] },
      { name: 'Eclipse', levels: ['professional'], usage: '이전 회사에서 기업용 웹서비스 개발·유지보수에 지속적으로 사용한 익숙한 개발 환경.', projects: [], experience: '약 7년간 PHP·JavaScript 기반 실무 개발에서 사용' },
      { name: 'VS Code', levels: ['professional', 'project'], usage: '웹 프론트엔드와 스크립트·프로젝트 코드 편집.', projects: ['erp-web', 'weather-mate'] },
      { name: 'TOAD', levels: ['professional'], usage: 'Oracle SQL 조회·분석과 데이터 확인.', projects: ['tas-mobile'] }
    ]
  }
];

const additionalExperiences = [
  {
    title: 'NHN Cloud Object Storage API 중계',
    description: 'PHP 서버에서 NHN Cloud API를 호출하고 받은 파일을 기존 웹서비스 사용자에게 전달하는 중계 기능을 구현했습니다.',
    technologies: ['PHP', 'REST API', 'NHN Cloud']
  },
  {
    title: 'Android 바코드 스캐너 연동',
    description: '고객사가 제작한 Android 앱에 바코드 스캔 네이티브 기능을 추가하고 결과를 웹페이지와 ERP 조회 기능에 전달했습니다.',
    technologies: ['Android', 'JavaScript', 'PHP']
  },
  {
    title: '고객사 현장 오류 분석',
    description: '세광FA EPS2 쇼핑몰에서만 발생하던 에디터 이미지 입력 문제를 현장에서 재현했습니다. 붙여넣기 데이터의 특성을 확인하고 유효하지 않은 값이 DB INSERT/UPDATE로 넘어가지 않도록 검증했습니다.',
    technologies: ['PHP', 'CodeIgniter', 'JavaScript', 'SQL']
  },
  {
    title: 'B2B 거래내역서 개선',
    description: '거래내역의 합계·잔액·Excel 출력 오류를 수정하고, 건별/상세 보기 전환 시 같은 데이터를 반복 조회하지 않도록 조회 흐름을 개선했습니다.',
    technologies: ['PHP', 'CodeIgniter', 'SQL', 'Excel']
  },
  {
    title: '웹 호환성·기능 전환',
    description: 'Flash 기반 광고·메뉴와 기존 업로드 모듈을 웹 환경에 맞게 개선하고 여러 고객사 서비스에 적용했습니다.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP']
  }
];

const enterpriseServiceExperience = {
  period: '2018.11 — 2025.10',
  title: 'ERP 연계 웹서비스 개발 및 유지보수',
  services: ['EPS 계열 2종', 'EPS2 쇼핑몰', 'ERP Mobile', 'B2B 웹서비스', 'B2C 웹서비스'],
  responsibilities: [
    'PHP·CodeIgniter 기반 기능 개발',
    'ERP 변경에 따른 데이터 조회·처리 로직 수정',
    '상품·주문·배송·재고·거래 기능 개선',
    '고객사별 요구사항과 운영 오류 대응',
    '개발서버 테스트 후 운영환경 반영'
  ]
};

const levelLabels = {
  professional: 'Professional',
  project: 'Project',
  learning: 'Learning'
};

const grid = document.querySelector('#project-grid');
const dialog = document.querySelector('#project-dialog');
const dialogContent = document.querySelector('#dialog-content');
const discoveryTip = document.querySelector('#discovery-tip');
const discoveryTipTitle = document.querySelector('#discovery-tip-title');
const discoveryTipDescription = document.querySelector('#discovery-tip-description');
const discoveryTipClose = document.querySelector('#discovery-tip-close');
const mobileDiscoveryQuery = window.matchMedia('(max-width: 720px)');
const discoverySections = {
  stack: {
    element: document.querySelector('#stack'),
    title: '✦ 기술을 선택해 보세요!',
    description: '기술을 선택하면 실제 활용 경험과 관련 프로젝트를 확인할 수 있습니다.',
    closeLabel: 'Tech Stack 안내 닫기',
    dismissed: false,
    isIntersecting: false
  },
  projects: {
    element: document.querySelector('#projects'),
    title: '✦ 프로젝트 카드를 눌러보세요!',
    description: '담당 기능, 기술 구현 과정과 문제 해결 경험을 자세히 확인할 수 있습니다.',
    closeLabel: 'Projects 안내 닫기',
    dismissed: false,
    isIntersecting: false
  }
};
let dialogOpener = null;
let activeDiscoveryKey = null;
let discoveryUpdateFrame = null;

function projectTypeLabel(type) {
  return type === 'work' ? 'PROFESSIONAL' : 'TEAM PROJECT';
}

function renderTags(items, className = 'project-tags') {
  return `<div class="${className}">${items.map(item => `<span>${item}</span>`).join('')}</div>`;
}

function cardVisual(project) {
  if (project.cardVisual === 'image') {
    return `<div class="project-visual real-visual"><img src="${project.cardImage}" alt="${project.title} 대표 화면" loading="lazy"><span>${project.type === 'work' ? '실무 프로젝트' : '교육 팀 프로젝트'}</span></div>`;
  }

  const visuals = {
    grid: `<div class="concept-stage grid-stage"><div class="stage-top"><span>VUE 3 / REALGRID</span><span>개념도</span></div><div class="grid-window"><div><b>ERP / 품목 관리</b><span>•••</span></div><ol>${Array.from({ length: 20 }, (_, index) => `<li>${['품목코드', '품목명', '규격', '수량'][index] || '—'}</li>`).join('')}</ol></div></div>`,
    legacy: `<div class="concept-stage legacy-stage"><div class="stage-top"><span>PHP / ORACLE SQL</span><span>분석 흐름</span></div><div class="code-lines"><i>SELECT</i><span>ERP_DATA</span><i>WHERE</i><span>BUSINESS_RULE</span><b>→ 조건·로직 정비</b></div></div>`,
    terminal: `<div class="concept-stage terminal-stage"><div class="stage-top"><span>CENTOS / APACHE</span><span>운영 흐름</span></div><div class="terminal"><span>$ service-monitor --watch</span><b>✓ 상태 점검</b><b>✓ 이상 징후 알림</b><b>✓ 범위 내 대응</b><small>cron → check → notify</small></div></div>`,
    payment: `<div class="concept-stage payment-stage"><div class="stage-top"><span>PAYMENT API / LOG</span><span>처리 흐름</span></div><div class="payment-flow"><span>요청</span><i>→</i><span>외부 결제</span><i>→</i><span>로그 추적</span><i>→</i><span>DB 저장</span></div></div>`
  };
  return `<div class="project-visual concept-visual" aria-label="${project.title} 기술 개념도">${visuals[project.cardVisual]}</div>`;
}

function projectCard(project, index) {
  return `<article class="project-card" data-type="${project.type}">
    ${cardVisual(project)}
    <b class="visual-detail-cue" aria-hidden="true">상세 보기 <i>→</i></b>
    <div class="project-meta"><b>${projectTypeLabel(project.type)} / 0${index + 1}</b><span>${project.period}</span></div>
    <h3>${project.title}</h3>
    <p class="card-subtitle">${project.subtitle}</p>
    <dl class="card-facts"><div><dt>ROLE</dt><dd>${project.role}</dd></div><div><dt>KEY HIGHLIGHT</dt><dd>${project.highlight}</dd></div></dl>
    <div class="card-footer">${renderTags(project.technologies.slice(0, 5))}<button class="detail-button" type="button" data-open-project="${project.id}" aria-haspopup="dialog">상세 보기 <span>→</span></button></div>
  </article>`;
}

function renderTechGroups() {
  const container = document.querySelector('#stack-groups');
  container.innerHTML = techGroups.map((group, groupIndex) => `<section class="stack-group"><h3><span>0${groupIndex + 1}</span>${group.name}</h3><div class="tech-buttons">${group.technologies.map((tech, techIndex) => `<button type="button" class="tech-button" data-tech="${groupIndex}-${techIndex}" aria-pressed="false"><b>${tech.name}</b><span>${tech.levels.map(level => `<i class="level-dot ${level}" title="${levelLabels[level]}"></i>`).join('')}</span></button>`).join('')}</div></section>`).join('');
}

function renderTechInspector(tech, key) {
  const inspector = document.querySelector('#tech-inspector');
  const related = tech.projects.map(id => projects.find(project => project.id === id)).filter(Boolean);
  inspector.innerHTML = `<p class="eyebrow">SELECTED TECHNOLOGY</p><div class="inspector-title"><h3>${tech.name}</h3><div>${tech.levels.map(level => `<span class="level-badge ${level}">${levelLabels[level]}</span>`).join('')}</div></div><p>${tech.usage}</p>${tech.experience ? `<div class="tech-context"><span>주요 활용 범위</span><p>${tech.experience}</p></div>` : ''}<div class="related-projects"><span>관련 대표 프로젝트</span>${related.length ? related.map(project => `<button type="button" data-open-project="${project.id}">${project.title} <i>↗</i></button>`).join('') : '<small>Additional Experience에서 관련 실무 사례 확인</small>'}</div>`;
  document.querySelectorAll('[data-tech]').forEach(button => {
    const selected = button.dataset.tech === key;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
}

function renderAdditionalExperiences() {
  document.querySelector('#experience-overview').innerHTML = `<p>${enterpriseServiceExperience.period}</p><h3>${enterpriseServiceExperience.title}</h3><div class="service-tags">${enterpriseServiceExperience.services.map(service => `<span>${service}</span>`).join('')}</div><ul>${enterpriseServiceExperience.responsibilities.map(item => `<li>${item}</li>`).join('')}</ul>`;
  document.querySelector('#experience-list').innerHTML = additionalExperiences.map((item, index) => `<article><span>0${index + 1}</span><div><h3>${item.title}</h3><p>${item.description}</p>${renderTags(item.technologies, 'mini-tags')}</div></article>`).join('');
}

function overviewMeta(project) {
  const items = [
    ['구분', project.type === 'work' ? '실무 프로젝트' : '교육 팀 프로젝트'],
    ['기간', project.period],
    project.client ? ['고객사', project.client] : ['소속', project.organization],
    ['담당 역할', project.role],
    ['협업 범위', project.teamInfo]
  ];
  return `<dl class="overview-meta">${items.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join('')}</dl>`;
}

function detailNav() {
  return `<nav class="detail-nav" aria-label="프로젝트 상세 섹션"><a href="#detail-overview">Overview</a><a href="#detail-contributions">My Contributions</a><a href="#detail-implementation">Implementation</a><a href="#detail-star">STAR</a><a href="#detail-flow">Flow</a><a href="#detail-results">Results</a></nav>`;
}

function implementationCards(project) {
  return `<div class="implementation-grid">${project.implementations.map((item, index) => `<article><div class="implementation-head"><span>0${index + 1}</span><div><h4>${item.title}</h4>${renderTags(item.technologies, 'implementation-tags')}</div></div><p>${item.description}</p><ul>${item.details.map(detail => `<li>${detail}</li>`).join('')}</ul></article>`).join('')}</div>`;
}

function starCards(project) {
  const labels = [['S', 'Situation', project.star.situation], ['T', 'Task', project.star.task], ['A', 'Action', project.star.action], ['R', 'Result', project.star.result]];
  return `<div class="star-grid">${labels.map(([letter, label, text]) => `<article><span>${letter}</span><div><h4>${label}</h4><p>${text}</p></div></article>`).join('')}</div>`;
}

function flowNode(node, className = '') {
  return `<div class="flow-node ${className}"><b>${node.title}</b><small>${node.text}</small></div>`;
}

function flowDiagram(project) {
  const { flow } = project;
  let diagram = '';

  if (flow.type === 'async-chunks') {
    diagram = `<div class="flow-diagram async-flow" role="img" aria-label="조회 범위를 여러 청크로 비동기 요청하고 응답 순번에 따라 RealGrid 위치에 반영하는 구조">${flowNode(flow.nodes[0], 'flow-start')}<i>→</i><div class="chunk-stack">${flow.nodes.slice(1, 4).map(node => flowNode(node, 'flow-chunk')).join('')}</div><i>⇢</i>${flowNode(flow.nodes[4], 'flow-merge')}<i>→</i>${flowNode(flow.nodes[5], 'flow-target')}</div>`;
  } else if (flow.type === 'relation') {
    diagram = `<div class="flow-diagram relation-flow" role="img" aria-label="ERP 변경 기준과 PHP 입력 조건을 Oracle SQL에 함께 반영해 모바일 조회 결과를 수정하는 관계">${flowNode(flow.nodes[0], 'relation-source')}<i>기준 비교</i><div class="relation-stack">${flowNode(flow.nodes[1])}<span>↓ 조건 전달 · 결과 가공</span>${flowNode(flow.nodes[2])}</div><i>→</i>${flowNode(flow.nodes[3], 'flow-target')}</div>`;
  } else if (flow.type === 'decision') {
    diagram = `<div class="flow-diagram decision-flow" role="img" aria-label="Cron 점검 결과가 정상이면 대기하고 이상이면 문자 알림과 운영 대응으로 분기하는 구조">${flowNode(flow.nodes[0], 'flow-start')}<i>→</i>${flowNode(flow.nodes[1])}<i>→</i><div class="decision-branches"><div><span>정상</span>${flowNode(flow.nodes[2], 'normal-node')}</div><div><span>이상</span>${flowNode(flow.nodes[3], 'alert-node')}<i>→</i>${flowNode(flow.nodes[4], 'flow-target')}</div></div></div>`;
  } else if (flow.type === 'risk') {
    diagram = `<div class="flow-diagram risk-flow" role="img" aria-label="외부 결제 성공 후 내부 DB 저장 전에 세션 만료가 영향을 주던 지점을 강조한 결제 흐름">${flow.nodes.map((node, index) => `${index ? '<i>→</i>' : ''}${flowNode(node, index === 3 ? 'risk-node' : index === 4 ? 'flow-target' : '')}`).join('')}</div>`;
  } else if (flow.type === 'dual-lane') {
    diagram = `<div class="flow-diagram dual-lane-flow" role="img" aria-label="기상청 예보 수집 경로와 사용자 조회 경로가 MariaDB를 사이에 두고 분리된 구조">${flow.lanes.map(lane => `<div class="flow-lane"><strong>${lane.label}</strong><div>${lane.nodes.map((node, index) => `${index ? '<i>→</i>' : ''}${flowNode(node, node.title === 'MariaDB' ? 'flow-target' : '')}`).join('')}</div></div>`).join('')}</div>`;
  } else if (flow.type === 'state') {
    diagram = `<div class="flow-diagram state-flow" role="img" aria-label="문서 상신 후 현재 결재자가 승인하면 다음 결재자가 활성화되고 반려하면 종료되는 상태 흐름">${flowNode(flow.nodes[0], 'flow-start')}<i>→</i>${flowNode(flow.nodes[1], 'pending-node')}<div class="state-branches"><div><span>승인</span>${flowNode(flow.nodes[2])}<i>다음 결재자 있음 ↺</i>${flowNode(flow.nodes[3], 'approved-node')}</div><div><span>반려</span>${flowNode(flow.nodes[4], 'rejected-node')}</div></div></div>`;
  } else {
    diagram = `<div class="flow-diagram flow-row">${flow.nodes.map((node, index) => `${index ? '<i aria-hidden="true">→</i>' : ''}${flowNode(node)}`).join('')}</div>`;
  }

  return `<figure class="flow-figure"><figcaption><span>TECHNICAL FLOW · ${project.type === 'work' ? '공개 범위 개념도' : '구현 구조'}</span><strong>${flow.title}</strong><small>${flow.note}</small></figcaption>${diagram}</figure>`;
}

function imageGallery(project) {
  if (!project.images?.length) return '';
  return `<div class="evidence-gallery">${project.images.map(image => `<figure><a href="${image.src}" target="_blank" rel="noopener" aria-label="${image.title} 이미지 크게 보기"><img src="${image.src}" alt="${image.title}" loading="lazy"></a><figcaption><strong>${image.title}</strong><p>${image.caption}</p></figcaption></figure>`).join('')}</div>`;
}

function resultLinks(project) {
  if (!project.links?.length) return '';
  return `<div class="result-links">${project.links.map(link => `<a class="button" href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label} <span>↗</span></a>`).join('')}</div>`;
}

function renderProjectDetail(project) {
  return `<header class="dialog-hero" id="detail-overview"><p class="eyebrow">${projectTypeLabel(project.type)} · ${project.period}</p><h2 id="dialog-title">${project.title}</h2><h3>${project.subtitle}</h3><p>${project.summary}</p>${renderTags(project.technologies)}</header>
    ${detailNav()}
    <section class="detail-section overview-section"><div class="section-intro"><p class="section-label">01 · PROJECT OVERVIEW</p><h3>프로젝트 개요</h3></div>${overviewMeta(project)}</section>
    <section class="detail-section" id="detail-contributions"><div class="section-intro"><p class="section-label">02 · MY CONTRIBUTIONS</p><h3>직접 구현한 범위</h3></div><ul class="contribution-list">${project.contributions.map(item => `<li>${item}</li>`).join('')}</ul></section>
    <section class="detail-section" id="detail-implementation"><div class="section-intro"><p class="section-label">03 · TECHNICAL IMPLEMENTATION</p><h3>기술을 어디에, 어떻게 적용했는지</h3></div>${implementationCards(project)}</section>
    <section class="detail-section" id="detail-star"><div class="section-intro"><p class="section-label">04 · PROBLEM SOLVING</p><h3>STAR 요약</h3><p>문제의 배경, 해결 기준과 검증 결과를 요약했습니다.</p></div>${starCards(project)}</section>
    <section class="detail-section" id="detail-flow"><div class="section-intro"><p class="section-label">05 · ARCHITECTURE / FLOW</p><h3>처리 흐름</h3></div>${flowDiagram(project)}</section>
    <section class="detail-section result-section" id="detail-results"><div class="section-intro"><p class="section-label">06 · RESULTS & REFERENCES</p><h3>검증 결과와 자료</h3></div><div class="result-summary"><p>${project.result}</p>${resultLinks(project)}</div>${imageGallery(project)}</section>`;
}

function hideDiscoveryTip() {
  discoveryTip.classList.remove('is-visible');
  discoveryTip.setAttribute('aria-hidden', 'true');
  discoveryTip.inert = true;
  activeDiscoveryKey = null;
}

function showDiscoveryTip(key) {
  const section = discoverySections[key];
  if (!section || section.dismissed) return;

  if (activeDiscoveryKey !== key) {
    discoveryTipTitle.textContent = section.title;
    discoveryTipDescription.textContent = section.description;
    discoveryTipClose.setAttribute('aria-label', section.closeLabel);
  }

  activeDiscoveryKey = key;
  discoveryTip.inert = false;
  discoveryTip.setAttribute('aria-hidden', 'false');
  discoveryTip.classList.add('is-visible');
}

function getDiscoveryCandidate(key, section) {
  if (section.dismissed || !section.isIntersecting) return null;

  const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  const rect = section.element.getBoundingClientRect();
  const visibleTop = Math.max(rect.top, 0);
  const visibleBottom = Math.min(rect.bottom, viewportHeight);
  const visibleHeight = Math.max(0, visibleBottom - visibleTop);
  const minimumVisibleHeight = Math.min(180, viewportHeight * .22);
  if (visibleHeight < minimumVisibleHeight) return null;

  const visibleViewportRatio = visibleHeight / viewportHeight;
  const visibleCenter = visibleTop + (visibleHeight / 2);
  const gazePoint = viewportHeight * .48;
  const centerProximity = 1 - Math.min(1, Math.abs(visibleCenter - gazePoint) / (viewportHeight * .5));

  return {
    key,
    score: (visibleViewportRatio * .72) + (centerProximity * .28)
  };
}

function updateDiscoveryTip() {
  discoveryUpdateFrame = null;

  if (mobileDiscoveryQuery.matches || dialog.open) {
    hideDiscoveryTip();
    return;
  }

  const candidates = Object.entries(discoverySections)
    .map(([key, section]) => getDiscoveryCandidate(key, section))
    .filter(Boolean)
    .sort((a, b) => b.score - a.score);

  if (!candidates.length) {
    hideDiscoveryTip();
    return;
  }

  const current = candidates.find(candidate => candidate.key === activeDiscoveryKey);
  const best = candidates[0];
  const selected = current && current.score >= best.score - .08 ? current : best;
  showDiscoveryTip(selected.key);
}

function scheduleDiscoveryTipUpdate() {
  if (discoveryUpdateFrame !== null) return;
  discoveryUpdateFrame = requestAnimationFrame(updateDiscoveryTip);
}

function dismissDiscoveryTip(key) {
  const section = discoverySections[key];
  if (!section) return;
  section.dismissed = true;
  if (activeDiscoveryKey === key) hideDiscoveryTip();
}

if ('IntersectionObserver' in window) {
  const discoveryObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const key = entry.target.id === 'stack' ? 'stack' : 'projects';
      discoverySections[key].isIntersecting = entry.isIntersecting;
    });
    scheduleDiscoveryTipUpdate();
  }, {
    threshold: [0, .05, .1, .15, .2, .3, .4, .5, .65, .8, 1]
  });

  Object.values(discoverySections).forEach(section => discoveryObserver.observe(section.element));
} else {
  Object.values(discoverySections).forEach(section => { section.isIntersecting = true; });
  window.addEventListener('scroll', scheduleDiscoveryTipUpdate, { passive: true });
  scheduleDiscoveryTipUpdate();
}

window.addEventListener('resize', scheduleDiscoveryTipUpdate);
if (typeof mobileDiscoveryQuery.addEventListener === 'function') {
  mobileDiscoveryQuery.addEventListener('change', scheduleDiscoveryTipUpdate);
} else {
  mobileDiscoveryQuery.addListener(scheduleDiscoveryTipUpdate);
}
discoveryTipClose.addEventListener('click', () => {
  if (activeDiscoveryKey) dismissDiscoveryTip(activeDiscoveryKey);
});

function openProject(projectId, opener) {
  const project = projects.find(item => item.id === projectId);
  if (!project) return;
  hideDiscoveryTip();
  dialogOpener = opener || document.activeElement;
  dialogContent.innerHTML = renderProjectDetail(project);
  dialog.scrollTop = 0;
  dialog.showModal();
  document.body.classList.add('modal-open');
  requestAnimationFrame(() => {
    dialog.scrollTop = 0;
    document.querySelector('#close-dialog').focus();
  });
}

grid.innerHTML = projects.map(projectCard).join('');
renderTechGroups();
renderAdditionalExperiences();
renderTechInspector(techGroups[0].technologies[0], '0-0');

document.addEventListener('click', event => {
  const projectButton = event.target.closest('[data-open-project]');
  if (projectButton) {
    if (projectButton.closest('.project-card')) dismissDiscoveryTip('projects');
    openProject(projectButton.dataset.openProject, projectButton);
  }

  const techButton = event.target.closest('[data-tech]');
  if (techButton) {
    dismissDiscoveryTip('stack');
    const [groupIndex, techIndex] = techButton.dataset.tech.split('-').map(Number);
    renderTechInspector(techGroups[groupIndex].technologies[techIndex], techButton.dataset.tech);
  }
});

document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  document.querySelectorAll('.project-card').forEach(card => {
    card.hidden = button.dataset.filter !== 'all' && card.dataset.type !== button.dataset.filter;
  });
}));

document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());

dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) dialog.close();
});

dialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  dialog.scrollTop = 0;
  dialogOpener?.focus();
  scheduleDiscoveryTipUpdate();
});

document.querySelector('#copy-link').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText('https://kkhjo2176.github.io/');
    status.textContent = '포트폴리오 주소를 복사했습니다.';
  } catch {
    status.textContent = '포트폴리오 주소: https://kkhjo2176.github.io/';
  }
});
