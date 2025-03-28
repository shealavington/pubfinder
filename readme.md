# Pub Finder.

- Click on the map
- Find the closest physical pub within 2km.
- Direct distance only, path is not taken into account.

## Get Started Yourself (Development Only)

`docker run --rm --user $(id -u):$(id -g) -v $(pwd)/backend:/app -w /app node:22.14.0-alpine npm install`
`docker run --rm --user $(id -u):$(id -g) -v $(pwd)/frontend:/app -w /app node:22.14.0-alpine npm install`
`docker compose up --build -d`

Visit: http://localhost:3000/

## The Project

## Notes

Frontend (React & Vite):
- `docker run --rm --user $(id -u):$(id -g) -v $(pwd):/app -w /app node:22.14.0-alpine npm create vite@latest southernmap -- --template react-ts`

Backend (Express):
- `https://blog.logrocket.com/how-to-set-up-node-typescript-express/#setting-path-alias-using-ts-config`

Docker:
- Manually, with Stack Overflow support.

Map:
- https://react-leaflet.js.org/docs/start-installation/

Network Library:
- Axios JS (Compatible on both Frontend and Backend)
