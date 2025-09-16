// const maths = {
//     sum: (a, b, done) => {
//         process.nextTick(() => {
//             let c = a + b;
//             done(null, c);
//         });
//     },
//     diff: (a, b, done) => {
//         process.nextTick(() => {
//             let c = a - b;
//             done(null, c);
//         });
//     },
//     product: (a, b, done) => {
//         process.nextTick(() => {
//             let c = a * b;
//             done(null, c);
//         });
//     },
// }

// module.exports = maths;

export default function maths() {
    return {
    sum: (a, b, done) => {
        process.nextTick(() => {
            let c = a + b;
            done(null, c);
        });
    },
    diff: (a, b, done) => {
        process.nextTick(() => {
            let c = a - b;
            done(null, c);
        });
    },
    product: (a, b, done) => {
        process.nextTick(() => {
            let c = a * b;
            done(null, c);
        });
    },
    }
}
