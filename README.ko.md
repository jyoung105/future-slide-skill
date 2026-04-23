# Future Slide Skill

[English](./README.md) | [한국어](./README.ko.md)

![Version](https://img.shields.io/badge/version-0.0.1-333333?style=flat-square)
[![License: Apache-2.0](https://img.shields.io/badge/License-Apache--2.0-yellow.svg)](./LICENSE)
![Codex Skills](https://img.shields.io/badge/Codex-Skills-111111?style=flat-square)

바로가기: [사용 흐름](#기본-사용-흐름) | [예시](#예시) |
[설치](#설치) | [라이선스](#라이선스)

![Future Slide Skill Flow](public/four-skill-flow.png)

슬라이드 이미지를 그냥 "예쁘게 만들어줘"라고 한 번에 맡기면 결과가
자주 흔들립니다. 디자인 톤이 바뀌거나, 본문 슬라이드마다 레이아웃이
달라지거나, 표와 차트가 들어가야 할 자리에 의미 없는 카드가 생기기도
합니다.

이 저장소는 그런 일을 줄이기 위한 Codex 스킬 묶음입니다. 참고 슬라이드
이미지, 보고서 PDF, 사용자가 준 파일과 요청을 바탕으로 슬라이드 제작을
네 단계로 나눕니다.

1. 참고 이미지나 PDF에서 `DESIGN.md`를 뽑습니다.
2. 자료와 목적에 맞게 `slide_plan.json`을 만듭니다.
3. 각 페이지별 생성 프롬프트를 `slide_prompts.json`으로 정리합니다.
4. 프롬프트를 바탕으로 슬라이드 이미지를 순서대로 생성합니다.

## 왜 4단계로 나누나요?

한 번에 모든 일을 시키면 모델이 자주 순서를 건너뜁니다.

- 디자인을 먼저 뽑기 전에 슬라이드 내용을 쓰기 시작합니다.
- 자료 분석과 디자인 분석이 섞입니다.
- 본문 슬라이드의 규칙이 매 페이지마다 바뀝니다.
- 표, 차트, 각주, 출처 같은 보고서 요소를 대충 처리합니다.
- 생성만 하고 실제 파일로 저장하지 않는 경우가 생깁니다.

그래서 이 묶음은 역할을 분리합니다.

- **`gpt-slide-design`**: 참고 자료에서 재사용 가능한 `DESIGN.md` 추출
- **`gpt-slide-plan`**: 설득 흐름, 페이지 순서, 근거 배치 설계
- **`gpt-slide-prompt`**: 페이지별 생성 프롬프트 JSON 작성
- **`gpt-slide-generate`**: 슬라이드 이미지를 한 장씩 생성하고 저장

## 기본 사용 흐름

아래 순서대로 쓰는 것을 권장합니다.

### 1. `gpt-slide-design`

입력:

- 참고 슬라이드 이미지
- 참고 덱에서 뽑은 페이지 이미지
- 색상, 표, 차트, 헤더, 푸터, 출처, 공시 영역이 잘 보이는 보고서 PDF

출력:

- 슬라이드 디자인 규칙을 정리한 `DESIGN.md`

이 단계는 내용을 요약하는 단계가 아닙니다. 색, 글자 위계, 여백, 표와
차트 처리, 제목/본문/푸터 배치 같은 "디자인 언어"를 뽑는 단계입니다.

### 2. `gpt-slide-plan`

입력:

- `DESIGN.md`
- 사용자가 준 파일
- 만들고 싶은 덱의 목적, 대상, 요청 문장

출력:

- 페이지 순서, 핵심 메시지, 근거 배치가 들어간 `slide_plan.json`

자료를 파일 순서대로 나열하지 않고, 청중이 이해하기 좋은 이야기 흐름으로
정리합니다.

### 3. `gpt-slide-prompt`

입력:

- `DESIGN.md`
- `slide_plan.json`
- 필요하면 추가 자료

출력:

- 각 페이지를 어떻게 생성해야 하는지 적은 `slide_prompts.json`

헤더, 본문, 푸터 구역을 나누고 표/차트/카드/다이어그램이 어디에 들어갈지
구체적으로 적습니다.

### 4. `gpt-slide-generate`

입력:

- `DESIGN.md`
- `slide_prompts.json`

출력:

- `page_1.png`
- `page_2.png`
- `page_3.png`
- ...

이미지를 한꺼번에 만들지 않고 페이지 번호 순서대로 생성합니다. 각 장을
확인한 뒤 작업 폴더에 저장하는 것이 목표입니다.

[맨 위로](#future-slide-skill)

## 예시

디자인 먼저 추출:

```text
$gpt-slide-design [reference slide image]
```

보고서 PDF를 참고해 분석 덱 계획:

```text
$gpt-slide-plan /path/to/report.pdf
이 리포트를 바탕으로 한국어 분석 슬라이드 덱을 만들어줘.
표와 차트 중심의 보고서 톤을 유지해줘.
```

페이지별 생성 프롬프트 작성:

```text
$gpt-slide-prompt
DESIGN.md와 slide_plan.json을 사용해서 페이지별 프롬프트 JSON을 만들어줘.
```

이미지 생성:

```text
$gpt-slide-generate
slide_prompts.json을 기준으로 모든 페이지를 순서대로 만들고 page_1.png 형식으로 저장해줘.
```

전체 흐름:

```text
$gpt-slide-design [reference slide image or report PDF]
$gpt-slide-plan /path/to/report.pdf 한국어 리서치 요약 덱을 만들어줘.
$gpt-slide-prompt
$gpt-slide-generate
```

[맨 위로](#future-slide-skill)

## 포함된 파일

- `skills/gpt-slide-design/SKILL.md`
- `skills/gpt-slide-plan/SKILL.md`
- `skills/gpt-slide-prompt/SKILL.md`
- `skills/gpt-slide-generate/SKILL.md`
- `templates/DESIGN_TEMPLATE.md`

[맨 위로](#future-slide-skill)

## 설치

### `npx skills`로 설치

Node.js 18 이상이 있는 터미널에서 실행합니다.

```bash
npx skills add jyoung105/future-slide
```

또는 GitHub 주소를 그대로 사용할 수 있습니다.

```bash
npx skills add https://github.com/jyoung105/future-slide.git
```

설치 후에는 Codex를 다시 시작해야 새 스킬이 보입니다.

### `.codex` 폴더에 직접 설치

저장소를 다운로드하거나 클론한 뒤, 원하는 스킬 폴더를 Codex 스킬 폴더로
복사합니다.

```bash
mkdir -p ~/.codex/skills
cp -R skills/gpt-slide-design ~/.codex/skills/
cp -R skills/gpt-slide-plan ~/.codex/skills/
cp -R skills/gpt-slide-prompt ~/.codex/skills/
cp -R skills/gpt-slide-generate ~/.codex/skills/
```

프로젝트 안에서만 쓰고 싶다면 아래 위치에 복사합니다.

```text
.codex/skills/
```

각 스킬 폴더 안에는 `SKILL.md`가 폴더 바로 아래에 있어야 합니다.

[맨 위로](#future-slide-skill)

## 결과물

보통 한 번의 전체 실행에서는 아래 파일들이 생깁니다.

1. `DESIGN.md`
2. `slide_plan.json`
3. `slide_prompts.json`
4. `page_1.png ... page_N.png`

[맨 위로](#future-slide-skill)

## 라이선스

Future Slide Skill은 [Apache License 2.0](./LICENSE)으로 배포됩니다.

[맨 위로](#future-slide-skill)
