package main

import (
	"bufio"
	"fmt"
	"os"
	"regexp"
	"strings"
	"time"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	fmt.Println("タイトルは？")
	scanner.Scan()
	title := scanner.Text()

	fmt.Println("概要は？")
	scanner.Scan()
	description := scanner.Text()

	date := time.Now().Format(time.RFC3339)
	filename := strings.Split(date, "T")[0] + "-" + strings.ToLower(regexp.MustCompile(`[\s　]`).ReplaceAllString(title, "-"))

	file, err := os.Create("../../src/blogs/" + filename + ".mdx")
	if err != nil {
		panic(err)
	}
	text := "---\ntitle: " + title + "\ndate: " + date + "\ndescription: " + description + "\nurl: " + "/blog/" + filename + "/" + "\ntags:\n\t-\n---	\n"
	file.Write([]byte(text))
	file.Close()
}
