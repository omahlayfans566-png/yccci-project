/**
 * YCCCI Prayer Library - Data-Driven Version
 * Complete Catholic prayer library from PRAYER_DB
 * Features: Category browsing, search, favorites, responsive
 */
(function () {
    'use strict';

    // ============================================================
    // STATE
    // ============================================================
    const favKey = 'yccci-prayer-favorites';
    const readFavorites = () => { try { return JSON.parse(localStorage.getItem(favKey)) || []; } catch (_) { return []; } };
    const writeFavorites = value => { try { localStorage.setItem(favKey, JSON.stringify(value)); } catch (_) {} };

    // ============================================================
    // PRAYER LIBRARY VIEW
    // ============================================================
    function initPrayerLibrary() {
        const container = document.getElementById('prayer-library-container');
        if (!container) return;

        // Build category sections
        const categories = Object.entries(PRAYER_DB.categories)
            .sort((a, b) => a[1].order - b[1].order);

        let html = '<div class="prayer-library">';

        // Search bar
        html += `
            <div class="prayer-search-bar">
                <input type="text" id="prayer-search-input" placeholder="Search prayers..." class="form-input" style="width:100%;padding:1rem;border:2px solid var(--border);border-radius:8px;font-size:1rem;">
                <div id="prayer-search-results" style="display:none;" class="prayer-search-results"></div>
            </div>
        `;

        // Favorites section
        const favs = readFavorites();
        if (favs.length > 0) {
            html += `
                <div class="prayer-category-section" id="prayer-favorites">
                    <div class="section-header fade-in">
                        <span class="section-tag">Saved Prayers</span>
                        <h2 class="section-title">❤️ My Favorites</h2>
                    </div>
                    <div class="prayer-grid">
                        ${favs.map(id => {
                            const p = PRAYER_DB.prayers[id];
                            if (!p) return '';
                            const cat = PRAYER_DB.categories[p.category];
                            return `
                                <article class="prayer-card fade-in" data-prayer="${id}">
                                    <div class="prayer-card-body">
                                        <span class="prayer-category-tag">${cat ? cat.name : p.category}</span>
                                        <h3>${p.title}</h3>
                                        <p>${p.description}</p>
                                        <button class="btn btn-sm btn-outline-dark read-prayer-btn" data-prayer="${id}">Read Prayer</button>
                                        <button class="btn btn-sm btn-outline-danger remove-fav-btn" data-prayer="${id}" style="margin-left:0.5rem;">Remove</button>
                                    </div>
                                </article>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        }

        // Category sections
        categories.forEach(([catKey, cat]) => {
            const prayers = Object.values(PRAYER_DB.prayers).filter(p => p.category === catKey);
            if (prayers.length === 0) return;

            html += `
                <div class="prayer-category-section" id="cat-${catKey}">
                    <div class="section-header fade-in">
                        <span class="section-tag">${cat.name}</span>
                        <h2 class="section-title">${cat.name}</h2>
                    </div>
                    <div class="prayer-grid">
                        ${prayers.map((p, idx) => `
                            <article class="prayer-card fade-in" style="transition-delay:${idx * 0.05}s" data-prayer="${p.id}">
                                <div class="prayer-card-body">
                                    <span class="prayer-category-tag">${cat.name}</span>
                                    <h3>${p.title}</h3>
                                    <p>${p.description}</p>
                                    <button class="btn btn-sm btn-outline-dark read-prayer-btn" data-prayer="${p.id}">Read Prayer</button>
                                    <button class="btn btn-sm btn-outline-secondary fav-prayer-btn" data-prayer="${p.id}" style="margin-left:0.5rem;">${favs.includes(p.id) ? '❤️' : '🤍'}</button>
                                </div>
                            </article>
                        `).join('')}
                    </div>
                </div>
            `;
        });

        html += '</div>';
        container.innerHTML = html;

        // Bind events
        container.querySelectorAll('.read-prayer-btn').forEach(btn => {
            btn.addEventListener('click', () => showPrayer(btn.dataset.prayer));
        });

        container.querySelectorAll('.fav-prayer-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                togglePrayerFav(this.dataset.prayer, this);
            });
        });

        container.querySelectorAll('.remove-fav-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                removePrayerFav(this.dataset.prayer);
            });
        });

        // Search
        const searchInput = document.getElementById('prayer-search-input');
        const searchResults = document.getElementById('prayer-search-results');
        if (searchInput) {
            searchInput.addEventListener('input', function () {
                const q = this.value.toLowerCase().trim();
                if (q.length < 2) {
                    searchResults.style.display = 'none';
                    return;
                }
                const results = Object.values(PRAYER_DB.prayers).filter(p =>
                    p.title.toLowerCase().includes(q) ||
                    p.description.toLowerCase().includes(q) ||
                    p.content.toLowerCase().includes(q)
                ).slice(0, 20);

                if (results.length === 0) {
                    searchResults.innerHTML = '<p style="padding:1rem;color:var(--gray);">No prayers found.</p>';
                    searchResults.style.display = 'block';
                    return;
                }

                searchResults.innerHTML = results.map(r => `
                    <div class="search-result-item" data-prayer="${r.id}">
                        <strong>${r.title}</strong>
                        <small>${PRAYER_DB.categories[r.category]?.name || r.category}</small>
                    </div>
                `).join('');
                searchResults.style.display = 'block';

                searchResults.querySelectorAll('.search-result-item').forEach(item => {
                    item.addEventListener('click', () => {
                        showPrayer(item.dataset.prayer);
                        searchResults.style.display = 'none';
                        searchInput.value = '';
                    });
                });
            });

            document.addEventListener('click', (e) => {
                if (!e.target.closest('.prayer-search-bar')) {
                    searchResults.style.display = 'none';
                }
            });
        }
    }

    // ============================================================
    // SHOW PRAYER: Display full prayer content
    // ============================================================
    function showPrayer(id) {
        const p = PRAYER_DB.prayers[id];
        if (!p) return;

        const container = document.getElementById('prayer-library-container');
        if (!container) return;

        const cat = PRAYER_DB.categories[p.category];
        const favs = readFavorites();

        container.innerHTML = `
            <div class="prayer-detail-view">
                <button class="btn btn-outline-dark back-to-library" type="button" style="margin-bottom:var(--space-lg);">← Back to Prayer Library</button>
                <article class="prayer-detail-card">
                    <div class="prayer-detail-header">
                        <span class="section-tag">${cat ? cat.name : p.category}</span>
                        <h1>${p.title}</h1>
                        <p class="prayer-detail-desc">${p.description}</p>
                        <button class="btn btn-sm btn-outline-secondary fav-prayer-btn" data-prayer="${p.id}">${favs.includes(p.id) ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}</button>
                    </div>
                    <div class="prayer-detail-content">
                        ${p.content}
                    </div>
                </article>
                <button class="btn btn-outline-dark back-to-library" type="button" style="margin-top:var(--space-lg);">← Back to Prayer Library</button>
            </div>
        `;

        container.querySelectorAll('.back-to-library').forEach(btn => {
            btn.addEventListener('click', initPrayerLibrary);
        });

        container.querySelector('.fav-prayer-btn')?.addEventListener('click', function () {
            togglePrayerFav(p.id, this);
        });

        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function togglePrayerFav(id, btn) {
        const favs = readFavorites();
        const idx = favs.indexOf(id);
        if (idx > -1) {
            favs.splice(idx, 1);
            if (btn) btn.textContent = '🤍';
        } else {
            favs.push(id);
            if (btn) btn.textContent = '❤️';
        }
        writeFavorites(favs);
    }

    function removePrayerFav(id) {
        const favs = readFavorites();
        const idx = favs.indexOf(id);
        if (idx > -1) {
            favs.splice(idx, 1);
            writeFavorites(favs);
            initPrayerLibrary();
        }
    }

    // ============================================================
    // INIT
    // ============================================================
    document.addEventListener('DOMContentLoaded', function () {
        // Check if we're on the prayers page
        if (document.getElementById('prayer-library-container')) {
            initPrayerLibrary();
        }

        // Bind existing prayer detail links
        document.querySelectorAll('.read-prayer-btn').forEach(btn => {
            btn.addEventListener('click', function (e) {
                const id = this.dataset.prayer || this.closest('[data-prayer]')?.dataset.prayer;
                if (id && PRAYER_DB.prayers[id]) {
                    e.preventDefault();
                    showPrayer(id);
                }
            });
        });
    });

    // Expose for inline use
    window.YCCCI_Prayers = {
        showPrayer,
        initPrayerLibrary
    };

})();