import math

people = [{
        "name": "Amy",
        "pounds_weight": 152,
        "inches_height":63
    },
    {
        "name": "Joe",
        "pounds_weight": 120,
        "inches_height":64
    },
    {
        "name": "Tom",
        "pounds_weight": 210,
        "inches_height":78
    },
    {
        "name": "Jim",
        "pounds_weight": 180,
        "inches_height":68
    },
    {
        "name": "Jen",
        "pounds_weight": 120,
        "inches_height":62
    },
    {
        "name": "Ann",
        "pounds_weight": 252,
        "inches_height":63
    },
    {
        "name": "Ben",
        "pounds_weight": 240,
        "inches_height":72
    },
]

PoundsToKg = lambda weight: weight / 2.205
InchesToMeters = lambda height: height / 39.37

def addbmi(person):
    " Adds bmi to person "
    person["bmi"] = PoundsToKg(person["pounds_weight"]) / math.pow(InchesToMeters(person["inches_height"]), 2)
    return person

isOverweight = lambda person: person["bmi"] >= 25 and person["bmi"] < 30
isObese = lambda person: person["bmi"] >= 30

OverWeight_people = lambda people: filter(isOverweight, map(addbmi, people))
Obese_people = lambda people: filter(isObese, map(addbmi, people))

print('Overweight')
OverWeight = list(OverWeight_people(people))
print(OverWeight)


print('Obese')
Obese = list(Obese_people(people))
print(Obese)
