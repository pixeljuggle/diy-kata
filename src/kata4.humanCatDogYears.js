const humanCatDogYears = number => {
  let catDog = [];
  catDog.push(number);
  function petYear (y, f, s, r){
    if ( y === 1 ){
      return f;
    } else if ( y === 2 ){
      return f + s;
    }
    return ( (y - 2) * r ) + f + s ;
  }
  catDog.push(petYear(number,15,9,4));
  catDog.push(petYear(number,15,9,5));
  return catDog;
};

module.exports = humanCatDogYears;
