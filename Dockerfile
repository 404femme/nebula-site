FROM node:20-alpine

# Enable Corepack, which provides pnpm
RUN corepack enable

WORKDIR /app
COPY pnpm-lock.yaml package.json ./

RUN --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm install
COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]