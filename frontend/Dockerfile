FROM node:22.14.0-alpine
WORKDIR /app
COPY package.json ./
COPY . .
EXPOSE 5173
CMD ["npm", "run", "preview"]
