package main

import (
	"fmt"
	"time"

	"github.com/hashicorp/memberlist"
)

func main() {
	conf := memberlist.DefaultLocalConfig()
	list, err := memberlist.Create(conf)
	if err != nil {
		panic("Failed to create memberlist, " + err.Error())
	}

	// Join an existing cluster by specifying at least one known member.
	_, err = list.Join([]string{"10.2.218.83"})
	if err != nil {
		panic("Failed to join cluster: " + err.Error())
	}

	// Ask for members of the cluster
	for {
		fmt.Printf("Members: ")
		for _, member := range list.Members() {
			fmt.Printf("%s(%s), ", member.Name, member.Addr)
		}
		fmt.Println()

		time.Sleep(5 * time.Second)
	}
}
