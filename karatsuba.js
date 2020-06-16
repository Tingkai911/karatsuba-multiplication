// x = 20;
// y = 3;
x = 3141592653589793238462643383279502884197169399375105820974944592;
y = 2718281828459045235360287471352662497757247093699959574966967627;
console.log(karatsuba(x,y));

function karatsuba(x,y) {
    if (x.toString().length == 1 || y.toString().length == 1) {
        return x * y;
    }

    var splice = Math.max(x.toString().length, y.toString().length);
    splice = Math.floor(splice / 2);
    const ORDER = Math.pow(10, splice);

    const a = Math.floor(x / ORDER);
    const b = x % ORDER;
    const c = Math.floor(y / ORDER);
    const d = y % ORDER;

    const ac = karatsuba(a,c);
    const bd = karatsuba(b,d);
    const abcd = karatsuba((a+b),(c+d));

    return (ORDER**2)*ac + ORDER*(abcd - ac - bd) + bd;
}