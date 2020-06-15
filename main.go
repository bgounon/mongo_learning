package main

import (
	"context"
	"log"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func main() {

	initConfig()
	mongoClient := getClient(viper.GetString("mongo.uri"))
	err := mongoClient.Ping(context.TODO(), nil)

	collection := mongoClient.Database(viper.GetString("mongo.db")).Collection(viper.GetString("mongo.collection"))

	if err != nil {
		log.Fatal(err)
	}

	r := gin.Default()
	r.Use(cors.Default())

	r.GET("/users", func(c *gin.Context) {

		findOptions := options.Find()
		//findOptions.SetLimit(2)

		// Here's an array in which you can store the decoded documents
		var results []*Trainer

		// Passing bson.D{{}} as the filter matches all documents in the collection
		cur, err := collection.Find(context.TODO(), bson.D{{}}, findOptions)
		if err != nil {
			log.Print(err)
		}

		// Finding multiple documents returns a cursor
		// Iterating through the cursor allows us to decode documents one at a time
		for cur.Next(context.TODO()) {

			// create a value into which the single document can be decoded
			var elem Trainer
			err := cur.Decode(&elem)
			if err != nil {
				log.Print(err)
			}

			results = append(results, &elem)
		}

		if err := cur.Err(); err != nil {
			log.Print(err)
		}

		// Close the cursor once finished
		cur.Close(context.TODO())

		c.JSON(http.StatusOK, results)
	})

	r.POST("/user/:name", func(c *gin.Context) {
		name := c.Param("name")

		insertResult, err := collection.InsertOne(context.TODO(), Trainer{"", name, "10", "Pallet Town"})
		if err != nil {
			log.Print(err)
		}

		c.String(http.StatusOK, "Inserted a single document for %s: %s", name, insertResult.InsertedID)
	})

	r.PUT("/user/:id/:attribute/:value", func(c *gin.Context) {

		id, _ := primitive.ObjectIDFromHex(c.Param("id"))
		filter := bson.M{"_id": id}
		attribute := c.Param("attribute")
		value := c.Param("value")
		update := bson.D{{
			"$set", bson.M{attribute: value},
		},
		}

		collection.UpdateOne(context.TODO(), filter, update)

		c.String(http.StatusOK, "")
	})

	r.GET("/user/:id", func(c *gin.Context) {
		id, _ := primitive.ObjectIDFromHex(c.Param("id"))
		filter := bson.M{"_id": id}

		var result Trainer

		err = collection.FindOne(context.TODO(), filter).Decode(&result)
		if err != nil {
			log.Print(err)
		} else {
			c.JSON(http.StatusOK, result)
		}
	})

	r.Run()
}
