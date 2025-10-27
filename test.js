const str = 'abcceddadd';
const stack = [];

for (const ch of str) {
    if (stack[stack.length - 1] === ch) {
        // 연속된 같은 문자가 나오면 제거
        stack.pop();
    } else {
        stack.push(ch);
    }
}

const result = stack.join('');
console.log(result); // abcedad
