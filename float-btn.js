
  const cardEl = document.getElementById('helpCard');
  const fabEl  = document.getElementById('helpFab');
  const collapse = new Collapse(cardEl, { toggle: false });

  function setFab(open){
    fabEl.style.backgroundImage = open
      ? 'url("/images/help-btn-close.png")'
      : 'url("/images/help-btn.png")';
    fabEl.setAttribute('aria-label', open ? '關閉說明' : '開啟說明');
    fabEl.setAttribute('aria-expanded', String(open));
  }

  // 綁定 Bootstrap 事件
  cardEl.addEventListener('show.bs.collapse', () => setFab(true));
  cardEl.addEventListener('hide.bs.collapse', () => setFab(false));

  // 點 FAB 切換
  fabEl.addEventListener('click', () => {
    const isOpen = cardEl.classList.contains('show');
    isOpen ? collapse.hide() : collapse.show();
  });

  // 點卡片外區域關閉
  document.addEventListener('click', (e) => {
    const isOpen = cardEl.classList.contains('show');
    if (!isOpen) return;
    const clickInside = cardEl.contains(e.target) || fabEl.contains(e.target);
    if (!clickInside) collapse.hide();
  });

  // ESC 關閉
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') collapse.hide();
  });