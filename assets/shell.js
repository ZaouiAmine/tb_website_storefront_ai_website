function mountShell(options) {
  const app = document.getElementById("app");
  if (!app) return;

  const cards = (options.cards || [])
    .map(
      (card) => `
      <section class="card">
        <div class="muted">${card.label}</div>
        <div class="kpi">${card.value}</div>
        ${card.note ? `<div class="pill">${card.note}</div>` : ""}
      </section>
    `
    )
    .join("");

  const items = (options.items || [])
    .map((item) => `<li>${item}</li>`)
    .join("");

  app.innerHTML = `
    <main class="page">
      <header class="topbar">
        <div class="brand">${options.title || "Showcase"}</div>
        <div class="muted">${options.subtitle || ""}</div>
      </header>
      <div class="grid">${cards}</div>
      <section class="card" style="margin-top:14px">
        <div class="muted">${options.listTitle || "Highlights"}</div>
        <ul class="list">${items}</ul>
      </section>
    </main>
  `;
}
