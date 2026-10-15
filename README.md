# Redux React Tutorial

Lernprojekt zu Redux, Actions, Reducern und unveränderlichen Zustandsänderungen. Die ausführbare Webpack-Demo liegt im Unterordner webpack-demo.

## Umfang

- Beispielzustand für hinzugefügte und erledigte Bugs
- Action-Creator und Reducer
- Webpack-Demo mit optionalem Express-Entwicklungsserver

## Wartungsstand

Die Sicherheits- und Abhängigkeitsänderungen werden in [PR #1](https://github.com/awon20/redux-react-tuto/pull/1) verfolgt. Sie sind noch nicht in den Quellcode-Hauptbranch übernommen. Die README-Ergänzung führt diesen Pull Request nicht zusammen.

## Lokal starten

Die folgenden Befehle verwenden ausdrücklich den vorbereiteten Wartungsbranch. Dessen Änderungen sind noch in Prüfung; offene Paketwarnungen stehen im zugehörigen PR. Der bisherige Hauptbranch verwendet teilweise ältere Build-Werkzeuge und kann mit neueren Node-Versionen fehlschlagen.

Voraussetzungen: Git, Node.js und npm. Die lokalen Web-Builds des Wartungsstands wurden mit Node.js 24.19.0 und npm 11.21.0 geprüft. Ein erfolgreicher Build bedeutet keine vollständige Behebung aller Paketwarnungen.

```sh
git clone --branch codex/security-maintenance-2026-10-13 https://github.com/awon20/redux-react-tuto.git
cd redux-react-tuto
npm ci --ignore-scripts
cd webpack-demo
npm ci --ignore-scripts
npm start
```

Die vom Entwicklungsserver ausgegebene lokale Adresse öffnen. Zum Beenden im Terminal `Ctrl+C` drücken.

## Build und Prüfungen

Im Ordner `webpack-demo`:

```sh
npm run build
npm audit
```

Der Build schreibt nach `webpack-demo/dist/`. `npm test` ist dort lediglich ein Platzhalter und keine vorhandene Testsuite. Das Root-Paket besitzt keine Start- oder Build-Skripte.

## Projektstruktur

- [`webpack-demo/src`](https://github.com/awon20/redux-react-tuto/tree/main/webpack-demo/src)
- [`webpack-demo/webpack.config.js`](https://github.com/awon20/redux-react-tuto/blob/main/webpack-demo/webpack.config.js)
- [`webpack-demo/server.js`](https://github.com/awon20/redux-react-tuto/blob/main/webpack-demo/server.js)
- [`package.json`](https://github.com/awon20/redux-react-tuto/blob/main/package.json)

## Beiträge

Änderungen mit einer kurzen Beschreibung und passenden Prüfergebnissen als Pull Request einreichen. Keine Zugangsdaten, privaten Schlüssel oder lokalen Abhängigkeitsordner hinzufügen.
