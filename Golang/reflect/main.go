package main

import (
	"fmt"
	"reflect"
)

type User struct {
	Id   int
	Name string `gtable:"name"`
	Age  int
	Cats []string
}

func (u User) ReflectCallFunc() {
	fmt.Println("Allen.Wu ReflectCallFunc")
}

func main() {
	user := User{1, "Allen.Wu", 25, nil}
	DoFiledAndMethod(user)
	fmt.Println("---> Ptr <---")
	DoFiledAndMethod(&user)
}

// 通过接口来获取任意参数，然后一一揭晓
func DoFiledAndMethod(input interface{}) {
	getType := reflect.TypeOf(input)
	if getType.Kind() == reflect.Ptr {
		getType = getType.Elem()
	}

	fmt.Printf("Name: %v, Kind: %v,  NumField: %d\n", getType.Name(), getType.Kind(), getType.NumField())

	getValue := reflect.ValueOf(input)
	fmt.Printf("valueType: %v, valuekind: %v\n", getValue.Type(), getValue.Kind())
	if getValue.Kind() == reflect.Ptr {
		getValue = getValue.Elem()
	}

	// 获取方法字段
	// 1. 先获取interface的reflect.Type，然后通过NumField进行遍历
	// 2. 再通过reflect.Type的Field获取其Field
	// 3. 最后通过Field的Interface()得到对应的value
	for i := 0; i < getType.NumField(); i++ {
		field := getType.Field(i)
		value := getValue.Field(i).Interface()
		fmt.Printf("name: %v, type: %v, kind:%v, value: %v, tag: %v\n", field.Name, field.Type, field.Type.Kind(), value, field.Tag)
	}

	// 根据实例类型创建一个实例，其类型为指针，是个reflect.Value类型的
	newInput := reflect.New(getType)
	fmt.Printf("newInput Type: %v, newInput Kind: %v\n", newInput.Type(), newInput.Kind())

	// 获取方法
	// 1. 先获取interface的reflect.Type，然后通过.NumMethod进行遍历
	// for i := 0; i < getType.NumMethod(); i++ {
	// 	m := getType.Method(i)
	// 	fmt.Printf("%s: %v\n", m.Name, m.Type)
	// }
}
