// 强制 TOC 使用浏览器原生锚点滚动（捕获阶段）
document.addEventListener(
  'click',
  function (e) {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;

    const id = a.getAttribute('href');
    const target = document.querySelector(id);
    if (!target) return;

    // 阻止所有后续 JS（包括主题的）
    e.stopImmediatePropagation();

    // 允许浏览器默认锚点行为
    // 不调用 preventDefault()
  },
  true // ← 捕获阶段（关键）
);
