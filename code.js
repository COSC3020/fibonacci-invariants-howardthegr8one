function fib(n) {
    if (n == 0)
        return [0]
    else if (n == 1)
        return [0,1]

    arr = fib(n-1)
    arr.push( arr[n-1] + arr[n-2] )
    return arr
}
