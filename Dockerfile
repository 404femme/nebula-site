FROM node:22-alpine
RUN corepack enable
WORKDIR /app
COPY pnpm-lock.yaml package.json ./
RUN pnpm install
COPY . .
EXPOSE 3000 3001
CMD ["npm", "run", "dev"]