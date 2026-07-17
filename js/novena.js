/* Dedicated, responsive novena reader with persistent local progress. */
(function () {
    'use strict';

    const OPENING = 'In the name of the Father, and of the Son, and of the Holy Spirit. Amen. O God, come to my assistance; O Lord, make haste to help me. Receive my intention and lead me into Your presence during this time of prayer.';
    const CLOSING = 'Merciful Father, receive this prayer according to Your holy will. Keep me faithful in hope, generous in love, and attentive to the needs of others. Through Christ our Lord. Amen.';
    const data = {
        'sacred-heart': {
            title: 'Sacred Heart of Jesus Novena', image: '../../images/sacredheart-novena.png', description: 'Rest in the love, mercy, and transforming grace of the Heart of Jesus.', invocation: 'Sacred Heart of Jesus, I place all my trust in You.',
            themes: ['The Love of the Sacred Heart', 'Infinite Mercy', 'Meekness and Patience', 'Humility of Heart', 'Generous Love', 'The Peace of Christ', 'Strength in Trial', 'The Joy of the Gospel', 'Consecration to Jesus'],
            verses: ['John 15:9 — “As the Father loves me, so I also love you. Remain in my love.”', 'Matthew 11:28 — “Come to me, all you who labor and are burdened, and I will give you rest.”', 'Matthew 11:29 — “Learn from me, for I am meek and humble of heart.”', 'Philippians 2:5 — “Have among yourselves the same attitude that is also yours in Christ Jesus.”', 'John 15:13 — “No one has greater love than this, to lay down one’s life for one’s friends.”', 'John 14:27 — “Peace I leave with you; my peace I give to you.”', '2 Corinthians 12:9 — “My grace is sufficient for you.”', 'John 16:22 — “No one will take your joy away from you.”', 'Romans 12:1 — “Offer your bodies as a living sacrifice, holy and pleasing to God.”'],
            reflections: ['The pierced Heart of Jesus reveals a love that knows you completely and still calls you beloved. Rest in that love.', 'Christ’s mercy is greater than every failure. Bring Him what you hide and receive grace to begin again.', 'Jesus answers rejection with gentleness. Ask Him to make your reactions patient and your forgiveness sincere.', 'Jesus chose the lowly path of service. Let Him free you from pride and the need to be praised.', 'At the Cross, Jesus held nothing back. Choose one concrete way to give without counting the cost.', 'Christ’s peace is rooted in the Father’s care, not easy circumstances. Entrust today’s anxieties to Him.', 'The Heart that endured Calvary is near in weakness. Ask for courage to take the next faithful step.', 'Joy grows from communion with Jesus. Remember His gifts and carry Gospel hope to another person.', 'Offer Jesus your plans, relationships, work, wounds, and future. Let His loving Heart reign in all of life.']
        },
        rosary: {
            title: 'Our Lady of the Rosary Novena', image: '../../images/holyrosary-img.png', description: 'Contemplate Christ with Mary and seek her maternal intercession.', invocation: 'Our Lady of the Rosary, pray for us and lead us to Jesus.',
            themes: ['The Annunciation', 'The Visitation', 'The Nativity', 'The Presentation', 'Finding Jesus in the Temple', 'The Agony in the Garden', 'The Crucifixion', 'The Resurrection', 'Mary, Queen of Heaven'],
            verses: ['Luke 1:38 — “May it be done to me according to your word.”', 'Luke 1:46 — “My soul proclaims the greatness of the Lord.”', 'Luke 2:7 — “She gave birth to her firstborn son.”', 'Luke 2:22 — “They took him up to Jerusalem to present him to the Lord.”', 'Luke 2:49 — “Did you not know that I must be in my Father’s house?”', 'Luke 22:42 — “Not my will but yours be done.”', 'John 19:25 — “Standing by the cross of Jesus were his mother…”', 'Luke 24:6 — “He is not here, but he has been raised.”', 'Revelation 12:1 — “A woman clothed with the sun.”'],
            reflections: ['Mary’s yes made room for the Word. Ask for faith to welcome God’s plan even before you understand it.', 'Mary carried Jesus to Elizabeth in loving service. Bring Christ to someone through practical kindness.', 'God entered poverty and simplicity. Welcome Jesus in ordinary duties and in people easily overlooked.', 'Mary offered what she loved most to God. Place your family, gifts, and future into the Father’s hands.', 'Mary searched until she found Jesus. When He seems distant, seek Him faithfully in Scripture, prayer, and Eucharist.', 'With Mary, remain close to Jesus in His anguish. Surrender fear and repeat His prayer of trust.', 'Mary stood beneath the Cross. Ask for faithful love that remains present when suffering cannot be fixed.', 'The risen Christ turns mourning into hope. Ask Mary to help you live as a joyful witness of resurrection.', 'Mary’s glory shows the destiny God desires for His children. Persevere with your eyes fixed on heaven.']
        },
        'st-joseph': {
            title: 'St. Joseph Novena', image: '../../images/st-josephnovena.png', description: 'Seek the help of the faithful guardian of Jesus, Mary, families, and the Church.', invocation: 'St. Joseph, guardian of the Redeemer, pray for us.',
            themes: ['Faithful Guardian', 'Model of Silence', 'Just and Righteous', 'Patron of Workers', 'Protector of the Church', 'Comfort of the Afflicted', 'Model of Fatherhood', 'Hope of the Sick', 'Patron of a Happy Death'],
            verses: ['Matthew 1:24 — “Joseph did as the angel of the Lord had commanded him.”', 'Psalm 46:11 — “Be still and know that I am God.”', 'Matthew 1:19 — “Joseph her husband, since he was a righteous man…”', 'Colossians 3:23 — “Whatever you do, do from the heart, as for the Lord.”', 'Matthew 2:13 — “Rise, take the child and his mother, flee to Egypt.”', 'Psalm 34:19 — “The Lord is close to the brokenhearted.”', 'Luke 2:51 — “He went down with them and was obedient to them.”', 'James 5:15 — “The prayer of faith will save the sick person.”', 'Luke 2:29 — “Now, Master, you may let your servant go in peace.”'],
            reflections: ['Joseph protected those entrusted to him. Pray for grace to fulfill your responsibilities faithfully.', 'Joseph listened before acting. Make room for silence so God’s gentle direction can be heard.', 'Joseph joined justice to compassion. Ask for integrity that never forgets mercy.', 'Joseph sanctified ordinary labor. Offer today’s work to God and do it with care.', 'Joseph guarded Christ’s body; now he guards the Church. Pray for her pastors, unity, and holiness.', 'Joseph knew uncertainty and exile yet trusted Providence. Place financial, family, and personal worries in God’s care.', 'Joseph’s authority was expressed through sacrifice and presence. Pray for fathers and all who care for the young.', 'Ask Joseph to remain near the sick, caregivers, and everyone waiting for healing.', 'Tradition pictures Joseph dying with Jesus and Mary near. Ask for perseverance and a peaceful return to the Father.']
        },
        'divine-mercy': {
            title: 'Divine Mercy Novena', image: '../../images/divinemercy-novena.png', description: 'Bring every soul to the ocean of Christ’s mercy, following the intentions given to St. Faustina.', invocation: 'Jesus, I trust in You. Have mercy on us and on the whole world.',
            themes: ['All Humanity, Especially Sinners', 'Priests and Religious', 'Devout and Faithful Souls', 'Those Who Do Not Know God', 'Christians Separated from the Church', 'The Meek and Humble', 'Those Who Venerate Divine Mercy', 'The Souls in Purgatory', 'Those Who Have Become Lukewarm'],
            verses: ['Luke 15:7 — “There will be more joy in heaven over one sinner who repents.”', 'John 17:17 — “Consecrate them in the truth.”', 'Matthew 24:13 — “The one who perseveres to the end will be saved.”', 'John 8:12 — “I am the light of the world.”', 'John 17:21 — “That they may all be one.”', 'Matthew 11:29 — “I am meek and humble of heart.”', 'Matthew 5:7 — “Blessed are the merciful, for they will be shown mercy.”', '2 Maccabees 12:46 — “It is holy and pious to pray for the dead.”', 'Revelation 3:19 — “Be earnest, therefore, and repent.”'],
            reflections: ['No sinner is beyond Christ’s mercy. Pray for conversion, including your own continuing conversion.', 'Those consecrated to God need prayer. Ask that their lives transparently reveal Christ the Good Shepherd.', 'Thank God for faithful disciples and ask that they persevere without pride or discouragement.', 'Christ seeks every person. Pray that those who do not know Him encounter truth through loving witnesses.', 'Division wounds Christ’s Body. Pray for healing, shared truth, repentance, and visible Christian unity.', 'Jesus delights in humility and childlike trust. Entrust to Him children and all who serve without recognition.', 'Those who proclaim mercy must practice it. Ask for courage to forgive and perform works of mercy.', 'Remember the departed with hope. Offer this prayer for souls being purified for heaven.', 'Indifference can cool love. Ask the Spirit to rekindle desire for prayer, Eucharist, and generous service.']
        },
        'holy-spirit': {
            title: 'Holy Spirit Novena', image: '../../images/holyspirit-novena.png', description: 'Invoke the gifts, fruits, guidance, and renewing power of the Holy Spirit.', invocation: 'Come, Holy Spirit, fill the hearts of Your faithful and kindle in them the fire of Your love.',
            themes: ['The Gift of Wisdom', 'Understanding', 'Counsel', 'Fortitude', 'Knowledge', 'Piety', 'Fear of the Lord', 'The Fruits of the Spirit', 'A New Pentecost'],
            verses: ['James 1:5 — “If any of you lacks wisdom, he should ask God.”', 'Luke 24:45 — “Then he opened their minds to understand the scriptures.”', 'Psalm 32:8 — “I will instruct you and show you the way you should walk.”', 'Acts 1:8 — “You will receive power when the holy Spirit comes upon you.”', 'John 16:13 — “The Spirit of truth will guide you to all truth.”', 'Romans 8:15 — “You received a spirit of adoption.”', 'Proverbs 9:10 — “The beginning of wisdom is fear of the Lord.”', 'Galatians 5:22 — “The fruit of the Spirit is love, joy, peace…”', 'Acts 2:4 — “They were all filled with the holy Spirit.”'],
            reflections: ['Wisdom sees everything in the light of eternity. Ask to desire what leads to God.', 'Understanding opens the heart to revealed truth. Read slowly and let the Spirit deepen your faith.', 'Counsel guides practical choices. Place a decision before God and become willing to obey.', 'Fortitude sustains discipleship under pressure. Ask for courage to witness and persevere.', 'Knowledge recognizes creation as God’s gift. Ask to use people and things according to His loving purpose.', 'Piety delights in God as Father. Approach Him today with the confidence of a beloved child.', 'Holy fear is reverent wonder, not terror. Ask to hate sin because you love God.', 'The Spirit’s fruits mature in daily choices. Notice which fruit most needs cultivation in you.', 'The Spirit sent the apostles outward. Offer your gifts for the Church’s mission and the renewal of the world.']
        },
        immaculate: {
            title: 'Immaculate Conception Novena', image: '../../images/immaculate-novena.png', description: 'Honor Mary, full of grace, and ask her help in following Christ with an undivided heart.', invocation: 'O Mary, conceived without sin, pray for us who have recourse to you.',
            themes: ['Conceived Without Sin', 'Full of Grace', 'Blessed Among Women', 'Mother of God', 'Handmaid of the Lord', 'Seat of Wisdom', 'Queen of Angels', 'Refuge of Sinners', 'Queen of Heaven'],
            verses: ['Genesis 3:15 — “I will put enmity between you and the woman.”', 'Luke 1:28 — “Hail, favored one! The Lord is with you.”', 'Luke 1:42 — “Blessed are you among women.”', 'Luke 1:43 — “How does this happen to me, that the mother of my Lord should come to me?”', 'Luke 1:38 — “Behold, I am the handmaid of the Lord.”', 'Luke 2:19 — “Mary kept all these things, reflecting on them in her heart.”', 'Psalm 91:11 — “He commands his angels with regard to you.”', 'Luke 1:50 — “His mercy is from age to age.”', 'Revelation 12:1 — “On her head a crown of twelve stars.”'],
            reflections: ['Mary was prepared entirely by grace for her vocation. Thank God for Baptism and ask for a clean heart.', 'Grace is God’s free gift. Like Mary, receive it humbly and cooperate with it generously.', 'Mary is blessed because she believed. Ask for faith that trusts God’s promises.', 'Mary is Mother of the eternal Son and our mother in grace. Bring your needs to her maternal care.', 'Mary’s freedom flowered in surrender. Repeat her yes in the duties God places before you.', 'Mary pondered before speaking. Ask for a contemplative heart shaped by Scripture.', 'Mary and the angels point entirely to God. Ask for protection and prompt obedience to His will.', 'Mary leads sinners not away from judgment but toward her merciful Son. Seek honest repentance.', 'Mary’s heavenly glory is a sign of hope. Finish this novena resolved to seek holiness and eternal life.']
        }
    };

    const prayerFor = (n, day) => `O God, ${n.reflections[day].charAt(0).toLowerCase() + n.reflections[day].slice(1)} Through the intercession invoked in this novena, grant the grace I seek, if it is for Your glory and my salvation. Form my heart after the Heart of Christ; help me accept Your will, serve my neighbor, and persevere in faith. ${n.invocation} Amen.`;
    const litanyFor = n => `Leader: Lord, have mercy. Response: Lord, have mercy.<br>Leader: Christ, have mercy. Response: Christ, have mercy.<br>Leader: Holy Trinity, one God. Response: Have mercy on us.<br>Leader: For deeper faith, steadfast hope, and generous charity. Response: Hear our prayer.<br>Leader: For the Church, our families, the suffering, and all who asked for our prayers. Response: Hear our prayer.<br>Leader: ${n.invocation} Response: Pray for us.`;

    const experience = document.getElementById('novena-experience');
    if (!experience) return;
    const listing = document.querySelector('.page-content');
    const overview = document.getElementById('novena-overview');
    const page = document.getElementById('novena-prayer-page');
    const back = document.getElementById('novena-back');
    let activeKey = null;
    const storageKey = 'yccci-novena-progress-v1';
    const readProgress = () => { try { return JSON.parse(localStorage.getItem(storageKey)) || {}; } catch (_) { return {}; } };
    const writeProgress = value => { try { localStorage.setItem(storageKey, JSON.stringify(value)); } catch (_) { /* private mode */ } };
    const scrollTop = () => experience.scrollIntoView({ behavior: 'smooth', block: 'start' });

    function getCompleted(key) { return readProgress()[key] || []; }
    function showOverview(key, updateHash = true) {
        const n = data[key]; if (!n) return;
        activeKey = key; listing.hidden = true; experience.hidden = false; page.hidden = true; overview.hidden = false;
        const completed = getCompleted(key);
        const resume = Math.min(9, completed.length ? Math.max(...completed) + 1 : 1);
        const pct = Math.round(completed.length / 9 * 100);
        overview.innerHTML = `<div class="novena-progress-card">
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
                <p>Select today's novena prayer below.</p>
            </div>
            <div class="novena-day-grid">${n.themes.map((theme, i) => {
                const dayNum = i + 1;
                const isCompleted = completed.includes(dayNum);
                const isActive = dayNum === resume;
                return `<div class="novena-day-card ${isCompleted ? 'completed' : ''} ${isActive && !isCompleted ? 'active' : ''}" data-day="${dayNum}">
                    <div class="novena-day-card-number">Day ${dayNum}</div>
                    <div class="novena-day-card-title">${theme}</div>
                    <div class="novena-day-card-subtitle">${n.verses[i].substring(0, 50)}...</div>
                    <span class="novena-day-card-status ${isCompleted ? 'completed-status' : isActive ? 'active-status' : 'pending'}">
                        ${isCompleted ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Completed' : isActive ? '▶ Current' : 'Pending'}
                    </span>
                </div>`;
            }).join('')}</div>
            <div class="novena-day-cta">
                <button class="novena-day-cta-btn" type="button" data-day="${resume}">
                    ${completed.length === 9 ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg><span>Pray Again</span>' : completed.length ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg><span>Resume Day ${resume}</span>` : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg><span>Begin Day 1</span>`}
                </button>
                ${completed.length > 0 ? '<button class="btn btn-outline-dark restart-novena" type="button" style="margin-top:var(--space-md);">Restart novena</button>' : ''}
            </div>
        </div>`;
        overview.querySelectorAll('[data-day]').forEach(el => el.addEventListener('click', () => showDay(Number(el.dataset.day))));
        overview.querySelector('.restart-novena')?.addEventListener('click', restart);
        if (updateHash) history.pushState({ novena: key }, '', `#${key}`);
        scrollTop();
    }

    function showDay(day) {
        const n = data[activeKey]; if (!n || day < 1 || day > 9) return;
        const complete = getCompleted(activeKey).includes(day);
        overview.hidden = true; page.hidden = false;
        page.innerHTML = `<header class="prayer-header"><span class="section-tag">${n.title}</span><p class="day-count">Day ${day} of 9</p><h1>${n.themes[day - 1]}</h1><div class="mini-progress" aria-label="Novena day ${day} of 9">${n.themes.map((_, i) => `<span class="${i < day ? 'active' : ''}"></span>`).join('')}</div></header><div class="prayer-body"><section><h2>Opening Prayer</h2><p>${OPENING}</p></section><section><h2>Meditation / Reflection</h2><p>${n.reflections[day - 1]}</p></section><section class="scripture"><h2>Scripture Reading</h2><p>${n.verses[day - 1]}</p></section><section><h2>Main Novena Prayer</h2><p>${prayerFor(n, day - 1)}</p></section><section><h2>Litany</h2><p>${litanyFor(n)}</p></section><section><h2>Closing Prayer</h2><p>${CLOSING}</p><p class="amen">Amen.</p></section></div><footer class="day-actions"><button class="btn btn-outline-dark previous" type="button" ${day === 1 ? 'disabled' : ''}>← Previous Day</button><button class="btn btn-secondary complete" type="button">${complete ? '✓ Day Completed' : 'Mark Day as Completed'}</button><button class="btn btn-primary next" type="button" ${day === 9 ? 'disabled' : ''}>Next Day →</button></footer><div class="completion-message" hidden><h2>Congratulations!</h2><p>You have completed this novena.</p><button class="btn btn-secondary restart-novena" type="button">Restart the novena</button></div>`;
        page.querySelector('.previous').addEventListener('click', () => showDay(day - 1));
        page.querySelector('.next').addEventListener('click', () => showDay(day + 1));
        page.querySelector('.complete').addEventListener('click', () => completeDay(day));
        page.querySelector('.restart-novena').addEventListener('click', restart);
        history.pushState({ novena: activeKey, day }, '', `#${activeKey}/day-${day}`); scrollTop();
    }

    function completeDay(day) {
        const progress = readProgress(); const days = progress[activeKey] || [];
        if (!days.includes(day)) days.push(day);
        progress[activeKey] = days.sort((a, b) => a - b); writeProgress(progress);
        const button = page.querySelector('.complete'); button.textContent = '✓ Day Completed'; button.classList.add('is-complete');
        if (day === 9) { page.querySelector('.completion-message').hidden = false; page.querySelector('.completion-message').scrollIntoView({ behavior: 'smooth' }); }
    }
    function restart() { const progress = readProgress(); delete progress[activeKey]; writeProgress(progress); showOverview(activeKey, false); }
    function closeExperience() { activeKey = null; experience.hidden = true; listing.hidden = false; history.pushState({}, '', location.pathname); listing.scrollIntoView({ behavior: 'smooth' }); }
    back.addEventListener('click', () => page.hidden ? closeExperience() : showOverview(activeKey));
    document.querySelectorAll('.novena-start').forEach(link => link.addEventListener('click', e => { e.preventDefault(); showOverview(link.dataset.novena); }));
    document.querySelectorAll('.novena-card').forEach(card => { const progress = getCompleted(card.dataset.novena); const link = card.querySelector('.novena-start'); if (progress.length && link) link.childNodes[0].textContent = progress.length === 9 ? 'Pray Again ' : `Resume (${progress.length}/9) `; });
    function route() { const match = location.hash.match(/^#([^/]+)(?:\/day-(\d))?$/); if (match && data[match[1]]) { showOverview(match[1], false); if (match[2]) showDay(Number(match[2])); } }
    window.addEventListener('popstate', route); route();
})();