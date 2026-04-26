export type Locale = "en" | "ko";

type Dict = Record<string, string>;

const en: Dict = {
  "meta.title": "future-slide | Disciplined slide generation for Codex",
  "a11y.skip": "Skip to content",
  "a11y.themeToDark": "Switch to dark mode",
  "a11y.themeToLight": "Switch to light mode",
  "a11y.langToggle": "Toggle language",

  "nav.workflow": "Workflow",
  "nav.examples": "Examples",
  "nav.install": "Install",

  "hero.eyebrow": "Codex Skill Bundle · v0.0.1 · Apache-2.0",
  "hero.eyebrowScope": "Codex Skill Bundle",
  "hero.titleA": "Disciplined slide generation,",
  "hero.titleB": "one stage at a time.",
  "hero.lede":
    "Future Slide Skill turns a reference slide image, your files, and a deck request into a strict four-stage workflow — so GPT-class models stop skipping steps and collapsing into generic decks.",
  "hero.ctaInstall": "Install the skill",
  "hero.ctaWorkflow": "See the workflow",

  "flow.outDesign": "DESIGN.md",
  "flow.outPlan": "slide_plan.json",
  "flow.outPrompt": "slide_prompts.json",
  "flow.outGenerate": "page_1.png … page_N.png",

  "why.kicker": "Why four skills",
  "why.title": "A single prompt fails in predictable ways.",
  "why.sub":
    "So this bundle separates responsibilities. Theme first. Story second. Page-level prompts third. Generation last — with explicit, numbered outputs.",
  "why.p1": "Starts writing slides before the theme is extracted.",
  "why.p2": "Mixes design analysis with deck strategy.",
  "why.p3": "Produces page prompts without a real narrative arc.",
  "why.p4": "Loses layout consistency across body slides.",
  "why.p5": "Overfits to visible text, not the slide design system.",
  "why.p6": "Stops after writing prompts — never renders numbered slides.",

  "workflow.kicker": "The workflow",
  "workflow.title": "Four skills, one disciplined pipeline.",
  "workflow.in": "Inputs",
  "workflow.out": "Output",
  "workflow.s1.body":
    "Extract a reusable DESIGN.md from a reference slide image — placement, header/body/footer flow, title/body/end-page behavior, icon usage, infographic cards, and diagram rules.",
  "workflow.s1.in": "Reference slide image(s)",
  "workflow.s2.body":
    "Build the storyline and page-family rhythm. Decide where tables, charts, icon-led modules, and comparison exhibits belong. Map evidence to slides.",
  "workflow.s2.in": "DESIGN.md · user files · goal & audience",
  "workflow.s3.body":
    "Convert the plan into strict per-page prompt JSON. Make layout family, zoning, and anti-generic constraints explicit for every page.",
  "workflow.s3.in": "DESIGN.md · slide_plan.json",
  "workflow.s4.body":
    "Render slide images one by one with Codex native image generation. Save project-bound assets explicitly with stable, page-numbered filenames.",
  "workflow.s4.in": "DESIGN.md · slide_prompts.json",

  "examples.kicker": "Example prompts",
  "examples.title": "A typical end-to-end run.",
  "examples.sub":
    "Drop a reference image, point at a PDF, and let each skill stay in its lane.",
  "examples.c1": "Extract design system from reference slide",
  "examples.c2": "Build the deck plan from a real source document",
  "examples.c2note": "Create a full Korean research-summary deck.",
  "examples.c3": "Convert the plan into strict per-page prompts",
  "examples.c4": "Render slides sequentially",

  "install.kicker": "Installation",
  "install.title": "Install once. Restart Codex. Ship decks.",
  "install.cliTitle": "With the Skills CLI",
  "install.cliBody": "Requires Node.js 18+.",
  "install.manualTitle": "Manual install",
  "install.manualBody": "Copy each skill folder into your Codex skills directory.",

  "opt.kicker": "What it optimizes for",
  "opt.title": "Stricter enforcement, not more decoration.",
  "opt.l1": "Theme extraction first, content second.",
  "opt.l2": "Strong cross-slide consistency.",
  "opt.l3": "Persuasive story flow with explicit evidence mapping.",
  "opt.l4": "Reusable layout families and body-slide discipline.",
  "opt.l5": "Header/body/footer zoning with role-clear icons & charts.",
  "opt.l6": "Sequential image generation with stable numbering.",
  "opt.l7": "No hallucinated rules when the reference is ambiguous.",

  "footer.license": "Apache-2.0 licensed.",
  "footer.builtBy": "Built by",
};

const ko: Dict = {
  "meta.title":
    "future-slide | Codex를 위한 단단한 슬라이드 생성 워크플로",
  "a11y.skip": "본문으로 이동",
  "a11y.themeToDark": "다크 모드로 전환",
  "a11y.themeToLight": "라이트 모드로 전환",
  "a11y.langToggle": "언어 전환",

  "nav.workflow": "워크플로",
  "nav.examples": "예시",
  "nav.install": "설치",

  "hero.eyebrow": "Codex 스킬 번들 · v0.0.1 · Apache-2.0",
  "hero.eyebrowScope": "Codex 스킬 번들",
  "hero.titleA": "단계마다 규율 있게,",
  "hero.titleB": "흔들림 없는 슬라이드 생성.",
  "hero.lede":
    "Future Slide Skill은 참조 슬라이드 이미지, 사용자 파일, 덱 요청을 엄격한 4단계 워크플로로 묶어 줍니다. GPT 계열 모델이 단계를 건너뛰거나 일반화된 결과로 무너지지 않도록 강제합니다.",
  "hero.ctaInstall": "스킬 설치하기",
  "hero.ctaWorkflow": "워크플로 보기",

  "flow.outDesign": "DESIGN.md",
  "flow.outPlan": "slide_plan.json",
  "flow.outPrompt": "slide_prompts.json",
  "flow.outGenerate": "page_1.png … page_N.png",

  "why.kicker": "왜 4개 스킬인가",
  "why.title": "단일 프롬프트는 늘 같은 방식으로 실패합니다.",
  "why.sub":
    "그래서 이 번들은 책임을 분리합니다. 테마 먼저, 스토리 다음, 페이지 단위 프롬프트, 마지막으로 명시적으로 번호 매겨진 결과물 생성.",
  "why.p1": "테마가 추출되기 전에 슬라이드를 쓰기 시작합니다.",
  "why.p2": "디자인 분석과 덱 전략을 섞어 버립니다.",
  "why.p3": "진짜 서사 흐름 없이 페이지 프롬프트를 만들어 냅니다.",
  "why.p4": "본문 슬라이드 간 레이아웃 일관성이 무너집니다.",
  "why.p5":
    "참조 이미지의 슬라이드 디자인 시스템이 아닌, 보이는 텍스트에 과적합됩니다.",
  "why.p6":
    "프롬프트 작성에서 멈추고 — 번호 매겨진 슬라이드를 절대 렌더링하지 않습니다.",

  "workflow.kicker": "워크플로",
  "workflow.title": "4개의 스킬, 하나의 엄격한 파이프라인.",
  "workflow.in": "입력",
  "workflow.out": "출력",
  "workflow.s1.body":
    "참조 슬라이드 이미지에서 재사용 가능한 DESIGN.md를 추출합니다 — 배치, 헤더/본문/푸터 흐름, 타이틀/본문/엔드 페이지 동작, 아이콘 사용, 인포그래픽 카드, 다이어그램 규칙까지.",
  "workflow.s1.in": "참조 슬라이드 이미지",
  "workflow.s2.body":
    "스토리라인과 페이지 패밀리 리듬을 설계합니다. 표, 차트, 아이콘 모듈, 비교 전시 위치를 결정하고 근거를 슬라이드에 매핑합니다.",
  "workflow.s2.in": "DESIGN.md · 사용자 파일 · 목표 & 청중",
  "workflow.s3.body":
    "계획을 페이지별 엄격한 프롬프트 JSON으로 변환합니다. 레이아웃 패밀리, 존 구분, 반(反)일반화 제약을 모든 페이지에 명시합니다.",
  "workflow.s3.in": "DESIGN.md · slide_plan.json",
  "workflow.s4.body":
    "Codex 네이티브 이미지 생성으로 슬라이드를 한 장씩 렌더링합니다. 프로젝트 자산을 안정적인 페이지 번호 파일명으로 명시적으로 저장합니다.",
  "workflow.s4.in": "DESIGN.md · slide_prompts.json",

  "examples.kicker": "예시 프롬프트",
  "examples.title": "전형적인 엔드투엔드 실행.",
  "examples.sub":
    "참조 이미지를 던지고, PDF를 가리키고, 각 스킬이 자기 영역에 머물도록 두세요.",
  "examples.c1": "참조 슬라이드에서 디자인 시스템 추출",
  "examples.c2": "실제 소스 문서로부터 덱 계획 작성",
  "examples.c2note": "한국어 리서치 요약 풀 덱을 만드세요.",
  "examples.c3": "계획을 페이지별 엄격한 프롬프트로 변환",
  "examples.c4": "슬라이드를 순차적으로 렌더링",

  "install.kicker": "설치",
  "install.title": "한 번 설치. Codex 재시작. 덱 출고.",
  "install.cliTitle": "Skills CLI 사용",
  "install.cliBody": "Node.js 18+ 필요.",
  "install.manualTitle": "수동 설치",
  "install.manualBody": "각 스킬 폴더를 Codex 스킬 디렉터리로 복사합니다.",

  "opt.kicker": "이 번들이 최적화하는 것",
  "opt.title": "더 많은 장식이 아니라, 더 엄격한 강제.",
  "opt.l1": "테마 추출이 먼저, 콘텐츠가 다음.",
  "opt.l2": "강한 슬라이드 간 일관성.",
  "opt.l3": "근거-슬라이드 매핑이 명시된 설득력 있는 흐름.",
  "opt.l4": "재사용 가능한 레이아웃 패밀리와 본문 슬라이드 규율.",
  "opt.l5": "헤더/본문/푸터 존 구분, 역할이 분명한 아이콘과 차트.",
  "opt.l6": "안정된 번호 매김으로 순차 이미지 생성.",
  "opt.l7": "참조가 모호할 때 규칙을 환각하지 않음.",

  "footer.license": "Apache-2.0 라이선스.",
  "footer.builtBy": "제작:",
};

export const translations: Record<Locale, Dict> = { en, ko };
export const SUPPORTED_LOCALES: readonly Locale[] = ["en", "ko"] as const;
export const DEFAULT_LOCALE: Locale = "en";
