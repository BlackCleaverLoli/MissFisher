(function () {
    const TOGGLE_ID = 'sidebar-toggle';
    const STORAGE_KEY = 'missfisher.sidebarCollapsed';
    const MOBILE_QUERY = '(max-width: 768px)';

    const toggleBtn = document.getElementById(TOGGLE_ID);
    const sidebar = document.querySelector('.sidebar');
    if (!toggleBtn || !sidebar) return;

    const mediaQuery = window.matchMedia(MOBILE_QUERY);

    // Initialize from storage
    let stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }
    let hasManualPreference = stored === '0' || stored === '1';

    function setCollapsed(collapsed, persist = true) {
        document.body.classList.toggle('sidebar-collapsed', collapsed);
        toggleBtn.setAttribute('aria-expanded', String(!collapsed));
        toggleBtn.setAttribute('aria-label', collapsed ? '打开侧栏' : '关闭侧栏');
        toggleBtn.textContent = collapsed ? '☰' : '✕';

        if (persist) {
            hasManualPreference = true;
            try { localStorage.setItem(STORAGE_KEY, collapsed ? '1' : '0'); } catch (e) { /* ignore */ }
        }
    }

    function isCollapsed() {
        return document.body.classList.contains('sidebar-collapsed');
    }

    setCollapsed(hasManualPreference ? stored === '1' : mediaQuery.matches, false);

    toggleBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        setCollapsed(!isCollapsed());
    });

    // Click outside to close sidebar on mobile.
    document.addEventListener('click', (event) => {
        if (!mediaQuery.matches || isCollapsed()) return;
        if (sidebar.contains(event.target) || toggleBtn.contains(event.target)) return;
        setCollapsed(true);
    });

    // Allow Esc to close sidebar.
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !isCollapsed()) {
            setCollapsed(true);
        }
    });

    const handleViewportChange = (event) => {
        if (!hasManualPreference) {
            setCollapsed(event.matches, false);
        }
    };

    if (typeof mediaQuery.addEventListener === 'function') {
        mediaQuery.addEventListener('change', handleViewportChange);
    } else if (typeof mediaQuery.addListener === 'function') {
        mediaQuery.addListener(handleViewportChange);
    }
})();
