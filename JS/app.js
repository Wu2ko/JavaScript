"use strict"
/*

let title = "The Title 98";
let age = 89;
let online = false;
let items = ['Ieva',false, 12];
let user = {
    name: "THisIsName",
    email: "1@du.com",
    role: "master"
}
let users = [
    {
        name: "VardasDu",
        email: "3@du.com",
        role: "master"
    },
    {
        name: "TreciasV",
        email: "1@du.com",
        role: "master"
    }

]
console.log(typeof(title));
console.log(typeof(age));
console.log(typeof(online));
console.log(typeof(items));
console.log(items);
console.log(items[2]);
console.log(user);
console.log(user.name);
console.log(users[1].email);
console.log(users);

age = String(age);
console.log(typeof(age));
title = Number(title);
console.log(typeof(title));
console.log(title);
online = Boolean(1);
console.log(online);
*/
/*
let count = 12;
let price = 100.20;
let title = "Movie: \"Spiderman\""; // \ - escape kabute
let name = "Saulis"
let lastName = "Das"

console.log(title);
price += 20; //let price = price + 20;
console.log("Suma: "+count*price);
console.log(price++)
console.log(price);
console.log(name + " " + lastName);
*/
/*
let sakinys = "Cia yra sakinyz";
//let zodis = "Vienas";

console.log(sakinys.length)
console.log(sakinys[0,2])
console.log(sakinys.indexOf("z"))
console.log(sakinys.slice(1,2))
console.log(sakinys.toLowerCase())
console.log(sakinys.toUpperCase())
console.log(sakinys.replace("Cia","Ne cia"))
console.log(sakinys.slice(1,15))
console.log(" ")
let daiktai = ['pirmas', 'antras','trecias']
let miestai = 'Kaunas,Vilnius,      Alytus'
console.log(miestai.replace("",""))
let sumazintasMasyvas = miestai.replace("      ","")
let miestuMasyvas = sumazintasMasyvas.split(',');
//miestuMasyvas.replace(" ","")
console.log(miestuMasyvas)
*/
/*
let items = ['Printer','Computer','Phone',function(){alert("hello")}];
items[3] = "Tablet"

console.log(items)
console.log(items.length)
items.push ("Smart TV") //pridededa paskutini
console.log(items)
items.pop() //pasalina paskutini
console.log(items)
items.unshift("Other") // prideda pirma
console.log(items)
items.shift() // pasalina pirma
console.log(items)
*/
/*
let users = "Tomas,Ieva,Tadas,Monika"
users = users.split(',')
console.log(users)
users = users.join(':')
console.log(users)
users = users.split(':')

for(let i=0; i<users.length;i++){
console.log(users[i])
}
console.log("*************************")
for (let user in users){ //in ir ant objekto
    console.log(users[user]);
}
console.log("*************************")
for (let user of users){ //of tik ant masyvo
    console.log(user);
}
console.log("*************************")
*/
/*let user = {

    name:"Test1",
    ermail:"te@te.com",
    role: "users"
};
for(let item in user){
    console.log(item + ": " + user[item]);
}
*/

let students = [
    {
        code: 111,
        firstName: "Tadas",
        lastName: "Tadauskas",
        score: 5.5
    },
    {
        code: 222,
        firstName: "Tomas",
        lastName: "Tomauskas",
        score: 7.5
    },
    {
        code: 333,
        firstName: "Ieva",
        lastName: "Ievauskas",
        score: 9.5
    }
]
for (let conversion of students)
{   //    console.log("**************")
     //   console.log(conversion)
     //   console.log("**************")
        for (let individual in conversion)
        {
            console.log(individual + ": " + conversion[individual])
            
           
        }
        console.log("______________________________________")
}


