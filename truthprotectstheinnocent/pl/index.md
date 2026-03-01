---
layout: default
title: Catherine Birmingham i Nathan Trevallion | Dzieci zabrane we Włoszech
description: "Troje dzieci oddzielonych od Catherine Birmingham i Nathana Trevalliona we Włoszech. Trzy oficjalne powody - wszystkie obalone. Pomóż zjednoczyć Utopię, Galoriana i Blue Bell. #TruthProtectsTheInnocent #LaFamigliaNelBosco"
lang: pl
image: /assets/images/og-image.jpg
---

<!-- Hero Section: 60 Minutes Australia Feature -->
<section class="hero hero-60mins">
    <div class="hero-video-bg">
        <video autoplay muted loop playsinline>
            <source src="/assets/videos/60-minutes-trailer.mp4" type="video/mp4">
        </video>
    </div>
    <div class="hero-overlay hero-overlay-60mins"></div>
    <div class="hero-content">
        <div class="sixty-mins-badge-wrap">
            <span class="sixty-mins-badge" id="sixtyMinsBadge">
                📺 DZIŚ WIECZOREM W 60 MINUTES AUSTRALIA — 20:45 AEST
            </span>
        </div>

        <h1 class="sixty-mins-headline">Świat Patrzy</h1>
        <p class="lead">Najchętniej oglądany program informacyjny Australii opowiada historię trojga dzieci odebranych rodzicom — i trzech oficjalnych powodów, które <strong>wszystkie okazały się fałszywe</strong>.</p>

        <div class="sixty-mins-countdown" id="sixtyMinsCountdown">
            <div class="countdown-item">
                <span class="countdown-number" id="countHours">--</span>
                <span class="countdown-label">GODZINY</span>
            </div>
            <div class="countdown-separator">:</div>
            <div class="countdown-item">
                <span class="countdown-number" id="countMinutes">--</span>
                <span class="countdown-label">MINUTY</span>
            </div>
            <div class="countdown-separator">:</div>
            <div class="countdown-item">
                <span class="countdown-number" id="countSeconds">--</span>
                <span class="countdown-label">SEKUNDY</span>
            </div>
        </div>

        <div class="sixty-mins-trailer">
            <div class="trailer-container" id="trailerContainer">
                <video id="trailerVideo" playsinline preload="metadata" poster="">
                    <source src="/assets/videos/60-minutes-trailer.mp4" type="video/mp4">
                </video>
                <button class="trailer-play-btn" id="trailerPlayBtn" aria-label="Odtwórz zwiastun">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="30" fill="rgba(255,255,255,0.2)"/><circle cx="30" cy="30" r="28" stroke="white" stroke-width="2" fill="none"/><polygon points="24,18 24,42 44,30" fill="white"/></svg>
                </button>
                <span class="trailer-label">▶ Obejrzyj zapowiedź</span>
            </div>
        </div>

        <div class="hero-stats sixty-mins-stats">
            <div class="hero-stat">
                <span class="hero-stat-number">🇦🇺</span>
                <span class="hero-stat-label">60 Minutes<br>Australia</span>
            </div>
            <div class="hero-stat">
                <span class="hero-stat-number">🇮🇹</span>
                <span class="hero-stat-label">Prasa<br>Włoska</span>
            </div>
            <div class="hero-stat">
                <span class="hero-stat-number">🌍</span>
                <span class="hero-stat-label">Uwaga<br>Światowa</span>
            </div>
        </div>

        <div class="hero-cta">
            <a href="https://www.youtube.com/watch?v=FZPMGep5CKU" target="_blank" rel="noopener" class="btn btn-primary btn-lg btn-glow">▶ Oglądaj na YouTube</a>
            <a href="https://www.facebook.com/share/1C7HNu7Knu/?mibextid=wwXIfr" target="_blank" rel="noopener" class="btn btn-secondary btn-lg">📘 Udostępnij na Facebooku</a>
            <a href="/evidence/" class="btn btn-secondary btn-lg">Zobacz dowody</a>
        </div>

        <p class="sixty-mins-subtext">Troje dzieci. Trzy fałszywe zarzuty. Zero uzasadnionych powodów.<br>Dziś wieczorem miliony poznają prawdę.</p>
    </div>
</section>

<script>
(function() {
    const airTimeUTC = new Date(Date.UTC(2026, 2, 1, 9, 45, 0));
    const showDurationMs = 90 * 60 * 1000;
    const countdownEl = document.getElementById('sixtyMinsCountdown');
    const badgeEl = document.getElementById('sixtyMinsBadge');
    const hoursEl = document.getElementById('countHours');
    const minutesEl = document.getElementById('countMinutes');
    const secondsEl = document.getElementById('countSeconds');

    function updateCountdown() {
        const now = new Date();
        const diff = airTimeUTC - now;
        const afterShow = now - (airTimeUTC.getTime() + showDurationMs);

        if (diff > 0) {
            const h = Math.floor(diff / 3600000);
            const m = Math.floor((diff % 3600000) / 60000);
            const s = Math.floor((diff % 60000) / 1000);
            hoursEl.textContent = String(h).padStart(2, '0');
            minutesEl.textContent = String(m).padStart(2, '0');
            secondsEl.textContent = String(s).padStart(2, '0');
        } else if (afterShow < 0) {
            countdownEl.innerHTML = '<div class="now-airing"><span class="now-airing-dot"></span> NA ŻYWO W 60 MINUTES</div>';
            badgeEl.textContent = '🔴 NA ŻYWO — 60 Minutes Australia';
            badgeEl.classList.add('sixty-mins-badge-live');
        } else {
            countdownEl.innerHTML = '<a href="https://www.9now.com.au/60-minutes" target="_blank" rel="noopener" class="btn btn-primary btn-lg btn-glow">Oglądaj na 9Now →</a>';
            badgeEl.textContent = '📺 WIDZIANE W 60 MINUTES AUSTRALIA';
            badgeEl.classList.remove('sixty-mins-badge-live');
            badgeEl.classList.add('sixty-mins-badge-aired');
            clearInterval(timer);
        }
    }

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    const trailerVideo = document.getElementById('trailerVideo');
    const playBtn = document.getElementById('trailerPlayBtn');
    const trailerContainer = document.getElementById('trailerContainer');

    if (playBtn && trailerVideo) {
        playBtn.addEventListener('click', function() {
            trailerVideo.controls = true;
            trailerVideo.play();
            playBtn.style.display = 'none';
            trailerContainer.querySelector('.trailer-label').style.display = 'none';
            trailerContainer.classList.add('trailer-playing');
        });
        trailerVideo.addEventListener('ended', function() {
            playBtn.style.display = '';
            trailerContainer.querySelector('.trailer-label').style.display = '';
            trailerContainer.classList.remove('trailer-playing');
            trailerVideo.controls = false;
        });
    }
})();
</script>

<!-- WYCIEK INFORMACJI - PILNE -->
<section style="background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); padding: 2rem 0; position: relative; overflow: hidden;">
    <div class="container" style="position: relative; z-index: 1;">
        <div style="max-width: 900px; margin: 0 auto; text-align: center;">
            <div style="display: inline-block; background: rgba(255,255,255,0.2); padding: 0.5rem 1.5rem; border-radius: 2rem; margin-bottom: 1rem;">
                <span style="color: white; font-weight: 600; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em;">⚠️ Pilne: Wyciek informacji — Luty 2026</span>
            </div>
            <h2 style="color: white; font-size: 2rem; margin-bottom: 1rem; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">Dzieci Mają Być Przetrzymywane Do Czerwca 2026</h2>
            <p style="color: rgba(255,255,255,0.95); font-size: 1.2rem; line-height: 1.6; margin-bottom: 1.5rem;">
                Sąd planuje przetrzymywać te dzieci w instytucji <strong style="color: #fef08a;">do czerwca 2026</strong> — <strong style="color: #fef08a;">7 miesięcy ciągłej traumy</strong>. Bliźniaczki skończą 7 lat w marcu — wciąż oddzielone od rodziców. Każdy dzień w instytucji powoduje udokumentowane, nieodwracalne szkody psychologiczne. <strong style="color: #fef08a;">Maksymalna presja międzynarodowa potrzebna TERAZ.</strong>
            </p>
            
            <!-- Ostrzeżenie o traumie psychologicznej -->
            <div style="background: rgba(0,0,0,0.3); border: 2px solid rgba(254,240,138,0.5); border-radius: 1rem; padding: 1.5rem; margin-bottom: 1.5rem;">
                <p style="color: #fef08a; font-weight: 700; font-size: 1.1rem; margin-bottom: 0.75rem;">⚠️ PSYCHOLOGOWIE POTWIERDZAJĄ: Dzieci doznają codziennej traumy</p>
                <p style="color: rgba(255,255,255,0.95); font-size: 1.05rem; line-height: 1.7; margin: 0;">
                    Psychologowie <strong style="color: white;">publicznie ujawnili</strong> ustalenia stwierdzające, że dzieci <strong style="color: white;">codziennie doznają traumy</strong> przebywając w instytucji. Cierpią z powodu <strong style="color: white;">izolacji i separacji</strong> od rodziców — co <strong style="color: white;">codziennie wyrządza im nieodwracalne szkody</strong>. Jest to teraz powszechnie znane.
                </p>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1.5rem; text-align: left;">
                <div style="background: rgba(0,0,0,0.2); border-radius: 0.75rem; padding: 1rem;">
                    <p style="color: #fef08a; font-weight: 600; margin-bottom: 0.25rem;">Ponad 1 rok ataków</p>
                    <p style="color: rgba(255,255,255,0.85); font-size: 0.95rem; margin: 0;">Rodzina była systematycznie prześladowana, co udokumentował Krajowy Garant</p>
                </div>
                <div style="background: rgba(0,0,0,0.2); border-radius: 0.75rem; padding: 1rem;">
                    <p style="color: #fef08a; font-weight: 600; margin-bottom: 0.25rem;">Zgłoszone do Sądu Najwyższego</p>
                    <p style="color: rgba(255,255,255,0.85); font-size: 0.95rem; margin: 0;">Prawnicy złożyli do Sądu Kasacyjnego — brak działań</p>
                </div>
                <div style="background: rgba(0,0,0,0.2); border-radius: 0.75rem; padding: 1rem;">
                    <p style="color: #fef08a; font-weight: 600; margin-bottom: 0.25rem;">Urodziny w separacji</p>
                    <p style="color: rgba(255,255,255,0.85); font-size: 0.95rem; margin: 0;">Urodziny Nathana 24 lut, bliźniacze 4 mar — czy będą w domu?</p>
                </div>
            </div>
            <div style="background: rgba(0,0,0,0.25); border-radius: 1rem; padding: 1.5rem; margin-bottom: 1.5rem;">
                <p style="color: rgba(255,255,255,0.9); font-size: 1.1rem; margin: 0;">
                    <strong style="color: white;">Pytanie, które każdy powinien zadać:</strong><br>
                    Jeśli wszystkie trzy oficjalne uzasadnienia zostały udowodnione jako fałszywe, a sprawa została zgłoszona do Sądu Kasacyjnego, dlaczego te dzieci są nadal przetrzymywane?
                </p>
            </div>
            <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem;">
                <a href="/evidence/" class="btn" style="background: white; color: #dc2626; font-weight: 600; padding: 0.875rem 2rem;">Zobacz dowody</a>
                <a href="/pl/petition/" class="btn" style="background: #fef08a; color: #991b1b; font-weight: 700; padding: 0.875rem 2rem; animation: pulse 2s infinite;">🇺🇳 Petycja ONZ</a>
                <a href="/action/" class="btn" style="background: rgba(255,255,255,0.15); color: white; border: 2px solid rgba(255,255,255,0.5); padding: 0.875rem 2rem;">Działaj teraz</a>
            </div>
        </div>
    </div>
</section>

<!-- Meet The Family - Video Section -->
<section class="section">
    <div class="container">
        <div class="section-header">
            <h2>Poznaj rodzinę</h2>
            <p>To dzieci w centrum tej sprawy — zdrowe, szczęśliwe i dobrze rozwijające się przed odebraniem</p>
        </div>
        
        <div class="video-gallery">
            <div class="video-card">
                <video controls playsinline preload="metadata">
                    <source src="/assets/videos/family1.MP4" type="video/mp4">
                    Twoja przeglądarka nie obsługuje wideo.
                </video>
                <div class="video-card-overlay">
                    <div class="video-card-title">Życie przed rozdzieleniem</div>
                    <p class="video-card-desc">Szczęśliwe dzieci żyjące blisko natury</p>
                </div>
            </div>
            
            <div class="video-card">
                <video controls playsinline preload="metadata">
                    <source src="/assets/videos/family2.MOV" type="video/mp4">
                    Twoja przeglądarka nie obsługuje wideo.
                </video>
                <div class="video-card-overlay">
                    <div class="video-card-title">Kochająca rodzina</div>
                    <p class="video-card-desc">Więź, którą władze rozrywają</p>
                </div>
            </div>
            
            <div class="video-card">
                <video controls playsinline preload="metadata">
                    <source src="/assets/videos/family3.MP4" type="video/mp4">
                    Twoja przeglądarka nie obsługuje wideo.
                </video>
                <div class="video-card-overlay">
                    <div class="video-card-title">Radość dzieciństwa</div>
                    <p class="video-card-desc">To, co dzieci utraciły</p>
                </div>
            </div>
        </div>
        
        <div class="quote-block" style="margin-top: 3rem;">
            "Te dzieci były zdrowe, szczęśliwe i dobrze się rozwijały. Teraz wykazują oznaki traumy spowodowanej samą interwencją, która miała je "chronić"."
            <cite>— Z wniosków oceny psychologicznej</cite>
        </div>
    </div>
</section>

<!-- What People Say About This Family -->
<section class="section" style="background: var(--color-gray-50);">
    <div class="container">
        <div class="section-header">
            <h2>Co ludzie mówią o tej rodzinie</h2>
            <p>Świadectwa osób znających rodzinę Birmingham‑Trevallion</p>
        </div>
        
        <div class="testimonial-gallery" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
            <div class="testimonial-card" style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow-md);">
                <img src="/assets/images/testimonials/photo_2026-01-11_21-41-12.jpg" alt="Świadectwo" style="width: 100%; height: auto;">
            </div>
            <div class="testimonial-card" style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow-md);">
                <img src="/assets/images/testimonials/photo_2026-01-11_21-41-16.jpg" alt="Świadectwo" style="width: 100%; height: auto;">
            </div>
            <div class="testimonial-card" style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow-md);">
                <img src="/assets/images/testimonials/photo_2026-01-11_21-41-19.jpg" alt="Świadectwo" style="width: 100%; height: auto;">
            </div>
            <div class="testimonial-card" style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow-md);">
                <img src="/assets/images/testimonials/photo_2026-01-11_21-41-21.jpg" alt="Świadectwo" style="width: 100%; height: auto;">
            </div>
            <div class="testimonial-card" style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow-md);">
                <img src="/assets/images/testimonials/photo_2026-01-11_21-41-26.jpg" alt="Świadectwo" style="width: 100%; height: auto;">
            </div>
            <div class="testimonial-card" style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow-md);">
                <img src="/assets/images/testimonials/photo_2026-01-11_21-41-28.jpg" alt="Świadectwo" style="width: 100%; height: auto;">
            </div>
        </div>
        
        <div class="text-center mt-2">
            <p style="color: var(--color-gray-600); font-style: italic;">To prawdziwe wiadomości od osób, które znają rodzinę osobiście.</p>
        </div>
    </div>
</section>

<!-- The Three False Claims -->
<section class="section section-dark">
    <div class="container">
        <div class="section-header">
            <h2>Trzy fałszywe zarzuty</h2>
            <p style="color: var(--color-gray-400);">Każde oficjalne uzasadnienie zostało obalone przez włoskie władze</p>
        </div>
        
        <div class="container-narrow">
            <div class="evidence-grid">
                <div class="evidence-card verified" style="background: rgba(255,255,255,0.05); border-left-color: #ef4444;">
                    <div class="evidence-header">
                        <h4 style="color: white;">❌ Zarzut #1: „Dzieci niezaszczepione”</h4>
                        <span class="evidence-badge badge-disputed">OBALONE</span>
                    </div>
                    <p style="color: var(--color-gray-300);"><strong style="color: white;">Zgromadzenie Chieti i Teramo potwierdziło, że dzieci były zaszczepione.</strong></p>
                    <p class="evidence-source" style="color: var(--color-gray-500);">Źródło: oficjalne dokumenty regionalnego organu zdrowia</p>
                </div>
                
                <div class="evidence-card verified" style="background: rgba(255,255,255,0.05); border-left-color: #ef4444;">
                    <div class="evidence-header">
                        <h4 style="color: white;">❌ Zarzut #2: „Dzieci nieuczone”</h4>
                        <span class="evidence-badge badge-disputed">OBALONE</span>
                    </div>
                    <p style="color: var(--color-gray-300);"><strong style="color: white;">Ministerstwo Edukacji potwierdziło legalną edukację rodzicielską.</strong></p>
                    <p class="evidence-source" style="color: var(--color-gray-500);">Ponad 15 000 dzieci we Włoszech uczy się w tym samym legalnym systemie.</p>
                </div>
                
                <div class="evidence-card verified" style="background: rgba(255,255,255,0.05); border-left-color: #ef4444;">
                    <div class="evidence-header">
                        <h4 style="color: white;">❌ Zarzut #3: „Dom niebezpieczny”</h4>
                        <span class="evidence-badge badge-disputed">OBALONE</span>
                    </div>
                    <p style="color: var(--color-gray-300);"><strong style="color: white;">Certyfikowany geometra potwierdził, że konstrukcja nie jest zagrożona.</strong></p>
                    <p class="evidence-source" style="color: var(--color-gray-500);">Źródło: profesjonalna ocena konstrukcji</p>
                </div>
            </div>
            
            <div class="alert alert-warning" style="margin-top: 2rem; background: rgba(245, 158, 11, 0.1); border-color: rgba(245, 158, 11, 0.3);">
                <strong style="color: #fbbf24;">Pytanie bez odpowiedzi:</strong> 
                <span style="color: var(--color-gray-300);">Skoro wszystkie trzy oficjalne uzasadnienia zostały obalone, na jakiej podstawie prawnej dzieci pozostają rozdzielone z rodzicami?</span>
            </div>
            
            <div class="text-center mt-2">
                <a href="/evidence/" class="btn btn-primary">Zobacz wszystkie dowody →</a>
            </div>
        </div>
    </div>
</section>

<!-- The Documented Harm -->
<section class="section impact-section">
    <div class="container">
        <div class="impact-content">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;">
                <div>
                    <h2 style="color: white;">Udokumentowana szkoda</h2>
                    <p style="color: var(--color-gray-300); font-size: 1.1rem;">Wykwalifikowany psycholog przeprowadził ocenę dzieci po odebraniu. Wnioski były na tyle istotne, że psycholog zwołał formalną konferencję prasową.</p>
                    
                    <div style="background: rgba(220, 38, 38, 0.2); border-left: 4px solid #dc2626; padding: 1.5rem; border-radius: 0.5rem; margin: 1.5rem 0;">
                        <h4 style="color: #fca5a5; margin-bottom: 0.5rem;">Kluczowy wniosek:</h4>
                        <p style="color: white; font-size: 1.1rem; margin: 0;">Dzieci wykazują teraz <strong>zachowania autouszkadzające</strong>, których <strong>nie było przed rozdzieleniem</strong>.</p>
                    </div>
                    
                    <p style="color: var(--color-gray-300);">Przed odebraniem dzieci opisywano jako zdrowe, szczęśliwe i dobrze rozwijające się. Żyły na zewnątrz, uczyły się z natury i miały ograniczony czas przed ekranem.</p>
                    
                    <p style="color: var(--color-gray-300);"><strong style="color: white;">„Ochrona” powoduje szkodę.</strong></p>
                </div>
                <div class="impact-video">
                    <video controls style="border-radius: 1rem;">
                        <source src="/assets/videos/family2.MOV" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- What You Can Do -->
<section class="section" id="share-now">
    <div class="container">
        <div class="section-header">
            <h2>Chcesz zrobić coś teraz?</h2>
            <p>Nie musisz wpłacać pieniędzy. Nie musisz się nigdzie zapisywać.</p>
        </div>
        
        <!-- The One Thing CTA -->
        <div style="background: linear-gradient(135deg, #1e3a5f, #2d5a8a); border-radius: 1.5rem; padding: 3rem; text-align: center; max-width: 800px; margin: 0 auto;">
            <h3 style="color: #f59e0b; font-size: 1.5rem; margin-bottom: 1rem;">Nie potrzebujemy twoich pieniędzy. Nie potrzebujemy twoich danych.</h3>
            <h2 style="color: white; font-size: 2rem; margin-bottom: 1.5rem;">Potrzebujemy tylko, żebyś udostępnił ten link.</h2>
            
            <p style="color: var(--color-gray-300); font-size: 1.2rem; margin-bottom: 1.5rem;">Jedno udostępnienie właściwej osobie może zmienić wszystko. Dziennikarzowi. Urzędnikowi. Komuś, kto zna kogoś.</p>
            
            <p style="color: white; font-size: 1.1rem; margin-bottom: 2rem;"><strong>Udostępnienie tego pięciu osobom, którym ufasz, jest warte więcej niż jakakolwiek darowizna.</strong></p>
            
            <div style="background: rgba(255,255,255,0.1); border-radius: 0.5rem; padding: 1rem; margin-bottom: 1.5rem;">
                <code style="color: #f59e0b; font-size: 1.1rem; word-break: break-all;">truthprotectstheinnocent.quantummerlin.com</code>
            </div>
            
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <button onclick="navigator.clipboard.writeText('truthprotectstheinnocent.quantummerlin.com').then(()=>this.textContent='✓ Skopiowano!')" class="btn btn-primary btn-lg" style="background: white; color: var(--color-primary); min-width: 200px;">📋 Skopiuj link</button>
                <a href="https://wa.me/?text=Three%20children%20separated%20from%20loving%20parents.%20Three%20official%20reasons.%20All%20three%20proven%20false.%20truthprotectstheinnocent.quantummerlin.com" class="btn btn-lg" style="background: #25D366; color: white;">💬 WhatsApp</a>
            </div>
            
            <p style="color: var(--color-gray-400); font-size: 0.9rem; margin-top: 2rem; margin-bottom: 0;">Pomyśl o 5 osobach, którym to nie jest obojętne. Wyślij teraz, zanim zapomnisz.</p>
        </div>
        
        <!-- Secondary Actions -->
        <div class="action-grid" style="margin-top: 3rem;">
            <div class="action-card">
                <div class="action-icon">📧</div>
                <h3>Wyślij e‑mail do urzędników</h3>
                <p>Chcesz zrobić więcej? Wyślij list bezpośrednio do włoskich parlamentarzystów.</p>
                <a href="/action/#email" class="btn btn-outline">Pobierz list</a>
            </div>
            
            <div class="action-card">
                <div class="action-icon">📢</div>
                <h3>Media społecznościowe</h3>
                <p>Udostępniaj na swoich platformach gotowe posty i #TruthProtectsTheInnocent</p>
                <a href="/action/#share" class="btn btn-outline">Szablony udostępniania</a>
            </div>
            
            <div class="action-card">
                <div class="action-icon">📰</div>
                <h3>Kontakt z mediami</h3>
                <p>Znasz dziennikarza? Ta historia zasługuje na nagłośnienie. Przekaż dalej.</p>
                <a href="/action/#media" class="btn btn-outline">Materiały dla mediów</a>
            </div>
            
            <div class="action-card">
                <div class="action-icon">🙏</div>
                <h3>Modlitwa i medytacja</h3>
                <p>Dołącz do tysięcy z intencją: <strong>dzieci w domu przed urodzinami Nathana (24 lut)</strong>. Wszystkie tradycje mile widziane.</p>
                <a href="https://worldwidemeditation.quantummerlin.com" target="_blank" class="btn btn-outline">Dołącz do medytacji</a>
            </div>
        </div>
    </div>
</section>

<!-- International Attention -->
<section class="section" style="background: var(--color-gray-50);">
    <div class="container">
        <div class="container-narrow">
            <div class="section-header">
                <h2>Międzynarodowa uwaga</h2>
                <p>Ta sprawa przyciągnęła uwagę na najwyższych szczeblach</p>
            </div>
            
            <div class="stats-grid" style="margin-bottom: 2rem;">
                <div class="stat-card" style="background: white; box-shadow: var(--shadow-md);">
                    <div class="stat-number" style="color: var(--color-primary);">🇦🇺</div>
                    <div class="stat-label" style="color: var(--color-gray-600);">Ambasada Australii poinformowana</div>
                </div>
                <div class="stat-card" style="background: white; box-shadow: var(--shadow-md);">
                    <div class="stat-number" style="color: var(--color-primary);">🇮🇹</div>
                    <div class="stat-label" style="color: var(--color-gray-600);">Włoscy urzędnicy powiadomieni</div>
                </div>
                <div class="stat-card" style="background: white; box-shadow: var(--shadow-md);">
                    <div class="stat-number" style="color: var(--color-primary);">🌍</div>
                    <div class="stat-label" style="color: var(--color-gray-600);">Wsparcie na świecie rośnie</div>
                </div>
            </div>
            
            <p class="text-center" style="font-size: 1.1rem;">Rodzina nie może publicznie zabierać głosu, gdy trwają postępowania prawne. <strong>Ale my możemy.</strong></p>
            <p class="text-center">Presja społeczna i uwaga międzynarodowa są kluczowe, aby zapewnić sprawiedliwe traktowanie tej sprawy.</p>
        </div>
    </div>
</section>

<!-- FAQ Teaser -->
<section class="section">
    <div class="container">
        <div class="container-narrow">
            <div class="section-header">
                <span class="hero-badge" style="background: rgba(245, 158, 11, 0.15); color: #f59e0b; margin-bottom: 1rem;">Pełny kontekst</span>
                <h2>Pytania o relacje mediów?</h2>
                <p>Niektóre relacje były niepełne lub wyrwane z kontekstu. Poznaj pełną historię.</p>
            </div>
            
            <div style="background: linear-gradient(135deg, #f8fafc, #f1f5f9); border-radius: 1.5rem; padding: 2.5rem; margin: 2rem 0; box-shadow: var(--shadow-lg);">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
                    <div style="display: flex; gap: 1rem; align-items: flex-start;">
                        <div style="background: rgba(239, 68, 68, 0.1); color: #dc2626; width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0;">X</div>
                        <div>
                            <strong style="color: var(--color-gray-700);">"Brak łazienki = zaniedbanie"</strong>
                            <p style="color: var(--color-gray-600); font-size: 0.9rem; margin: 0.25rem 0 0 0;">Rzeczywistość: Toalety kompostowe są legalne na całym świecie. Pełna łazienka już zainstalowana.</p>
                        </div>
                    </div>
                    <div style="display: flex; gap: 1rem; align-items: flex-start;">
                        <div style="background: rgba(239, 68, 68, 0.1); color: #dc2626; width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0;">X</div>
                        <div>
                            <strong style="color: var(--color-gray-700);">"Dzieci bez edukacji"</strong>
                            <p style="color: var(--color-gray-600); font-size: 0.9rem; margin: 0.25rem 0 0 0;">Rzeczywistość: Legalna edukacja Steiner, potwierdzona przez Ministerstwo Edukacji.</p>
                        </div>
                    </div>
                    <div style="display: flex; gap: 1rem; align-items: flex-start;">
                        <div style="background: rgba(239, 68, 68, 0.1); color: #dc2626; width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0;">X</div>
                        <div>
                            <strong style="color: var(--color-gray-700);">"Ekstremalny styl życia"</strong>
                            <p style="color: var(--color-gray-600); font-size: 0.9rem; margin: 0.25rem 0 0 0;">Rzeczywistość: Zrównoważone wybory oparte na wartościach, coraz powszechniejsze na świecie.</p>
                        </div>
                    </div>
                    <div style="display: flex; gap: 1rem; align-items: flex-start;">
                        <div style="background: rgba(239, 68, 68, 0.1); color: #dc2626; width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0;">X</div>
                        <div>
                            <strong style="color: var(--color-gray-700);">"Niekwalifikowani rodzice"</strong>
                            <p style="color: var(--color-gray-600); font-size: 0.9rem; margin: 0.25rem 0 0 0;">Rzeczywistość: Oboje profesjonalnie wykształceni. Oceny potwierdzają wysokie kompetencje.</p>
                        </div>
                    </div>
                </div>
                
                <div style="text-align: center; padding-top: 1rem; border-top: 1px solid rgba(0,0,0,0.1);">
                    <p style="color: var(--color-gray-600); margin-bottom: 1rem;">Relacje mediów są często niepełne. Uzyskaj pełne, rzetelne informacje.</p>
                    <a href="/faq/" class="btn btn-primary btn-lg">Przeczytaj pełne FAQ →</a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Final CTA -->
<section class="section section-dark" style="text-align: center;">
    <div class="container">
        <div class="container-narrow">
            <h2>Prawda musi zostać powiedziana</h2>
            <p style="font-size: 1.2rem; color: var(--color-gray-300); margin-bottom: 2rem;">Troje dzieci jest rozdzielonych z rodzicami na podstawie twierdzeń, które zostały obalone. Obecnie występują udokumentowane szkody psychologiczne. To nie jest ochrona dzieci — to niesprawiedliwość.</p>
            
            <div class="hero-cta">
                <a href="/evidence/" class="btn btn-primary btn-lg">Zobacz dowody</a>
                <a href="/action/" class="btn btn-secondary btn-lg">Działaj teraz</a>
            </div>
            
            <p style="margin-top: 2rem; color: var(--color-gray-500);">Zapisz tę stronę, aby otrzymywać aktualizacje. Udostępnij ją osobom, które wierzą w sprawiedliwość.</p>
        </div>
    </div>
</section>

<style>
@media (max-width: 900px) {
    .impact-section [style*="grid-template-columns: 1fr 1fr"] {
        grid-template-columns: 1fr !important;
    }
}
</style>
