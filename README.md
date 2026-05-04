# 중1 수학 용어 사전

중학교 1학년 수학 교과서에 새롭게 등장하는 용어를 단원별로 정리한 웹 앱입니다.

🔗 **라이브 데모**: `https://<your-username>.github.io/math-terms-app`

---

## 기능

- 단원별 탭 필터 (Ⅰ-1 소인수분해 / Ⅰ-2 정수와 유리수 / Ⅱ-1 문자와 식 / Ⅱ-2 일차방정식)
- 용어·설명 실시간 검색
- 라이트 / 다크 모드 자동 지원
- 반응형 (모바일 대응)

---

## 프로젝트 구조

```
math-terms-app/
├── index.html          # 메인 HTML
├── css/
│   └── style.css       # 스타일
├── js/
│   └── app.js          # 렌더링 로직
├── data/
│   └── terms.js        # 용어 데이터 (CHAPTERS 배열)
└── README.md
```

---

## GitHub Pages 배포 방법

### 1단계 — GitHub 저장소 만들기

1. [github.com/new](https://github.com/new) 에서 새 저장소 생성
2. 저장소 이름 예: `math-terms-app`
3. **Public** 으로 설정 (Pages 무료 사용 조건)
4. **Create repository** 클릭

### 2단계 — 파일 업로드

**방법 A: 웹 브라우저로 업로드 (간단)**

```
저장소 페이지 → "uploading an existing file" 클릭
→ 폴더 전체 드래그 앤 드롭 → Commit changes
```

> ⚠️ 폴더 구조(`css/`, `js/`, `data/`)가 그대로 유지되어야 합니다.

**방법 B: Git CLI 사용**

```bash
cd math-terms-app
git init
git add .
git commit -m "첫 번째 커밋"
git branch -M main
git remote add origin https://github.com/<your-username>/math-terms-app.git
git push -u origin main
```

### 3단계 — GitHub Pages 활성화

```
저장소 → Settings → Pages
→ Source: "Deploy from a branch"
→ Branch: main / (root)
→ Save
```

약 1분 후 `https://<your-username>.github.io/math-terms-app` 에서 접속 가능합니다.

---

## 용어 데이터 수정 방법

`data/terms.js` 파일의 `CHAPTERS` 배열을 수정하면 됩니다.

```js
// 새 챕터 추가 예시
{
  id: "geometry",
  label: "Ⅲ-1 기본 도형",
  accentColor: "#534AB7",
  accentBg: "#EEEDFE",
  accentText: "#3C3489",
  terms: [
    {
      ko: "점",
      en: "Point",
      def: "위치만 있고 크기가 없는 도형의 기본 요소",
      ex: null,
    },
    // ...
  ],
},
```

---

## 향후 확장 계획 (로드맵)

- [ ] 퀴즈 모드 (빈칸 채우기, 카드 뒤집기)
- [ ] 즐겨찾기 기능 (localStorage)
- [ ] 단원 추가 (Ⅲ, Ⅳ 단원)
- [ ] React + Vite 마이그레이션
- [ ] Vercel / Netlify 배포

---

## 라이선스

개인 학습용 프로젝트입니다.
