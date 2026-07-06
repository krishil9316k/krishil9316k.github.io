// Simple Scroll Animation Hook
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
const METRIC_ENDPOINTS = {
    ruby: "https://your-ruby-server.com/status",
    jivan: "https://your-jivanroshni-server.com/status",
    haven: "https://your-haven-server.com/status",
    rubybot: "https://your-rubybot-server.com/status"
};

async function syncDashboardData() {
    // Sync RUBY AI
    try {
        let res = await fetch(METRIC_ENDPOINTS.ruby);
        let data = await res.json();
        document.getElementById("ruby-status").className = "status-badge online";
        document.getElementById("ruby-status").innerText = "● Active";
        document.getElementById("ruby-orb").innerText = data.orbState || "LISTENING";
    } catch(e) {}

    // Sync JIVANROSHNI
    try {
        let res = await fetch(METRIC_ENDPOINTS.jivan);
        let data = await res.json();
        document.getElementById("jivan-status").className = "status-badge online";
        document.getElementById("jivan-status").innerText = "● Streaming";
        document.getElementById("jivan-filter").innerText = data.filter || "BASSBOOST";
        document.getElementById("jivan-vc").innerText = data.vcName || "Active";
    } catch(e) {}

    // Sync HAVEN IMPERIUM
    try {
        let res = await fetch(METRIC_ENDPOINTS.haven);
        let data = await res.json();
        document.getElementById("haven-status").className = "status-badge online";
        document.getElementById("haven-status").innerText = "● Online";
        document.getElementById("haven-coins").innerText = data.totalCoins || "1.2M";
        document.getElementById("haven-tickets").innerText = data.activeTickets || "0";
        document.getElementById("haven-servers").innerText = data.guilds || "1";
    } catch(e) {}

    // Sync RUBY DISCORD BOT
    try {
        let res = await fetch(METRIC_ENDPOINTS.rubybot);
        let data = await res.json();
        document.getElementById("rubybot-status").className = "status-badge online";
        document.getElementById("rubybot-status").innerText = "● Online";
        document.getElementById("rubybot-queues").innerText = data.activeQueues || "0";
        document.getElementById("rubybot-users").innerText = data.memberCount || "150";
    } catch(e) {}
}

document.addEventListener("DOMContentLoaded", () => {
    syncDashboardData();
    setInterval(syncDashboardData, 15000); // Poll tracking parameters every 15s
});