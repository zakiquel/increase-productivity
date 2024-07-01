FROM node:20-alpine AS base

FROM base AS builder
RUN apk update
RUN apk add --no-cache libc6-compat

WORKDIR /app
RUN npm install -g turbo
COPY . .
RUN turbo prune employee --docker

FROM base AS installer
RUN apk update && apk add --no-cache libc6-compat

WORKDIR /app
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/package-lock.json ./package-lock.json
RUN npm ci

COPY --from=builder /app/out/full/ .
RUN npx turbo run build --filter=employee...

FROM base AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer /app/apps/employee/next.config.js .
COPY --from=installer /app/apps/employee/package.json .
COPY --from=installer --chown=nextjs:nodejs /app/apps/employee/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/employee/.next/static ./apps/employee/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/employee/public ./apps/employee/public

CMD ["node", "PORT=4444", "HOSTNAME=localhost", "apps/employee/server.js"]