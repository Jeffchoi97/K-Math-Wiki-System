/* ──────────────────────────────────────────────────────────
   K-Math Wiki — 교육과정 데이터 (중학교 1학년 전체 단원 완성)
   
   ※ 신사고 중학교 1학년 교과서 기반
   ※ 누락 용어 8개 추가 (변수, 교점, 교선, 중점, 예각, 둔각, 평각, 맞꼭지각)
   ────────────────────────────────────────────────────────── */

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

const ch = (id, label, paletteKey, terms = []) => ({
  id,
  label,
  ...PALETTE[paletteKey],
  paletteKey,
  terms,
});

/* ============================================================
   중학교 1학년 용어 (기존 + 누락 용어 추가)
   ============================================================ */

// Ⅰ-1 소인수분해 (기존)
const M1_TERMS_PRIME = [
  { ko: "소수", en: "Prime Number", def: "1보다 큰 자연수 중에서 1과 자기 자신만을 약수로 갖는 수", ex: "자연수 2, 3, 5의 약수는 1과 자기 자신뿐이다" },
  { ko: "합성수", en: "Composite Number", def: "1보다 큰 자연수 중에서 소수가 아닌 수", ex: "1과 자기 자신 이외의 약수를 갖는다" },
  { ko: "거듭제곱", en: "Power", def: "같은 수를 여러 번 곱한 것을 간단히 나타낸 것", ex: "2×2=2², 2×2×2=2³" },
  { ko: "밑", en: "Base", def: "거듭제곱에서 곱하는 수", ex: "5⁴에서 밑은 5이다" },
  { ko: "지수", en: "Exponent", def: "거듭제곱에서 곱해진 수의 개수", ex: "5⁴에서 지수는 4이다" },
  { ko: "소인수", en: "Prime Factor", def: "어떤 자연수의 약수 중에서 소수인 것", ex: "24의 약수 중 소수는 2와 3이므로, 24의 소인수는 2와 3이다" },
  { ko: "소인수분해", en: "Prime Factorization", def: "1보다 큰 자연수를 그 수의 소인수만의 곱으로 나타내는 것", ex: "24 = 2×2×2×3 = 2³×3" },
  { ko: "공약수", en: "Common Divisor", def: "두 개 이상의 자연수의 공통인 약수", ex: "8과 12의 공약수는 1, 2, 4이다" },
  { ko: "최대공약수", en: "Greatest Common Divisor", def: "공약수 중에서 가장 큰 것", ex: "8과 12의 최대공약수는 4이다" },
  { ko: "서로소", en: "Coprime", def: "최대공약수가 1인 두 자연수", ex: "8과 21의 최대공약수는 1이므로 8과 21은 서로소이다" },
  { ko: "공배수", en: "Common Multiple", def: "두 개 이상의 자연수의 공통인 배수", ex: "8과 12의 공배수는 24, 48, 72, …이다" },
  { ko: "최소공배수", en: "Least Common Multiple", def: "공배수 중에서 가장 작은 것", ex: "8과 12의 최소공배수는 24이다" },
];

// Ⅰ-2 정수와 유리수 (기존)
const M1_TERMS_INTEGER = [
  { ko: "양의 부호 (+)", en: "Positive Sign", def: "어떤 기준에 대해 서로 반대되는 성질을 가진 양을 나타낼 때, 한쪽에 붙이는 부호", ex: "영상 16°C를 +16으로 나타낸다" },
  { ko: "음의 부호 (−)", en: "Negative Sign", def: "양의 부호와 반대 방향이나 반대 성질을 나타낼 때 붙이는 부호", ex: "영하 3°C를 −3으로 나타낸다" },
  { ko: "양수", en: "Positive Number", def: "양의 부호 +를 붙인 수 (0보다 큰 수)", ex: "+3, +½, +0.7 등은 양수이다" },
  { ko: "음수", en: "Negative Number", def: "음의 부호 −를 붙인 수 (0보다 작은 수)", ex: "−2, −0.7 등은 음수이다" },
  { ko: "양의 정수", en: "Positive Integer", def: "자연수에 양의 부호 +를 붙인 수로, 자연수와 같다", ex: "+1, +2, +3, …" },
  { ko: "음의 정수", en: "Negative Integer", def: "자연수에 음의 부호 −를 붙인 수", ex: "−1, −2, −3, …" },
  { ko: "정수", en: "Integer", def: "양의 정수, 0, 음의 정수를 통틀어 이르는 말", ex: "0은 양의 정수도 음의 정수도 아니다" },
  { ko: "유리수", en: "Rational Number", def: "분모·분자가 모두 자연수인 분수에 양의 부호 또는 음의 부호를 붙인 수와 0을 통틀어 이르는 말", ex: null },
  { ko: "수직선", en: "Number Line", def: "직선 위에 기준점을 정해 0을 대응시키고, 오른쪽에 양수, 왼쪽에 음수를 대응시킨 직선", ex: null },
  { ko: "절댓값", en: "Absolute Value", def: "수직선에서 0을 나타내는 점과 그 수를 나타내는 점 사이의 거리", ex: "+3과 −3의 절댓값은 각각 3이므로 |+3|=3, |−3|=3" },
];

// Ⅱ-1 문자와 식 (기존)
const M1_TERMS_EXPRESSION = [
  { ko: "대입", en: "Substitution", def: "문자를 사용한 식에서 문자에 특정 수를 바꾸어 넣는 것", ex: "x=−3일 때, x²−4에 −3을 대입하면 (−3)²−4=5" },
  { ko: "식의 값", en: "Value of Expression", def: "문자에 수를 대입하여 계산한 결과", ex: "a=⅓일 때, 3a+1의 값은 2" },
  { ko: "항", en: "Term", def: "수 또는 문자의 곱으로만 이루어진 것", ex: "3x+4y+6에서 항은 3x, 4y, 6이다" },
  { ko: "상수항", en: "Constant Term", def: "수로만 이루어진 항", ex: "3x+4y+6에서 상수항은 6이다" },
  { ko: "계수", en: "Coefficient", def: "수와 문자의 곱으로 이루어진 항에서 문자에 곱해진 수", ex: "4x−3y+5에서 x의 계수는 4, y의 계수는 −3이다" },
  { ko: "단항식", en: "Monomial", def: "한 개의 항으로만 이루어진 식", ex: "2y는 단항식이다" },
  { ko: "다항식", en: "Polynomial", def: "한 개의 항 또는 여러 개의 항의 합으로 이루어진 식", ex: "4x−3y+5는 다항식이다" },
  { ko: "차수", en: "Degree", def: "어떤 항에서 문자가 곱해진 개수", ex: "3x²에서 x의 차수는 2" },
  { ko: "일차식", en: "Linear Expression", def: "차수가 1인 다항식", ex: "2y, 5x+3은 일차식이다" },
  { ko: "동류항", en: "Like Terms", def: "문자와 차수가 각각 같은 항", ex: "3x와 5x는 동류항이므로 3x+5x=8x" },
];

// Ⅱ-2 일차방정식 (기존)
const M1_TERMS_EQUATION = [
  { ko: "등식", en: "Equation / Equality", def: "등호 =를 사용하여 나타낸 식", ex: "7−3=4, 3x−1=2는 등식이다" },
  { ko: "좌변", en: "Left Side", def: "등식에서 등호의 왼쪽 부분", ex: "2x+1=5에서 좌변은 2x+1이다" },
  { ko: "우변", en: "Right Side", def: "등식에서 등호의 오른쪽 부분", ex: "2x+1=5에서 우변은 5이다" },
  { ko: "양변", en: "Both Sides", def: "등식의 좌변과 우변을 통틀어 이르는 말", ex: null },
  { ko: "방정식", en: "Equation", def: "x의 값에 따라 참이 되기도 하고 거짓이 되기도 하는 등식", ex: "2x+1=5는 x=2일 때 참, x=1일 때 거짓이 되므로 방정식이다" },
  { ko: "미지수", en: "Unknown", def: "방정식에서 값을 모르는 문자", ex: "2x+1=5에서 미지수는 x이다" },
  { ko: "해 (근)", en: "Solution / Root", def: "방정식이 참이 되게 하는 미지수의 값", ex: "2x+1=5는 x=2일 때 참이 되므로 x=2가 해이다" },
  { ko: "항등식", en: "Identity", def: "미지수 x가 어떤 값을 갖더라도 항상 참이 되는 등식", ex: "x+2x=3x는 항등식이다" },
  { ko: "일차방정식", en: "Linear Equation", def: "우변의 모든 항을 좌변으로 이항하여 정리했을 때 (x에 대한 일차식)=0 꼴로 나타나는 방정식", ex: "3x+2=x−2를 이항하면 2x+4=0" },
  { ko: "이항", en: "Transposition", def: "등식의 한 변에 있는 항을 부호만 바꾸어 다른 변으로 옮기는 것", ex: "3x−2=7에서 −2를 이항하면 3x=7+2" },
];

// Ⅲ-1 좌표평면과 그래프 (누락 용어 1개 추가: 변수)
const M1_TERMS_COORDINATE = [
  { ko: "순서쌍", en: "Ordered Pair", def: "두 수를 짝지어 순서대로 나타낸 것", ex: "점 A의 좌표가 −3, −2이면 순서쌍 (−3, −2)로 나타낸다" },
  { ko: "좌표", en: "Coordinate", def: "수직선이나 좌표평면 위의 점의 위치를 나타내는 수", ex: "점 P의 좌표가 (a, b)일 때, a를 x좌표, b를 y좌표라고 한다" },
  { ko: "원점", en: "Origin", def: "수직선에서 0을 나타내는 점, 또는 좌표평면에서 두 수직선이 만나는 점", ex: "좌표평면의 원점은 O(0, 0)이다" },
  { ko: "x좌표 (가로 좌표)", en: "x-coordinate", def: "순서쌍에서 첫 번째 수", ex: "점 P(a, b)에서 a를 x좌표라고 한다" },
  { ko: "y좌표 (세로 좌표)", en: "y-coordinate", def: "순서쌍에서 두 번째 수", ex: "점 P(a, b)에서 b를 y좌표라고 한다" },
  { ko: "좌표축", en: "Coordinate Axis", def: "좌표평면을 이루는 두 수직선", ex: "가로 좌표축을 x축, 세로 좌표축을 y축이라 한다" },
  { ko: "x축", en: "x-axis", def: "좌표평면에서 가로 방향의 수직선", ex: "x축 위의 점은 y좌표가 0이다" },
  { ko: "y축", en: "y-axis", def: "좌표평면에서 세로 방향의 수직선", ex: "y축 위의 점은 x좌표가 0이다" },
  { ko: "좌표평면", en: "Coordinate Plane", def: "두 수직선을 이용하여 점의 위치를 나타낼 수 있게 만든 평면", ex: null },
  { ko: "사분면", en: "Quadrant", def: "좌표축에 의해 나누어지는 네 부분", ex: "좌표평면은 제1사분면, 제2사분면, 제3사분면, 제4사분면으로 나뉜다" },
  { ko: "제1사분면", en: "First Quadrant", def: "x좌표와 y좌표가 모두 양수인 점들이 모인 부분", ex: null },
  { ko: "제2사분면", en: "Second Quadrant", def: "x좌표는 음수, y좌표는 양수인 점들이 모인 부분", ex: null },
  { ko: "제3사분면", en: "Third Quadrant", def: "x좌표와 y좌표가 모두 음수인 점들이 모인 부분", ex: null },
  { ko: "제4사분면", en: "Fourth Quadrant", def: "x좌표는 양수, y좌표는 음수인 점들이 모인 부분", ex: null },
  { ko: "변수", en: "Variable", def: "여러 가지로 변하는 값을 나타내는 문자", ex: "x, y와 같이 여러 가지로 변하는 값을 나타내는 문자를 변수라고 한다" },
  { ko: "그래프", en: "Graph", def: "두 변수 사이의 관계를 좌표평면 위에 그림으로 나타낸 것", ex: "x, y의 순서쌍 (x, y)를 좌표로 하는 점을 좌표평면 위에 나타낸 그림을 그래프라고 한다" },
];

// Ⅲ-2 정비례와 반비례
const M1_TERMS_PROPORTION = [
  { ko: "정비례", en: "Direct Proportion", def: "y가 x에 정비례하면 y=ax (단, a≠0)가 성립한다", ex: "일반적으로 x의 값이 모두 수일 때, 정비례 관계 y=ax의 그래프는 원점을 지나는 직선이다" },
  { ko: "반비례", en: "Inverse Proportion", def: "y가 x에 반비례하면 y=a/x (단, a≠0)가 성립한다", ex: "반비례 관계 y=a/x의 그래프는 좌표축에 점점 가까워지면서 한없이 뻗어 나가는 한 쌍의 매끄러운 곡선이다" },
  { ko: "정비례 관계", en: "Direct Proportional Relationship", def: "y가 x에 정비례하는 관계", ex: "y가 x에 정비례하고 x=3일 때 y=12이다" },
  { ko: "반비례 관계", en: "Inverse Proportional Relationship", def: "y가 x에 반비례하는 관계", ex: "y가 x에 반비례하고 x=4일 때 y=9이다" },
];

// Ⅳ-1 기본 도형 (누락 용어 7개 추가: 교점, 교선, 중점, 예각, 둔각, 평각, 맞꼭지각)
const M1_TERMS_BASIC_FIG = [
  { ko: "점", en: "Point", def: "크기가 없고 위치만 있는 도형", ex: "점 A, 점 B로 나타낸다" },
  { ko: "선", en: "Line", def: "점이 움직인 자취", ex: null },
  { ko: "면", en: "Plane", def: "선이 움직인 자취", ex: null },
  { ko: "교점", en: "Point of Intersection", def: "선과 선 또는 선과 면이 만나서 생기는 점", ex: "직육면체에서 선과 선이 만나서 생기는 교점은 모두 8개이다" },
  { ko: "교선", en: "Line of Intersection", def: "면과 면이 만나서 생기는 선", ex: "직육면체에서 면과 면이 만나서 생기는 교선은 모두 12개이다" },
  { ko: "직선", en: "Straight Line", def: "곧게 한없이 늘어난 선", ex: "두 점 A, B를 지나는 직선을 AB로 나타낸다" },
  { ko: "반직선", en: "Ray", def: "직선 위의 한 점에서 시작하여 한쪽으로 한없이 늘어난 선", ex: "점 A에서 시작하여 점 B를 지나는 반직선을 AB로 나타낸다" },
  { ko: "선분", en: "Line Segment", def: "직선 위의 두 점 사이의 부분", ex: "두 점 A, B를 양 끝 점으로 하는 선분을 AB로 나타낸다" },
  { ko: "중점", en: "Midpoint", def: "선분을 이등분하는 점", ex: "선분 AB 위의 한 점 M에 대하여 AM=BM일 때, 점 M을 선분 AB의 중점이라고 한다" },
  { ko: "평행", en: "Parallel", def: "한 평면 위에 있는 두 직선 l, m이 만나지 않을 때", ex: "두 직선 l, m이 평행하면 l∥m으로 나타낸다" },
  { ko: "수직", en: "Perpendicular", def: "두 직선이 만나서 이루는 각이 직각일 때", ex: "두 직선 l, m이 수직이면 l⊥m으로 나타낸다" },
  { ko: "각", en: "Angle", def: "한 점에서 그은 두 반직선으로 이루어진 도형", ex: "점 O에서 그은 두 반직선 OA, OB로 이루어진 각을 ∠AOB로 나타낸다" },
  { ko: "꼭짓점", en: "Vertex", def: "각을 이루는 두 반직선의 공통인 점", ex: "∠AOB에서 점 O를 각의 꼭짓점이라고 한다" },
  { ko: "변", en: "Side", def: "각을 이루는 두 반직선", ex: "∠AOB에서 반직선 OA, OB를 각의 변이라고 한다" },
  { ko: "예각", en: "Acute Angle", def: "0°보다 크고 직각보다 작은 각", ex: null },
  { ko: "둔각", en: "Obtuse Angle", def: "직각보다 크고 평각보다 작은 각", ex: null },
  { ko: "평각", en: "Straight Angle", def: "180°인 각", ex: "∠AOB의 두 변 OA와 OB가 점 O를 중심으로 반대쪽에 있고 한 직선을 이룰 때, 이 각을 평각이라고 한다" },
  { ko: "맞꼭지각", en: "Vertical Angles", def: "두 직선이 한 점에서 만날 때 생기는 서로 마주 보는 각", ex: "맞꼭지각의 크기는 서로 같다" },
];

// Ⅳ-2 작도와 합동
const M1_TERMS_CONSTRUCT = [
  { ko: "작도", en: "Geometric Construction", def: "눈금 없는 자와 컴퍼스만을 사용하여 도형을 그리는 것", ex: null },
  { ko: "수직이등분선", en: "Perpendicular Bisector", def: "선분을 수직으로 이등분하는 직선", ex: "선분 AB의 수직이등분선 위의 점은 두 점 A, B로부터 같은 거리에 있다" },
  { ko: "각의 이등분선", en: "Angle Bisector", def: "각을 이등분하는 반직선", ex: "∠AOB의 이등분선 위의 점은 두 변 OA, OB로부터 같은 거리에 있다" },
  { ko: "합동", en: "Congruence", def: "모양과 크기가 같아서 완전히 포개어지는 두 도형", ex: "두 도형 A, B가 합동이면 A≡B로 나타낸다" },
  { ko: "대응점", en: "Corresponding Point", def: "합동인 두 도형에서 서로 포개어지는 점", ex: null },
  { ko: "대응변", en: "Corresponding Side", def: "합동인 두 도형에서 서로 포개어지는 변", ex: null },
  { ko: "대응각", en: "Corresponding Angle", def: "합동인 두 도형에서 서로 포개어지는 각", ex: null },
];

// Ⅴ-1 평면도형의 성질
const M1_TERMS_PLANE_FIG = [
  { ko: "삼각형", en: "Triangle", def: "세 선분으로 둘러싸인 도형", ex: "세 점 A, B, C를 꼭짓점으로 하는 삼각형을 △ABC로 나타낸다" },
  { ko: "삼각형의 내각", en: "Interior Angle of Triangle", def: "삼각형의 세 변이 이루는 각", ex: "삼각형의 세 내각의 크기의 합은 180°이다" },
  { ko: "삼각형의 외각", en: "Exterior Angle of Triangle", def: "삼각형의 한 변과 다른 한 변의 연장선이 이루는 각", ex: "삼각형의 한 외각의 크기는 그와 이웃하지 않는 두 내각의 크기의 합과 같다" },
  { ko: "다각형", en: "Polygon", def: "여러 개의 선분으로 둘러싸인 도형", ex: "사각형, 오각형, 육각형 등이 다각형이다" },
  { ko: "정다각형", en: "Regular Polygon", def: "모든 변의 길이가 같고 모든 내각의 크기가 같은 다각형", ex: "정삼각형, 정사각형, 정오각형 등이 정다각형이다" },
  { ko: "대각선", en: "Diagonal", def: "다각형에서 이웃하지 않는 두 꼭짓점을 잇는 선분", ex: null },
  { ko: "원", en: "Circle", def: "평면 위의 한 점에서 일정한 거리에 있는 점들의 모임", ex: "점 O를 중심으로 하는 원을 ○O로 나타낸다" },
  { ko: "중심", en: "Center", def: "원의 가운데 점", ex: null },
  { ko: "반지름", en: "Radius", def: "원의 중심과 원 위의 한 점을 잇는 선분", ex: null },
  { ko: "지름", en: "Diameter", def: "원의 중심을 지나는 현", ex: "지름의 길이는 반지름의 길이의 2배이다" },
  { ko: "현", en: "Chord", def: "원 위의 두 점을 잇는 선분", ex: null },
  { ko: "호", en: "Arc", def: "원 위의 두 점 사이의 부분", ex: "두 점 A, B에 대한 호를 호 AB로 나타낸다" },
];

// Ⅴ-2 입체도형의 성질
const M1_TERMS_SOLID_FIG = [
  { ko: "다면체", en: "Polyhedron", def: "평면으로만 둘러싸인 입체도형", ex: "각기둥, 각뿔 등이 다면체이다" },
  { ko: "정다면체", en: "Regular Polyhedron", def: "모든 면이 합동인 정다각형이고, 각 꼭짓점에 모인 면의 개수가 같은 다면체", ex: "정사면체, 정육면체, 정팔면체, 정십이면체, 정이십면체의 5가지가 있다" },
  { ko: "각기둥", en: "Prism", def: "두 평행한 면이 합동인 다각형이고 옆면이 모두 평행사변형인 다면체", ex: "삼각기둥, 사각기둥, 오각기둥 등이 각기둥이다" },
  { ko: "각뿔", en: "Pyramid", def: "한 면이 다각형이고 나머지 면이 모두 삼각형인 다면체", ex: "삼각뿔, 사각뿔, 오각뿔 등이 각뿔이다" },
  { ko: "회전체", en: "Solid of Revolution", def: "평면도형을 한 직선을 축으로 하여 1회전시킬 때 생기는 입체도형", ex: "원기둥, 원뿔, 구 등이 회전체이다" },
  { ko: "원기둥", en: "Cylinder", def: "직사각형을 한 변을 축으로 하여 1회전시킬 때 생기는 입체도형", ex: null },
  { ko: "원뿔", en: "Cone", def: "직각삼각형을 한 변을 축으로 하여 1회전시킬 때 생기는 입체도형", ex: null },
  { ko: "구", en: "Sphere", def: "반원을 지름을 축으로 하여 1회전시킬 때 생기는 입체도형", ex: null },
  { ko: "겉넓이", en: "Surface Area", def: "입체도형의 겉면의 넓이", ex: null },
  { ko: "부피", en: "Volume", def: "입체도형이 차지하는 공간의 크기", ex: null },
];

// Ⅵ-1 자료의 정리와 해석
const M1_TERMS_STATISTICS = [
  { ko: "도수", en: "Frequency", def: "각 계급에 속하는 자료의 개수", ex: null },
  { ko: "계급", en: "Class", def: "자료를 일정한 간격으로 나눈 구간", ex: null },
  { ko: "계급의 크기", en: "Class Width", def: "각 계급의 양 끝 값의 차", ex: null },
  { ko: "도수분포표", en: "Frequency Distribution Table", def: "변량을 몇 개의 계급으로 나누고 각 계급의 도수를 조사하여 나타낸 표", ex: null },
  { ko: "히스토그램", en: "Histogram", def: "도수분포표를 그래프로 나타낸 것", ex: "가로축에 계급을, 세로축에 도수를 나타낸다" },
  { ko: "도수분포다각형", en: "Frequency Polygon", def: "히스토그램에서 각 직사각형의 윗변의 중점을 차례로 이은 선", ex: null },
  { ko: "상대도수", en: "Relative Frequency", def: "각 계급의 도수를 도수의 총합으로 나눈 값", ex: "(상대도수) = (각 계급의 도수) / (도수의 총합)" },
  { ko: "평균", en: "Mean / Average", def: "변량의 총합을 변량의 개수로 나눈 값", ex: null },
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
          ch("m1-prime",      "Ⅰ-1 소인수분해",          "blue", M1_TERMS_PRIME),
          ch("m1-integer",    "Ⅰ-2 정수와 유리수",       "blue", M1_TERMS_INTEGER),
          ch("m1-expression", "Ⅱ-1 문자와 식",           "blue", M1_TERMS_EXPRESSION),
          ch("m1-equation",   "Ⅱ-2 일차방정식",          "blue", M1_TERMS_EQUATION),
          ch("m1-coordinate", "Ⅲ-1 좌표평면과 그래프",   "blue", M1_TERMS_COORDINATE),
          ch("m1-proportion", "Ⅲ-2 정비례와 반비례",     "blue", M1_TERMS_PROPORTION),
          ch("m1-basic-fig",  "Ⅳ-1 기본 도형",           "blue", M1_TERMS_BASIC_FIG),
          ch("m1-construct",  "Ⅳ-2 작도와 합동",         "blue", M1_TERMS_CONSTRUCT),
          ch("m1-plane-fig",  "Ⅴ-1 평면도형의 성질",     "blue", M1_TERMS_PLANE_FIG),
          ch("m1-solid-fig",  "Ⅴ-2 입체도형의 성질",     "blue", M1_TERMS_SOLID_FIG),
          ch("m1-statistics", "Ⅵ-1 자료의 정리와 해석",   "blue", M1_TERMS_STATISTICS),
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
