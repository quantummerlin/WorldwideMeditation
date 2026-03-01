---
layout: default
title: Catherine Birmingham & Nathan Trevallion | Children Removed Italy
description: "Three children separated from Catherine Birmingham and Nathan Trevallion in Italy. Three official reasons - all proven false. Help reunite Utopia, Galorian & Blue Bell with their parents. #TruthProtectsTheInnocent #LaFamigliaNelBosco"
lang: en
image: /assets/images/og-image.jpg
updated: 2026-02-13-urgent
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
        <!-- Live/Countdown Badge -->
        <div class="sixty-mins-badge-wrap">
            <span class="sixty-mins-badge" id="sixtyMinsBadge">
                📺 TONIGHT ON 60 MINUTES AUSTRALIA — 8:45 PM AEST
            </span>
        </div>

        <h1 class="sixty-mins-headline">The World Is Watching</h1>
        <p class="lead">Australia's most-watched current affairs program tells the story of three children taken from their parents — and the three official reasons that were <strong>all proven false</strong>.</p>

        <!-- Countdown Timer -->
        <div class="sixty-mins-countdown" id="sixtyMinsCountdown">
            <div class="countdown-item">
                <span class="countdown-number" id="countHours">--</span>
                <span class="countdown-label">HOURS</span>
            </div>
            <div class="countdown-separator">:</div>
            <div class="countdown-item">
                <span class="countdown-number" id="countMinutes">--</span>
                <span class="countdown-label">MINUTES</span>
            </div>
            <div class="countdown-separator">:</div>
            <div class="countdown-item">
                <span class="countdown-number" id="countSeconds">--</span>
                <span class="countdown-label">SECONDS</span>
            </div>
        </div>

        <!-- Trailer Preview -->
        <div class="sixty-mins-trailer">
            <div class="trailer-container" id="trailerContainer">
                <video id="trailerVideo" playsinline preload="metadata" poster="">
                    <source src="/assets/videos/60-minutes-trailer.mp4" type="video/mp4">
                </video>
                <button class="trailer-play-btn" id="trailerPlayBtn" aria-label="Play trailer">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="30" fill="rgba(255,255,255,0.2)"/><circle cx="30" cy="30" r="28" stroke="white" stroke-width="2" fill="none"/><polygon points="24,18 24,42 44,30" fill="white"/></svg>
                </button>
                <span class="trailer-label">▶ Watch the Sneak Peek</span>
            </div>
        </div>

        <!-- Coverage Stats -->
        <div class="hero-stats sixty-mins-stats">
            <div class="hero-stat">
                <span class="hero-stat-number">🇦🇺</span>
                <span class="hero-stat-label">60 Minutes<br>Australia</span>
            </div>
            <div class="hero-stat">
                <span class="hero-stat-number">🇮🇹</span>
                <span class="hero-stat-label">Italian National<br>Television</span>
            </div>
            <div class="hero-stat">
                <span class="hero-stat-number">🌍</span>
                <span class="hero-stat-label">Global Attention<br>Growing</span>
            </div>
        </div>

        <div class="hero-cta">
            <a href="https://www.youtube.com/watch?v=FZPMGep5CKU" target="_blank" rel="noopener" class="btn btn-primary btn-lg btn-glow">▶ Watch on YouTube</a>
            <a href="https://www.facebook.com/share/1C7HNu7Knu/?mibextid=wwXIfr" target="_blank" rel="noopener" class="btn btn-secondary btn-lg">📘 Share on Facebook</a>
            <a href="/evidence/" class="btn btn-secondary btn-lg">See The Evidence</a>
        </div>

        <p class="sixty-mins-subtext">Three children. Three false claims. Zero valid reasons.<br>Tonight, millions will learn the truth.</p>
    </div>
</section>

<!-- 60 Minutes Countdown & Trailer Script -->
<script>
(function() {
    // === COUNTDOWN ===
    // Air time: March 1, 2026 at 8:45 PM AEST (UTC+11)
    // AEST offset = +11 hours, so 8:45 PM AEST = 9:45 AM UTC
    const airTimeUTC = new Date(Date.UTC(2026, 2, 1, 9, 45, 0)); // March 1, 2026 09:45 UTC
    const showDurationMs = 90 * 60 * 1000; // assume 90 min show
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
            // Before air time — show countdown
            const h = Math.floor(diff / 3600000);
            const m = Math.floor((diff % 3600000) / 60000);
            const s = Math.floor((diff % 60000) / 1000);
            hoursEl.textContent = String(h).padStart(2, '0');
            minutesEl.textContent = String(m).padStart(2, '0');
            secondsEl.textContent = String(s).padStart(2, '0');
        } else if (afterShow < 0) {
            // Currently airing
            countdownEl.innerHTML = '<div class="now-airing"><span class="now-airing-dot"></span> NOW AIRING ON 60 MINUTES</div>';
            badgeEl.textContent = '🔴 LIVE NOW — 60 Minutes Australia';
            badgeEl.classList.add('sixty-mins-badge-live');
        } else {
            // After show — switch to replay
            countdownEl.innerHTML = '<a href="https://www.9now.com.au/60-minutes" target="_blank" rel="noopener" class="btn btn-primary btn-lg btn-glow">Watch on 9Now →</a>';
            badgeEl.textContent = '📺 AS SEEN ON 60 MINUTES AUSTRALIA';
            badgeEl.classList.remove('sixty-mins-badge-live');
            badgeEl.classList.add('sixty-mins-badge-aired');
            // Update share button text
            const shareBtn = document.querySelector('.hero-cta .btn-primary');
            if (shareBtn && shareBtn.textContent.includes('Before')) {
                shareBtn.textContent = 'Share This Now';
            }
            clearInterval(timer);
        }
    }

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    // === TRAILER PLAYER ===
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

{::nomarkdown}
<!-- BREAKING: Italian National News Coverage -->
<section class="section" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 4rem 0;">
    <div class="container">
        <div class="section-header" style="margin-bottom: 2.5rem;">
            <div style="display: inline-block; background: rgba(220, 38, 38, 0.2); border: 1px solid rgba(220, 38, 38, 0.4); padding: 0.4rem 1.2rem; border-radius: 2rem; margin-bottom: 1rem;">
                <span style="color: #fca5a5; font-weight: 700; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.08em;">&#128250; Breaking News &#8212; Italian National Television</span>
            </div>
            <h2 style="color: white; font-size: 2.2rem;">"Catherine Is As If She Were In Prison"</h2>
            <p style="color: var(--color-gray-400); font-size: 1.15rem;">Italian national news program covers the Birmingham-Trevallion case &#8212; witnesses, family members, and commentators speak out</p>
        </div>

        <!-- Video Player -->
        <div style="max-width: 900px; margin: 0 auto 3rem auto;">
            <div style="position: relative; border-radius: 1rem; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);">
                <video controls playsinline preload="metadata" style="width: 100%; display: block; border-radius: 1rem;">
                    <source src="/assets/videos/news.MP4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <p style="color: var(--color-gray-500); font-size: 0.85rem; text-align: center; margin-top: 0.75rem; font-style: italic;">Italian national news segment &#8212; full English translation below</p>
        </div>

        <!-- Translation -->
        <div style="max-width: 900px; margin: 0 auto;">

            <!-- Context Banner -->
            <div style="background: rgba(217, 130, 43, 0.15); border: 1px solid rgba(217, 130, 43, 0.3); border-radius: 1rem; padding: 1.5rem 2rem; margin-bottom: 2rem;">
                <p style="color: #f0b37a; font-weight: 700; font-size: 1.05rem; margin-bottom: 0.5rem;">&#128240; Original Headline (Italian):</p>
                <p style="color: white; font-size: 1.3rem; font-weight: 700; font-style: italic; margin-bottom: 0.5rem;">"FAMIGLIA NEL BOSCO, 'CATHERINE &#200; COME SE FOSSE IN PRIGIONE'"</p>
                <p style="color: var(--color-gray-300); font-size: 1.05rem; margin: 0;">"Family in the Woods: 'Catherine is as if she were in prison'"</p>
            </div>

            <!-- Full English Translation -->
            <h3 style="color: #f59e0b; font-size: 1.3rem; margin-bottom: 1.5rem; padding-bottom: 0.75rem; border-bottom: 1px solid rgba(255,255,255,0.1);">&#128221; English Translation of News Segment</h3>

            <!-- Witness Testimony: Former Employee -->
            <div style="background: rgba(255,255,255,0.05); border-radius: 1rem; padding: 1.5rem 2rem; margin-bottom: 1.25rem; border-left: 4px solid #dc2626;">
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                    <span style="background: #dc2626; color: white; padding: 0.25rem 0.75rem; border-radius: 2rem; font-size: 0.75rem; font-weight: 700;">WITNESS TESTIMONY</span>
                    <span style="color: white; font-weight: 700;">Former Employee Speaks Out</span>
                </div>
                <p style="color: var(--color-gray-300); margin: 0; line-height: 1.8;">A former employee has come forward with disturbing claims about what is happening inside the family home. <strong style="color: white;">Lydia, who worked there for many years before retiring, describes the environment as being "like a prison."</strong> She says Catherine is isolated &#8212; unable to speak freely with others and kept away from her children. According to Lydia, <strong style="color: #fca5a5;">Catherine cries constantly</strong>, and staff are too afraid of losing their jobs to challenge the situation.</p>
            </div>

            <!-- The Locked Door -->
            <div style="background: rgba(255,255,255,0.05); border-radius: 1rem; padding: 1.5rem 2rem; margin-bottom: 1.25rem; border-left: 4px solid #f59e0b;">
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                    <span style="background: #f59e0b; color: white; padding: 0.25rem 0.75rem; border-radius: 2rem; font-size: 0.75rem; font-weight: 700;">INSIDE THE HOME</span>
                    <span style="color: white; font-weight: 700;">Disturbing Details Emerge</span>
                </div>
                <p style="color: var(--color-gray-300); margin: 0; line-height: 1.8;">She recalls strict and, in her words, <em>"absurd"</em> orders &#8212; including a night when <strong style="color: white;">a door separating Catherine from her children was locked. Catherine reportedly screamed for it to be opened.</strong> Family members say the children are deeply distressed. One of the youngest recently suffered nightmares, <strong style="color: #fca5a5;">cried for his mother for over an hour</strong>, and could not sleep.</p>
            </div>

            <!-- The Children's Trauma -->
            <div style="background: rgba(220, 38, 38, 0.1); border: 1px solid rgba(220, 38, 38, 0.3); border-radius: 1rem; padding: 1.5rem 2rem; margin-bottom: 1.25rem; border-left: 4px solid #dc2626;">
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                    <span style="background: #dc2626; color: white; padding: 0.25rem 0.75rem; border-radius: 2rem; font-size: 0.75rem; font-weight: 700;">CHILDREN'S TRAUMA</span>
                    <span style="color: white; font-weight: 700;">Screaming, Nightmares, and Flashbacks</span>
                </div>
                <p style="color: var(--color-gray-300); margin-bottom: 1rem; line-height: 1.8;">Witnesses describe hearing <strong style="color: #fca5a5;">the children screaming violently during moments of separation</strong> from their aunt and grandmother &#8212; highlighting what some believe is severe emotional trauma.</p>
                <p style="color: var(--color-gray-300); margin: 0; line-height: 1.8;">When a police escort arrived at the home with a UN peace ambassador, <strong style="color: white;">the children reacted by throwing objects at the police car</strong> &#8212; reportedly triggered by memories of the day authorities came on the 20th of November to remove them from their home. Today, that memory was reaffirmed by seeing that car &#8212; and this, perhaps more than anything else, reveals <strong style="color: #fca5a5;">the depth of the trauma they are experiencing</strong>.</p>
            </div>

            <!-- Studio Commentary -->
            <div style="background: rgba(255,255,255,0.05); border-radius: 1rem; padding: 1.5rem 2rem; margin-bottom: 1.25rem; border-left: 4px solid #8b5cf6;">
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                    <span style="background: #8b5cf6; color: white; padding: 0.25rem 0.75rem; border-radius: 2rem; font-size: 0.75rem; font-weight: 700;">STUDIO REACTION</span>
                    <span style="color: white; font-weight: 700;">"A Prison of Emotions"</span>
                </div>
                <div style="background: rgba(0,0,0,0.3); border-radius: 0.75rem; padding: 1.25rem; margin-bottom: 1rem;">
                    <p style="color: #fef08a; font-weight: 600; font-size: 0.85rem; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em;">Commentator (Paola Ferrari):</p>
                    <p style="color: var(--color-gray-200); font-style: italic; margin: 0; line-height: 1.8;"><em>"This is the reality that we were all afraid of. When we talk about 41bis [Italy's harshest prison regime], it has nothing to do with the procedure for the mafiosi, but we can talk about a <strong style="color: white;">41bis of feelings</strong> &#8212; because when you go to deprive, in this way, it is lacerating. The screams of these children, who every day suffer this detachment... it is as if a wound that is narrowing a little <strong style="color: #fca5a5;">is being reopened</strong>. And this really hurts the heart of all your viewers, of all the Italians who listen and want a definitive intervention to end this madness."</em></p>
                </div>
                <p style="color: var(--color-gray-300); margin: 0; line-height: 1.8;">The host notes that <strong style="color: white;">the mother is prevented from doing anything &#8212; her movements are all controlled</strong>. There are fears about how this situation could ultimately end.</p>
            </div>

            <!-- Final Commentary -->
            <div style="background: rgba(255,255,255,0.05); border-radius: 1rem; padding: 1.5rem 2rem; margin-bottom: 2rem; border-left: 4px solid #10b981;">
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                    <span style="background: #10b981; color: white; padding: 0.25rem 0.75rem; border-radius: 2rem; font-size: 0.75rem; font-weight: 700;">CLOSING STATEMENT</span>
                    <span style="color: white; font-weight: 700;">A System Causing Harm?</span>
                </div>
                <div style="background: rgba(0,0,0,0.3); border-radius: 0.75rem; padding: 1.25rem;">
                    <p style="color: var(--color-gray-200); font-style: italic; margin: 0; line-height: 1.8;"><em>"If the goal was to make these children feel good, I changed my mind. In the end, it seems to me that there is an obtuseness. When you come to <strong style="color: #fca5a5;">traumatize the children</strong>..."</em></p>
                </div>
                <p style="color: var(--color-gray-300); margin-top: 1rem; margin-bottom: 0; line-height: 1.8;"><strong style="color: white;">Some observers now question whether the system meant to protect these children may instead be causing further psychological harm.</strong></p>
            </div>

            <!-- Why This Matters -->
            <div style="background: linear-gradient(135deg, rgba(220, 38, 38, 0.15), rgba(220, 38, 38, 0.05)); border: 1px solid rgba(220, 38, 38, 0.3); border-radius: 1rem; padding: 2rem; margin-bottom: 2rem;">
                <h3 style="color: #fca5a5; font-size: 1.2rem; margin-bottom: 1.25rem;">&#9888;&#65039; Why This Matters</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.25rem;">
                    <div style="background: rgba(0,0,0,0.2); border-radius: 0.75rem; padding: 1.25rem;">
                        <p style="color: #f59e0b; font-weight: 700; margin-bottom: 0.4rem; font-size: 0.95rem;">&#9888; Children Traumatized Daily</p>
                        <p style="color: var(--color-gray-300); font-size: 0.9rem; margin: 0; line-height: 1.6;">Children are screaming, having nightmares, and showing flashback responses to police vehicles. The separation is reopening wounds daily.</p>
                    </div>
                    <div style="background: rgba(0,0,0,0.2); border-radius: 0.75rem; padding: 1.25rem;">
                        <p style="color: #f59e0b; font-weight: 700; margin-bottom: 0.4rem; font-size: 0.95rem;">&#128274; Catherine Held Like a Prisoner</p>
                        <p style="color: var(--color-gray-300); font-size: 0.9rem; margin: 0; line-height: 1.6;">Multiple witnesses describe Catherine as isolated, controlled, crying constantly, and unable to be with her own children &#8212; even locked away from them at night.</p>
                    </div>
                    <div style="background: rgba(0,0,0,0.2); border-radius: 0.75rem; padding: 1.25rem;">
                        <p style="color: #f59e0b; font-weight: 700; margin-bottom: 0.4rem; font-size: 0.95rem;">&#128483; Italian Public Outraged</p>
                        <p style="color: var(--color-gray-300); font-size: 0.9rem; margin: 0; line-height: 1.6;">National television commentators are comparing the conditions to Italy's harshest prison regime and calling for immediate intervention to end this.</p>
                    </div>
                </div>
            </div>

            <!-- Key Facts Summary -->
            <div style="background: rgba(255,255,255,0.05); border-radius: 1rem; padding: 2rem; border: 1px solid rgba(255,255,255,0.1);">
                <h3 style="color: white; font-size: 1.1rem; margin-bottom: 1.25rem;">&#128204; Key Facts from This Segment</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.75rem;">
                        <p style="color: #f59e0b; font-weight: 600; font-size: 0.8rem; margin-bottom: 0.25rem;">THE FAMILY</p>
                        <p style="color: var(--color-gray-300); font-size: 0.9rem; margin: 0;">Nathan, Catherine, and their children</p>
                    </div>
                    <div style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.75rem;">
                        <p style="color: #f59e0b; font-weight: 600; font-size: 0.8rem; margin-bottom: 0.25rem;">WITNESSES</p>
                        <p style="color: var(--color-gray-300); font-size: 0.9rem; margin: 0;">Former employee Lydia, family members, and studio commentators</p>
                    </div>
                    <div style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.75rem;">
                        <p style="color: #f59e0b; font-weight: 600; font-size: 0.8rem; margin-bottom: 0.25rem;">CHILDREN'S CONDITION</p>
                        <p style="color: var(--color-gray-300); font-size: 0.9rem; margin: 0;">Screaming, nightmares, flashback responses, throwing objects at police</p>
                    </div>
                    <div style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.75rem;">
                        <p style="color: #f59e0b; font-weight: 600; font-size: 0.8rem; margin-bottom: 0.25rem;">UN INVOLVEMENT</p>
                        <p style="color: var(--color-gray-300); font-size: 0.9rem; margin: 0;">UN peace ambassador arrived with police escort to visit the family</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
{:/nomarkdown}

<!-- URGENT LEAKED INFORMATION ALERT -->
<section style="background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); padding: 2rem 0; position: relative; overflow: hidden;">
    <div class="container" style="position: relative; z-index: 1;">
        <div style="max-width: 900px; margin: 0 auto; text-align: center;">
            <div style="display: inline-block; background: rgba(255,255,255,0.2); padding: 0.5rem 1.5rem; border-radius: 2rem; margin-bottom: 1rem;">
                <span style="color: white; font-weight: 600; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em;">⚠️ Breaking: Leaked Information — February 2026</span>
            </div>
            <h2 style="color: white; font-size: 2rem; margin-bottom: 1rem; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">Children Planned To Be Held Until June 2026</h2>
            <p style="color: rgba(255,255,255,0.95); font-size: 1.2rem; line-height: 1.6; margin-bottom: 1.5rem;">
                The court is planning to keep these children institutionalized <strong style="color: #fef08a;">until June 2026</strong> — <strong style="color: #fef08a;">7 months of constant trauma</strong>. The twins turn 7 in March — still separated from their parents. Every single day in that institution causes documented, irreparable psychological harm. <strong style="color: #fef08a;">Maximum international pressure is needed NOW.</strong>
            </p>
            
            <!-- Psychological Trauma Alert -->
            <div style="background: rgba(0,0,0,0.3); border: 2px solid rgba(254,240,138,0.5); border-radius: 1rem; padding: 1.5rem; margin-bottom: 1.5rem;">
                <p style="color: #fef08a; font-weight: 700; font-size: 1.1rem; margin-bottom: 0.75rem;">⚠️ PSYCHOLOGISTS CONFIRM: Children Suffering Daily Trauma</p>
                <p style="color: rgba(255,255,255,0.95); font-size: 1.05rem; line-height: 1.7; margin: 0;">
                    Psychologists have <strong style="color: white;">publicly released</strong> findings stating the children are <strong style="color: white;">undergoing trauma every day</strong> while being held in the institution. They are suffering from <strong style="color: white;">isolation and separation</strong> from their parents — causing <strong style="color: white;">irreparable harm daily</strong>. This is now common knowledge.
                </p>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1.5rem; text-align: left;">
                <div style="background: rgba(0,0,0,0.2); border-radius: 0.75rem; padding: 1rem;">
                    <p style="color: #fef08a; font-weight: 600; margin-bottom: 0.25rem;">Over 1 Year of Attacks</p>
                    <p style="color: rgba(255,255,255,0.85); font-size: 0.95rem; margin: 0;">The family has faced systematic persecution documented by the National Garante</p>
                </div>
                <div style="background: rgba(0,0,0,0.2); border-radius: 0.75rem; padding: 1rem;">
                    <p style="color: #fef08a; font-weight: 600; margin-bottom: 0.25rem;">Reported to Highest Court</p>
                    <p style="color: rgba(255,255,255,0.85); font-size: 0.95rem; margin: 0;">Lawyers filed with Italy's Court of Cassation — yet no action taken</p>
                </div>
                <div style="background: rgba(0,0,0,0.2); border-radius: 0.75rem; padding: 1rem;">
                    <p style="color: #fef08a; font-weight: 600; margin-bottom: 0.25rem;">Birthdays in Separation</p>
                    <p style="color: rgba(255,255,255,0.85); font-size: 0.95rem; margin: 0;">Nathan's birthday Feb 24, twins March 4 — will they be home?</p>
                </div>
            </div>
            <div style="background: rgba(0,0,0,0.25); border-radius: 1rem; padding: 1.5rem; margin-bottom: 1.5rem;">
                <p style="color: rgba(255,255,255,0.9); font-size: 1.1rem; margin: 0;">
                    <strong style="color: white;">The question everyone should be asking:</strong><br>
                    If all three official justifications have been proven false, and the case has been reported to Italy's highest court, why are these children still being held?
                </p>
            </div>
            <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem;">
                <a href="/evidence/" class="btn" style="background: white; color: #dc2626; font-weight: 600; padding: 0.875rem 2rem;">See The Evidence</a>
                <a href="/petition/" class="btn" style="background: #fef08a; color: #991b1b; font-weight: 700; padding: 0.875rem 2rem; animation: pulse 2s infinite;">🇺🇳 UN Petition</a>
                <a href="/action/" class="btn" style="background: rgba(255,255,255,0.15); color: white; border: 2px solid rgba(255,255,255,0.5); padding: 0.875rem 2rem;">Take Action Now</a>
            </div>
        </div>
    </div>
</section>

<!-- Meet The Family - Video Section -->
<section class="section">
    <div class="container">
        <div class="section-header">
            <h2>Meet The Family</h2>
            <p>These are the children at the center of this case — healthy, happy, and thriving before they were taken</p>
        </div>
        
        <div class="video-gallery">
            <div class="video-card">
                <video controls playsinline preload="metadata">
                    <source src="/assets/videos/family1.MP4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <div class="video-card-overlay">
                    <div class="video-card-title">Life Before Separation</div>
                    <p class="video-card-desc">Happy children living close to nature</p>
                </div>
            </div>
            
            <div class="video-card">
                <video controls playsinline preload="metadata">
                    <source src="/assets/videos/family2.MOV" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <div class="video-card-overlay">
                    <div class="video-card-title">A Loving Family</div>
                    <p class="video-card-desc">The bond that authorities are breaking</p>
                </div>
            </div>
            
            <div class="video-card">
                <video controls playsinline preload="metadata">
                    <source src="/assets/videos/family3.MP4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <div class="video-card-overlay">
                    <div class="video-card-title">Childhood Joy</div>
                    <p class="video-card-desc">What these children have lost</p>
                </div>
            </div>
        </div>
        
        <div class="quote-block" style="margin-top: 3rem;">
            "These children were healthy, happy, and thriving. Now they're showing signs of trauma caused by the very intervention that was supposed to 'protect' them."
            <cite>— From psychological assessment findings</cite>
        </div>
    </div>
</section>

<!-- What People Say About This Family -->
<section class="section" style="background: var(--color-gray-50);">
    <div class="container">
        <div class="section-header">
            <h2>What People Say About This Family</h2>
            <p>Testimonials from people who know the Birmingham-Trevallion family</p>
        </div>
        
        <div class="testimonial-gallery" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
            <div class="testimonial-card" style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow-md);">
                <img src="/assets/images/testimonials/photo_2026-01-11_21-41-12.jpg" alt="Testimonial" style="width: 100%; height: auto;">
            </div>
            <div class="testimonial-card" style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow-md);">
                <img src="/assets/images/testimonials/photo_2026-01-11_21-41-16.jpg" alt="Testimonial" style="width: 100%; height: auto;">
            </div>
            <div class="testimonial-card" style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow-md);">
                <img src="/assets/images/testimonials/photo_2026-01-11_21-41-19.jpg" alt="Testimonial" style="width: 100%; height: auto;">
            </div>
            <div class="testimonial-card" style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow-md);">
                <img src="/assets/images/testimonials/photo_2026-01-11_21-41-21.jpg" alt="Testimonial" style="width: 100%; height: auto;">
            </div>
            <div class="testimonial-card" style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow-md);">
                <img src="/assets/images/testimonials/photo_2026-01-11_21-41-26.jpg" alt="Testimonial" style="width: 100%; height: auto;">
            </div>
            <div class="testimonial-card" style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow-md);">
                <img src="/assets/images/testimonials/photo_2026-01-11_21-41-28.jpg" alt="Testimonial" style="width: 100%; height: auto;">
            </div>
        </div>
        
        <div class="text-center mt-2">
            <p style="color: var(--color-gray-600); font-style: italic;">These are real messages from people who know the family personally.</p>
        </div>
    </div>
</section>

<!-- Media Coverage Section -->
<section class="section">
    <div class="container">
        <div class="section-header">
            <h2>📰 In The Press</h2>
            <p>Major Italian newspapers are covering this story</p>
        </div>
        
        <div class="press-gallery" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
            <div class="press-card" style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow-lg);">
                <img src="/assets/images/photo_2026-01-30_21-50-16.jpg" alt="Corriere della Sera" style="width: 100%; height: auto;">
                <div style="padding: 1rem;">
                    <span style="background: var(--color-accent); color: white; padding: 0.2rem 0.6rem; border-radius: 1rem; font-size: 0.7rem; font-weight: 600;">CORRIERE DELLA SERA</span>
                    <p style="color: var(--color-gray-700); font-weight: 600; font-size: 0.9rem; margin: 0.5rem 0 0.5rem 0;">"Those who don't conform get put under guardianship"</p>
                    <p style="color: var(--color-gray-600); font-size: 0.8rem; margin: 0; line-height: 1.4;">Author Susanna Tamaro compares the Birmingham-Trevallion case to Vittorio Sgarbi, arguing that people with talent and intelligence outside the norm face persecution. She questions why the state decides to put children under guardianship when families don't conform to bureaucratic standards.</p>
                </div>
            </div>
            
            <div class="press-card" style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow-lg);">
                <img src="/assets/images/photo_2026-01-30_21-49-52.jpg" alt="Il Centro" style="width: 100%; height: auto;">
                <div style="padding: 1rem;">
                    <span style="background: var(--color-primary); color: white; padding: 0.2rem 0.6rem; border-radius: 1rem; font-size: 0.7rem; font-weight: 600;">IL CENTRO</span>
                    <p style="color: var(--color-gray-700); font-weight: 600; font-size: 0.9rem; margin: 0.5rem 0 0.5rem 0;">"She's hostile, must be revoked immediately"</p>
                    <p style="color: var(--color-gray-600); font-size: 0.8rem; margin: 0; line-height: 1.4;">Full-page report on the formal eight-page complaint submitted to the Professional Order of Social Workers, challenging the social worker's conduct. The family's lawyers argue the social worker is hostile and should be immediately removed from the case.</p>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-2">
            <a href="/media/" class="btn btn-outline">View All Media Coverage →</a>
        </div>
    </div>
</section>

<!-- The Three False Claims -->
<section class="section section-dark">
    <div class="container">
        <div class="section-header">
            <h2>The Three False Claims</h2>
            <p style="color: var(--color-gray-400);">Each official justification has been disproven by Italian authorities themselves</p>
        </div>
        
        <div class="container-narrow">
            <div class="evidence-grid">
                <div class="evidence-card verified" style="background: rgba(255,255,255,0.05); border-left-color: #ef4444;">
                    <div class="evidence-header">
                        <h4 style="color: white;">❌ Claim #1: "Children not vaccinated"</h4>
                        <span class="evidence-badge badge-disputed">DISPROVEN</span>
                    </div>
                    <p style="color: var(--color-gray-300);"><strong style="color: white;">The Assembly of Chieti and Teramo confirmed the children were vaccinated.</strong></p>
                    <p class="evidence-source" style="color: var(--color-gray-500);">Source: Official regional health authority records</p>
                </div>
                
                <div class="evidence-card verified" style="background: rgba(255,255,255,0.05); border-left-color: #ef4444;">
                    <div class="evidence-header">
                        <h4 style="color: white;">❌ Claim #2: "Children not educated"</h4>
                        <span class="evidence-badge badge-disputed">DISPROVEN</span>
                    </div>
                    <p style="color: var(--color-gray-300);"><strong style="color: white;">The Ministry of Education confirmed the children were legally educated using Steiner pedagogy.</strong></p>
                    <p class="evidence-source" style="color: var(--color-gray-500);">Following the legal parental instruction framework used by over 15,000 families in Italy.</p>
                </div>
                
                <div class="evidence-card verified" style="background: rgba(255,255,255,0.05); border-left-color: #ef4444;">
                    <div class="evidence-header">
                        <h4 style="color: white;">❌ Claim #3: "House unsafe"</h4>
                        <span class="evidence-badge badge-disputed">DISPROVEN</span>
                    </div>
                    <p style="color: var(--color-gray-300);"><strong style="color: white;">A certified geometer confirmed the structure is not at risk.</strong></p>
                    <p class="evidence-source" style="color: var(--color-gray-500);">Source: Professional structural assessment</p>
                </div>
            </div>
            
            <div class="alert alert-warning" style="margin-top: 2rem; background: rgba(245, 158, 11, 0.1); border-color: rgba(245, 158, 11, 0.3);">
                <strong style="color: #fbbf24;">The Question Nobody Can Answer:</strong> 
                <span style="color: var(--color-gray-300);">If all three official justifications have been proven false, on what legal basis do these children remain separated from their parents?</span>
            </div>
            
            <div class="text-center mt-2">
                <a href="/evidence/" class="btn btn-primary">View Complete Evidence →</a>
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
                    <h2 style="color: white;">The Documented Harm</h2>
                    <p style="color: var(--color-gray-300); font-size: 1.1rem;">A qualified psychologist conducted an assessment of the children after their removal. The findings were significant enough that the psychologist held a formal press conference.</p>
                    
                    <div style="background: rgba(220, 38, 38, 0.2); border-left: 4px solid #dc2626; padding: 1.5rem; border-radius: 0.5rem; margin: 1.5rem 0;">
                        <h4 style="color: #fca5a5; margin-bottom: 0.5rem;">Key Finding:</h4>
                        <p style="color: white; font-size: 1.1rem; margin: 0;">The children are now exhibiting <strong>self-harm behaviors</strong> that <strong>did not exist before the separation</strong>.</p>
                    </div>
                    
                    <p style="color: var(--color-gray-300);">Before the removal, these children were described as healthy, happy, and thriving. They lived outdoors, learned from nature, and had limited screen time.</p>
                    
                    <p style="color: var(--color-gray-300);"><strong style="color: white;">The "protection" is causing the harm.</strong></p>
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
            <h2>Want To Do Something Right Now?</h2>
            <p>You don't need to donate. You don't need to sign up for anything.</p>
        </div>
        
        <!-- The One Thing CTA -->
        <div style="background: linear-gradient(135deg, #1e3a5f, #2d5a8a); border-radius: 1.5rem; padding: 3rem; text-align: center; max-width: 800px; margin: 0 auto;">
            <h3 style="color: #f59e0b; font-size: 1.5rem; margin-bottom: 1rem;">We don't need your money. We don't need your data.</h3>
            <h2 style="color: white; font-size: 2rem; margin-bottom: 1.5rem;">We just need you to share this link.</h2>
            
            <p style="color: var(--color-gray-300); font-size: 1.2rem; margin-bottom: 1.5rem;">One share to the right person could change everything. A journalist. An official. Someone who knows someone.</p>
            
            <p style="color: white; font-size: 1.1rem; margin-bottom: 2rem;"><strong>Sharing this with five people you trust is worth more than any donation we could ask for.</strong></p>
            
            <div style="background: rgba(255,255,255,0.1); border-radius: 0.5rem; padding: 1rem; margin-bottom: 1.5rem;">
                <code style="color: #f59e0b; font-size: 1.1rem; word-break: break-all;">truthprotectstheinnocent.quantummerlin.com</code>
            </div>
            
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <button onclick="navigator.clipboard.writeText('truthprotectstheinnocent.quantummerlin.com').then(()=>this.textContent='✓ Copied!')" class="btn btn-primary btn-lg" style="background: white; color: var(--color-primary); min-width: 200px;">📋 Copy Link</button>
                <a href="https://wa.me/?text=Three%20children%20separated%20from%20loving%20parents.%20Three%20official%20reasons.%20All%20three%20proven%20false.%20truthprotectstheinnocent.quantummerlin.com" class="btn btn-lg" style="background: #25D366; color: white;">💬 WhatsApp</a>
            </div>
            
            <p style="color: var(--color-gray-400); font-size: 0.9rem; margin-top: 2rem; margin-bottom: 0;">Think of 5 people who would care about this. Send it now, before you forget.</p>
        </div>
        
        <!-- Secondary Actions -->
        <div class="action-grid" style="margin-top: 3rem;">
            <div class="action-card">
                <div class="action-icon">📧</div>
                <h3>Email Officials</h3>
                <p>Ready to do more? Send a letter directly to Italian parliamentary officials.</p>
                <a href="/action/#email" class="btn btn-outline">Get The Letter</a>
            </div>
            
            <div class="action-card">
                <div class="action-icon">📢</div>
                <h3>Social Media</h3>
                <p>Share on your platforms with ready-made posts and #TruthProtectsTheInnocent</p>
                <a href="/action/#share" class="btn btn-outline">Share Templates</a>
            </div>
            
            <div class="action-card">
                <div class="action-icon">📰</div>
                <h3>Contact Media</h3>
                <p>Know a journalist? This story deserves coverage. Pass it on.</p>
                <a href="/action/#media" class="btn btn-outline">Media Resources</a>
            </div>
            
            <div class="action-card">
                <div class="action-icon">🙏</div>
                <h3>Prayer & Meditation</h3>
                <p>Join thousands focusing intention: <strong>children home before Nathan's birthday (Feb 24)</strong>. All traditions welcome.</p>
                <a href="https://worldwidemeditation.quantummerlin.com" target="_blank" class="btn btn-outline">Join Meditation</a>
            </div>
        </div>
    </div>
</section>

<!-- FAQ Teaser - Addressing Media Misrepresentations -->
<section class="section">
    <div class="container">
        <div class="container-narrow">
            <div class="section-header">
                <span class="hero-badge" style="background: rgba(245, 158, 11, 0.15); color: #f59e0b; margin-bottom: 1rem;">📋 Complete Context</span>
                <h2>Questions About Media Coverage?</h2>
                <p>Some reporting has been incomplete or taken out of context. Get the full story.</p>
            </div>
            
            <div style="background: linear-gradient(135deg, #f8fafc, #f1f5f9); border-radius: 1.5rem; padding: 2.5rem; margin: 2rem 0; box-shadow: var(--shadow-lg);">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
                    <div style="display: flex; gap: 1rem; align-items: flex-start;">
                        <div style="background: rgba(239, 68, 68, 0.1); color: #dc2626; width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0;">❌</div>
                        <div>
                            <strong style="color: var(--color-gray-700);">"No bathroom = neglect"</strong>
                            <p style="color: var(--color-gray-600); font-size: 0.9rem; margin: 0.25rem 0 0 0;">Reality: Composting toilets are legal worldwide. Full bathroom now installed.</p>
                        </div>
                    </div>
                    <div style="display: flex; gap: 1rem; align-items: flex-start;">
                        <div style="background: rgba(239, 68, 68, 0.1); color: #dc2626; width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0;">❌</div>
                        <div>
                            <strong style="color: var(--color-gray-700);">"Children not educated"</strong>
                            <p style="color: var(--color-gray-600); font-size: 0.9rem; margin: 0.25rem 0 0 0;">Reality: Legal Steiner education, confirmed by Ministry of Education.</p>
                        </div>
                    </div>
                    <div style="display: flex; gap: 1rem; align-items: flex-start;">
                        <div style="background: rgba(239, 68, 68, 0.1); color: #dc2626; width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0;">❌</div>
                        <div>
                            <strong style="color: var(--color-gray-700);">"Extreme lifestyle"</strong>
                            <p style="color: var(--color-gray-600); font-size: 0.9rem; margin: 0.25rem 0 0 0;">Reality: Values-based sustainable living, increasingly common worldwide.</p>
                        </div>
                    </div>
                    <div style="display: flex; gap: 1rem; align-items: flex-start;">
                        <div style="background: rgba(239, 68, 68, 0.1); color: #dc2626; width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0;">❌</div>
                        <div>
                            <strong style="color: var(--color-gray-700);">"Unqualified parents"</strong>
                            <p style="color: var(--color-gray-600); font-size: 0.9rem; margin: 0.25rem 0 0 0;">Reality: Both professionally trained. Assessments confirmed high capability.</p>
                        </div>
                    </div>
                </div>
                
                <div style="text-align: center; padding-top: 1rem; border-top: 1px solid rgba(0,0,0,0.1);">
                    <p style="color: var(--color-gray-600); margin-bottom: 1rem;">Media coverage is often incomplete. Get complete, factual information.</p>
                    <a href="/faq/" class="btn btn-primary btn-lg">📋 Read Full FAQ →</a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- International Attention -->
<section class="section" style="background: var(--color-gray-50);">
    <div class="container">
        <div class="container-narrow">
            <div class="section-header">
                <h2>International Attention</h2>
                <p>This case has attracted attention at the highest levels</p>
            </div>
            
            <div class="stats-grid" style="margin-bottom: 2rem;">
                <div class="stat-card" style="background: white; box-shadow: var(--shadow-md);">
                    <div class="stat-number" style="color: var(--color-primary);">🇦🇺</div>
                    <div class="stat-label" style="color: var(--color-gray-600);">Australian Embassy Aware</div>
                </div>
                <div class="stat-card" style="background: white; box-shadow: var(--shadow-md);">
                    <div class="stat-number" style="color: var(--color-primary);">🇮🇹</div>
                    <div class="stat-label" style="color: var(--color-gray-600);">Italian Officials Contacted</div>
                </div>
                <div class="stat-card" style="background: white; box-shadow: var(--shadow-md);">
                    <div class="stat-number" style="color: var(--color-primary);">🌍</div>
                    <div class="stat-label" style="color: var(--color-gray-600);">Worldwide Support Growing</div>
                </div>
            </div>
            
            <p class="text-center" style="font-size: 1.1rem;">The family cannot speak publicly while legal proceedings are ongoing. <strong>But we can.</strong></p>
            <p class="text-center">Public pressure and international attention are essential to ensuring this case receives fair treatment.</p>
        </div>
    </div>
</section>

<!-- Final CTA -->
<section class="section section-dark" style="text-align: center;">
    <div class="container">
        <div class="container-narrow">
            <h2>The Truth Must Be Told</h2>
            <p style="font-size: 1.2rem; color: var(--color-gray-300); margin-bottom: 2rem;">Three children are separated from their parents based on claims that have been proven false. They are now showing documented psychological harm. This is not child protection — this is injustice.</p>
            
            <div class="hero-cta">
                <a href="/evidence/" class="btn btn-primary btn-lg">See The Evidence</a>
                <a href="/action/" class="btn btn-secondary btn-lg">Take Action Now</a>
            </div>
            
            <p style="margin-top: 2rem; color: var(--color-gray-500);">Bookmark this site for updates. Share it with others who believe in justice.</p>
        </div>
    </div>
</section>

<style>
/* Responsive grid fix for impact section */
@media (max-width: 900px) {
    .impact-section [style*="grid-template-columns: 1fr 1fr"] {
        grid-template-columns: 1fr !important;
    }
}
</style>