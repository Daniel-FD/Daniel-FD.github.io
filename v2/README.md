# danielfiuza.com v2

Next-gen personal site built with Astro + Tailwind CSS.

## Quick Start

```bash
cd v2
npm install
npm run dev
```

Opens at `http://localhost:4321`

## Deploy (replace current Hugo site)

```bash
npm run build
# Copy build output to docs/ (replacing Hugo output)
rm -rf ../docs/*
cp -r dist/* ../docs/
echo "danielfiuza.com" > ../docs/CNAME
# Commit and push to main
```

## Stack

- **Astro** — zero-JS by default, island architecture
- **Tailwind CSS** — utility-first styling
- **GSAP** — scroll animations (ready to add)
- **JetBrains Mono + Inter** — typography
