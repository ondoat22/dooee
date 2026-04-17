export type Lang = 'en' | 'kr'

// ──────────────────────────────
// 메인 페이지
// ──────────────────────────────
export const mainText = {
  en: {
    title: 'ONDO',
    welcome: 'Welcome to ONDO Architects.',
    tagline: 'Just as everyone has a different temperature,\nwe believe every space requires its own warmth—tailored to its users.',
    sub: 'We design spaces with the right temperature for where they belong.',
    construction: 'Our website is currently under construction.\nFor more information, please click the button below.',
  },
  kr: {
    title: '온도',
    welcome: '온도건축사사무소에 오신 것을 환영합니다.',
    tagline: '사람마다 다른 온도,\n공간에도 그에 맞는 온기가 필요합니다.',
    sub: "우리는 공간의 '알맞은 온도'를 설계합니다.",
    construction: '현재 홈페이지는 준비 중입니다.\n건축사 정보가 궁금하다면 아래 버튼을 클릭해주세요.',
  },
}

// ──────────────────────────────
// 소개 페이지
// ──────────────────────────────
export const dooeeText = {
  en: {
    name: 'Dooee Kim',
    aboutLabel: 'About',
    aboutItems: ['Architect', 'Product Owner', 'Based in Korea', '10+ Years Experience', 'Open to Work'],
    aboutDesc: 'Architect and Product Owner, turning ideas into spaces and services.',
    secProf: 'Proficiencies',
    prof: [
      { label: 'Skills', items: ['Architectural Design', 'Interior Design', 'Spatial Design', 'Product Management', 'Product Strategy'] },
      { label: 'Design Tools', items: ['Autodesk Software', 'Adobe Creative Cloud', 'Rhino', 'SketchUp'] },
      { label: 'Collaboration Tools', items: ['Google Workspace', 'Slack', 'Notion', 'Figma (basic)'] },
      { label: 'AI Tools', items: ['Chat GPT', 'Claude', 'Gemini'] },
    ],
    secWork: 'Work',
    jobs: [
      {
        title: 'Product Owner / Architect',
        date: '2020 - Now', company: 'HOWBUILD', location: 'Korea',
        desc: 'Bridging architecture and technology by leading digital product development for the built environment.',
        desc2: 'Led the planning and launch of IT products for the architecture and construction industry, serving clients, architects, and contractors.',
        bullets: [
          { text: 'Developed digital services:', sub: ['Howbuild Sketch (pre-design feasibility insights)', 'Howbuild PM Service (project planning documentation)', 'ArchiHere Design & Bidding Platform', 'Howbuild Website Redesign', 'Howbuild Navigation (construction site data service)'] },
          { text: 'Participated in government-funded R&D (MOLIT):', sub: ['Digital energy diagnostics and automated design systems for green remodeling'] },
          { text: 'Software registration and patent completed', sub: [] },
        ],
      },
      {
        title: 'Architectural Designer',
        date: '2015 - 2020', company: 'Boundless, ZMJ', location: 'Seoul',
        desc: 'Managed architectural design and approvals across various building types.',
        desc2: '',
        bullets: [
          { text: 'Residential (single-family, multi-family)', sub: [] },
          { text: 'Commercial, retail, and office facilities', sub: [] },
          { text: 'Full process: permitting to occupancy approval', sub: [] },
          { text: 'Planned and executed solar-powered parking structures', sub: [] },
        ],
      },
      {
        title: 'Interior Designer',
        date: '2015 - 2020', company: 'Boundless, Freelancer', location: 'Seoul',
        desc: 'Planned and delivered interior projects with a focus on branding and user experience.',
        desc2: '',
        bullets: [
          { text: 'Premium study café development', sub: ['(with branding collaboration)'] },
          { text: 'Restaurant and café projects (freelance)', sub: [] },
          { text: 'From concept to completion, including approvals', sub: [] },
        ],
      },
      {
        title: 'Internship',
        date: '2012', company: 'hANd', location: 'Seoul',
        desc: 'Participated in the design planning of a tourism complex project.',
        desc2: '',
        bullets: [
          { text: 'Supported concept development and master planning', sub: [] },
          { text: 'Assisted in early-stage design and research', sub: [] },
        ],
      },
    ],
    secEdu: 'Education',
    edu: {
      degree: 'Master of Architecture (M.Arch)',
      date: '2011 - 2015', school: 'GSAKU', location: 'Seoul',
      desc: 'Focused on both architectural design and interior architecture, developing a holistic approach from building scale to furniture-level detail.',
    },
    secProj: 'Projects',
    projects: [
      { name: 'ARCHI-HERE', sub: 'HOWBUILD', href: 'https://archi-here.howbuild.com/projects' },
      { name: 'Detached House in Songdo + Smacon', sub: 'ONDO + HOWBUILD', href: 'https://smacon.howbuild.com/sites/demo/quantity-review' },
      { name: 'Detached House in Cheongna', sub: 'ZMJ', href: 'https://naver.me/FbV9QxQ4' },
      { name: 'HAKDONG OFFICE (ESPACE)', sub: 'BOUNDLESS', href: 'https://c3globe.com/espace-by-zero-to-n/' },
    ],
    secContact: 'Contact',
  },
  kr: {
    name: '김두이',
    aboutLabel: '김두이는,',
    aboutItems: ['대한민국 건축사', '프로덕트 오너', '한국에서 활동 중', '10년 이상의 실무 경험', '프로젝트 협업 가능'],
    aboutDesc: '건축사이자 프로덕트 오너로, 아이디어를 공간과 서비스로 구현합니다.',
    secProf: '보유 역량',
    prof: [
      { label: '기술', items: ['건축설계', '인테리어 디자인', '공간 디자인', '방향성과 전략 중심으로 프로덕트 기획'] },
      { label: '디자인 툴', items: ['오토데스크 프로그램', '어도비 디자인 프로그램', '라이노 3D', '스케치업 3D'] },
      { label: '협업 툴', items: ['구글 워크스페이스', '슬랙', '노션', '피그마 (기본)'] },
      { label: 'AI 활용', items: ['Chat GPT', 'Claude', 'Gemini'] },
    ],
    secWork: '경력',
    jobs: [
      {
        title: '프로덕트 오너 / 건축사',
        date: '2020 - Now', company: '하우빌드', location: '서울',
        desc: '건축과 기술을 연결하며, 건설 산업을 위한 디지털 제품 개발을 리드하고 있습니다.',
        desc2: '건축주, 건축사, 건설사를 위한 IT 서비스 기획 및 출시를 담당했습니다.',
        bullets: [
          { text: '디지털 서비스 개발:', sub: ['하우빌드 스케치 (건축 기본검토 정보 제공)', '하우빌드 PM 서비스 (사업계획서 제공)', '아키히어 설계 / 입찰 플랫폼', '하우빌드 홈페이지 전면 개편', '하우빌드 네비게이션 (공사현장 정보 서비스)'] },
          { text: '국토교통부 연구과제 참여:', sub: ['그린리모델링 활성화를 위한 건축물 에너지 디지털 진단 및 설계 자동화 기술개발'] },
          { text: '소프트웨어 등록 및 특허 완료', sub: [] },
        ],
      },
      {
        title: '건축 디자이너',
        date: '2015 - 2020', company: '경계없는작업실 / 지음재', location: '서울',
        desc: '다양한 건축 유형에 대한 설계 및 인허가 업무를 수행했습니다.',
        desc2: '',
        bullets: [
          { text: '단독주택, 공동주택', sub: [] },
          { text: '근린생활시설, 판매시설, 업무시설', sub: [] },
          { text: '인허가부터 사용승인까지 전 과정 수행', sub: [] },
          { text: '태양광 에너지 활용 주차장 기획 및 착공', sub: [] },
        ],
      },
      {
        title: '인테리어 디자이너',
        date: '2015 - 2020', company: '경계없는작업실 / 프리랜서', location: '서울',
        desc: '브랜딩과 사용자 경험을 중심으로 공간을 기획하고 구현했습니다.',
        desc2: '',
        bullets: [
          { text: '프리미엄 독서실 기획 및 사용승인', sub: ['(브랜딩 디자이너 협업)'] },
          { text: '식당 및 카페 프로젝트 (프리랜서)', sub: [] },
          { text: '기획부터 준공 및 인허가까지 전 과정 수행', sub: [] },
        ],
      },
      {
        title: '인턴십',
        date: '2012', company: '핸드건축', location: '서울',
        desc: '관광단지 개발 프로젝트의 디자인 기획에 참여했습니다.',
        desc2: '',
        bullets: [
          { text: '컨셉 개발 및 마스터플랜 보조', sub: [] },
          { text: '초기 설계 및 리서치 지원', sub: [] },
        ],
      },
    ],
    secEdu: '학력',
    edu: {
      degree: '건축학 석사 (M.Arch)',
      date: '2011 - 2015', school: '건국대학교 건축전문대학원', location: '서울',
      desc: '건축설계와 실내건축을 함께 탐구하며, 건축부터 가구까지 섬세한 디테일을 공부하며 통합적으로 사고하는 설계 역량을 키웠습니다.',
    },
    secProj: '프로젝트',
    projects: [
      { name: '아키히어', sub: '하우빌드', href: 'https://archi-here.howbuild.com/projects' },
      { name: '송도단독주택 + 스마콘', sub: '김두이 + 하우빌드', href: 'https://smacon.howbuild.com/sites/demo/quantity-review' },
      { name: '청라단독주택', sub: '지음재', href: 'https://naver.me/FbV9QxQ4' },
      { name: '학동오피스', sub: '경계없는작업실', href: 'https://c3globe.com/espace-by-zero-to-n/' },
    ],
    secContact: '연락처',
  },
}
