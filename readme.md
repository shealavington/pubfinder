# Southern Map

## Get Started Yourself (Development Only)

`docker run --rm --user $(id -u):$(id -g) -v $(pwd)/backend:/app -w /app node:22.14.0-alpine npm install`
`docker run --rm --user $(id -u):$(id -g) -v $(pwd)/frontend:/app -w /app node:22.14.0-alpine npm install`
`docker compose up --build -d`

## The Project

## How I created the base architecture

Frontend:
`docker run --rm --user $(id -u):$(id -g) -v $(pwd):/app -w /app node:22.14.0-alpine npm create vite@latest southernmap -- --template react-ts`

Backend:
`https://blog.logrocket.com/how-to-set-up-node-typescript-express/#setting-path-alias-using-ts-config`

Docker:
Manually, with Stack Overflow support.
