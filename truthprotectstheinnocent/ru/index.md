---
layout: default
title: Кэтрин Бирмингем и Натан Тревальон | Дети забраны в Италии
description: "Трое детей разлучены с родителями Кэтрин Бирмингем и Натаном Тревальоном в Италии. Три причины - все опровергнуты. Помогите воссоединить Утопию, Галориана и Блю Белл. #TruthProtectsTheInnocent"
lang: ru
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
                📺 СЕГОДНЯ НА 60 MINUTES AUSTRALIA — 20:45 AEST
            </span>
        </div>

        <h1 class="sixty-mins-headline">Мир Смотрит</h1>
        <p class="lead">Самая рейтинговая программа Австралии рассказывает историю троих детей, отобранных у родителей — и трёх официальных причин, которые <strong>все оказались ложными</strong>.</p>

        <div class="sixty-mins-countdown" id="sixtyMinsCountdown">
            <div class="countdown-item">
                <span class="countdown-number" id="countHours">--</span>
                <span class="countdown-label">ЧАСЫ</span>
            </div>
            <div class="countdown-separator">:</div>
            <div class="countdown-item">
                <span class="countdown-number" id="countMinutes">--</span>
                <span class="countdown-label">МИНУТЫ</span>
            </div>
            <div class="countdown-separator">:</div>
            <div class="countdown-item">
                <span class="countdown-number" id="countSeconds">--</span>
                <span class="countdown-label">СЕКУНДЫ</span>
            </div>
        </div>

        <div class="sixty-mins-trailer">
            <div class="trailer-container" id="trailerContainer">
                <video id="trailerVideo" playsinline preload="metadata" poster="">
                    <source src="/assets/videos/60-minutes-trailer.mp4" type="video/mp4">
                </video>
                <button class="trailer-play-btn" id="trailerPlayBtn" aria-label="Смотреть трейлер">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="30" fill="rgba(255,255,255,0.2)"/><circle cx="30" cy="30" r="28" stroke="white" stroke-width="2" fill="none"/><polygon points="24,18 24,42 44,30" fill="white"/></svg>
                </button>
                <span class="trailer-label">▶ Смотреть превью</span>
            </div>
        </div>

        <div class="hero-stats sixty-mins-stats">
            <div class="hero-stat">
                <span class="hero-stat-number">🇦🇺</span>
                <span class="hero-stat-label">60 Minutes<br>Australia</span>
            </div>
            <div class="hero-stat">
                <span class="hero-stat-number">🇮🇹</span>
                <span class="hero-stat-label">Итальянская<br>Пресса</span>
            </div>
            <div class="hero-stat">
                <span class="hero-stat-number">🌍</span>
                <span class="hero-stat-label">Мировое<br>Внимание</span>
            </div>
        </div>

        <div class="hero-cta">
            <a href="https://www.youtube.com/watch?v=FZPMGep5CKU" target="_blank" rel="noopener" class="btn btn-primary btn-lg btn-glow">▶ Смотреть на YouTube</a>
            <a href="https://www.facebook.com/share/1C7HNu7Knu/?mibextid=wwXIfr" target="_blank" rel="noopener" class="btn btn-secondary btn-lg">📘 Поделиться в Facebook</a>
            <a href="/evidence/" class="btn btn-secondary btn-lg">Смотреть доказательства</a>
        </div>

        <p class="sixty-mins-subtext">Трое детей. Три ложных обвинения. Ноль обоснованных причин.<br>Сегодня миллионы узнают правду.</p>
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
            countdownEl.innerHTML = '<div class="now-airing"><span class="now-airing-dot"></span> СЕЙЧАС В ЭФИРЕ 60 MINUTES</div>';
            badgeEl.textContent = '🔴 В ЭФИРЕ — 60 Minutes Australia';
            badgeEl.classList.add('sixty-mins-badge-live');
        } else {
            countdownEl.innerHTML = '<a href="https://www.9now.com.au/60-minutes" target="_blank" rel="noopener" class="btn btn-primary btn-lg btn-glow">Смотреть на 9Now →</a>';
            badgeEl.textContent = '📺 ПОКАЗАНО НА 60 MINUTES AUSTRALIA';
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

<!-- УТЕЧКА ИНФОРМАЦИИ - СРОЧНО -->
<section style="background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); padding: 2rem 0; position: relative; overflow: hidden;">
    <div class="container" style="position: relative; z-index: 1;">
        <div style="max-width: 900px; margin: 0 auto; text-align: center;">
            <div style="display: inline-block; background: rgba(255,255,255,0.2); padding: 0.5rem 1.5rem; border-radius: 2rem; margin-bottom: 1rem;">
                <span style="color: white; font-weight: 600; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em;">⚠️ Срочно: Утечка информации — Февраль 2026</span>
            </div>
            <h2 style="color: white; font-size: 2rem; margin-bottom: 1rem; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">Детей Планируют Удерживать До Июня 2026</h2>
            <p style="color: rgba(255,255,255,0.95); font-size: 1.2rem; line-height: 1.6; margin-bottom: 1.5rem;">
                Суд планирует держать этих детей в учреждении <strong style="color: #fef08a;">до июня 2026</strong> — <strong style="color: #fef08a;">7 месяцев постоянной травмы</strong>. Близнецам исполнится 7 в марте — всё ещё разлученные с родителями. Каждый день в учреждении наносит документированный, непоправимый психологический вред. <strong style="color: #fef08a;">Максимальное международное давление необходимо СЕЙЧАС.</strong>
            </p>
            
            <!-- Предупреждение о психологической травме -->
            <div style="background: rgba(0,0,0,0.3); border: 2px solid rgba(254,240,138,0.5); border-radius: 1rem; padding: 1.5rem; margin-bottom: 1.5rem;">
                <p style="color: #fef08a; font-weight: 700; font-size: 1.1rem; margin-bottom: 0.75rem;">⚠️ ПСИХОЛОГИ ПОДТВЕРЖДАЮТ: Дети страдают от ежедневной травмы</p>
                <p style="color: rgba(255,255,255,0.95); font-size: 1.05rem; line-height: 1.7; margin: 0;">
                    Психологи <strong style="color: white;">публично обнародовали</strong> заключения о том, что дети <strong style="color: white;">подвергаются травме каждый день</strong>, находясь в учреждении. Они страдают от <strong style="color: white;">изоляции и разлуки</strong> с родителями — что <strong style="color: white;">ежедневно наносит им непоправимый вред</strong>. Это теперь общеизвестно.
                </p>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1.5rem; text-align: left;">
                <div style="background: rgba(0,0,0,0.2); border-radius: 0.75rem; padding: 1rem;">
                    <p style="color: #fef08a; font-weight: 600; margin-bottom: 0.25rem;">Более 1 года нападений</p>
                    <p style="color: rgba(255,255,255,0.85); font-size: 0.95rem; margin: 0;">Семья подвергалась систематическому преследованию, задокументированному Национальным гарантом</p>
                </div>
                <div style="background: rgba(0,0,0,0.2); border-radius: 0.75rem; padding: 1rem;">
                    <p style="color: #fef08a; font-weight: 600; margin-bottom: 0.25rem;">Сообщено в Верховный суд</p>
                    <p style="color: rgba(255,255,255,0.85); font-size: 0.95rem; margin: 0;">Адвокаты подали в Кассационный суд — никаких действий</p>
                </div>
                <div style="background: rgba(0,0,0,0.2); border-radius: 0.75rem; padding: 1rem;">
                    <p style="color: #fef08a; font-weight: 600; margin-bottom: 0.25rem;">Дни рождения в разлуке</p>
                    <p style="color: rgba(255,255,255,0.85); font-size: 0.95rem; margin: 0;">День рождения Нейтана 24 фев, близнецов 4 марта — будут ли они дома?</p>
                </div>
            </div>
            <div style="background: rgba(0,0,0,0.25); border-radius: 1rem; padding: 1.5rem; margin-bottom: 1.5rem;">
                <p style="color: rgba(255,255,255,0.9); font-size: 1.1rem; margin: 0;">
                    <strong style="color: white;">Вопрос, который должен задать каждый:</strong><br>
                    Если все три официальных обоснования доказаны ложными, и дело сообщено в Кассационный суд, почему эти дети всё ещё удерживаются?
                </p>
            </div>
            <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem;">
                <a href="/evidence/" class="btn" style="background: white; color: #dc2626; font-weight: 600; padding: 0.875rem 2rem;">Смотреть доказательства</a>
                <a href="/ru/petition/" class="btn" style="background: #fef08a; color: #991b1b; font-weight: 700; padding: 0.875rem 2rem; animation: pulse 2s infinite;">🇺🇳 Петиция ООН</a>
                <a href="/action/" class="btn" style="background: rgba(255,255,255,0.15); color: white; border: 2px solid rgba(255,255,255,0.5); padding: 0.875rem 2rem;">Действовать сейчас</a>
            </div>
        </div>
    </div>
</section>

<!-- Meet The Family - Video Section -->
<section class="section">
    <div class="container">
        <div class="section-header">
            <h2>Познакомьтесь с семьёй</h2>
            <p>Это дети в центре дела — здоровые, счастливые и развивавшиеся до их изъятия</p>
        </div>
        
        <div class="video-gallery">
            <div class="video-card">
                <video controls playsinline preload="metadata">
                    <source src="/assets/videos/family1.MP4" type="video/mp4">
                    Ваш браузер не поддерживает видео.
                </video>
                <div class="video-card-overlay">
                    <div class="video-card-title">Жизнь до разлучения</div>
                    <p class="video-card-desc">Счастливые дети, живущие рядом с природой</p>
                </div>
            </div>
            
            <div class="video-card">
                <video controls playsinline preload="metadata">
                    <source src="/assets/videos/family2.MOV" type="video/mp4">
                    Ваш браузер не поддерживает видео.
                </video>
                <div class="video-card-overlay">
                    <div class="video-card-title">Любящая семья</div>
                    <p class="video-card-desc">Связь, которую власти разрывают</p>
                </div>
            </div>
            
            <div class="video-card">
                <video controls playsinline preload="metadata">
                    <source src="/assets/videos/family3.MP4" type="video/mp4">
                    Ваш браузер не поддерживает видео.
                </video>
                <div class="video-card-overlay">
                    <div class="video-card-title">Детская радость</div>
                    <p class="video-card-desc">То, что дети потеряли</p>
                </div>
            </div>
        </div>
        
        <div class="quote-block" style="margin-top: 3rem;">
            "Эти дети были здоровыми, счастливыми и развивавшимися. Сейчас у них появились признаки травмы, вызванной самой "защитной" мерой."
            <cite>— Из выводов психологической оценки</cite>
        </div>
    </div>
</section>

<!-- What People Say About This Family -->
<section class="section" style="background: var(--color-gray-50);">
    <div class="container">
        <div class="section-header">
            <h2>Что говорят об этой семье</h2>
            <p>Отзывы людей, которые знают семью Бирмингем‑Треваллион</p>
        </div>
        
        <div class="testimonial-gallery" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
            <div class="testimonial-card" style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow-md);">
                <img src="/assets/images/testimonials/photo_2026-01-11_21-41-12.jpg" alt="Отзыв" style="width: 100%; height: auto;">
            </div>
            <div class="testimonial-card" style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow-md);">
                <img src="/assets/images/testimonials/photo_2026-01-11_21-41-16.jpg" alt="Отзыв" style="width: 100%; height: auto;">
            </div>
            <div class="testimonial-card" style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow-md);">
                <img src="/assets/images/testimonials/photo_2026-01-11_21-41-19.jpg" alt="Отзыв" style="width: 100%; height: auto;">
            </div>
            <div class="testimonial-card" style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow-md);">
                <img src="/assets/images/testimonials/photo_2026-01-11_21-41-21.jpg" alt="Отзыв" style="width: 100%; height: auto;">
            </div>
            <div class="testimonial-card" style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow-md);">
                <img src="/assets/images/testimonials/photo_2026-01-11_21-41-26.jpg" alt="Отзыв" style="width: 100%; height: auto;">
            </div>
            <div class="testimonial-card" style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow-md);">
                <img src="/assets/images/testimonials/photo_2026-01-11_21-41-28.jpg" alt="Отзыв" style="width: 100%; height: auto;">
            </div>
        </div>
        
        <div class="text-center mt-2">
            <p style="color: var(--color-gray-600); font-style: italic;">Это реальные сообщения от людей, которые лично знают семью.</p>
        </div>
    </div>
</section>

<!-- The Three False Claims -->
<section class="section section-dark">
    <div class="container">
        <div class="section-header">
            <h2>Три ложных основания</h2>
            <p style="color: var(--color-gray-400);">Каждое официальное обоснование было опровергнуто самими итальянскими властями</p>
        </div>
        
        <div class="container-narrow">
            <div class="evidence-grid">
                <div class="evidence-card verified" style="background: rgba(255,255,255,0.05); border-left-color: #ef4444;">
                    <div class="evidence-header">
                        <h4 style="color: white;">❌ Основание №1: «Дети не привиты»</h4>
                        <span class="evidence-badge badge-disputed">ОПРОВЕРГНУТО</span>
                    </div>
                    <p style="color: var(--color-gray-300);"><strong style="color: white;">Ассамблея Кьети и Терамо подтвердила, что дети были вакцинированы.</strong></p>
                    <p class="evidence-source" style="color: var(--color-gray-500);">Источник: официальные записи регионального органа здравоохранения</p>
                </div>
                
                <div class="evidence-card verified" style="background: rgba(255,255,255,0.05); border-left-color: #ef4444;">
                    <div class="evidence-header">
                        <h4 style="color: white;">❌ Основание №2: «Дети не обучаются»</h4>
                        <span class="evidence-badge badge-disputed">ОПРОВЕРГНУТО</span>
                    </div>
                    <p style="color: var(--color-gray-300);"><strong style="color: white;">Министерство образования подтвердило законное домашнее обучение.</strong></p>
                    <p class="evidence-source" style="color: var(--color-gray-500);">Более 15 000 детей в Италии следуют той же законной программе.</p>
                </div>
                
                <div class="evidence-card verified" style="background: rgba(255,255,255,0.05); border-left-color: #ef4444;">
                    <div class="evidence-header">
                        <h4 style="color: white;">❌ Основание №3: «Дом небезопасен»</h4>
                        <span class="evidence-badge badge-disputed">ОПРОВЕРГНУТО</span>
                    </div>
                    <p style="color: var(--color-gray-300);"><strong style="color: white;">Сертифицированный геометр подтвердил, что конструкция не представляет риска.</strong></p>
                    <p class="evidence-source" style="color: var(--color-gray-500);">Источник: профессиональное заключение по прочности</p>
                </div>
            </div>
            
            <div class="alert alert-warning" style="margin-top: 2rem; background: rgba(245, 158, 11, 0.1); border-color: rgba(245, 158, 11, 0.3);">
                <strong style="color: #fbbf24;">Вопрос, на который нет ответа:</strong> 
                <span style="color: var(--color-gray-300);">Если все три официальных основания опровергнуты, на каком правовом основании дети остаются разлучёнными с родителями?</span>
            </div>
            
            <div class="text-center mt-2">
                <a href="/evidence/" class="btn btn-primary">Смотреть все доказательства →</a>
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
                    <h2 style="color: white;">Зафиксированный вред</h2>
                    <p style="color: var(--color-gray-300); font-size: 1.1rem;">Квалифицированный психолог провёл оценку детей после изъятия. Выводы оказались настолько серьёзными, что психолог провёл официальную пресс‑конференцию.</p>
                    
                    <div style="background: rgba(220, 38, 38, 0.2); border-left: 4px solid #dc2626; padding: 1.5rem; border-radius: 0.5rem; margin: 1.5rem 0;">
                        <h4 style="color: #fca5a5; margin-bottom: 0.5rem;">Ключевой вывод:</h4>
                        <p style="color: white; font-size: 1.1rem; margin: 0;">У детей появились <strong>самоповреждающие поведения</strong>, которых <strong>не было до разлучения</strong>.</p>
                    </div>
                    
                    <p style="color: var(--color-gray-300);">До изъятия дети описывались как здоровые, счастливые и развивавшиеся. Они жили на природе, учились через природу и мало времени проводили за экранами.</p>
                    
                    <p style="color: var(--color-gray-300);"><strong style="color: white;">«Защита» причиняет вред.</strong></p>
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
            <h2>Хотите сделать что‑то прямо сейчас?</h2>
            <p>Не нужно донатить. Не нужно нигде регистрироваться.</p>
        </div>
        
        <!-- The One Thing CTA -->
        <div style="background: linear-gradient(135deg, #1e3a5f, #2d5a8a); border-radius: 1.5rem; padding: 3rem; text-align: center; max-width: 800px; margin: 0 auto;">
            <h3 style="color: #f59e0b; font-size: 1.5rem; margin-bottom: 1rem;">Нам не нужны ваши деньги. Нам не нужны ваши данные.</h3>
            <h2 style="color: white; font-size: 2rem; margin-bottom: 1.5rem;">Нам нужно лишь, чтобы вы поделились этой ссылкой.</h2>
            
            <p style="color: var(--color-gray-300); font-size: 1.2rem; margin-bottom: 1.5rem;">Одно сообщение нужному человеку может изменить всё. Журналисту. Чиновнику. Тому, кто знает нужных людей.</p>
            
            <p style="color: white; font-size: 1.1rem; margin-bottom: 2rem;"><strong>Поделиться этим с пятью людьми, которым вы доверяете, ценнее любой суммы пожертвований.</strong></p>
            
            <div style="background: rgba(255,255,255,0.1); border-radius: 0.5rem; padding: 1rem; margin-bottom: 1.5rem;">
                <code style="color: #f59e0b; font-size: 1.1rem; word-break: break-all;">truthprotectstheinnocent.quantummerlin.com</code>
            </div>
            
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <button onclick="navigator.clipboard.writeText('truthprotectstheinnocent.quantummerlin.com').then(()=>this.textContent='✓ Скопировано!')" class="btn btn-primary btn-lg" style="background: white; color: var(--color-primary); min-width: 200px;">📋 Скопировать ссылку</button>
                <a href="https://wa.me/?text=Three%20children%20separated%20from%20loving%20parents.%20Three%20official%20reasons.%20All%20three%20proven%20false.%20truthprotectstheinnocent.quantummerlin.com" class="btn btn-lg" style="background: #25D366; color: white;">💬 WhatsApp</a>
            </div>
            
            <p style="color: var(--color-gray-400); font-size: 0.9rem; margin-top: 2rem; margin-bottom: 0;">Подумайте о пяти людях, которым это небезразлично. Отправьте сейчас, пока не забыли.</p>
        </div>
        
        <!-- Secondary Actions -->
        <div class="action-grid" style="margin-top: 3rem;">
            <div class="action-card">
                <div class="action-icon">📧</div>
                <h3>Письмо чиновникам</h3>
                <p>Готовы сделать больше? Отправьте письмо итальянским парламентским чиновникам.</p>
                <a href="/action/#email" class="btn btn-outline">Получить письмо</a>
            </div>
            
            <div class="action-card">
                <div class="action-icon">📢</div>
                <h3>Социальные сети</h3>
                <p>Поделитесь в своих соцсетях готовыми постами и #TruthProtectsTheInnocent</p>
                <a href="/action/#share" class="btn btn-outline">Шаблоны для публикаций</a>
            </div>
            
            <div class="action-card">
                <div class="action-icon">📰</div>
                <h3>Связаться со СМИ</h3>
                <p>Есть знакомый журналист? Эта история заслуживает освещения. Передайте информацию.</p>
                <a href="/action/#media" class="btn btn-outline">Ресурсы для СМИ</a>
            </div>
            
            <div class="action-card">
                <div class="action-icon">🙏</div>
                <h3>Молитва и медитация</h3>
                <p>Присоединяйтесь с намерением: <strong>дети дома до дня рождения Натана (24 фев)</strong>. Все традиции приветствуются.</p>
                <a href="https://worldwidemeditation.quantummerlin.com" target="_blank" class="btn btn-outline">Присоединиться</a>
            </div>
        </div>
    </div>
</section>

<!-- International Attention -->
<section class="section" style="background: var(--color-gray-50);">
    <div class="container">
        <div class="container-narrow">
            <div class="section-header">
                <h2>Международное внимание</h2>
                <p>Это дело привлекло внимание на самых высоких уровнях</p>
            </div>
            
            <div class="stats-grid" style="margin-bottom: 2rem;">
                <div class="stat-card" style="background: white; box-shadow: var(--shadow-md);">
                    <div class="stat-number" style="color: var(--color-primary);">🇦🇺</div>
                    <div class="stat-label" style="color: var(--color-gray-600);">Посольство Австралии осведомлено</div>
                </div>
                <div class="stat-card" style="background: white; box-shadow: var(--shadow-md);">
                    <div class="stat-number" style="color: var(--color-primary);">🇮🇹</div>
                    <div class="stat-label" style="color: var(--color-gray-600);">Итальянские чиновники уведомлены</div>
                </div>
                <div class="stat-card" style="background: white; box-shadow: var(--shadow-md);">
                    <div class="stat-number" style="color: var(--color-primary);">🌍</div>
                    <div class="stat-label" style="color: var(--color-gray-600);">Поддержка по всему миру растёт</div>
                </div>
            </div>
            
            <p class="text-center" style="font-size: 1.1rem;">Семья не может говорить публично, пока идут юридические процедуры. <strong>Но мы можем.</strong></p>
            <p class="text-center">Общественное давление и международное внимание необходимы, чтобы это дело рассматривалось справедливо.</p>
        </div>
    </div>
</section>

<!-- FAQ Teaser -->
<section class="section">
    <div class="container">
        <div class="container-narrow">
            <div class="section-header">
                <span class="hero-badge" style="background: rgba(245, 158, 11, 0.15); color: #f59e0b; margin-bottom: 1rem;">Полный контекст</span>
                <h2>Вопросы о СМИ?</h2>
                <p>Некоторые репортажи были неполными или вырваны из контекста. Узнайте полную историю.</p>
            </div>
            
            <div style="background: linear-gradient(135deg, #f8fafc, #f1f5f9); border-radius: 1.5rem; padding: 2.5rem; margin: 2rem 0; box-shadow: var(--shadow-lg);">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
                    <div style="display: flex; gap: 1rem; align-items: flex-start;">
                        <div style="background: rgba(239, 68, 68, 0.1); color: #dc2626; width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0;">X</div>
                        <div>
                            <strong style="color: var(--color-gray-700);">"Нет ванной = запущенность"</strong>
                            <p style="color: var(--color-gray-600); font-size: 0.9rem; margin: 0.25rem 0 0 0;">Реальность: Компостные туалеты легальны во всём мире. Полноценная ванная установлена.</p>
                        </div>
                    </div>
                    <div style="display: flex; gap: 1rem; align-items: flex-start;">
                        <div style="background: rgba(239, 68, 68, 0.1); color: #dc2626; width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0;">X</div>
                        <div>
                            <strong style="color: var(--color-gray-700);">"Дети не обучаются"</strong>
                            <p style="color: var(--color-gray-600); font-size: 0.9rem; margin: 0.25rem 0 0 0;">Реальность: Легальное Штайнер-образование, подтверждено Министерством образования.</p>
                        </div>
                    </div>
                    <div style="display: flex; gap: 1rem; align-items: flex-start;">
                        <div style="background: rgba(239, 68, 68, 0.1); color: #dc2626; width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0;">X</div>
                        <div>
                            <strong style="color: var(--color-gray-700);">"Экстремальный образ жизни"</strong>
                            <p style="color: var(--color-gray-600); font-size: 0.9rem; margin: 0.25rem 0 0 0;">Реальность: Ценностно-ориентированный устойчивый образ жизни, всё более распространённый в мире.</p>
                        </div>
                    </div>
                    <div style="display: flex; gap: 1rem; align-items: flex-start;">
                        <div style="background: rgba(239, 68, 68, 0.1); color: #dc2626; width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0;">X</div>
                        <div>
                            <strong style="color: var(--color-gray-700);">"Неквалифицированные родители"</strong>
                            <p style="color: var(--color-gray-600); font-size: 0.9rem; margin: 0.25rem 0 0 0;">Реальность: Оба профессионально обучены. Оценки подтверждают высокую компетентность.</p>
                        </div>
                    </div>
                </div>
                
                <div style="text-align: center; padding-top: 1rem; border-top: 1px solid rgba(0,0,0,0.1);">
                    <p style="color: var(--color-gray-600); margin-bottom: 1rem;">Освещение в СМИ часто неполное. Получите полную фактическую информацию.</p>
                    <a href="/faq/" class="btn btn-primary btn-lg">Читать полные FAQ →</a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Final CTA -->
<section class="section section-dark" style="text-align: center;">
    <div class="container">
        <div class="container-narrow">
            <h2>Правду нужно сказать</h2>
            <p style="font-size: 1.2rem; color: var(--color-gray-300); margin-bottom: 2rem;">Трое детей разлучены с родителями на основании утверждений, которые были опровергнуты. Сейчас у них зафиксирован психологический вред. Это не защита детей — это несправедливость.</p>
            
            <div class="hero-cta">
                <a href="/evidence/" class="btn btn-primary btn-lg">Смотреть доказательства</a>
                <a href="/action/" class="btn btn-secondary btn-lg">Действовать сейчас</a>
            </div>
            
            <p style="margin-top: 2rem; color: var(--color-gray-500);">Сохраните сайт для обновлений. Поделитесь с теми, кто верит в справедливость.</p>
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
