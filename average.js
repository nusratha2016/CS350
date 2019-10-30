function average (n,q1,q2,q3){

    result={};

    for (var i=0; i<n.length; i++)

    {

        result[n[i]]=(q1[i]+q2[i]+q3[i])/3;

    }

    return result;

}

names = ["Ian", "Adrian", "Daniel", "Malcolm", "Roberson", "William", "Yousif", "Nicholas"];

quiz1 = [100, 100, 100, 100, 100, 100, 100, 100];

quiz2 = [90, 90, 90, 90, 90, 90, 90, 0];

quiz3 = [90, 80, 70, 60, 50, 40, 30,0];

students = average(names, quiz1, quiz2, quiz3);

console.log(students);
