package main

import (
	"fmt"
	"reflect"
)

func Struct2Map(obj interface{}) map[string]interface{} {
	value := reflect.ValueOf(obj)

	if value.Kind() != reflect.Ptr || value.Elem().Kind() != reflect.Struct {
		panic("must prt")
	}
	value = value.Elem()
	t := value.Type()

	// 创建 map
	resultMap := make(map[string]interface{})

	// 循环获取字段名称以及对应的值
	for i := 0; i < value.NumField(); i++ {
		val := value.Field(i)
		typeName := t.Field(i)
		if !val.CanSet() {
			resultMap[typeName.Name] = reflect.New(typeName.Type).Elem().Interface()
			continue
		}
		resultMap[typeName.Name] = val.Interface()
	}

	return resultMap
}

func Struct2MapV2(obj interface{}) map[string]interface{} {
	value := reflect.ValueOf(obj)
	if value.Kind() != reflect.Struct {
		panic("must struct")
	}

	t := value.Type()
	// 创建 map
	resultMap := make(map[string]interface{})
	// 循环获取字段名称以及对应的值
	for i := 0; i < value.NumField(); i++ {
		val := value.Field(i)
		typeName := t.Field(i)
		resultMap[typeName.Name] = val.Interface()
	}

	return resultMap
}

type User struct {
	Name string
	Age  int
}

func main() {
	user := User{Name: "kdf", Age: 20}

	ret := Struct2Map(&user)
	fmt.Println(ret)

	ret = Struct2MapV2(user)
	fmt.Println(ret)
}
