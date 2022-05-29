function reverse(stringOrArray) {
    return typeof stringOrArray === 'string'
        ? stringOrArray.split('').reverse().join('')
        : stringOrArray.slice().reverse();
}
var output = reverse('abcd');
console.log(output);
