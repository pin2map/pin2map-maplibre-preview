// The worker is allowed only in the isolated offline-lab folder.
const readiness=document.getElementById("offlineReadiness");
function report(text){if(readiness)readiness.textContent=text;}
if ("serviceWorker" in navigator && location.protocol === "https:" &&
    location.pathname.includes("/offline-stuttgart-lab/")) {
  report("Installiere lokale Programm-, Schrift- und Symbolressourcen …");
  navigator.serviceWorker.register("./offline-stuttgart-sw.js",
    {scope:"./", updateViaCache:"none"})
    .then(()=>navigator.serviceWorker.ready)
    .then(async()=>{
      const entries=await caches.keys();
      const names=entries.filter(name=>name.startsWith("pin2map-stuttgart-lab-"));
      if(!names.length)throw Error("Kein vollständiger Ressourcen-Cache gefunden");
      const cache=await caches.open(names[names.length-1]);
      const required=[
        "./index.html","./vendor/maplibre-gl.mjs","./vendor/pmtiles.js",
        "./vendor/basemaps.js","./assets/sprites/v4/light.json",
        "./assets/fonts/Noto Sans Regular/0-255.pbf"
      ];
      for(const item of required){
        if(!await cache.match(new URL(item,location.href)))
          throw Error("Ressource nicht im Cache: "+item);
      }
      report("Programm und Kartenstil lokal verfügbar. Die PMTiles-Region muss separat gespeichert sein. Flugmodus-Test noch offen.");
    })
    .catch(error=>report("Offline-Ressourcen NICHT bereit: "+String(error?.message||error)));
}else{
  report("Offline-Service-Worker nur im separaten HTTPS-Testordner verfügbar.");
}
