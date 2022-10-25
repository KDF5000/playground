package main

import (
	"fmt"
	"reflect"
)

type User struct {
	Name string
}

func main() {
	// var a []User

	// aType := reflect.ValueOf(&a)
	// fmt.Println(aType.Type().Name(), aType.Type(), aType.Type().Kind(), aType.Elem().Kind())

	// aType := reflect.TypeOf(&a)
	// fmt.Println(aType.Elem().Elem().Name())

	// aValue := reflect.ValueOf(&a)
	// fmt.Println(aValue.Type().Elem().Elem().Name())

	a := &User{}
	fmt.Println(reflect.TypeOf(a).Elem().Kind())

}
