if (true) {
  //  console.log('Gör det som står här');
}

/*
    ==      om nått är lika med
    ===     om nått är lika med och har samma datatyp
*/

var string = '13';
var number = 13;

if(string == number) {
   // console.log('påståendet är sant: string == number');
   // console.log(string + number);
}

if(string === number) {
   // console.log('påståendet är sant: string === number');
   // console.log(string + number);
}

/*
    !=      om det inte är lika med
    !==     om det inte är lika med och inte har samma datatyp
*/

if(string != number) {
   // console.log('påståendet är sant: string != number');
}

if(string !== number) {
   // console.log('påståendet är sant: string !== number');
}

/*
    <       mindre än
    >       större än
    <=      mindre eller lika med
    >=      större eller lika med
*/
/*
    &&      och
    ||      eller
    !       inte

    typeof  vilken datatyp
*/

var string = '15';
var number = 13;

if (!(string > number && typeof string == typeof number)) {
  //  console.log('string är mindre än number');
}

if (string > number && typeof string == typeof number) {
   // console.log('string är mindre än number');
}


// IF, ELSEIF och ELSE

let name = 'Tommy'

if(name.toLowerCase() == 'tommy') {
    console.log('Hej Tommy');

} else if (name == 'Hans') {
    console.log('Hej Hans');

} else if (name == 'Hans') {
    console.log('Hej Hans');

} else if (name == 'Hans') {
    console.log('Hej Hans');
}
else {
    console.log('Okänd person!');
}

    
