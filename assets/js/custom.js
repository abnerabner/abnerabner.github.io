$(function () {
  // 禁用主题对页内锚点的 JS 劫持
  $(document).off('click', 'a[href^="#"]');
});
