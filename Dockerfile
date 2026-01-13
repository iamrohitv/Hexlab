FROM node:20-slim AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Build the app
COPY . .
RUN npm run build

# Run stage
FROM node:20-slim AS run
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Copy production artifacts
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next

EXPOSE 3000
CMD ["npm", "run", "start"]

# docker run --rm -p 3000:3000 --env-file .env.production next-saas:latest