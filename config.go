package main

import (
	"fmt"

	"github.com/spf13/viper"
)

func initConfig() {

	viper.SetConfigName("config")    // name of config file (without extension)
	viper.SetConfigType("toml")      // REQUIRED if the config file does not have the extension in the name
	viper.AddConfigPath("./config/") // optionally look for config in the working directory
	viper.AddConfigPath("/etc/go/")  // optionally look for config in the working directory
	err := viper.ReadInConfig()      // Find and read the config file
	if err != nil {                  // Handle errors reading the config file
		panic(fmt.Errorf("Fatal error config file: %s", err))
	}
}
