function getNaturalNumberGenerator() {
  var counter = 12;

  return function() {
    counter *= 2;
    return counter;
  }
}

var next = getNaturalNumberGenerator();

next();
next();
next();
next();
next();
next();
next();
next();
next();
next();
