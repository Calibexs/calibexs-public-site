
(function () {
  async function updateCalibexsStatus() {
    const indicator = document.getElementById("cx-status-indicator");
    if (!indicator) return;

    try {
      const res = await fetch("/system-status.json", {cache:"no-store"});
      if (!res.ok) throw new Error("Status API unavailable");
      const data = await res.json();

      if (data.overall === "operational") {
        indicator.textContent = "● Operational";
        indicator.style.color = "#4ade80";
      } else {
        indicator.textContent = "● Degraded";
        indicator.style.color = "#fbbf24";
      }
    } catch (_) {
      indicator.textContent = "● Unavailable";
      indicator.style.color = "#94a3b8";
    }
  }

  updateCalibexsStatus();
  setInterval(updateCalibexsStatus, 30000);
})();
