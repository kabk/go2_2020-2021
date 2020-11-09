//const students = [
//  'Abel',
//  'Alice',
//  'Andy',
//  'Barbara',
//  'Einar',
//  'Erae',
//  'Jannie',
//  'Jiye',
//  'Julia',
//  'Lulu',
//  'Luna',
//  'Maria',
//  'Samuel',
//  'Simonida',
//  'Tinka',
//  'Yeeun',
//  'Lois',
//  'Kelly',
//]
//
const students = [
  'Niam',
  'Alessandro',
  'Isabel',
  'Valters',
  'Owen',
  'Leona',
  'Lara',
  'Renata',
  'Jackie',
  'Amber',
  'Hilal',
  'Alex',
  'Chiara',
  'Patrick',
  'Elina',
  'Ronaldo',
  'Kacka',
  'Isabella'
]

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function chunkArray(a, size){
    let i = 0;
    var temp = [];
    
    for (let i = 0; i < a.length; i += size) {
        chunk = a.slice(i, i + size);
        temp.push(chunk);
    }

    return temp;
}

var result = chunkArray(shuffle(students), 3);
console.log(result);

