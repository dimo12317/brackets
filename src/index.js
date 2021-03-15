module.exports = function check(str, bracketsConfig) {
let result = [];
let existBracket = {};
for(let j in bracketsConfig) {
existBracket[bracketsConfig[j][0]] = bracketsConfig[j][1];
}

result.push(str.charAt(0));

for(let i = 1; i < str.length; i += 1) {
if(str.charAt(i) === existBracket[result[result.length - 1]]) {
result.pop();
} else {
result.push(str.charAt(i));
}
}
if (result.length > 0) return false;
else return true;
}
