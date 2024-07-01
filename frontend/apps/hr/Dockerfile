# Stage 1: Base
FROM node:20-alpine AS base

# Stage 2: Builder
FROM base AS builder
RUN apk update
RUN apk add --no-cache libc6-compat

WORKDIR /app
RUN npm install -g turbo
COPY . .
RUN turbo prune --scope=hr --docker

# Stage 3: Installer
FROM base AS installer
RUN apk update && apk add --no-cache libc6-compat

WORKDIR /app
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/package-lock.json ./package-lock.json
RUN npm ci

COPY --from=builder /app/out/full/ .
RUN npx turbo run build --filter=hr...

# Stage 4: Runner
FROM nginx:stable-alpine AS runner
COPY --from=installer /app/apps/hr/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY /apps/hr/nginx.conf /etc/nginx/nginx.conf


# # Stage 1: Base
# FROM node:20-alpine AS base

# # Stage 2: Builder
# FROM base AS builder
# RUN apk update
# RUN apk add --no-cache libc6-compat

# WORKDIR /app
# RUN npm install -g turbo
# COPY . .
# RUN turbo prune hr --docker

# # Stage 3: Installer
# FROM base AS installer
# RUN apk update && apk add --no-cache libc6-compat

# WORKDIR /app
# COPY .gitignore .gitignore
# COPY --from=builder /app/out/json/ .
# COPY --from=builder /app/out/package-lock.json ./package-lock.json
# RUN npm ci

# COPY --from=builder /app/out/full/ .
# RUN npx turbo run build --filter=hr...

# # Stage 4: Runner
# FROM base AS runner
# WORKDIR /app
# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 vitejs
# USER vitejs


