# Install dependencies only when needed
FROM node:16-alpine AS builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
COPY . .
RUN npm install --frozen-lockfile
RUN npm run build


FROM pierrezemb/gostatic AS runner
COPY --from=builder /dist /srv/http

CMD ["-port","8080","-https-promote", "-enable-logging"]