# pin2map MapLibre – isolierter Test

Dieses Repository enthält ausschließlich die technische MapLibre-Testkarte mit drei fest programmierten Beispiel-Pins. Es lädt keine gespeicherten pin2map-Daten und hat keinen Service Worker.

## GitHub Pages aktivieren

1. In diesem Repository **Settings → Pages** öffnen.
2. Unter **Build and deployment** bei **Source** `Deploy from a branch` auswählen.
3. **Branch**: `main`; **Folder**: `/(root)`; **Save**.
4. Sobald Pages den Build abgeschlossen hat, lautet die erwartete Adresse: https://pin2map.github.io/pin2map-maplibre-preview/

## Testumfang

- Darstellung der Karte und der drei Beispiel-Pins (Stuttgart, Paris, Berlin)
- Pin-Auswahl durch Antippen
- Verschieben und Zoomen der Karte mit Touchgesten
- Zoom-Schaltflächen +, − und ◎

Dies ist ausschließlich ein **Online-Prototyp** mit MapLibre GL JS 6.16.0 und den offiziellen MapLibre-Demokacheln. Keine Protomaps/PMTiles, keine Offline-Funktion, keine Synchronisation, keine bestehenden Nutzerdaten.

Quellcode der laufenden Migration: `pin2map/pin2map-new-test`, Zweig `feature/maplibre-protomaps`. Dessen `main` sowie die gesicherte Leaflet-V18-Referenz werden hier nicht verändert.
