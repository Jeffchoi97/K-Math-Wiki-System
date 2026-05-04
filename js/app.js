/* ── State ── */
let activeChapterId = CHAPTERS[0].id;
let searchQuery = "";

/* ── DOM refs ── */
const tabsEl = document.getElementById("tabs");
const gridEl = document.getElementById("grid");
const statsEl = document.getElementById("stats");
const searchEl = document.getElementById("search");

/* ── Render tabs ── */
function renderTabs() {
  tabsEl.innerHTML = [
    { id: "all", label: "전체" },
    ...CHAPTERS.map((c) => ({ id: c.id, label: c.label })),
  ]
    .map(
      (t) =>
        `<button class="tab ${t.id === activeChapterId ? "active" : ""}"
           data-id="${t.id}">${t.label}</button>`
    )
    .join("");

  tabsEl.querySelectorAll(".tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeChapterId = btn.dataset.id;
      renderTabs();
      renderGrid();
    });
  });
}

/* ── Render grid ── */
function renderGrid() {
  const chapters =
    activeChapterId === "all"
      ? CHAPTERS
      : CHAPTERS.filter((c) => c.id === activeChapterId);

  const q = searchQuery.toLowerCase();

  const allTerms = chapters.flatMap((ch) =>
    ch.terms
      .filter(
        (t) =>
          !q ||
          t.ko.includes(q) ||
          t.en.toLowerCase().includes(q) ||
          t.def.includes(q) ||
          (t.ex && t.ex.includes(q))
      )
      .map((t) => ({ ...t, chapter: ch }))
  );

  statsEl.textContent = `${allTerms.length}개 용어`;

  if (allTerms.length === 0) {
    gridEl.innerHTML = `<div class="empty">검색 결과가 없습니다</div>`;
    return;
  }

  gridEl.innerHTML = allTerms
    .map((t) => {
      const ch = t.chapter;
      return `
      <div class="card">
        <span class="badge"
          style="background:${ch.accentBg};color:${ch.accentText};"
        >${ch.label}</span>
        <div class="term-ko">${t.ko}</div>
        <div class="term-en">${t.en}</div>
        <div class="definition">${t.def}</div>
        ${t.ex ? `<div class="example">${t.ex}</div>` : ""}
      </div>`;
    })
    .join("");
}

/* ── Search ── */
searchEl.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderGrid();
});

/* ── Init ── */
renderTabs();
renderGrid();
