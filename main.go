package main

import (
	"context"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
)

func main() {

	initConfig()
	mongoClient := getClient(viper.GetString("mongo.uri"))
	err := mongoClient.Ping(context.TODO(), nil)

	collection := mongoClient.Database("test").Collection("test")

	if err != nil {
		log.Fatal(err)
	}

	r := gin.Default()
	r.GET("/user/:name", func(c *gin.Context) {
		name := c.Param("name")

		insertResult, err := collection.InsertOne(context.TODO(), Trainer{name, 10, "Pallet Town"})
		if err != nil {
			log.Fatal(err)
		}

		c.String(http.StatusOK, "Inserted a single document for %s: %s", name, insertResult.InsertedID)
	})

	r.Run()
}
