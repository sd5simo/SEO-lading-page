# IFMEREE — Landing Page

Landing page pour IFMEREE avec module de simulation 360° du système éolien
(propulsé par Panomio).

## Stack

React + TypeScript + Vite + Tailwind CSS.

## Démarrer en local

```bash
npm install
npm run dev
```

## Remplacer le logo

Le logo est un placeholder à `src/assets/ifmeree-logo.svg`. Remplacez ce
fichier par le vrai logo IFMEREE (même nom de fichier, format SVG de
préférence) — il est utilisé automatiquement dans le header, le module de
simulation et le footer.

## Le module de simulation

`src/components/SimulationModule.tsx` gère deux couches :

1. **Splash IFMEREE** (visible par défaut) — logo, indicateur de chargement,
   bouton "Entrer dans la simulation".
2. **Iframe Panomio** (montée immédiatement mais invisible) — se charge en
   arrière-plan pendant que le visiteur voit le splash.

Le passage du splash vers la visite se fait seulement quand **les deux**
conditions sont réunies : le visiteur a cliqué sur le bouton, et l'iframe a
fini de charger (+ 1,5 s de marge). Le visiteur ne voit donc jamais l'écran de
chargement natif de Panomio.

Pour changer l'URL de la visite, éditez la constante `TOUR_URL` en haut du
fichier.

## Déploiement sur Vercel

1. Poussez ce dossier sur un repo GitHub/GitLab/Bitbucket.
2. Sur [vercel.com](https://vercel.com) → **Add New Project** → importez le
   repo.
3. Vercel détecte Vite automatiquement (build command `npm run build`,
   output `dist`) — un fichier `vercel.json` est déjà inclus pour confirmer
   ces réglages et gérer le routage SPA.
4. Déployez. Aucune variable d'environnement n'est requise.

Vous pouvez aussi déployer directement depuis votre machine avec la CLI :

```bash
npm i -g vercel
vercel
```
