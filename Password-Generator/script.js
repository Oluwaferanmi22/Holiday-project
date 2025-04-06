const result = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');

const randomFunc = {
  lower: () => String.fromCharCode(Math.floor(Math.random() * 26) + 97),
  upper: () => String.fromCharCode(Math.floor(Math.random() * 26) + 65),
  number: () => String.fromCharCode(Math.floor(Math.random() * 10) + 48),
  symbol: () => "!@#$%^&*()_+[]{}<>?/".charAt(Math.floor(Math.random() * 20))
};

generateBtn.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  result.value = generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol);
});

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(result.value).then(() => {
    alert("Password copied!");
  });
});

function generatePassword(length, lower, upper, number, symbol) {
  let generated = '';
  const types = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

  if (types.length === 0) return 'Choose at least one option!';

  while (generated.length < length) {
    types.forEach(type => {
      const funcName = Object.keys(type)[0];
      generated += randomFunc[funcName]();
    });
  }

  return generated.slice(0, length);
}
