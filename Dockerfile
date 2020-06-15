FROM golang

WORKDIR /go/src/app

RUN go get -v

CMD app
