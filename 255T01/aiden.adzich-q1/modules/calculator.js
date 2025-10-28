export const add = async (a, b, done) => {
    process.nextTick(() => {
        if (a < 0 || b < 0) {
            let err = "Cannot add a negative number"
            done(err, null);
        } else {
            let c = a + b;
            done(null, c);
        }
    });
}

export const multiply = async (a, b, done) => {
    process.nextTick(() => {
        if (a > 1000 || b > 1000) {
            let err = "Cannot multiply numbers greater than 1000"
            done(err, null);
        } else {
            let c = a * b;
            done(null, c);
        }
    });
}

export const divide = async (a, b, done) => {
    process.nextTick(() => {
        if (b == 0) {
            let err = "Cannot divide by 0"
            done(err, null);
        } else {
            let c = a / b;
            done(null, c);
        }
    });
}



