let base = Number(prompt('Введите число:'));
let exponent = Number(prompt('Введите степень:')) || 2;
if (isNaN(base) || base === 0) { alert('Ошибка: Число не может быть NaN или 0.'); }
else if (isNaN(exponent) || exponent === 0) { alert('По умолчанию степень принимается равной 2.'); exponent = 2; }
else {
   let result = 1;
   for (let i = 0; i < Math.abs(exponent); i++) { result *= base; }
   if (exponent < 0) result = 1 / result;
   alert('Ответ: ' + result);
}
