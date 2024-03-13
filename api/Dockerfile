# Stage 1: Base Image
FROM node:18 as base
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
EXPOSE 3001

# Stage 2: Builder Image
FROM base as builder
COPY . .
COPY .env .env.development ./
RUN npm run build

# Stage 3: Production Image
FROM base as production
COPY --from=builder /usr/src/app/dist /usr/src/app/dist
COPY --from=builder /usr/src/app/.env /usr/src/app/.env
CMD ["npm", "run", "start:prod"]

# Stage 4: Development Image
FROM base as dev
COPY . .
COPY .env .env.development ./
RUN npm install --only=development
CMD ["npm", "run", "start:dev"]
