/* ──────────────────────────────────────────────────────────
   K-Math Wiki — 교육과정 데이터
   계층: 학교급 → 과목 → 단원 → 용어
   ────────────────────────────────────────────────────────── */

/* 과목별 컬러 팔레트 (과목 단위로 일관되게 적용) */
const PALETTE = {
  blue:   { color: "#185FA5", bg: "#E6F1FB", text: "#0C447C" },
  green:  { color: "#3B6D11", bg: "#EAF3DE", text: "#27500A" },
  amber:  { color: "#854F0B", bg: "#FAEEDA", text: "#633806" },
  purple: { color: "#534AB7", bg: "#EEEDFE", text: "#3C3489" },
  pink:   { color: "#993556", bg: "#FBEAF0", text: "#72243E" },
  teal:   { color: "#0F6E56", bg: "#E1F5EE", text: "#085041" },
  red:    { color: "#A32D2D", bg: "#FCEBEB", text: "#791F1F" },
  coral:  { color: "#993C1D", bg: "#FAECE7", text: "#712B13" },
  indigo: { color: "#185FA5", bg: "#E6F1FB", text: "#0C447C" },
  gray:   { color: "#5F5E5A", bg: "#F1EFE8", text: "#2C2C2A" },
};

/* 단원 빌더 — 과목 색상을 단원에 자동 적용 */
const ch = (id, label, paletteKey, terms = []) => ({
  id,
  label,
  ...PALETTE[paletteKey],
  paletteKey,
  terms,
});

/* ============================================================
   중학교 1학년 — 채워진 단원 (Ⅰ-1, Ⅰ-2, Ⅱ-1, Ⅱ-2)
   ============================================================ */
const M1_TERMS_PRIME = [
  { ko: "소수", en: "Prime Number", def: "1보다 큰 자연수 중에서 1과 자기 자신만을 약수로 갖는 수", ex: "자연수 2, 3, 5의 약수는 1과 자기 자신뿐이다" },
  { ko: "합성수", en: "Composite Number", def: "1보다 큰 자연수 중에서 소수가 아닌 수 (1과 자기 자신 이외의 약수를 갖는다)", ex: null },
  { ko: "거듭제곱", en: "Power", def: "같은 수를 여러 번 곱한 것을 간단히 나타낸 것", ex: "2×2=2², 2×2×2=2³, 2×2×2×2=2⁴" },
  { ko: "밑", en: "Base", def: "거듭제곱에서 곱하는 수", ex: "5⁴에서 밑은 5이다" },
  { ko: "지수", en: "Exponent", def: "거듭제곱에서 곱해진 수의 개수", ex: "5⁴에서 지수는 4이다" },
  { ko: "소인수", en: "Prime Factor", def: "어떤 자연수의 약수 중에서 소수인 것", ex: "24의 약수 중 소수는 2와 3이므로, 24의 소인수는 2와 3이다" },
  { ko: "소인수분해", en: "Prime Factorization", def: "1보다 큰 자연수를 그 수의 소인수만의 곱으로 나타내는 것", ex: "24 = 2×2×2×3 = 2³×3" },
  { ko: "공약수", en: "Common Divisor", def: "두 개 이상의 자연수의 공통인 약수", ex: "8과 12의 공약수는 1, 2, 4이다" },
  { ko: "최대공약수", en: "Greatest Common Divisor", def: "공약수 중에서 가장 큰 것", ex: "8과 12의 공약수는 1, 2, 4이고 최대공약수는 4이다" },
  { ko: "서로소", en: "Coprime", def: "최대공약수가 1인 두 자연수", ex: "8과 21의 최대공약수는 1이므로 8과 21은 서로소이다" },
  { ko: "공배수", en: "Common Multiple", def: "두 개 이상의 자연수의 공통인 배수", ex: "8과 12의 공배수는 24, 48, 72, …이다" },
  { ko: "최소공배수", en: "Least Common Multiple", def: "공배수 중에서 가장 작은 것", ex: "8과 12의 공배수 중 가장 작은 24가 최소공배수이다" },
];

const M1_TERMS_INTEGER = [
  { ko: "양의 부호 (+)", en: "Positive Sign", def: "어떤 기준에 대해 서로 반대되는 성질을 가진 양을 나타낼 때, 한쪽에 붙이는 부호", ex: "영상 16°C를 +16으로 나타낸다" },
  { ko: "음의 부호 (−)", en: "Negative Sign", def: "양의 부호와 반대 방향이나 반대 성질을 나타낼 때 붙이는 부호", ex: "영하 3°C를 −3으로 나타낸다" },
  { ko: "양수", en: "Positive Number", def: "양의 부호 +를 붙인 수 (0보다 큰 수)", ex: "+3, +½, +0.7 등은 양수이다" },
  { ko: "음수", en: "Negative Number", def: "음의 부호 −를 붙인 수 (0보다 작은 수)", ex: "−2, −0.7 등은 음수이다" },
  { ko: "양의 정수", en: "Positive Integer", def: "자연수에 양의 부호 +를 붙인 수로, 자연수와 같다", ex: "+1, +2, +3, …" },
  { ko: "음의 정수", en: "Negative Integer", def: "자연수에 음의 부호 −를 붙인 수", ex: "−1, −2, −3, …" },
  { ko: "정수", en: "Integer", def: "양의 정수, 0, 음의 정수를 통틀어 이르는 말. 0은 양의 정수도 음의 정수도 아니다", ex: null },
  { ko: "유리수", en: "Rational Number", def: "분모·분자가 모두 자연수인 분수에 양의 부호 또는 음의 부호를 붙인 수와 0을 통틀어 이르는 말", ex: null },
  { ko: "수직선", en: "Number Line", def: "직선 위에 기준점을 정해 0을 대응시키고, 오른쪽에 양수, 왼쪽에 음수를 대응시킨 직선", ex: null },
  { ko: "절댓값", en: "Absolute Value", def: "수직선에서 0을 나타내는 점과 그 수를 나타내는 점 사이의 거리", ex: "+3과 −3의 절댓값은 각각 3이므로 |+3|=3, |−3|=3" },
];

const M1_TERMS_EXPRESSION = [
  { ko: "대입", en: "Substitution", def: "문자를 사용한 식에서 문자에 특정 수를 바꾸어 넣는 것", ex: "x=−3일 때, x²−4에 −3을 대입하면 (−3)²−4=9−4=5" },
  { ko: "식의 값", en: "Value of Expression", def: "문자에 수를 대입하여 계산한 결과", ex: "a=⅓일 때, 3a+1의 값은 3×⅓+1=1+1=2" },
  { ko: "항", en: "Term", def: "수 또는 문자의 곱으로만 이루어진 것", ex: "3x+4y+6에서 항은 3x, 4y, 6이다" },
  { ko: "상수항", en: "Constant Term", def: "수로만 이루어진 항", ex: "3x+4y+6에서 상수항은 6이다" },
  { ko: "계수", en: "Coefficient", def: "수와 문자의 곱으로 이루어진 항에서 문자에 곱해진 수", ex: "4x−3y+5에서 x의 계수는 4, y의 계수는 −3이다" },
  { ko: "단항식", en: "Monomial", def: "한 개의 항으로만 이루어진 식", ex: "2y는 단항식이다" },
  { ko: "다항식", en: "Polynomial", def: "한 개의 항 또는 여러 개의 항의 합으로 이루어진 식", ex: "4x−3y+5는 다항식이다" },
  { ko: "차수", en: "Degree", def: "어떤 항에서 문자가 곱해진 개수", ex: "3x²에서 x의 차수는 2, 7x에서 x의 차수는 1이다" },
  { ko: "일차식", en: "Linear Expression", def: "차수가 1인 다항식", ex: "2y, 5x+3은 일차식이다" },
  { ko: "동류항", en: "Like Terms", def: "문자와 차수가 각각 같은 항. 상수항은 모두 동류항이다", ex: "3x+5x에서 3x와 5x는 동류항이므로 3x+5x=8x" },
];

const M1_TERMS_EQUATION = [
  { ko: "등식", en: "Equation / Equality", def: "등호 =를 사용하여 나타낸 식", ex: "7−3=4, 3x−1=2는 등식이다. 5x²−3x, 2<3은 등식이 아니다" },
  { ko: "좌변", en: "Left Side", def: "등식에서 등호의 왼쪽 부분", ex: "2x+1=5에서 좌변은 2x+1이다" },
  { ko: "우변", en: "Right Side", def: "등식에서 등호의 오른쪽 부분", ex: "2x+1=5에서 우변은 5이다" },
  { ko: "양변", en: "Both Sides", def: "등식의 좌변과 우변을 통틀어 이르는 말", ex: null },
  { ko: "방정식", en: "Equation", def: "x의 값에 따라 참이 되기도 하고 거짓이 되기도 하는 등식", ex: "2x+1=5는 x=2일 때 참, x=1일 때 거짓이 되므로 방정식이다" },
  { ko: "미지수", en: "Unknown", def: "방정식에서 값을 모르는 문자", ex: "2x+1=5에서 미지수는 x이다" },
  { ko: "해 (근)", en: "Solution / Root", def: "방정식이 참이 되게 하는 미지수의 값", ex: "2x+1=5는 x=2일 때 참이 되므로 x=2가 해이다" },
  { ko: "항등식", en: "Identity", def: "미지수 x가 어떤 값을 갖더라도 항상 참이 되는 등식", ex: "x+2x=3x는 x에 어떤 값을 대입해도 항상 참이므로 항등식이다" },
  { ko: "일차방정식", en: "Linear Equation", def: "우변의 모든 항을 좌변으로 이항하여 정리했을 때 (x에 대한 일차식)=0 꼴로 나타나는 방정식", ex: "3x+2=x−2를 이항하면 2x+4=0이 되므로 일차방정식이다" },
  { ko: "이항", en: "Transposition", def: "등식의 한 변에 있는 항을 부호만 바꾸어 다른 변으로 옮기는 것", ex: "3x−2=7에서 −2를 이항하면 3x=7+2" },
];

/* ============================================================
   교육과정 (CURRICULUM)
   ============================================================ */
const CURRICULUM = [
  {
    id: "middle",
    label: "중학교",
    subjects: [
      {
        id: "m1",
        label: "1학년",
        paletteKey: "blue",
        chapters: [
          ch("m1-prime",      "Ⅰ-1 소인수분해",        "blue", M1_TERMS_PRIME),
          ch("m1-integer",    "Ⅰ-2 정수와 유리수",     "blue", M1_TERMS_INTEGER),
          ch("m1-expression", "Ⅱ-1 문자와 식",         "blue", M1_TERMS_EXPRESSION),
          ch("m1-equation",   "Ⅱ-2 일차방정식",        "blue", M1_TERMS_EQUATION),
          ch("m1-coordinate", "Ⅲ-1 좌표평면과 그래프", "blue"),
          ch("m1-proportion", "Ⅲ-2 정비례와 반비례",   "blue"),
          ch("m1-basic-fig",  "Ⅳ-1 기본 도형",         "blue"),
          ch("m1-construct",  "Ⅳ-2 작도와 합동",       "blue"),
          ch("m1-plane-fig",  "Ⅴ-1 평면도형의 성질",   "blue"),
          ch("m1-solid-fig",  "Ⅴ-2 입체도형의 성질",   "blue"),
          ch("m1-statistics", "Ⅵ-1 자료의 정리와 해석", "blue"),
        ],
      },
      {
        id: "m2",
        label: "2학년",
        paletteKey: "green",
        chapters: [
          ch("m2-rational",  "Ⅰ-1 유리수와 순환소수",       "green"),
          ch("m2-poly-calc", "Ⅰ-2 식의 계산",               "green"),
          ch("m2-inequal",   "Ⅱ-1 일차부등식",              "green"),
          ch("m2-system",    "Ⅱ-2 연립일차방정식",          "green"),
          ch("m2-linear-fn", "Ⅲ-1 일차함수와 그래프",       "green"),
          ch("m2-linear-eq", "Ⅲ-2 일차함수와 일차방정식",   "green"),
          ch("m2-triangle",  "Ⅳ-1 삼각형의 성질",           "green"),
          ch("m2-quad",      "Ⅳ-2 사각형의 성질",           "green"),
          ch("m2-similar",   "Ⅴ-1 도형의 닮음",             "green"),
          ch("m2-pythag",    "Ⅴ-2 피타고라스 정리",         "green"),
          ch("m2-prob",      "Ⅵ-1 경우의 수와 확률",        "green"),
        ],
      },
      {
        id: "m3",
        label: "3학년",
        paletteKey: "amber",
        chapters: [
          ch("m3-real",       "Ⅰ-1 제곱근과 실수",            "amber"),
          ch("m3-radical",    "Ⅰ-2 근호를 포함한 식의 계산",  "amber"),
          ch("m3-poly-mult",  "Ⅱ-1 다항식의 곱셈",            "amber"),
          ch("m3-factor",     "Ⅱ-2 인수분해",                 "amber"),
          ch("m3-quad-eq",    "Ⅲ-1 이차방정식",               "amber"),
          ch("m3-quad-fn",    "Ⅳ-1 이차함수와 그래프",        "amber"),
          ch("m3-quad-app",   "Ⅳ-2 이차함수의 활용",          "amber"),
          ch("m3-trig-ratio", "Ⅴ-1 삼각비",                   "amber"),
          ch("m3-circle-line","Ⅵ-1 원과 직선",                "amber"),
          ch("m3-inscribed",  "Ⅵ-2 원주각",                   "amber"),
          ch("m3-stat-rep",   "Ⅶ-1 대푯값과 산포도",          "amber"),
          ch("m3-correlate",  "Ⅶ-2 상관관계",                 "amber"),
        ],
      },
    ],
  },
  {
    id: "high",
    label: "고등학교",
    subjects: [
      {
        id: "h-math-a",
        label: "고등수학 (상)",
        paletteKey: "purple",
        chapters: [
          ch("ha-poly-calc", "Ⅰ-1 다항식의 연산",              "purple"),
          ch("ha-remainder", "Ⅰ-2 나머지정리와 인수분해",      "purple"),
          ch("ha-complex",   "Ⅱ-1 복소수와 이차방정식",        "purple"),
          ch("ha-quad-fn",   "Ⅱ-2 이차방정식과 이차함수",      "purple"),
          ch("ha-various",   "Ⅱ-3 여러 가지 방정식과 부등식",  "purple"),
          ch("ha-coord",     "Ⅲ-1 평면좌표와 직선의 방정식",   "purple"),
          ch("ha-circle",    "Ⅲ-2 원의 방정식",                "purple"),
          ch("ha-trans",     "Ⅲ-3 도형의 이동",                "purple"),
        ],
      },
      {
        id: "h-math-b",
        label: "고등수학 (하)",
        paletteKey: "pink",
        chapters: [
          ch("hb-set",    "Ⅰ-1 집합",                "pink"),
          ch("hb-prop",   "Ⅰ-2 명제",                "pink"),
          ch("hb-fn",     "Ⅱ-1 함수",                "pink"),
          ch("hb-rat-fn", "Ⅱ-2 유리함수와 무리함수", "pink"),
          ch("hb-count",  "Ⅲ-1 경우의 수",           "pink"),
        ],
      },
      {
        id: "h-math1",
        label: "수학Ⅰ",
        paletteKey: "teal",
        chapters: [
          ch("h1-exp",       "Ⅰ-1 지수",                  "teal"),
          ch("h1-log",       "Ⅰ-2 로그",                  "teal"),
          ch("h1-exp-fn",    "Ⅰ-3 지수함수와 로그함수",   "teal"),
          ch("h1-trig-fn",   "Ⅱ-1 삼각함수",              "teal"),
          ch("h1-trig-graph","Ⅱ-2 삼각함수의 그래프",     "teal"),
          ch("h1-sin-cos",   "Ⅱ-3 사인법칙과 코사인법칙", "teal"),
          ch("h1-arithmetic","Ⅲ-1 등차수열과 등비수열",   "teal"),
          ch("h1-sum",       "Ⅲ-2 수열의 합",             "teal"),
          ch("h1-induction", "Ⅲ-3 수학적 귀납법",         "teal"),
        ],
      },
      {
        id: "h-math2",
        label: "수학Ⅱ",
        paletteKey: "red",
        chapters: [
          ch("h2-limit",    "Ⅰ-1 함수의 극한",       "red"),
          ch("h2-continue", "Ⅰ-2 함수의 연속",       "red"),
          ch("h2-deriv",    "Ⅱ-1 미분계수와 도함수", "red"),
          ch("h2-deriv-app","Ⅱ-2 도함수의 활용",     "red"),
          ch("h2-integral", "Ⅲ-1 부정적분과 정적분", "red"),
          ch("h2-int-app",  "Ⅲ-2 정적분의 활용",     "red"),
        ],
      },
      {
        id: "h-prob",
        label: "확률과 통계",
        paletteKey: "coral",
        chapters: [
          ch("hp-count",   "Ⅰ-1 경우의 수",     "coral"),
          ch("hp-perm",    "Ⅰ-2 순열과 조합",   "coral"),
          ch("hp-prob",    "Ⅱ-1 확률",          "coral"),
          ch("hp-cond",    "Ⅱ-2 조건부확률",    "coral"),
          ch("hp-dist",    "Ⅲ-1 확률분포",      "coral"),
          ch("hp-estimate","Ⅲ-2 통계적 추정",   "coral"),
        ],
      },
      {
        id: "h-calc",
        label: "미적분",
        paletteKey: "indigo",
        chapters: [
          ch("hc-seq-lim", "Ⅰ-1 수열의 극한",         "indigo"),
          ch("hc-series",  "Ⅰ-2 급수",                "indigo"),
          ch("hc-fn-deriv","Ⅱ-1 여러 가지 함수의 미분","indigo"),
          ch("hc-deriv-m", "Ⅱ-2 여러 가지 미분법",    "indigo"),
          ch("hc-deriv-a", "Ⅱ-3 도함수의 활용",       "indigo"),
          ch("hc-int-m",   "Ⅲ-1 여러 가지 적분법",    "indigo"),
          ch("hc-int-app", "Ⅲ-2 정적분의 활용",       "indigo"),
        ],
      },
      {
        id: "h-geom",
        label: "기하",
        paletteKey: "gray",
        chapters: [
          ch("hg-conic",  "Ⅰ-1 이차곡선",            "gray"),
          ch("hg-vec",    "Ⅱ-1 벡터의 연산",         "gray"),
          ch("hg-vec-app","Ⅱ-2 평면벡터의 활용",     "gray"),
          ch("hg-space",  "Ⅲ-1 공간도형",            "gray"),
          ch("hg-coord",  "Ⅲ-2 공간좌표와 공간벡터", "gray"),
        ],
      },
    ],
  },
];
