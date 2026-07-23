// Valid Anagram
// Тема: arrays

/**
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
export function validAnagram(s, t) {
  if (s.length !== t.length) return false;

  const objSource = {};
  const objTarget = {};

  for (let i = 0; i < s.length; i++) {
    objSource[s[i]] = (objSource[s[i]] || 0) + 1;
    objTarget[t[i]] = (objTarget[t[i]] || 0) + 1;
  }

  for (const [k, v] of Object.entries(objSource)) {
    if (v !== objTarget[k]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram("bbcc", "ccbc"));
