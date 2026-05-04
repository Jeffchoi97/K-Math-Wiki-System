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
   중학교 2학년 — 채워진 단원 (전 단원: Ⅰ-1 ~ Ⅵ-1)
   ============================================================ */
const M2_TERMS_LINEAREQ = [
  {
    ko: "일차방정식의 그래프",
    en: "Graph of a Linear Equation",
    def: "두 미지수 x, y의 값의 범위가 모든 수일 때, 일차방정식 ax+by+c=0의 해 (x, y)를 좌표로 하는 점을 좌표평면 위에 나타내면 직선이 된다. 이 직선을 일차방정식의 그래프라고 한다",
    ex: "일차방정식 2x+y-1=0의 그래프는 기울기가 -2이고 y절편이 1인 직선이다",
  },
  {
    ko: "직선의 방정식",
    en: "Equation of a Line",
    def: "x, y의 값의 범위가 모든 수일 때, 방정식 ax+by+c=0 (단, a, b, c는 상수, a≠0 또는 b≠0)의 그래프는 직선이다. 이때 방정식 ax+by+c=0을 직선의 방정식이라고 한다",
    ex: "x=p의 그래프는 점 (p, 0)을 지나고 y축에 평행한 직선이다",
  },
];

const M2_TERMS_TRIANGLE = [
  {
    ko: "꼭지각",
    en: "Apex Angle",
    def: "이등변삼각형에서 길이가 같은 두 변이 이루는 각",
    ex: "이등변삼각형 ABC에서 AB=AC이면 꼭지각은 ∠A이다",
  },
  {
    ko: "밑변",
    en: "Base",
    def: "이등변삼각형에서 꼭지각의 대변",
    ex: "꼭지각 ∠A의 대변 BC가 밑변이다",
  },
  {
    ko: "밑각",
    en: "Base Angle",
    def: "이등변삼각형에서 밑변의 양 끝 각. 이등변삼각형의 두 밑각의 크기는 같다",
    ex: "이등변삼각형 ABC에서 밑각은 ∠B와 ∠C이며, ∠B=∠C이다",
  },
  {
    ko: "외접",
    en: "Circumscribed",
    def: "삼각형의 모든 꼭짓점이 원 위에 있을 때, 원은 삼각형에 외접한다고 한다",
    ex: "삼각형 ABC의 세 꼭짓점이 원 O 위에 있을 때, 원 O는 삼각형 ABC에 외접한다",
  },
  {
    ko: "외접원",
    en: "Circumscribed Circle",
    def: "삼각형의 모든 꼭짓점이 위에 있는 원. 삼각형의 세 변의 수직이등분선의 교점을 중심으로 하는 원이다",
    ex: "삼각형 ABC의 외접원의 중심 O에서 세 꼭짓점에 이르는 거리는 모두 같다",
  },
  {
    ko: "외심",
    en: "Circumcenter",
    def: "삼각형의 외접원의 중심. 삼각형의 세 변의 수직이등분선은 외심에서 만나고, 외심에서 세 꼭짓점에 이르는 거리는 모두 같다",
    ex: "삼각형 ABC의 외심 O에서 OA=OB=OC이다",
  },
  {
    ko: "접선",
    en: "Tangent Line",
    def: "원과 직선이 한 점에서 만날 때, 이 직선을 원의 접선이라 한다. 원의 접선은 그 접점을 지나는 반지름과 수직이다",
    ex: "직선이 원 O와 점 T에서 한 점만 만날 때 이 직선은 원 O의 접선이다",
  },
  {
    ko: "접점",
    en: "Point of Tangency",
    def: "접선이 원과 만나는 점",
    ex: "접선과 원이 만나는 점 T를 접점이라 한다",
  },
  {
    ko: "내접",
    en: "Inscribed",
    def: "원이 삼각형의 모든 변에 접할 때, 원은 삼각형에 내접한다고 한다",
    ex: "원 I가 삼각형 ABC의 세 변 AB, BC, CA에 모두 접할 때, 원 I는 삼각형에 내접한다",
  },
  {
    ko: "내접원",
    en: "Inscribed Circle",
    def: "삼각형의 모든 변에 접하는 원. 삼각형의 세 내각의 이등분선의 교점을 중심으로 한다",
    ex: "삼각형 ABC의 내접원의 중심 I에서 세 변에 이르는 거리는 모두 같다",
  },
  {
    ko: "내심",
    en: "Incenter",
    def: "삼각형의 내접원의 중심. 삼각형의 세 내각의 이등분선은 내심에서 만나고, 내심에서 세 변에 이르는 거리는 모두 같다",
    ex: "삼각형 ABC의 내심 I에서 세 변까지의 거리는 모두 같다",
  },
];

const M2_TERMS_QUAD = [
  {
    ko: "대변",
    en: "Opposite Sides",
    def: "사각형에서 마주 보는 두 변",
    ex: "사각형 ABCD에서 AB와 CD, AD와 BC는 각각 대변이다",
  },
  {
    ko: "대각",
    en: "Opposite Angles",
    def: "사각형에서 마주 보는 두 각",
    ex: "사각형 ABCD에서 ∠A와 ∠C, ∠B와 ∠D는 각각 대각이다",
  },
  {
    ko: "평행사변형",
    en: "Parallelogram",
    def: "두 쌍의 대변이 각각 평행한 사각형. 두 쌍의 대변의 길이와 두 쌍의 대각의 크기는 각각 같고, 두 대각선은 서로를 이등분한다",
    ex: "ABCD에서 AB//DC이고 AD//BC이면 평행사변형이다",
  },
  {
    ko: "직사각형",
    en: "Rectangle",
    def: "네 각이 모두 직각인 사각형. 직사각형은 평행사변형이며, 두 대각선의 길이가 같고 서로를 이등분한다",
    ex: "네 내각이 모두 90°인 사각형은 직사각형이다",
  },
  {
    ko: "마름모",
    en: "Rhombus",
    def: "네 변의 길이가 모두 같은 사각형. 마름모는 평행사변형이며, 두 대각선은 서로를 수직이등분한다",
    ex: "AB=BC=CD=DA인 사각형 ABCD는 마름모이다",
  },
  {
    ko: "정사각형",
    en: "Square",
    def: "네 내각의 크기가 모두 같고 네 변의 길이가 모두 같은 사각형. 직사각형이면서 마름모이므로 두 대각선은 길이가 같고 서로를 수직이등분한다",
    ex: "정사각형은 직사각형이면서 마름모인 사각형이다",
  },
  {
    ko: "사다리꼴",
    en: "Trapezoid",
    def: "한 쌍의 대변이 평행한 사각형",
    ex: "ABCD에서 AD//BC이면 사다리꼴이다",
  },
  {
    ko: "등변사다리꼴",
    en: "Isosceles Trapezoid",
    def: "사다리꼴 중에서 아랫변의 양 끝 각의 크기가 같은 사다리꼴. 평행하지 않은 한 쌍의 대변의 길이가 같다",
    ex: "사다리꼴 ABCD에서 ∠B=∠C이면 등변사다리꼴이다",
  },
];

const M2_TERMS_SIMILAR = [
  {
    ko: "닮은 도형",
    en: "Similar Figures",
    def: "한 도형을 일정한 비율로 확대 또는 축소한 도형이 다른 도형과 합동일 때, 이 두 도형은 닮음인 관계에 있다고 하고, 닮음인 관계에 있는 두 도형을 닮은 도형이라고 한다",
    ex: "△ABC∽△DEF와 같이 기호 ∽를 사용하여 두 삼각형이 닮음임을 나타낸다",
  },
  {
    ko: "대응하는 꼭짓점",
    en: "Corresponding Vertices",
    def: "닮은 두 도형에서 서로 대응하는 꼭짓점. 마찬가지로 대응하는 변, 대응하는 각도 정의된다",
    ex: "△ABC∽△DEF일 때, 꼭짓점 A와 D, 변 AB와 DE, ∠A와 ∠D는 각각 대응한다",
  },
  {
    ko: "닮음비",
    en: "Ratio of Similarity",
    def: "닮은 두 평면도형에서 대응하는 변의 길이의 비. 닮은 두 입체도형에서는 대응하는 모서리의 길이의 비이다",
    ex: "△ABC∽△DEF이고 AB=4, DE=6이면 닮음비는 4:6=2:3이다",
  },
  {
    ko: "삼각형의 닮음 조건",
    en: "Conditions for Triangle Similarity",
    def: "① 세 쌍의 대응하는 변의 길이의 비가 같을 때 (SSS 닮음) ② 두 쌍의 대응하는 변의 길이의 비가 같고 그 끼인각의 크기가 같을 때 (SAS 닮음) ③ 두 쌍의 대응하는 각의 크기가 각각 같을 때 (AA 닮음)",
    ex: "두 삼각형에서 세 쌍의 변의 길이의 비가 모두 같으면 두 삼각형은 닮은 도형이다",
  },
  {
    ko: "중선",
    en: "Median",
    def: "삼각형에서 한 꼭짓점과 그 대변의 중점을 이은 선분. 한 삼각형에는 3개의 중선이 있다",
    ex: "△ABC에서 꼭짓점 A와 BC의 중점 M을 이은 선분 AM이 중선이다",
  },
  {
    ko: "무게중심",
    en: "Centroid",
    def: "삼각형의 세 중선의 교점. 무게중심은 각 중선을 꼭짓점으로부터 2:1로 나눈다",
    ex: "△ABC의 무게중심 G에서 AG:GM = 2:1이다",
  },
];

const M2_TERMS_PYTHAG = [
  {
    ko: "피타고라스 정리",
    en: "Pythagorean Theorem",
    def: "직각삼각형에서 직각을 낀 두 변의 길이의 제곱의 합은 빗변의 길이의 제곱과 같다",
    ex: "직각을 낀 두 변의 길이가 각각 a, b이고 빗변의 길이가 c인 직각삼각형에서 a²+b²=c²이다",
  },
  {
    ko: "피타고라스 수",
    en: "Pythagorean Triple",
    def: "직각삼각형의 세 변의 길이가 될 수 있는 세 자연수의 순서쌍 (a, b, c)",
    ex: "(3, 4, 5), (5, 12, 13), (6, 8, 10) 등은 잘 알려진 피타고라스 수이다",
  },
];

const M2_TERMS_PROB = [
  {
    ko: "사건",
    en: "Event",
    def: "동일한 조건에서 반복할 수 있는 실험이나 관찰의 결과",
    ex: "한 개의 주사위를 던질 때 '짝수의 눈이 나온다', '5 이상의 눈이 나온다' 등이 사건이다",
  },
  {
    ko: "경우의 수",
    en: "Number of Cases",
    def: "사건이 일어나는 경우의 가짓수",
    ex: "한 개의 주사위를 던질 때 짝수의 눈이 나오는 사건의 경우의 수는 3이다",
  },
  {
    ko: "확률",
    en: "Probability",
    def: "각 경우가 일어날 가능성이 모두 같을 때, 일어나는 모든 경우의 수에 대한 사건 A가 일어나는 경우의 수의 비율. p=(사건 A가 일어나는 경우의 수)÷(일어나는 모든 경우의 수)",
    ex: "한 개의 동전을 던질 때 앞면이 나올 확률은 p=1÷2=1/2이다",
  },
];

const M2_TERMS_LINEARFN = [
  {
    ko: "함수",
    en: "Function",
    def: "두 변수 x, y에 대하여 x의 값이 변함에 따라 y의 값이 하나씩 정해지는 두 양 사이의 대응 관계가 있을 때, y를 x에 대한 함수라 하고 y=f(x)로 나타낸다",
    ex: "한 병에 800원인 생수를 x병 살 때 지불금액 y=800x에서 y는 x에 대한 함수이다",
  },
  {
    ko: "함숫값",
    en: "Function Value",
    def: "함수 y=f(x)에서 x의 값에 따라 하나씩 정해지는 y의 값 f(x)",
    ex: "f(x)=5x에서 x=1, 2, 3일 때의 함숫값은 f(1)=5, f(2)=10, f(3)=15이다",
  },
  {
    ko: "함수의 그래프",
    en: "Graph of a Function",
    def: "함수 y=f(x)에서 x의 값과 그 값에 따라 정해지는 y의 값의 순서쌍 (x, y)를 좌표로 하는 점 전체를 좌표평면 위에 나타낸 것",
    ex: "함수 y=2x의 그래프는 순서쌍 (1,2), (2,4), (3,6), …을 좌표로 하는 점 전체이다",
  },
  {
    ko: "일차함수",
    en: "Linear Function",
    def: "함수 y=f(x)에서 y=ax+b (단, a, b는 상수, a≠0)와 같이 y가 x의 일차식으로 나타나는 함수",
    ex: "y=1000x+40000은 y가 x의 일차식이므로 x에 대한 일차함수이다",
  },
  {
    ko: "평행이동",
    en: "Translation",
    def: "한 도형을 일정한 방향으로 일정한 거리만큼 이동하는 것",
    ex: "일차함수 y=2x+3의 그래프는 y=2x의 그래프를 y축의 방향으로 3만큼 평행이동한 직선이다",
  },
  {
    ko: "x절편",
    en: "x-intercept",
    def: "함수의 그래프가 x축과 만나는 점의 x좌표",
    ex: "y=2x-4의 그래프가 x축과 만나는 점은 (2, 0)이므로 x절편은 2이다",
  },
  {
    ko: "y절편",
    en: "y-intercept",
    def: "함수의 그래프가 y축과 만나는 점의 y좌표",
    ex: "y=2x-4의 그래프가 y축과 만나는 점은 (0, -4)이므로 y절편은 -4이다",
  },
  {
    ko: "기울기",
    en: "Slope",
    def: "일차함수 y=ax+b의 그래프에서 x의 값의 증가량에 대한 y의 값의 증가량의 비율. 이 비율은 항상 일정하며 x의 계수 a와 같다",
    ex: "y=2x-1에서 기울기 = (y의 값의 증가량)÷(x의 값의 증가량) = 2/1 = 2",
  },
];
const M2_TERMS_RATIONAL = [
  {
    ko: "유한소수",
    en: "Finite Decimal",
    def: "소수점 아래의 0이 아닌 숫자가 유한 번 나타나는 소수",
    ex: "1/4=0.25와 같이 0.25는 유한소수이다",
  },
  {
    ko: "무한소수",
    en: "Infinite Decimal",
    def: "소수점 아래의 0이 아닌 숫자가 무한 번 나타나는 소수",
    ex: "2/3=0.666…과 같이 0.666…은 무한소수이다",
  },
  {
    ko: "순환소수",
    en: "Repeating Decimal",
    def: "무한소수 중에서 소수점 아래의 어떤 자리부터 일정한 숫자의 배열이 끝없이 되풀이되는 소수",
    ex: "0.333…, 2.1454545…, 0.273273273…은 순환소수이다",
  },
  {
    ko: "순환마디",
    en: "Repetend",
    def: "순환소수에서 숫자의 배열이 되풀이되는 한 부분. 순환소수는 순환마디의 양 끝 숫자 위에 점을 찍어 나타낸다",
    ex: "0.273273273…에서 순환마디는 273이고, 0.2̇73̇으로 나타낸다",
  },
  {
    ko: "기약분수",
    en: "Irreducible Fraction",
    def: "더 이상 약분되지 않는 분수로, 분모와 분자가 서로소인 분수",
    ex: "16/84을 약분하면 기약분수 4/21이 된다",
  },
];

const M2_TERMS_SYSTEM = [
  {
    ko: "미지수가 2개인 일차방정식",
    en: "Linear Equation in Two Variables",
    def: "미지수가 x, y의 2개이고 그 차수가 모두 1인 방정식. 일반적으로 ax+by+c=0 (단, a, b, c는 상수, a≠0, b≠0)의 꼴로 나타낼 수 있다",
    ex: "2x+3y=35는 미지수가 x, y의 2개이고 차수가 1인 일차방정식이다",
  },
  {
    ko: "상수",
    en: "Constant",
    def: "일정한 값을 갖는 수나 문자",
    ex: "ax+by+c=0에서 a, b, c는 상수이다",
  },
  {
    ko: "연립방정식",
    en: "System of Equations",
    def: "두 개 이상의 방정식을 한 쌍으로 묶어서 나타낸 것",
    ex: "{x+y=5, x+2y=7}와 같이 두 방정식을 묶어 나타낸 것이 연립방정식이다",
  },
  {
    ko: "연립일차방정식",
    en: "System of Linear Equations",
    def: "미지수가 2개인 두 일차방정식을 한 쌍으로 묶어 놓은 연립방정식",
    ex: "{2x+3y=35, x+y=5}와 같이 두 일차방정식으로 이루어진 연립방정식이다",
  },
  {
    ko: "연립방정식의 해",
    en: "Solution of System of Equations",
    def: "연립방정식에서 두 방정식을 동시에 참이 되게 하는 x, y의 값 또는 순서쌍 (x, y). 연립방정식의 해를 구하는 것을 연립방정식을 푼다고 한다",
    ex: "{x+y=5, x+2y=7}에서 x=3, y=2를 동시에 대입하면 참이 되므로 (3, 2)가 해이다",
  },
  {
    ko: "가감법",
    en: "Elimination Method",
    def: "연립방정식의 두 일차방정식을 변끼리 더하거나 빼서 한 미지수를 없앤 후 연립방정식의 해를 구하는 풀이 방법",
    ex: "{3x+2y=2800, x+2y=2000}에서 변끼리 빼면 2x=800이 되어 y를 소거할 수 있다",
  },
  {
    ko: "대입법",
    en: "Substitution Method",
    def: "연립방정식의 두 일차방정식 중 어느 한 방정식이 y=(x의 식) 또는 x=(y의 식)의 꼴일 때, 이를 다른 방정식에 대입하여 한 미지수를 없앤 후 해를 구하는 풀이 방법",
    ex: "{y=x+210, x+y=2476}에서 y=x+210을 두 번째 방정식에 대입하면 x만의 방정식이 된다",
  },
];

const M2_TERMS_INEQUAL = [
  {
    ko: "부등식",
    en: "Inequality",
    def: "부등호 >, <, ≥, ≤를 사용하여 수 또는 식의 대소 관계를 나타낸 식",
    ex: "9>2, 3x+7≤10은 부등식이다",
  },
  {
    ko: "부등식의 해",
    en: "Solution of Inequality",
    def: "미지수 x를 포함한 부등식이 참이 되게 하는 미지수 x의 값. 부등식의 해를 모두 구하는 것을 부등식을 푼다고 한다",
    ex: "x+4<7은 x=1, 2일 때 참이 되므로 1, 2는 이 부등식의 해이다",
  },
  {
    ko: "부등식의 성질",
    en: "Properties of Inequalities",
    def: "① 양변에 같은 수를 더하거나 빼도 부등호의 방향은 바뀌지 않는다 ② 양변에 같은 양수를 곱하거나 나누어도 방향이 바뀌지 않는다 ③ 양변에 같은 음수를 곱하거나 나누면 부등호의 방향이 바뀐다",
    ex: "a<b이면 a+c<b+c, ac<bc (c>0), ac>bc (c<0)",
  },
  {
    ko: "일차부등식",
    en: "Linear Inequality",
    def: "부등식의 우변에 있는 모든 항을 좌변으로 이항하여 정리한 식이 (일차식)>0, (일차식)<0, (일차식)≥0, (일차식)≤0 중 어느 하나의 꼴로 나타나는 부등식",
    ex: "x+1<−2x에서 이항하면 3x+1<0이므로 일차부등식이다",
  },
];

const M2_TERMS_POLYCALC = [
  {
    ko: "지수법칙",
    en: "Laws of Exponents",
    def: "밑이 같은 거듭제곱의 곱셈과 나눗셈, 거듭제곱의 거듭제곱, 곱과 몫의 거듭제곱에서 성립하는 법칙",
    ex: "m, n이 자연수일 때 ① aᵐ×aⁿ=aᵐ⁺ⁿ ② (aᵐ)ⁿ=aᵐⁿ ③ a≠0이고 m>n이면 aᵐ÷aⁿ=aᵐ⁻ⁿ ④ (ab)ᵐ=aᵐbᵐ, (a/b)ᵐ=aᵐ/bᵐ (b≠0)",
  },
  {
    ko: "이차식",
    en: "Quadratic Expression",
    def: "한 문자에 대한 차수가 2인 다항식",
    ex: "2x²−x+3은 x에 대한 차수가 2인 다항식이므로 x에 대한 이차식이다",
  },
  {
    ko: "전개",
    en: "Expansion",
    def: "다항식의 곱을 분배법칙을 이용하여 괄호를 풀어서 하나의 다항식으로 나타내는 것",
    ex: "2a(4b+5)를 전개하면 2a×4b+2a×5=8ab+10a",
  },
  {
    ko: "전개식",
    en: "Expanded Form",
    def: "전개하여 얻은 다항식",
    ex: "2a(4b+5)를 전개하여 얻은 8ab+10a는 전개식이다",
  },
];

/* ============================================================
   중학교 3학년 — 채워진 단원 (전 단원: Ⅰ-1 ~ Ⅶ-2)
   ============================================================ */
const M3_TERMS_REAL = [
  {
    ko: "제곱근",
    en: "Square Root",
    def: "어떤 수 x를 제곱하여 a가 될 때, 즉 x²=a일 때, x를 a의 제곱근이라고 한다",
    ex: "4²=16, (-4)²=16이므로 16의 제곱근은 4와 -4이다",
  },
  {
    ko: "양의 제곱근 / 음의 제곱근",
    en: "Positive / Negative Square Root",
    def: "양수 a의 제곱근 중에서 양수인 것을 양의 제곱근, 음수인 것을 음의 제곱근이라 하고, 기호 √를 사용하여 각각 √a, -√a로 나타낸다",
    ex: "4의 양의 제곱근은 √4=2이고, 음의 제곱근은 -√4=-2이다",
  },
  {
    ko: "근호",
    en: "Radical Sign",
    def: "제곱근을 나타내는 기호 √. √a를 '제곱근 a' 또는 '루트 a'라고 읽는다",
    ex: "√2는 '제곱근 2' 또는 '루트 2'라고 읽는다",
  },
  {
    ko: "무리수",
    en: "Irrational Number",
    def: "유리수가 아닌 수. 소수로 나타낼 때 순환소수가 아닌 무한소수가 되는 수이다",
    ex: "√2=1.41421356…은 순환소수가 아닌 무한소수이므로 무리수이다",
  },
  {
    ko: "실수",
    en: "Real Number",
    def: "유리수와 무리수를 통틀어 이르는 말",
    ex: "실수는 유리수(정수, 유한소수, 순환소수)와 무리수(√2, π 등)로 이루어진다",
  },
];

const M3_TERMS_RADICAL = [
  {
    ko: "분모의 유리화",
    en: "Rationalization of Denominator",
    def: "분수의 분모가 근호를 포함한 무리수일 때, 분자와 분모에 0이 아닌 같은 수를 곱하여 분모를 유리수로 고치는 것",
    ex: "1/√2의 분모를 유리화하면 1/√2 × √2/√2 = √2/2이다",
  },
];

const M3_TERMS_POLYMULT = [
  {
    ko: "곱셈 공식",
    en: "Multiplication Formulas",
    def: "다항식의 곱셈에서 자주 쓰이는 전개 공식. ① (a+b)²=a²+2ab+b² ② (a-b)²=a²-2ab+b² ③ (a+b)(a-b)=a²-b² ④ (x+a)(x+b)=x²+(a+b)x+ab",
    ex: "(a+b)²=a²+2ab+b²을 이용하면 (x+3)²=x²+6x+9이다",
  },
];

const M3_TERMS_FACTOR = [
  {
    ko: "인수",
    en: "Factor",
    def: "하나의 다항식을 두 개 이상의 다항식의 곱으로 나타낼 때, 각각의 다항식",
    ex: "x²+3x+2=(x+1)(x+2)에서 x+1과 x+2는 x²+3x+2의 인수이다",
  },
  {
    ko: "공통인수",
    en: "Common Factor",
    def: "다항식의 각 항에 공통으로 들어 있는 인수",
    ex: "2x²+4x에서 공통인수는 2x이다. 2x²+4x=2x(x+2)로 인수분해된다",
  },
  {
    ko: "인수분해",
    en: "Factoring / Factorization",
    def: "하나의 다항식을 두 개 이상의 인수의 곱으로 나타내는 것",
    ex: "x²+3x+2=(x+1)(x+2)로 나타내는 것이 인수분해이다",
  },
  {
    ko: "완전제곱식",
    en: "Perfect Square Expression",
    def: "다항식의 제곱으로 된 식, 또는 이 식에 상수를 곱한 식",
    ex: "(a+b)², (2a-5b)², 3(x+4)²은 완전제곱식이다",
  },
];

const M3_TERMS_QUADEQ = [
  {
    ko: "이차방정식",
    en: "Quadratic Equation",
    def: "방정식의 우변에 있는 모든 항을 이항하여 정리한 식이 (x에 대한 이차식)=0의 꼴로 나타나는 방정식",
    ex: "2x²+4x-5=0, x²-1=0은 이차방정식이다",
  },
  {
    ko: "이차방정식의 해 (근)",
    en: "Solution / Root of Quadratic Equation",
    def: "이차방정식이 참이 되게 하는 x의 값. 이차방정식의 해를 모두 구하는 것을 이차방정식을 푼다고 한다",
    ex: "x²-4x+3=0은 x=1, 3일 때 참이 되므로 해는 x=1, x=3이다",
  },
  {
    ko: "중근",
    en: "Double Root",
    def: "이차방정식의 두 해가 중복되어 서로 같을 때, 이 해를 주어진 이차방정식의 중근이라고 한다",
    ex: "x²-6x+9=0은 (x-3)²=0이므로 x=3이 중근이다",
  },
  {
    ko: "근의 공식",
    en: "Quadratic Formula",
    def: "이차방정식 ax²+bx+c=0의 근을 구하는 공식. x=(-b±√(b²-4ac))÷2a (단, b²-4ac≥0)",
    ex: "x²-7x+2=0에 근의 공식을 적용하면 x=(7±√41)/2이다",
  },
];

const M3_TERMS_QUADFN = [
  {
    ko: "이차함수",
    en: "Quadratic Function",
    def: "함수 y=f(x)에서 y=ax²+bx+c (단, a, b, c는 상수, a≠0)와 같이 y가 x의 이차식으로 나타나는 함수",
    ex: "y=2x², y=-x²+3x-1은 이차함수이다",
  },
  {
    ko: "포물선",
    en: "Parabola",
    def: "이차함수 y=ax²의 그래프와 같은 모양의 곡선. 선대칭도형이다",
    ex: "이차함수 y=x²의 그래프는 포물선이다",
  },
  {
    ko: "축",
    en: "Axis of Symmetry",
    def: "포물선의 대칭축. 이차함수 y=a(x-p)²+q의 그래프의 축의 방정식은 x=p이다",
    ex: "이차함수 y=2(x-1)²+3의 축의 방정식은 x=1이다",
  },
  {
    ko: "꼭짓점",
    en: "Vertex",
    def: "포물선과 축의 교점. 이차함수 y=a(x-p)²+q의 그래프의 꼭짓점의 좌표는 (p, q)이다",
    ex: "이차함수 y=2(x-1)²+3의 꼭짓점의 좌표는 (1, 3)이다",
  },
];

const M3_TERMS_TRIGRATIO = [
  {
    ko: "삼각비",
    en: "Trigonometric Ratio",
    def: "직각삼각형에서 직각을 제외한 한 예각에 대하여 두 변의 길이의 비로 정의되는 sin A, cos A, tan A를 통틀어 ∠A의 삼각비라고 한다",
    ex: "∠C=90°인 △ABC에서 sin A, cos A, tan A가 ∠A의 삼각비이다",
  },
  {
    ko: "사인",
    en: "Sine",
    def: "∠C=90°인 직각삼각형 ABC에서 sin A = BC/AB = (빗변에 대한 높이의 비)",
    ex: "∠C=90°인 △ABC에서 BC=3, AB=5이면 sin A=3/5이다",
  },
  {
    ko: "코사인",
    en: "Cosine",
    def: "∠C=90°인 직각삼각형 ABC에서 cos A = AC/AB = (빗변에 대한 밑변의 비)",
    ex: "∠C=90°인 △ABC에서 AC=4, AB=5이면 cos A=4/5이다",
  },
  {
    ko: "탄젠트",
    en: "Tangent",
    def: "∠C=90°인 직각삼각형 ABC에서 tan A = BC/AC = (밑변에 대한 높이의 비)",
    ex: "∠C=90°인 △ABC에서 BC=3, AC=4이면 tan A=3/4이다",
  },
];

const M3_TERMS_CIRCLELINE = [
  {
    ko: "접선의 길이",
    en: "Length of Tangent",
    def: "원 밖의 한 점 P에서 원에 그은 접선과 접점 사이의 거리. 원 밖의 한 점에서 그 원에 그은 두 접선의 길이는 같다",
    ex: "점 P에서 원 O에 그은 두 접선의 접점이 각각 A, B이면 PA=PB이다",
  },
];

const M3_TERMS_INSCRIBED = [
  {
    ko: "원주각",
    en: "Inscribed Angle",
    def: "원 O에서 호 AB 위에 있지 않은 원 위의 점 P에 대하여 각 APB를 호 AB에 대한 원주각이라 한다. 원주각의 크기는 그 호에 대한 중심각의 크기의 1/2이다",
    ex: "한 호에 대한 원주각의 크기는 모두 같고, 그 호에 대한 중심각의 크기의 1/2이다",
  },
];

const M3_TERMS_STATREP = [
  {
    ko: "대푯값",
    en: "Representative Value",
    def: "자료 전체의 중심적인 경향이나 특징을 대표적인 하나의 수로 나타낸 값. 평균, 중앙값, 최빈값 등이 있다",
    ex: "자료 2, 3, 5, 7, 8의 평균 5는 이 자료의 대푯값으로 사용할 수 있다",
  },
  {
    ko: "중앙값",
    en: "Median",
    def: "자료를 크기 순서로 나열할 때, 한가운데 오는 값. 자료의 수가 짝수이면 가운데 두 값의 평균이다",
    ex: "1, 3, 5, 7, 9를 크기 순으로 나열했을 때 가운데 값인 5가 중앙값이다",
  },
  {
    ko: "최빈값",
    en: "Mode",
    def: "자료에서 가장 자주 나타나는 값",
    ex: "자료 1, 2, 2, 3, 4에서 2가 가장 많이 나타나므로 최빈값은 2이다",
  },
  {
    ko: "산포도",
    en: "Measure of Dispersion",
    def: "변량이 흩어져 있는 정도를 하나의 수로 나타낸 값",
    ex: "분산과 표준편차가 대표적인 산포도이다",
  },
  {
    ko: "편차",
    en: "Deviation",
    def: "어떤 자료의 각 변량에서 평균을 뺀 값. 편차의 합은 항상 0이다",
    ex: "자료 2, 4, 6의 평균은 4이므로 각 변량의 편차는 -2, 0, 2이다",
  },
  {
    ko: "분산",
    en: "Variance",
    def: "각 편차의 제곱의 평균",
    ex: "편차가 -2, 0, 2이면 분산 = ((-2)²+0²+2²)÷3 = 8/3이다",
  },
  {
    ko: "표준편차",
    en: "Standard Deviation",
    def: "분산의 음이 아닌 제곱근. 분산과 같은 단위로 자료의 흩어진 정도를 나타낸다",
    ex: "분산이 4이면 표준편차는 √4=2이다",
  },
];

const M3_TERMS_CORRELATE = [
  {
    ko: "산점도",
    en: "Scatter Plot",
    def: "두 변량 x, y의 순서쌍 (x, y)를 좌표평면 위에 점으로 나타낸 그림",
    ex: "읽은 책의 권수와 글쓰기 점수를 각각 x, y로 하여 좌표평면에 나타낸 것이 산점도이다",
  },
  {
    ko: "상관관계",
    en: "Correlation",
    def: "두 변량 x와 y 사이에 어떤 관계가 있을 때, 이 관계를 상관관계라 한다",
    ex: "공부 시간과 성적 사이에는 상관관계가 있다",
  },
  {
    ko: "양의 상관관계",
    en: "Positive Correlation",
    def: "두 변량 x와 y 사이에 x의 값이 커짐에 따라 y의 값도 대체로 커지는 관계",
    ex: "키와 몸무게 사이에는 양의 상관관계가 있다",
  },
  {
    ko: "음의 상관관계",
    en: "Negative Correlation",
    def: "두 변량 x와 y 사이에 x의 값이 커짐에 따라 y의 값이 대체로 작아지는 관계",
    ex: "기온과 핫초코 판매량 사이에는 음의 상관관계가 있다",
  },
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
          ch("m2-rational",  "Ⅰ-1 유리수와 순환소수",       "green", M2_TERMS_RATIONAL),
          ch("m2-poly-calc", "Ⅰ-2 식의 계산",               "green", M2_TERMS_POLYCALC),
          ch("m2-inequal",   "Ⅱ-1 일차부등식",              "green", M2_TERMS_INEQUAL),
          ch("m2-system",    "Ⅱ-2 연립일차방정식",          "green", M2_TERMS_SYSTEM),
          ch("m2-linear-fn", "Ⅲ-1 일차함수와 그래프",       "green", M2_TERMS_LINEARFN),
          ch("m2-linear-eq", "Ⅲ-2 일차함수와 일차방정식",   "green", M2_TERMS_LINEAREQ),
          ch("m2-triangle",  "Ⅳ-1 삼각형의 성질",           "green", M2_TERMS_TRIANGLE),
          ch("m2-quad",      "Ⅳ-2 사각형의 성질",           "green", M2_TERMS_QUAD),
          ch("m2-similar",   "Ⅴ-1 도형의 닮음",             "green", M2_TERMS_SIMILAR),
          ch("m2-pythag",    "Ⅴ-2 피타고라스 정리",         "green", M2_TERMS_PYTHAG),
          ch("m2-prob",      "Ⅵ-1 경우의 수와 확률",        "green", M2_TERMS_PROB),
        ],
      },
      {
        id: "m3",
        label: "3학년",
        paletteKey: "amber",
        chapters: [
          ch("m3-real",       "Ⅰ-1 제곱근과 실수",            "amber", M3_TERMS_REAL),
          ch("m3-radical",    "Ⅰ-2 근호를 포함한 식의 계산",  "amber", M3_TERMS_RADICAL),
          ch("m3-poly-mult",  "Ⅱ-1 다항식의 곱셈",            "amber", M3_TERMS_POLYMULT),
          ch("m3-factor",     "Ⅱ-2 인수분해",                 "amber", M3_TERMS_FACTOR),
          ch("m3-quad-eq",    "Ⅲ-1 이차방정식",               "amber", M3_TERMS_QUADEQ),
          ch("m3-quad-fn",    "Ⅳ-1 이차함수와 그래프",        "amber", M3_TERMS_QUADFN),
          ch("m3-quad-app",   "Ⅳ-2 이차함수의 활용",          "amber"),
          ch("m3-trig-ratio", "Ⅴ-1 삼각비",                   "amber", M3_TERMS_TRIGRATIO),
          ch("m3-circle-line","Ⅵ-1 원과 직선",                "amber", M3_TERMS_CIRCLELINE),
          ch("m3-inscribed",  "Ⅵ-2 원주각",                   "amber", M3_TERMS_INSCRIBED),
          ch("m3-stat-rep",   "Ⅶ-1 대푯값과 산포도",          "amber", M3_TERMS_STATREP),
          ch("m3-correlate",  "Ⅶ-2 상관관계",                 "amber", M3_TERMS_CORRELATE),
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
