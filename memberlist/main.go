package main

import (
	"fmt"
	"time"

	"github.com/hashicorp/memberlist"
)

func main() {
	list, err := memberlist.Create(memberlist.DefaultLocalConfig())
	if err != nil {
		panic("Failed to create memberlist, " + err.Error())
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
