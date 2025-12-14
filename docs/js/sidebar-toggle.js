(function () {
    const TOGGLE_ID = 'sidebar-toggle';
    const STORAGE_KEY = 'missfisher.sidebarCollapsed';

    function setCollapsed(collapsed) {
        if (collapsed) {
            document.body.classList.add('sidebar-collapsed');
            toggleBtn.setAttribute('aria-pressed', 'true');
            toggleBtn.innerText = '☰';
        } else {
            document.body.classList.remove('sidebar-collapsed');
            toggleBtn.setAttribute('aria-pressed', 'false');
            toggleBtn.innerText = '☰';
        }
        try { localStorage.setItem(STORAGE_KEY, collapsed ? '1' : '0'); } catch (e) { /* ignore */ }
    }

    const toggleBtn = document.getElementById(TOGGLE_ID);
    if (!toggleBtn) return;

    // Initialize from storage
    let stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }
    if (stored === '1') setCollapsed(true);

    toggleBtn.addEventListener('click', () => {
        const collapsed = document.body.classList.toggle('sidebar-collapsed');
        try { localStorage.setItem(STORAGE_KEY, collapsed ? '1' : '0'); } catch (e) {}
    });

    // Allow Esc to close sidebar on small screens
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.body.classList.add('sidebar-collapsed');
        }
    });
})();

