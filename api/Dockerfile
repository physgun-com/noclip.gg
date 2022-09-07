FROM registry.semaphoreci.com/golang:1.18 as builder

COPY src/ .

RUN go mod download
RUN go mod verify
RUN go build -o sourcequery

FROM registry.semaphoreci.com/golang:1.18 as runner

COPY --from=builder "$APP_HOME"/sourcequery $APP_HOME

EXPOSE 8010
CMD ["./sourcequery"]