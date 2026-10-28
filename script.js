const projects=[
  {
    "id": "erp",
    "type": "work",
    "title": "ERP를 웹으로 옮기는 일",
    "period": "2022.09 — 2025.09",
    "subtitle": "Vue 3 기반 ERP 웹 전면 재구축",
    "desc": "PowerBuilder 기반 ERP의 웹 전환. 새로운 도구를 검토하고 공통 개발 기반과 실제 업무 화면을 구현했습니다.",
    "tags": [
      "Vue 3",
      "TypeScript",
      "RealGrid"
    ],
    "visual": "erp",
    "role": "프론트엔드 개발 · 선정된 RealGrid 적용 검토 · 공통 개발 환경 구축",
    "items": [
      "팀장이 선정한 RealGrid의 ERP 적용 가능성을 검토하고 공식 기술지원 게시판을 통해 지속적으로 기술 문의와 기능 검토를 진행했습니다.",
      "ERP 업무 화면을 구현하고 후속 개발자를 위한 데모 페이지와 공통 컴포넌트를 제작했습니다."
    ],
    "result": "ERP 주요 업무 화면, RealGrid 데모 페이지, 프론트엔드 공통 모듈을 제작했습니다.",
    "design": [
      [
        "분할·병렬 조회 구현",
        "<code>Promise.all()</code>로 분할 요청하고, 응답의 <strong>순서 식별 정보</strong>로 데이터 위치를 맞췄습니다. RealGrid에 점진적으로 표시하되 전체 조회 완료까지 로딩을 유지하고 데이터 조작을 제한했습니다."
      ],
      [
        "공통 컴포넌트 설계",
        "후속 개발자의 <strong>재사용</strong>을 고려해 기능을 분리했습니다. 기존 ERP와 동일한 화면·기능 요구에 맞춰 초기 설계와 공통화 범위를 조정했습니다."
      ]
    ],
    "designLabel": "핵심 문제",
    "designSummary": "DB에 직접 접근하던 PowerBuilder ERP의 전체 조회 요구를 웹의 3-Tier 구조로 구현하면서, 서버와 브라우저의 처리 부담을 고려해야 했습니다. 고객사에 따라 수만~수백만 건의 데이터가 존재했습니다."
  },
  {
    "id": "ops",
    "type": "work",
    "title": "운영의 공백을 줄이는 자동화",
    "period": "2021.06 — 2025.09",
    "subtitle": "클라우드 서버 운영 및 장애 대응 자동화",
    "desc": "서버 자원을 주기적으로 확인하고, 상황에 따라 Apache reload 또는 문자 알림으로 대응하도록 운영 점검을 자동화했습니다.",
    "tags": [
      "Linux",
      "Apache",
      "NHN Cloud",
      "Shell Script"
    ],
    "visual": "ops",
    "role": "클라우드·웹서버 운영 · 장애 대응 자동화",
    "items": [
      "클라우드 이전 후 Linux·Apache 웹서버 운영을 담당했습니다.",
      "cron 기반 자원 점검과 상황별 Apache reload·담당자 문자 알림을 구현했습니다.",
      "Apache 업그레이드 시 기존 서비스와 신규 버전을 병행 설치·검증한 뒤 운영 환경을 전환했습니다."
    ],
    "result": "서버 상태 점검과 일부 대응 과정을 자동화하고 비업무 시간대 이상 상황을 확인할 수 있는 문자 알림 체계를 구축했습니다. 반복적인 수동 점검·대응 작업을 줄이는 것을 목적으로 구현했습니다.",
    "design": [
      [
        "서버 상태 모니터링",
        "<strong>Linux cron</strong>으로 자원 사용률을 주기적으로 확인했습니다. 사전에 설정한 임계치를 기준으로 이상 상태와 필요한 대응을 판단했습니다."
      ],
      [
        "상황별 대응 자동화",
        "Apache 관련 문제는 <code>systemctl reload httpd</code>를 자동 실행해 서비스 영향을 최소화하도록 처리했습니다. 직접 확인이 필요한 다른 이상 상황은 <strong>담당자 문자 알림</strong>으로 연결했습니다."
      ]
    ],
    "designLabel": "설계 목적",
    "designSummary": "서버 이상 상황을 신속하게 파악하고, 반복적인 점검과 일부 복구 작업을 자동화하기 위해 모니터링 기능을 구현했습니다."
  },
  {
    "id": "service",
    "type": "work",
    "title": "오랫동안 쓰이는 서비스를 관리하다",
    "period": "2019.03 — 2025.09",
    "subtitle": "ERP 연계 웹서비스 · 고객사 웹사이트",
    "desc": "ERP 연계 서비스 4종과 고객사 홈페이지·쇼핑몰의 기능 개선, 오류 수정, 운영을 꾸준히 담당했습니다.",
    "tags": [
      "PHP",
      "CodeIgniter",
      "JavaScript"
    ],
    "visual": "web",
    "role": "ERP 연계 웹서비스 개발·운영 · 고객사 웹사이트 유지보수",
    "items": [
      "EP MOBILE, EPS, EPS2, B2B의 기능 개발·오류 수정 및 유지보수를 수행했습니다.",
      "각 서비스의 기존 구조와 데이터 흐름을 분석하고 고객사 요구사항에 맞춰 기능을 개선했습니다.",
      "ERP 쿼리 및 연계 데이터 변경사항을 웹서비스에 반영했습니다.",
      "웹팀·솔루션팀 간 협업과 고객사 홈페이지·쇼핑몰 운영을 함께 담당했습니다."
    ],
    "result": "단일 기능 개발에 그치지 않고 약 7년의 재직 기간 동안 실제 운영 중인 기업용 웹서비스를 지속해서 개발·유지보수한 경험입니다.",
    "url": "https://entin.co.kr/service/portfolio/",
    "notice": "회사 공개 포트폴리오입니다. 사이트별 참여 범위는 다르며, 전체 사이트의 단독 제작을 의미하지 않습니다."
  },
  {
    "id": "renewal",
    "type": "work",
    "title": "홈페이지와 클라우드를 연결하다",
    "period": "2021.12 — 2022.04",
    "subtitle": "회사 공식 홈페이지 전면 리뉴얼",
    "desc": "퍼블리싱된 화면에 웹 기능을 구현하고, 클라우드에 저장된 ERP 패치 파일의 다운로드를 연동했습니다.",
    "tags": [
      "PHP",
      "JavaScript",
      "NHN Cloud"
    ],
    "visual": "web",
    "role": "웹 기능 개발 · 클라우드 파일 연동",
    "items": [
      "퍼블리셔가 제작한 화면에 PHP·JavaScript 기반 웹 기능을 구현했습니다.",
      "NHN Cloud Storage의 ERP 업데이트·패치 파일을 홈페이지에서 다운로드할 수 있도록 PHP 서버와 연동했습니다."
    ],
    "result": "공식 홈페이지 리뉴얼에 참여하고 ERP 패치 파일 다운로드 기능을 구현했습니다.",
    "url": "https://entin.co.kr/customer/board/down",
    "linkLabel": "ERP 업데이트 자료실 보기",
    "notice": "담당했던 클라우드 파일 다운로드 연동 기능이 사용되는 공개 페이지입니다. 게시글 및 ERP 패치 파일 자체의 제작을 의미하지 않습니다.",
    "design": [
      [
        "PHP 서버에서 인증과 파일 전달",
        "사용자의 다운로드 요청을 받은 <strong>PHP 서버</strong>가 NHN Cloud API 엔드포인트에 인증 정보를 전달해 파일을 조회하고, 받은 파일을 사용자에게 전달했습니다. API 인증 정보는 브라우저에서 직접 사용하지 않고 서버 측에서 처리했습니다."
      ]
    ],
    "designLabel": "설계 목적",
    "designSummary": "NHN Cloud Storage에 저장된 ERP 업데이트·패치 파일을 홈페이지에서 다운로드할 수 있도록 연동했습니다."
  },
  {
    "id": "weather",
    "type": "team",
    "title": "날씨 데이터를 생활의 추천으로",
    "period": "2026.10 · 팀 프로젝트",
    "subtitle": "Weather Mate",
    "desc": "기상청 예보와 AI 예측 데이터를 웹서비스에 연결하고, 날씨에 맞는 복장 추천을 제공하는 프로젝트입니다.",
    "tags": [
      "Spring Boot",
      "REST API",
      "MariaDB",
      "Docker"
    ],
    "visual": "weather",
    "role": "백엔드 담당 · 기상청 API 수집 · AI 예측 데이터 연동 · 복장 추천",
    "items": [
      "서울 25개 구 대표 격자의 단기예보 수집·저장과 날짜별·시간별 조회 API를 구현했습니다.",
      "기상 조건과 계절을 반영한 규칙 기반 복장·소품 추천을 구현했습니다.",
      "별도로 개발된 AI 예측 모델 API를 호출하고 결과를 웹서비스에 제공하는 백엔드 연동을 담당했습니다."
    ],
    "result": "날씨 조회·복장 추천 API와 예보 자동 수집·지난 데이터 정리 기능을 구성했습니다. 외부 데이터 수집과 사용자 조회를 분리해 중복 외부 요청과 API 호출 부담을 줄이고자 했습니다.",
    "url": "https://github.com/kkhjo2176/weather-life",
    "notice": "저장소 공개 상태에 따라 접근이 제한될 수 있습니다.",
    "design": [
      [
        "예보 데이터 수집 구조",
        "<code>@Scheduled</code>로 예보 발표 <strong>20분 후</strong> 서울 <strong>25개 구 대표 격자</strong>의 데이터를 수집했습니다. DB 조회로 중복 외부 요청을 방지하고, 지난 예보를 정리하도록 구현했습니다."
      ],
      [
        "규칙 기반 복장 추천 개선",
        "기온·습도·강수·풍속을 기본 조건으로 활용했습니다. 가을에도 봄 복장이 추천되던 문제를 개선하기 위해, 유사한 날씨 조건에서 <strong>계절 가중치</strong>를 함께 반영했습니다."
      ]
    ],
    "designLabel": "설계 목적",
    "designSummary": "사용자 증가에 따른 기상청 API 호출 부담을 고려해, 예보 데이터 수집과 사용자 조회를 분리했습니다."
  },
  {
    "id": "groupware",
    "type": "team",
    "title": "업무의 흐름을 연결하는 그룹웨어",
    "period": "2026.07 — 2026.08 · 팀 프로젝트",
    "subtitle": "Company Groupware",
    "desc": "결재 상신부터 승인·반려까지 업무 흐름을 구현하고, 댓글과 첨부파일 등 협업 기능을 개발했습니다.",
    "tags": [
      "Spring Boot",
      "JPA",
      "Thymeleaf",
      "MariaDB"
    ],
    "visual": "group",
    "role": "전자결재 · 결재라인 · 댓글/대댓글 · 사인 이미지 · 첨부파일",
    "items": [
      "전자결재 임시저장·상신·승인·반려와 결재라인 관리를 구현했습니다.",
      "댓글·대댓글, 사인 이미지 등록·표시, 첨부파일 다중 업로드·다운로드를 담당했습니다.",
      "Spring Security 접근 권한 관련 예외 처리를 수행했습니다."
    ],
    "result": "여러 협업 기능을 하나의 Spring Boot 애플리케이션에 통합했습니다. 아래 저장소는 팀 프로젝트를 포크한 저장소입니다.",
    "url": "https://github.com/kkhjo2176/company-groupware",
    "design": [
      [
        "전자결재 업무 로직",
        "임시저장·상신·승인·반려 등 <strong>업무 상태에 따른 처리</strong>를 구현했습니다. 결재라인으로 결재자와 결재 순서를 관리했습니다."
      ],
      [
        "댓글·대댓글 관계 처리",
        "댓글의 계층 구조를 구현하고, <strong>하위 댓글이 있으면 상위 댓글 삭제를 제한</strong>했습니다. 데이터 관계를 확인한 뒤 삭제 여부를 판단하도록 처리했습니다."
      ]
    ],
    "designLabel": "핵심 구현",
    "designSummary": "전자결재의 상태별 업무 처리와 결재라인 관리, 댓글·대댓글의 계층 구조를 구현했습니다."
  }
];
const projectScreens = {"service": [{"src": "assets/etrs.png", "title": "티알에스 · EPS", "caption": "ERP 연계 웹서비스 기능 개발·오류 수정·유지보수 참여", "url": "https://www.etrs.co.kr"}, {"src": "assets/erae.png", "title": "이래툴스 · EPS", "caption": "ERP 연계 기업용 쇼핑몰 개발·유지보수 참여", "url": "https://shop.eraetools.co.kr"}, {"src": "assets/skfa.png", "title": "세광에프에이시스템 · EPS2", "caption": "ERP 연계 웹서비스 개발·유지보수 참여", "url": "https://www.skfa.co.kr"}, {"src": "assets/ep-mobile.png", "title": "대구텍 대리점 시스템 · EP MOBILE", "caption": "EP MOBILE 적용 서비스의 로그인 화면 · 내부 업무 화면은 포함하지 않았습니다.", "url": "https://tkm.entin.co.kr"}], "renewal": [{"src": "assets/entin.png", "title": "엔터인 공식 홈페이지", "caption": "공식 홈페이지 현재 화면 · 담당: PHP·JavaScript 웹 기능 및 클라우드 파일 다운로드 연동", "url": "https://entin.co.kr"}], "weather": [{"src": "assets/weather.png", "title": "Weather Mate · 날씨 비교", "caption": "팀 프로젝트 발표 화면 · 담당: 기상청·AI 예측 데이터 연동 및 백엔드 API"}, {"src": "assets/outfit.png", "title": "Weather Mate · 생활 추천", "caption": "팀 프로젝트 발표 화면 · 날씨·추천 정보 제공 백엔드 담당. 화면 디자인과 캐릭터 제작은 담당 범위에 포함하지 않습니다."}], "groupware": [{"src": "assets/approval.png", "title": "전자결재 · 문서 상세와 승인/반려", "caption": "담당 기능: 문서 조회, 결재 진행 상태, 첨부파일 및 승인·반려 처리"}, {"src": "assets/approval-route.png", "title": "결재라인 관리", "caption": "담당 기능: 결재라인 및 결재자 관리"}, {"src": "assets/signature.png", "title": "사인 이미지 관리", "caption": "담당 기능: 사인 등록 및 결재 화면 표시"}, {"src": "assets/comments.png", "title": "댓글·대댓글 삭제 제약", "caption": "담당 기능: 답글이 있는 댓글의 삭제 제한 · 개발 당시 테스트 화면"}]};
projects.forEach(p => {p.screens=projectScreens[p.id]||[];});
projects.find(p=>p.id==='weather').subtitle='Weather Mate';
const implementationDiagrams={"erp": "<div class=\"evolution\"><span>검색·스크롤 추가 조회</span><span>조회 건수 선택·페이징</span><span>분할 순차 요청</span><span>Promise.all() 병렬 요청</span></div><div class=\"flow-node\"><b>데이터 분할</b></div><div class=\"flow-arrow\" aria-hidden=\"true\">↓</div><div class=\"flow-node\"><b>분할 요청 병렬 실행</b></div><div class=\"flow-arrow\" aria-hidden=\"true\">↓</div><div class=\"flow-node\"><b>응답 위치 정렬 · RealGrid 점진 표시</b></div><div class=\"flow-arrow\" aria-hidden=\"true\">↓</div><div class=\"flow-node\"><b>전체 조회 완료</b></div>", "ops": "<div class=\"flow-node\"><b>Linux cron</b><small>주기적 자원 사용률 확인</small></div><div class=\"flow-arrow\" aria-hidden=\"true\">↓</div><div class=\"flow-node\"><b>임계치 초과 여부</b></div><div class=\"flow-branches\"><div><div class=\"flow-node\"><b>미초과</b><small>다음 주기 점검</small></div></div><div><div class=\"flow-node\"><b>초과 · 상황별 대응</b></div><div class=\"flow-arrow\" aria-hidden=\"true\">↓</div><div class=\"flow-branches\"><div><div class=\"flow-node\"><b>Apache 관련 문제</b><small>systemctl reload httpd</small></div></div><div><div class=\"flow-node\"><b>직접 확인 필요</b><small>담당자 문자 알림</small></div></div></div></div></div>", "weather": "<div class=\"weather-sources\"><div><div class=\"flow-node\"><b>기상청 단기예보 API</b></div><div class=\"flow-arrow\" aria-hidden=\"true\">↓</div><div class=\"flow-node\"><b>Spring Scheduler</b><small>@Scheduled</small></div><div class=\"flow-arrow\" aria-hidden=\"true\">↓</div><div class=\"flow-node\"><b>MariaDB</b><small>예보 저장·조회</small></div></div><div class=\"ai-source\"><div class=\"flow-node\"><b>외부 AI 예측 API</b><small>별도 모델의 결과 연동</small></div></div></div><div class=\"source-join\"><span>예보 데이터 ↓</span><span>AI 예측 결과 ↓</span></div><div class=\"flow-node\"><b>Spring Boot REST API</b><small>날씨·AI 예측 결과 · 규칙 기반 복장 추천</small></div><div class=\"flow-arrow\" aria-hidden=\"true\">↓</div><div class=\"flow-node\"><b>사용자 화면</b></div>", "groupware": "<div class=\"flow-node\"><b>문서 작성</b></div><div class=\"flow-branches\"><div><div class=\"flow-node\"><b>임시저장</b></div></div><div><div class=\"flow-node\"><b>상신</b></div><div class=\"flow-arrow\" aria-hidden=\"true\">↓</div><div class=\"flow-node\"><b>결재 진행</b><small>결재라인 기반</small></div><div class=\"flow-arrow\" aria-hidden=\"true\">↓</div><div class=\"flow-branches\"><div><div class=\"flow-node\"><b>승인</b></div></div><div><div class=\"flow-node\"><b>반려</b></div></div></div></div></div>"};
const diagramTitles={"erp":"대량 조회 방식의 변화와 최종 처리 흐름","ops":"서버 자원 점검과 상황별 대응","weather":"외부 데이터 수집과 사용자 조회 구조","groupware":"전자결재 업무 처리 흐름"};
function implementationSection(p){
  if(!p.design)return '';
  const diagram=implementationDiagrams[p.id];
  return '<section class="implementation"><h3>핵심 설계 및 구현 과정</h3>'+
    '<div class="design-summary"><span>'+p.designLabel+'</span><p>'+p.designSummary+'</p></div>'+
    (diagram?'<figure class="implementation-flow"><figcaption>'+diagramTitles[p.id]+'</figcaption>'+diagram+'</figure>':'')+
    '<div class="design-details'+(p.design.length===1?' single':'')+'">'+p.design.map(([title,body],i)=>'<article><span class="design-index">0'+(i+1)+'</span><h4>'+title+'</h4><p>'+body+'</p></article>').join('')+'</div></section>';
}
function screenshotGallery(p){if(!p.screens.length)return '';return '<section class="screen-gallery"><h3>실제 서비스 화면</h3><p class="gallery-hint">이미지를 선택하면 큰 화면으로 볼 수 있습니다.</p>'+p.screens.map(x=>'<figure><a class="screen-link" href="'+x.src+'" target="_blank" rel="noopener" aria-label="'+x.title+' 이미지 크게 보기"><img src="'+x.src+'" alt="'+x.title+'" loading="lazy"><span>크게 보기 ↗</span></a><figcaption><strong>'+x.title+'</strong><p>'+x.caption+'</p>'+(x.url?'<a class="text-link" href="'+x.url+'" target="_blank" rel="noopener">사이트 방문 ↗</a>':'')+'</figcaption></figure>').join('')+'</section>';}
function visual(p){if(p.screens.length){const x=p.screens[0];return '<div class="project-visual real-visual real-'+p.id+'"><img src="'+x.src+'" alt="'+x.title+'" loading="lazy"><span class="screen-badge">'+(p.type==='team'?'팀 프로젝트 화면':'서비스 화면')+'</span></div>';}let body='';if(p.visual==='ops')body='<div class="terminal"><span>$ service-monitor --watch</span><br><b>✓</b> 상태 확인 → 이상 감지<br><b>✓</b> Apache reload / 문자 알림<br><b>✓</b> 상황별 대응<br><span style="opacity:.5">cron → check → respond</span></div>';else{let inner=p.visual==='erp'?'<div class="mini-grid">'+Array.from({length:28},(_,i)=>'<span>'+(['품목코드','품목명','규격','수량'][i]||'—')+'</span>').join('')+'</div>':p.visual==='weather'?'<div class="weather-panel"><div><small>WEATHER → OUTFIT</small><strong>Weather<br>Life.</strong></div><div class="sun"></div></div>':p.visual==='group'?'<div class="approval"><span>임시저장</span><span>상신 →</span><span>검토 →</span><span>승인</span></div><div class="mini-grid">'+('<span></span>'.repeat(8))+'</div>':'<div class="web-lines"><span>WEB<br>웹서비스</span><span>ERP<br>업무 데이터</span><span>CLOUD<br>파일 연동</span></div>';body='<div class="mini-window"><div class="mini-top"><b>'+({erp:'ERP / 품목 관리',weather:'WEATHER LIFE',group:'GROUPWARE / 전자결재',web:'WEB SERVICES'}[p.visual])+'</b><span>···</span></div>'+inner+'</div>';}return '<div class="project-visual visual-'+p.visual+'" aria-hidden="true"><div class="visual-caption"><span>'+p.tags[0].toUpperCase()+' / '+(p.type==='team'?'TEAM PROJECT':'PROFESSIONAL WORK')+'</span><span>개념도</span></div>'+body+'</div>';}
const grid=document.querySelector('#project-grid');grid.innerHTML=projects.map((p,i)=>'<article class="project-card" data-type="'+p.type+'">'+visual(p)+'<div class="project-meta"><b>'+(p.type==='work'?'실무 경험':'팀 프로젝트')+' / 0'+(i+1)+'</b><span>'+p.period+'</span></div><h3>'+p.title+'</h3><p>'+p.desc+'</p><div class="project-tags">'+p.tags.map(t=>'<span>'+t+'</span>').join('')+'</div><button class="detail-button" data-project="'+p.id+'" aria-haspopup="dialog">담당 역할과 구현 내용 <span>↗</span></button></article>').join('');
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b))});document.querySelectorAll('.project-card').forEach(c=>c.hidden=b.dataset.filter!=='all'&&c.dataset.type!==b.dataset.filter)}));
const dialog=document.querySelector('#project-dialog');let opener;document.querySelectorAll('[data-project]').forEach(b=>b.addEventListener('click',()=>{opener=b;const p=projects.find(p=>p.id===b.dataset.project);document.querySelector('#dialog-content').innerHTML='<p class="eyebrow">'+p.period+'</p><h2>'+p.subtitle+'</h2><p>'+p.desc+'</p><div class="project-tags">'+p.tags.map(t=>'<span>'+t+'</span>').join('')+'</div><h3>담당 역할</h3><p>'+p.role+'</p><h3>주요 구현과 기여</h3><ul>'+p.items.map(t=>'<li>'+t+'</li>').join('')+'</ul>'+implementationSection(p)+'<h3>결과 및 산출물</h3><p>'+p.result+'</p>'+(p.url?'<a class="button" target="_blank" rel="noopener" href="'+p.url+'">'+(p.linkLabel||(p.type==='team'?'GitHub 저장소':'회사 포트폴리오'))+' ↗</a>':'')+(p.notice?'<p class="small">'+p.notice+'</p>':'')+screenshotGallery(p);dialog.showModal();document.body.classList.add('modal-open')}));document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');opener?.focus()});document.querySelector('#copy-link').addEventListener('click',async()=>{const s=document.querySelector('#copy-status');try{await navigator.clipboard.writeText('https://kkhjo2176.github.io/');s.textContent='포트폴리오 주소를 복사했습니다.'}catch{s.textContent='포트폴리오 주소: https://kkhjo2176.github.io/'}});
