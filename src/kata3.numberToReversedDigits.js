const numberToReversedDigits = number => {
  return number.toString().split('').reverse().map( v => Number(v) );
};

module.exports = numberToReversedDigits;
