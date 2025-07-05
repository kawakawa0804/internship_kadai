export const isValid = (s: string): boolean => {
  const stack: string[] = [];
  const pairs: Record<string, string> = { ')': '(', '}': '{', ']': '[' };

  for (const ch of s) {
    if (ch === '(' || ch === '{' || ch === '[') {
      stack.push(ch);
    } else if (stack.pop() !== pairs[ch]) {
      return false;
    }
  }
  return stack.length === 0;
};

if (require.main === module) {
  console.log(isValid('([]){}')); // true
  console.log(isValid('({)}'));   // false
}