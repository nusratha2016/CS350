let people = [
 {name: "Amy", pounds_weight: 152, inches_height: 63},
 {name: "Joe", pounds_weight: 120, inches_height: 64},
 {name: "Tom", pounds_weight: 210, inches_height: 78},
 {name: "Jim", pounds_weight: 180, inches_height: 68},
 {name: "Jen", pounds_weight: 120, inches_height: 62},
 {name: "Ann", pounds_weight: 252, inches_height: 63},
 {name: "Ben", pounds_weight: 240, inches_height: 72},
];

let PoundstoKg = (mass) => mass / 2.205;
let InchestoMeters = (length) => length / 39.37;

let bmi = (person) => {
    let bmi = PoundstoKg(person.pounds_weight) / (InchestoMeters(person.inches_height) *
     InchestoMeters(person.inches_height) );
     person.bmi = bmi.toFixed(2);

     return person;

}

let isOverWeight = (person) => person.bmi >= 25 && person.bmi < 30 ? true:false;

let isObese = (person) => person.bmi >= 30 ?
true:false;

let OverWeightPeople = people.map(bmi).filter(isOverWeight);
console.log(OverWeightPeople);

let ObesePeople = people.map(bmi).filter(isObese);
console.log(ObesePeople);
