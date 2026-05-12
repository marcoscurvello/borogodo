# Borogodó Site

This repository contains a small static website for the Borogodó iOS app. It is intended to be deployed with GitHub Pages and includes a dedicated support page suitable for the App Store Support URL.

## Local setup

Install dependencies:

```bash
npm install
```

Run Tailwind in watch mode while editing:

```bash
npm run watch:css
```

## Production CSS build

Generate the committed CSS file:

```bash
npm run build:css
```

## GitHub Pages publishing

Enable GitHub Pages in the repository settings with:

- Branch: `main`
- Folder: `/ (root)`

## Expected URLs

- Home: https://marcoscurvello.github.io/borogodo/
- Support: https://marcoscurvello.github.io/borogodo/support/
