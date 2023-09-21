[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11908395&assignment_repo_type=AssignmentRepo)
# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

## My answer to the invariant question
For the loop invariant of this function, we know that the first two numbers of
the fibonacci sequence are 0 and 1. In other words regardless of what number we
pass into the fib() function the array we return will always start with [0,1]
and continue up to whatever number we use as an argument. With this in mind we
merely have to keep computing lower values of n until we get down to the base case
where n = 1 and then the if statement will trigger and end the recursive calls. 

Essentially the loop invariant is that when n < 2 the function returns [0] or [0,1].
Building on this when n >= 2 the return array will still start with [0,1] but will 
use these unchanging elements to recursively compute the nth fibonacci number. 

