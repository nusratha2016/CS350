data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog'
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog'
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat'
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog'
    },
  
     {
      name: 'Sam',
      age: 5,
      type: 'dog'
    },
  
     {
      name: 'Alex',
      age: 4,
      type: 'dog'
    },
  
     {
      name: 'Sandy',
      age: 2,
      type: 'dog'
    },
  
    {
      name: 'Red',
      age: 2,
      type: 'cat'
    },
  
    {
      name: 'Green',
      age: 3,
      type: 'cat'
    },
  
    {
      name: 'Blue',
      age: 4,
      type: 'cat'
    },
  
    {
      name: 'Teal',
      age: 5,
      type: 'cat'
    },
  
    {
      name: 'Violet',
      age: 6,
      type: 'cat'
    },
  ];
  
  function getAges(data) {
    let sum = 0;
    for (var i = 0; i < data.length; i++){
      if (data[i].type === 'dog'){
        let tempAge = data[i].age;
        sum += (tempAge * 7);
      }
    }
    return sum;
  }
  
  
  let isDog = (animal) => {
    return animal.type === 'dog';
  }
  
  let isCat = (animal) => {
    return animal.type === 'cat';
  }
  
  let dogYears = (animal) => {
    return animal.age * 7;
  }
  
  let catYears = (animal) => {
    return animal.age * 10;
  }
  
  let sum = (sum, animal) => {
    return sum + animal;
  }
  let dog_ages = data
    .filter(isDog)
    .map(dogYears)
    .reduce(sum);
  
    let cat_ages = data
    .filter(isCat)
    .map(catYears)
    .reduce(sum);
  
    console.log('The sum of dog ages:' + ' ' + dog_ages);
    console.log('The sum of cat ages:' + ' ' + cat_ages);