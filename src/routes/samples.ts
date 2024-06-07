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
	}
];
