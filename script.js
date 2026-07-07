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
                observer.unobserve(entry.target); // Stops observing once animated
            }
        });
    }, appearanceOptions);

    animatedBoxes.forEach(box => {
        appearanceObserver.observe(box);
    });
});

// ==========================================
// 2. LIVE BOT DATA STREAM ENDPOINTS (LOCAL_TUNNEL Links)
// ==========================================
const METRIC_ENDPOINTS = {
    ruby: "https://your-ruby-server.com/status",
    jivan: "https://sweet-rabbits-enter.loca.lt/status", // üí™ JIVANROSHNI link updated!
    haven: "https://petite-paws-push.loca.lt/status", 
    rubybot: "https://petite-cases-carry.loca.lt/status"
};

// ==========================================
// 3. CORE TELEMETRY SYNCRONIZATION ENGINE
// ==========================================
async function syncDashboardData() {
    
    // --- SYNC MULTIMODAL AI AGENT: RUBY AI ---
    try {
        let res = await fetch(METRIC_ENDPOINTS.ruby);
        let data = await res.json();
        let el = document.getElementById("ruby-status");
        el.className = "status-badge online";
        el.innerText = "● Active";
        document.getElementById("ruby-orb").innerText = data.orbState || "LISTENING";
    } catch(e) {
        console.log("Ruby AI Telemetry offline.");
    }

    // --- SYNC DISCORD MUSIC CORE: JIVANROSHNI ---
    try {
        let res = await fetch(METRIC_ENDPOINTS.jivan);
        let data = await res.json();
        let el = document.getElementById("jivan-status");
        el.className = "status-badge online";
        el.innerText = "● Streaming";
        document.getElementById("jivan-filter").innerText = data.filter || "BASSBOOST";
        document.getElementById("jivan-vc").innerText = data.vcName || "Active";
    } catch(e) {
        console.log("Jivanroshni Telemetry offline.");
    }

    // --- SYNC COMMUNITY TYCOON ENGINE: HAVEN IMPERIUM ---
    try {
        let res = await fetch(METRIC_ENDPOINTS.haven);
        if (!res.ok) throw new Error(`HTTP Status ${res.status}`);
        
        let data = await res.json();
        
        let el = document.getElementById("haven-status");
        el.className = "status-badge online";
        el.innerText = "● Online";
        
        document.getElementById("haven-coins").innerText = data.totalCoins || "0";
        document.getElementById("haven-tickets").innerText = data.activeTickets || "0";
        document.getElementById("haven-servers").innerText = data.guilds || "0";
    } catch(e) {
        console.error("Haven Imperium Fetch Failed:", e);
        let el = document.getElementById("haven-status");
        el.className = "status-badge offline";
        el.innerText = "○ Offline";
    }

    // --- SYNC BUSINESS AUTOMATION: RUBY DISCORD BOT ---
    try {
        let res = await fetch(METRIC_ENDPOINTS.rubybot);
        if (!res.ok) throw new Error(`HTTP Status ${res.status}`);
        
        let data = await res.json();
        
        let el = document.getElementById("rubybot-status");
        el.className = "status-badge online";
        el.innerText = "● Online";
        
        document.getElementById("rubybot-queues").innerText = data.activeQueues || "0";
        document.getElementById("rubybot-users").innerText = data.memberCount || "0";
    } catch(e) {
        console.error("Ruby Discord Bot Fetch Failed:", e);
        let el = document.getElementById("rubybot-status");
        el.className = "status-badge offline";
        el.innerText = "○ Offline";
    }
}

// ==========================================
// 4. AUTOMATIC POLLING INITIALIZER
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    syncDashboardData();
    setInterval(syncDashboardData, 15000); // Check tracking parameters every 15 seconds
});