document.addEventListener(
  "click",
  function (e) {
    const a = e.target.closest(
      'nav#site-nav.greedy-nav a[href^="#"]'
    );
    if (!a) return;

    // 阻止 greedy-nav 的 JS
    e.stopImmediatePropagation();

    // 不 preventDefault → 允许浏览器原生锚点
  },
  true // 捕获阶段
);
