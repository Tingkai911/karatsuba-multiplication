def main():
    x = 3141592653589793238462643383279502884197169399375105820974944592
    y = 2718281828459045235360287471352662497757247093699959574966967627
    # x = 20
    # y = 55
    print(karatsuba(x,y))

def karatsuba(x,y):
    # base case
    if len(str(x)) == 1 or len(str(y)) == 1:
        return x * y

    # recursive case to find ac, bd, (a+b)(c+d)
    splice = max(len(str(x)),len(str(y)))
    splice = splice // 2
    splice = 10**splice

    a = x // splice
    b = x % splice
    c = y // splice
    d = y % splice

    ac = karatsuba(a,c)
    bd = karatsuba(b,d)
    abcd = karatsuba((a+b),(c+d))

    return (splice**2)*ac + splice*(abcd - ac - bd) + bd


if __name__ == "__main__":
    main()