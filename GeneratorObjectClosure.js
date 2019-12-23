function getNaturalNumberGenerator() {
  var counter = 12;
  return { counter: 12,

    next: function() {
      this.counter *= 2;
      return this.counter;
      }
    }
  }

  var generator = getNaturalNumberGenerator();

  generator.next();
  generator.next();
  generator.next();
  generator.next();
  generator.next();
  generator.next();
  generator.next();
  generator.next();
  generator.next();
  generator.next();
