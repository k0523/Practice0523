// count number of pairs in an array of same element

var arr = [11, 12, 13, 11, 14, 11, 12, 15, 12, 15];
var res = 0;

// counting number of occurences in an array of each element
// count = { '11': 3, '12': 3, '13': 1, '14': 1, '15': 2 };

var count = {};
arr.forEach(number => count[number] = (count[number] || 0) +1);

Object.values(count).forEach((ele) => {
    if (ele < 2) {
        res = res;
    } else if (ele == 2) {
        res += ele/2;
    } else if (ele > 2) {
        res += ((ele % 2) == 0) ? (ele/2) : (ele-1)/2;
    } else {
        res = 0;
    }
});

console.log('final ', res);

// res = 3 (3 pairs are available i.e., 11, 12, 15)


