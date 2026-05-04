/* ──────────────────────────────────────────────────────────
   K-Math Wiki — Main App Logic
   ────────────────────────────────────────────────────────── */

/* ── State ── */
const state = {
  schoolId:  CURRICULUM[0].id,                     // "middle"
  subjectId: CURRICULUM[0].subjects[0].id,         // "m1"
  chapterId: "all",                                // "all" | chapter id
  query:     "",
};

/* ── DOM refs ── */
const $schoolToggle = document.getElementById("school-toggle");
const $subjectTabs  = document.getElementById("subject-tabs");
const $chapterTabs  = document.getElementById("chapter-tabs");
const $stats        = document.getElementById("stats");
const $content      = document.getElementById("content");
const $search       = document.getElementById("search");

/* ── Helpers ── */
const getSchool  = () => CURRICULUM.find(s => s.id === state.schoolId);
const getSubject = () => getSchool().subjects.find(s => s.id === state.subjectId);
const getChapter = () => state.chapterId === "all"
  ? null
  : getSubject().chapters.find(c => c.id === state.chapterId);

function matchesQuery(term, q) {
  if (!q) return true;
  const lower = q.toLowerCase();
  return (
    term.ko.toLowerCase().includes(lower) ||
    term.en.toLowerCase().includes(lower) ||
    term.def.toLowerCase().includes(lower) ||
    (term.ex && term.ex.toLowerCase().includes(lower))
  );
}

/* ── Render: Level 1 (학교급) ── */
function renderSchoolToggle() {
  $schoolToggle.innerHTML = CURRICULUM.map(s => `
    <button class="school-btn ${s.id === state.schoolId ? "active" : ""}"
            data-id="${s.id}">${s.label}</button>
  `).join("");

  $schoolToggle.querySelectorAll(".school-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.schoolId  = btn.dataset.id;
      state.subjectId = getSchool().subjects[0].id;
      state.chapterId = "all";
      renderAll();
    });
  });
}

/* ── Render: Level 2 (과목) ── */
function renderSubjectTabs() {
  const school = getSchool();
  const activeSubject = getSubject();

  $subjectTabs.innerHTML = school.subjects.map(sub => {
    const isActive = sub.id === state.subjectId;
    const palette  = PALETTE[sub.paletteKey];
    const activeStyle = isActive
      ? `style="background:${palette.color};border-color:${palette.color};"`
      : "";
    return `
      <button class="subject-btn ${isActive ? "active" : ""}"
              data-id="${sub.id}" ${activeStyle}>${sub.label}</button>
    `;
  }).join("");

  $subjectTabs.querySelectorAll(".subject-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.subjectId = btn.dataset.id;
      state.chapterId = "all";
      renderAll();
    });
  });
}

/* ── Render: Level 3 (단원) ── */
function renderChapterTabs() {
  const subject = getSubject();
  const totalCount = subject.chapters.reduce((sum, ch) => sum + ch.terms.length, 0);

  const allBtn = `
    <button class="chapter-btn ${state.chapterId === "all" ? "active" : ""}"
            data-id="all">
      전체 <span class="chapter-count">${totalCount}</span>
    </button>
  `;

  const chapterBtns = subject.chapters.map(ch => {
    const isActive = ch.id === state.chapterId;
    const isEmpty  = ch.terms.length === 0;
    return `
      <button class="chapter-btn ${isActive ? "active" : ""} ${isEmpty ? "empty" : ""}"
              data-id="${ch.id}">
        ${ch.label} <span class="chapter-count">${ch.terms.length}</span>
      </button>
    `;
  }).join("");

  $chapterTabs.innerHTML = allBtn + chapterBtns;

  $chapterTabs.querySelectorAll(".chapter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.chapterId = btn.dataset.id;
      renderContent();
    });
  });
}

/* ── Render: 카드 한 개 ── */
function renderCard(term, chapter) {
  return `
    <div class="card">
      <span class="badge"
        style="background:${chapter.bg};color:${chapter.text};"
      >${chapter.label}</span>
      <div class="term-ko">${term.ko}</div>
      <div class="term-en">${term.en}</div>
      <div class="definition">${term.def}</div>
      ${term.ex ? `<div class="example">${term.ex}</div>` : ""}
    </div>
  `;
}

/* ── Render: 콘텐츠 영역 ── */
function renderContent() {
  const subject = getSubject();
  const chapter = getChapter();
  const q = state.query.trim();

  /* 단일 단원 모드 */
  if (chapter) {
    const filtered = chapter.terms.filter(t => matchesQuery(t, q));
    $stats.textContent = `${filtered.length}개 용어`;

    if (chapter.terms.length === 0) {
      $content.innerHTML = `
        <div class="empty-state">
          <div class="icon">○</div>
          <p>이 단원의 용어는 아직 작성되지 않았습니다</p>
          <p class="hint">data/curriculum.js의 <code>terms: []</code>에 추가할 수 있습니다</p>
        </div>`;
      return;
    }

    if (filtered.length === 0) {
      $content.innerHTML = `<div class="empty-state"><p>"${q}" 검색 결과가 없습니다</p></div>`;
      return;
    }

    $content.innerHTML = `
      <div class="grid">
        ${filtered.map(t => renderCard(t, chapter)).join("")}
      </div>`;
    return;
  }

  /* 전체 단원 모드 — 단원별 섹션으로 그룹핑 */
  const populated = subject.chapters.filter(ch => ch.terms.length > 0);

  if (populated.length === 0) {
    $stats.textContent = `0개 용어`;
    $content.innerHTML = `
      <div class="empty-state">
        <div class="icon">○</div>
        <p>이 과목의 용어는 아직 작성되지 않았습니다</p>
        <p class="hint">단원별로 내용을 채워보세요</p>
      </div>`;
    return;
  }

  let totalShown = 0;
  const sections = populated.map(ch => {
    const filtered = ch.terms.filter(t => matchesQuery(t, q));
    if (filtered.length === 0) return "";
    totalShown += filtered.length;
    return `
      <div class="section-header">
        <h3>${ch.label}</h3>
        <span class="section-count">${filtered.length}개 용어</span>
      </div>
      <div class="grid">
        ${filtered.map(t => renderCard(t, ch)).join("")}
      </div>
    `;
  }).filter(Boolean).join("");

  $stats.textContent = `${totalShown}개 용어`;

  if (totalShown === 0) {
    $content.innerHTML = `<div class="empty-state"><p>"${q}" 검색 결과가 없습니다</p></div>`;
    return;
  }

  $content.innerHTML = sections;
}

/* ── 전체 렌더 ── */
function renderAll() {
  renderSchoolToggle();
  renderSubjectTabs();
  renderChapterTabs();
  renderContent();
}

/* ── 검색 핸들러 ── */
$search.addEventListener("input", e => {
  state.query = e.target.value;
  renderContent();
});

/* ── 시작 ── */
renderAll();
