ARG NODE=node:20.18.1-alpine

################# Base Builder ##############

FROM $NODE AS builder

WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

COPY . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm build --filter @shorter/web

################# Web ##############

FROM $NODE

WORKDIR /app

COPY --from=builder /app/apps/web/.output .

EXPOSE 3000

CMD ["/app/server/index.mjs"]
