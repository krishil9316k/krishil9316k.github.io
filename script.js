// ==========================================
// 1. SIMPLE SCROLL ANIMATION INTERSECTION HOOK
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const animatedBoxes = document.querySelectorAll('.animate-box');

    const appearanceOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearanceObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                appearanceObserver.unobserve(entry.target); 
            }
        });
    }, appearanceOptions);

    animatedBoxes.forEach(box => {
        appearanceObserver.observe(box);
    });
});

// ==========================================
// 2. LIVE BOT DATA STREAM ENDPOINT (Permanent ngrok Link)
// ==========================================
const CENTRAL_API = "https://distant-penny-canon.ngrok-free.dev/status";

// ==========================================
// 3. CORE TELEMETRY SYNCHRONIZATION ENGINE
// ==========================================
async function syncDashboardData() {
    try {
        // We add the ngrok-skip-browser-warning header so ngrok sends raw JSON instead of an HTML warning page
        let res = await fetch(CENTRAL_API, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        });
        if (!res.ok) throw new Error(`HTTP Error Status: ${res.status}`);
        let data = await res.json();
        
        // --- 1. SYNC MULTIMODAL AI AGENT: RUBY AI ---
        let rubyBadge = document.getElementById("ruby-status");
        if (rubyBadge && data.ruby) {
            rubyBadge.className = "status-badge online";
            rubyBadge.innerText = "● Active";
            document.getElementById("ruby-orb").innerText = data.ruby.orbState || "IDLE";
        }

        // --- 2. SYNC DISCORD MUSIC CORE: JIVANROSHNI ---
        let jivanBadge = document.getElementById("jivan-status");
        if (jivanBadge && data.jivan) {
            jivanBadge.className = "status-badge online";
            jivanBadge.innerText = "● Streaming";
            document.getElementById("jivan-filter").innerText = data.jivan.filter || "OFF";
            document.getElementById("jivan-vc").innerText = data.jivan.vcName || "--";
        }

        // --- 3. SYNC COMMUNITY TYCOON ENGINE: HAVEN IMPERIUM ---
        let havenBadge = document.getElementById("haven-status");
        if (havenBadge && data.haven) {
            havenBadge.className = "status-badge online";
            havenBadge.innerText = "● Online";
            document.getElementById("haven-coins").innerText = data.haven.totalCoins || "0";
            document.getElementById("haven-tickets").innerText = data.haven.activeTickets || "0";
            document.getElementById("haven-servers").innerText = data.haven.guilds || "0";
        }

        // --- 4. SYNC BUSINESS AUTOMATION: RUBY DISCORD BOT ---
        let rubybotBadge = document.getElementById("rubybot-status");
        if (rubybotBadge && data.rubybot) {
            rubybotBadge.className = "status-badge online";
            rubybotBadge.innerText = "● Online";
            document.getElementById("rubybot-queues").innerText = data.rubybot.activeQueues || "0";
            document.getElementById("rubybot-users").innerText = data.rubybot.memberCount || "0";
        }

    } catch (error) {
        console.error("Central dashboard synchronization error:", error);
        
        // Fallback layout if your hub computer or tunnel is shut off
        ["ruby-status", "jivan-status", "haven-status", "rubybot-status"].forEach(id => {
            let el = document.getElementById(id);
            if (el) {
                el.className = "status-badge offline";
                el.innerText = "○ Offline";
            }
        });
    }
}

// ==========================================
// 4. AUTOMATIC POLLING INITIALIZER
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    syncDashboardData();
    setInterval(syncDashboardData, 15000); // Check tracking parameters every 15 seconds
});