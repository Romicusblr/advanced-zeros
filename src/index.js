module.exports = function getZerosCount(number, base) {
  const findSimpleDigits = (base) => {
    let simple = 2; //starting simple digit
    let result = {};
    do {
      if (base % simple === 0) {
        if (!result[simple]) {
          result[simple] = 0;
        }
        result[simple]++;
        base /= simple;
      } else {
        simple++;
      }
    }
    while (simple <= base);
    return result;
  }
  let simpleObj = findSimpleDigits(base);
  debugger;
  let res = 0;
  for (let key in simpleObj) {
    let counter = 0;
    let quantity = Math.floor(Math.log(number) / Math.log(key)); // quantity pow base
    for (i = 1; i <= quantity; i++) {
      counter += Math.floor(number / Math.pow(key, i));
    }
    counter /= simpleObj[key];
    if(!res || res>counter){
      res = counter;
    }

  }
  return Math.floor(res);

}