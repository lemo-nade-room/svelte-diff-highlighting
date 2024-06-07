import { Language } from '$lib/scripts/language.js';

export interface Sample {
	code: string;
	lang: Language;
}

export const samples: readonly Sample[] = [
	{
		code: `if myItem = 0 then
	display dialog "I don't have something to bring" buttons {"OK"} default button "OK"
end if`,
		lang: Language.appleScript
	},
	{
		code: `[ -r ~/.profile ] && . ~/.profile             # set up environment, once, Bourne-sh syntax only
if [ -n "$PS1" ] ; then                       # are we interactive?
   [ -r ~/.bashrc     ] && . ~/.bashrc        # tty/prompt/function setup for interactive shells
   [ -r ~/.bash_login ] && . ~/.bash_login    # any at-login tasks for login shell only
fi                                            # End of "if" block`,
		lang: Language.bash
	},
	{
		code: `public class DataStore<T>
{
    private T[] items = new T[10];
    private int count = 0;

    public void Add(T item)
    {
        items[count++] = item;
    }

    public T Get(int index)
    {
        return items[index];
    }
}`,
		lang: Language.csharp
	},
	{
		code: `#include <stdio.h>

int main(void)
{
    printf("hello, world\\n");
}`,
		lang: Language.c
	},
	{
		code: `#include <iostream>

int main()
{
    std::cout << "Hello, world!\\n";
}`,
		lang: Language.cpp
	},
	{
		code: `body {
   overflow: hidden;
   background: #000 url(images/bg.gif) no-repeat left top;
}`,
		lang: Language.css
	},
	{
		code: `int fibonacci(int n) {
  return n < 2 ? n : (fibonacci(n - 1) + fibonacci(n - 2));
}`,
		lang: Language.dart
	},
	{
		code: `ARG CODE_VERSION=latest
FROM ubuntu: \${CODE_VERSION}
COPY ./examplefile.txt /examplefile.txt
ENV MY_ENV_VARIABLE="example_value"
RUN apt-get update

# Mount a directory from the Docker volume
# Note: This is usually specified in the 'docker run' command.
VOLUME ["/myvolume"]

# Expose a port (22 for SSH)
EXPOSE 22`,
		lang: Language.dockerfile
	},
	{
		code: `type Person(name : string, age : int) =
    member x.Name = name
    member x.Age = age`,
		lang: Language.fsharp
	},
	{
		code: `var shp Shape = Square{5}
square, ok := shp.(Square) // Asserts Square type on shp, should work
if ok {
	fmt.Printf("%#v\\n", square)
} else {
	fmt.Println("Can't print shape as Square")
}`,
		lang: Language.go
	},
	{
		code: `<input type="text"> <!-- This is for text input -->
<input type="file"> <!-- This is for uploading files -->
<input type="checkbox"> <!-- This is for checkboxes -->`,
		lang: Language.xml
	},
	{
		code: `primes = filterPrime [2..] where
  filterPrime (p:xs) =
    p : filterPrime [x | x <- xs, x \`mod\` p /= 0]`,
		lang: Language.haskell
	},
	{
		code: `{
  "first_name": "John",
  "last_name": "Smith",
  "is_alive": true,
  "age": 27,
  "address": {
    "street_address": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postal_code": "10021-3100"
  },
  "phone_numbers": [
    {
      "type": "home",
      "number": "212 555-1234"
    },
    {
      "type": "office",
      "number": "646 555-4567"
    }
  ],
  "children": [
    "Catherine",
    "Thomas",
    "Trevor"
  ],
  "spouse": null
}`,
		lang: Language.json
	},
	{
		code: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}`,
		lang: Language.java
	},
	{
		code: `const counter = function() {
    let count = 0;
    return function() {
        return ++count;
    }
};`,
		lang: Language.javascript
	},
	{
		code: `fun main(args: Array<String>) {
    for (arg in args)
        println(arg)
}`,
		lang: Language.kotlin
	},
	{
		code: `\\\\documentclass{article} % Starts an article
\\\\usepackage{amsmath} % Imports amsmath
\\\\title{\\\\LaTeX} % Title

\\\\begin{document} % Begins a document
  \\\\maketitle
  \\\\LaTeX{} is a document preparation system for
  the \\\\TeX{} typesetting program. It offers
  programmable desktop publishing features and
  extensive facilities for automating most
  aspects of typesetting and desktop publishing,
  including numbering and cross-referencing,
  tables and figures, page layout,
  bibliographies, and much more. \\\\LaTeX{} was
  originally written in 1984 by Leslie Lamport
  and has become the dominant method for using
  \\\\TeX; few people write in plain \\\\TeX{} anymore.
  The current version is \\\\LaTeXe.

  % This is a comment, not shown in final output.
  % The following shows typesetting power of LaTeX:
  \\\\begin{align}
    E_0 &= mc^2 \\\\\\\\
    E &= \\\\frac{mc^2}{\\\\sqrt{1-\\\\frac{v^2}{c^2}}}
  \\\\end{align} 
\\\\end{document}`,
		lang: Language.latex
	},
	{
		code: `.SUFFIXES: .txt .html

# From .html to .txt
.html.txt:
	lynx -dump $<   >   $@`,
		lang: Language.makefile
	},
	{
		code: `A [link](http://example.com).

![Image](Icon-pictures.png "icon")

> Markdown uses email-style
characters for blockquoting.
>
> Multiple paragraphs need to be prepended individually.

Most inline <abbr title="Hypertext Markup Language">HTML</abbr> tags are supported.`,
		lang: Language.markdown
	},
	{
		code: `<?php
    $name = 'John';  // variable of string type being declared and initialized
    $age = 18;       // variable of integer type being declared and initialized
    $height = 5.3;   // variable of double type being declared and initialized
    echo $name . ' is ' . $height . "m tall\\n"; // concatenating variables and strings
    echo "$name is $age years old."; // interpolating variables to string
?>`,
		lang: Language.php
	},
	{
		code: `#!/usr/bin/perl
use strict;
use warnings;

my ( $remaining, $total );

$remaining = $total = shift(@ARGV);

STDOUT->autoflush(1);

while ( $remaining ) {
    printf ( "Remaining %s/%s \\r", $remaining--, $total );
    sleep 1;
}

print "\\n";`,
		lang: Language.perl
	},
	{
		code: `n = int(input('Type a number, and its factorial will be printed: '))

if n < 0:
    raise ValueError('You must enter a non-negative integer')

factorial = 1
for i in range(2, n + 1):
    factorial *= i

print(factorial)`,
		lang: Language.python
	},
	{
		code: `if "fablic".length > 3
  puts 'ya'
else
  puts 'nop'
end`,
		lang: Language.ruby
	},
	{
		code: `fn main() {
    // Defining a mutable variable with 'let mut'
    // Using the macro vec! to create a vector
    let mut values = vec![1, 2, 3, 4];

    for value in &values {
        println!("value = {}", value);
    }

    if values.len() > 5 {
        println!("List is longer than five items");
    }

    // Pattern matching
    match values.len() {
        0 => println!("Empty"),
        1 => println!("One value"),
        // pattern matching can use ranges of integers
        2..=10 => println!("Between two and ten values"),
        11 => println!("Eleven values"),
        // A \`_\` pattern is called a "wildcard", it matches any value
        _ => println!("Many values"),
    };

    // while loop with predicate and pattern matching using let
    while let Some(value) = values.pop() {
        println!("value = {value}"); // using curly brackets to format a local variable
    }
}`,
		lang: Language.rust
	},
	{
		code: `$base-color: #036;

@for $i from 1 through 3 {
  ul:nth-child(3n + #{$i}) {
    background-color: lighten($base-color, $i * 5%);
  }
}`,
		lang: Language.scss
	},
	{
		code: `ALTER TABLE Customers
ADD Email varchar(255);`,
		lang: Language.sql
	}
];
