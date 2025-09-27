
  const concard = document.getElementById('contact-card');
  const conbtn  = document.getElementById('contact-btn');
  const collapse = new bootstrap.Collapse(concard, { toggle: false });

  // 用按鈕切換開關（比 data API 更可控）
  conbtn.addEventListener('click', (e) => {
    const open = concard.classList.contains('show');
    open ? collapse.hide() : collapse.show();
  });

  // 跟著 Bootstrap 事件切 icon/ARIA
  concard.addEventListener('show.bs.collapse', () => {
    conbtn.classList.add('is-open');
    conbtn.setAttribute('aria-expanded', 'true');
  });
  concard.addEventListener('hide.bs.collapse', () => {
    conbtn.classList.remove('is-open');
    conbtn.setAttribute('aria-expanded', 'false');
  });

  // 點卡片外面就關閉
  document.addEventListener('click', (e) => {
    if (!concard.classList.contains('show')) return;
    const inside = concard.contains(e.target) || conbtn.contains(e.target);
    if (!inside) collapse.hide();
  });

  // ESC 關閉
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') collapse.hide();
  });