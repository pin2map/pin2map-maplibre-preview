// Scope stays inside the separately hosted lab directory.
if ("serviceWorker" in navigator && location.protocol === "https:" &&
    location.pathname.includes("/offline-stuttgart-lab/")) {
  navigator.serviceWorker.register("./offline-stuttgart-sw.js",
    {scope:"./", updateViaCache:"none"}).catch(error => {
      const status=document.getElementById("status");
      if(status)status.textContent="Offline-Service-Worker nicht installiert: "+error.message;
    });
}
