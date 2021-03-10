const joinNames = namesObj => {
  return namesObj.reduce( (a, b, i) =>{
    if ( ( i + 1 ) === namesObj.length ){
      return (a.name || a) + " & " + b.name
    }
    return (a.name || a) + ", " + b.name
  })
};

module.exports = joinNames;
