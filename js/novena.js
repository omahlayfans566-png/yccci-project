/**
 * YCCCI Novena Experience - Data-Driven Version
 * Complete novena reader with full content from NOVENA_DB
 * Features: Day-by-day navigation, progress tracking, local storage, responsive
 */
(function () {
    'use strict';

    // ============================================================
    // OPENING / CLOSING PRAYERS (used as fallback wrappers)
    // ============================================================
    const ACT_OF_CONTRITION = 'Lord Jesus Christ, I am heartily sorry for my sins. Grant me, therefore, pardon of my sins and the grace I ask of You through the merits of the sorrows of Your loving Mother and the virtues of Your martyr, Saint Expeditus.';

    // ============================================================
    // STATE
    // ============================================================
    const experience = document.getElementById('novena-experience');
    if (!experience) return;

    const listing = document.querySelector('.page-content');
    const overview = document.getElementById('novena-overview');
    const page = document.getElementById('novena-prayer-page');
    const back = document.getElementById('novena-back');
    let activeKey = null;
    let activeNovena = null;

    const storageKey = 'yccci-novena-progress-v2';
    const favKey = 'yccci-novena-favorites';

    const readProgress = () => { try { return JSON.parse(localStorage.getItem(storageKey)) || {}; } catch (_) { return {}; } };
    const writeProgress = value => { try { localStorage.setItem(storageKey, JSON.stringify(value)); } catch (_) {} };
    const readFavorites = () => { try { return JSON.parse(localStorage.getItem(favKey)) || []; } catch (_) { return []; } };
    const writeFavorites = value => { try { localStorage.setItem(favKey, JSON.stringify(value)); } catch (_) {} };

    const scrollTop = () => experience.scrollIntoView({ behavior: 'smooth', block: 'start' });

    function getCompleted(key) { return readProgress()[key] || []; }

    // ============================================================
    // OVERVIEW: Show novena selection with progress
    // ============================================================
    function showOverview(key, updateHash = true) {
        const n = NOVENA_DB[key];
        if (!n) return;

        activeKey = key;
        activeNovena = n;
        listing.hidden = true;
        experience.hidden = false;
        page.hidden = true;
        overview.hidden = false;

        const completed = getCompleted(key);
        const resume = Math.min(9, completed.length ? Math.max(...completed) + 1 : 1);
        const pct = Math.round(completed.length / 9 * 100);
        const isFavorite = readFavorites().includes(key);

        // Build meta info
        const metaInfo = `
            <div class="novena-meta">
                ${n.patron ? `<span><strong>Patron:</strong> ${n.patron}</span>` : ''}
                ${n.feastDay ? `<span><strong>Feast:</strong> ${n.feastDay}</span>` : ''}
                ${n.startDate ? `<span><strong>Dates:</strong> ${n.startDate} — ${n.endDate}</span>` : ''}
                <span><strong>Category:</strong> ${n.category || 'General'}</span>
            </div>
        `;

        overview.innerHTML = `
            <div class="novena-header-card">
                <div class="novena-header-image">
                    <img src="${n.image || '../../images/sacredheart-novena.png'}" alt="${n.title}" loading="lazy">
                </div>
                <div class="novena-header-content">
                    <h1>${n.title}</h1>
                    <p class="novena-description">${n.description}</p>
                    ${metaInfo}
                    <button class="btn btn-sm btn-outline-dark novena-fav-btn" type="button" data-fav="${key}">
                        ${isFavorite ? '❤️ Saved' : '🤍 Save'}
                    </button>
                </div>
            </div>
            <div class="novena-about">
                <h2>About This Novena</h2>
                <p>${n.about || ''}</p>
            </div>
            <div class="novena-progress-card">
                <div class="novena-progress-header">
                    <span class="novena-progress-title">Progress</span>
                    <div class="novena-progress-stats">
                        <span><strong>${completed.length}</strong> of <strong>9</strong> Days Completed</span>
                        <span><strong>${9 - completed.length}</strong> Remaining</span>
                    </div>
                </div>
                <div class="novena-progress-bar-track">
                    <div class="novena-progress-bar-fill" style="width:${pct}%"></div>
                </div>
                <div class="novena-progress-percentage">${pct}% Complete</div>
            </div>
            <div class="novena-day-selection">
                <div class="novena-day-selection-header">
                    <h3>Choose a Day</h3>
                    <p>Select a day below to begin or continue your novena.</p>
                </div>
                <div class="novena-day-grid">
                    ${n.days.map((day, i) => {
                        const dayNum = i + 1;
                        const isCompleted = completed.includes(dayNum);
                        const isActive = dayNum === resume;
                        return `<div class="novena-day-card ${isCompleted ? 'completed' : ''} ${isActive && !isCompleted ? 'active' : ''}" data-day="${dayNum}">
                            <div class="novena-day-card-number">Day ${dayNum}</div>
                            <div class="novena-day-card-title">${day.title}</div>
                            <span class="novena-day-card-status ${isCompleted ? 'completed-status' : isActive ? 'active-status' : 'pending'}">
                                ${isCompleted ? '✓ Completed' : isActive ? '▶ Current' : '◉ Pending'}
                            </span>
                        </div>`;
                    }).join('')}
                </div>
                <div class="novena-day-cta">
                    <button class="btn btn-primary novena-day-cta-btn" type="button" data-day="${resume}">
                        ${completed.length === 9 ? '✓ Pray Again' : completed.length ? `▶ Resume Day ${resume}` : '▶ Begin Day 1'}
                    </button>
                    ${completed.length > 0 ? '<button class="btn btn-outline-dark restart-novena" type="button" style="margin-top:var(--space-md);">🔄 Restart Novena</button>' : ''}
                </div>
            </div>
        `;

        // Event listeners
        overview.querySelectorAll('[data-day]').forEach(el => {
            el.addEventListener('click', () => showDay(Number(el.dataset.day)));
        });
        overview.querySelector('.restart-novena')?.addEventListener('click', restart);
        overview.querySelector('.novena-fav-btn')?.addEventListener('click', function () {
            toggleFavorite(key, this);
        });

        if (updateHash) history.pushState({ novena: key }, '', `#${key}`);
        scrollTop();
    }

    // ============================================================
    // SHOW DAY: Display a specific day's content
    // ============================================================
    function showDay(day) {
        const n = activeNovena;
        if (!n || day < 1 || day > 9) return;

        const complete = getCompleted(activeKey).includes(day);
        overview.hidden = true;
        page.hidden = false;

        const dayData = n.days[day - 1];

        page.innerHTML = `
            <header class="prayer-header">
                <span class="section-tag">${n.title}</span>
                <p class="day-count">Day ${day} of 9</p>
                <h1>${dayData.title}</h1>
                <div class="mini-progress" aria-label="Novena day ${day} of 9">
                    ${n.days.map((_, i) => `<span class="${i < day ? 'active' : ''}"></span>`).join('')}
                </div>
                <button class="btn btn-sm btn-outline-dark novena-back-to-overview" type="button" style="margin-top: 0.5rem;">← Back to Overview</button>
            </header>
            <div class="prayer-body">
                ${dayData.content || '<p>Content coming soon.</p>'}
            </div>
            ${day === 9 && n.closingPrayer ? `
            <div class="novena-closing">
                <h2>Closing Prayer</h2>
                <p>${n.closingPrayer}</p>
            </div>` : ''}
            ${day === 9 && n.additionalPrayers ? `
            <div class="novena-additional">
                ${n.additionalPrayers}
            </div>` : ''}
            ${day === 9 && n.litany ? `
            <div class="novena-litany">
                <h2>Litany (Optional)</h2>
                <p><em>Recite the litany associated with this novena if desired.</em></p>
            </div>` : ''}
            <footer class="day-actions">
                <button class="btn btn-outline-dark previous" type="button" ${day === 1 ? 'disabled' : ''}>← Previous Day</button>
                <button class="btn btn-secondary complete" type="button">${complete ? '✓ Day Completed' : 'Mark Day as Completed'}</button>
                <button class="btn btn-primary next" type="button" ${day === 9 ? 'disabled' : ''}>Next Day →</button>
            </footer>
            <div class="completion-message" ${day !== 9 || !complete ? 'hidden' : ''}>
                <h2>🎉 Congratulations!</h2>
                <p>You have completed the ${n.title}.</p>
                <p>May the graces you have received through this novena remain with you always.</p>
                <button class="btn btn-secondary restart-novena" type="button">🔄 Pray This Novena Again</button>
                <button class="btn btn-outline-dark novena-back-btn" type="button" style="margin-top:0.5rem;">← Back to All Novenas</button>
            </div>
        `;

        // Event listeners
        page.querySelector('.previous').addEventListener('click', () => showDay(day - 1));
        page.querySelector('.next').addEventListener('click', () => showDay(day + 1));
        page.querySelector('.complete').addEventListener('click', () => completeDay(day));
        page.querySelector('.restart-novena')?.addEventListener('click', restart);
        page.querySelector('.novena-back-to-overview')?.addEventListener('click', () => showOverview(activeKey));
        page.querySelector('.novena-back-btn')?.addEventListener('click', closeExperience);

        history.pushState({ novena: activeKey, day }, '', `#${activeKey}/day-${day}`);
        scrollTop();
    }

    // ============================================================
    // COMPLETE DAY: Mark as done and save
    // ============================================================
    function completeDay(day) {
        const progress = readProgress();
        const days = progress[activeKey] || [];
        if (!days.includes(day)) days.push(day);
        progress[activeKey] = days.sort((a, b) => a - b);
        writeProgress(progress);

        const button = page.querySelector('.complete');
        button.textContent = '✓ Day Completed';
        button.classList.add('is-complete');

        if (day === 9) {
            const msg = page.querySelector('.completion-message');
            if (msg) {
                msg.hidden = false;
                msg.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    function restart() {
        const progress = readProgress();
        delete progress[activeKey];
        writeProgress(progress);
        showOverview(activeKey, false);
    }

    function closeExperience() {
        activeKey = null;
        activeNovena = null;
        experience.hidden = true;
        listing.hidden = false;
        history.pushState({}, '', location.pathname);
        listing.scrollIntoView({ behavior: 'smooth' });
    }

    function toggleFavorite(key, btn) {
        const favs = readFavorites();
        const idx = favs.indexOf(key);
        if (idx > -1) {
            favs.splice(idx, 1);
            btn.textContent = '🤍 Save';
        } else {
            favs.push(key);
            btn.textContent = '❤️ Saved';
        }
        writeFavorites(favs);
    }

    // ============================================================
    // EVENT BINDING
    // ============================================================
    back.addEventListener('click', () => page.hidden ? closeExperience() : showOverview(activeKey));

    // Bind all "Start Novena" / "Open Prayer" buttons
    document.querySelectorAll('.novena-start').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const key = link.dataset.novena;
            if (NOVENA_DB[key]) showOverview(key);
        });
    });

    // Bind all novena cards to show progress
    document.querySelectorAll('.novena-card').forEach(card => {
        const key = card.dataset.novena;
        const progress = getCompleted(key);
        const link = card.querySelector('.novena-start');
        if (progress.length && link) {
            link.childNodes[0].textContent = progress.length === 9 ? 'Pray Again ' : `Resume (${progress.length}/9) `;
        }
    });

    // Bind monthly novena cards
    document.querySelectorAll('.monthly-novena-card').forEach(card => {
        const key = card.dataset.novena;
        if (key && NOVENA_DB[key]) {
            const link = card.querySelector('.novena-start');
            if (link) {
                link.addEventListener('click', e => {
                    e.preventDefault();
                    showOverview(key);
                });
            }
        }
    });

    // ============================================================
    // ROUTING: Handle URL hash for direct linking
    // ============================================================
    function route() {
        const match = location.hash.match(/^#([^/]+)(?:\/day-(\d))?$/);
        if (match && NOVENA_DB[match[1]]) {
            showOverview(match[1], false);
            if (match[2]) showDay(Number(match[2]));
        }
    }

    window.addEventListener('popstate', route);
    route();

    // ============================================================
    // EXPOSE HELPERS for monthly page integration
    // ============================================================
    window.YCCCI_Novena = {
        showOverview,
        showDay,
        getNovena: (key) => NOVENA_DB[key],
        getMonthNovenas: (month) => MONTHLY_NOVENAS[month] || []
    };

})();