/*
    C#
        Array:      public string[] names = new string[10];
        List:       public List<string> names = new List();

    JS
        Array:      let names = [];
                    const name = []; (kan lägga till och ta bort i arrayen trots att det är const)
*/

// DETTA ÄR FEL SÄTT!
const multiArray = ['23',23,true,{firstName: 23}];

// DETTA ÄR RÄTT SÄTT!
const users = [
    { firstName: 'Hans', lastName: 'Mattin-Lassei'},
    { firstName: 'Tommy', lastName: 'Mattin-Lassei'},
    { firstName: 'Anki', lastName: 'Mattin-Lassei'},
];

const names = ['Hans','Tommy','Anki'];


// Hämta information från en array
console.log(names);
console.log(names[0]);
console.log(names[2]);

// Lägg till information i början av en array
names.unshift('Anna');
console.log('Med unshift: ' + names)

// Ta bort information i början av en array
names.shift();
console.log('Med shift: ' + names);

//Lägg till information i slutet av en array
names.push('Anna');
console.log('Med push: ' + names)

//Ta bort information i slutet av en array
names.pop('Anna');
console.log('Med push: ' + names)

// Ändra ett specifikt värde i en array
names[1] = 'Ändrat';
console.log('Ändrat ' + names)



