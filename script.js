console.log('Czesc!');
// komentarze
/* aasdas
asdasd

asd */

let height;

height = 181;
console.log(height);

height = 193;

console.log(height);

const name = "Oskar";

console.log(name);
// name = "Janek"; <= tak nie moge
// console.log(name);

const int = 1;
const double = 2.43624123;

console.log(double.toFixed(3) + 2.1)
console.log(int.toString())
console.log(parseInt('10.3'))
console.log(parseFloat('10.3'))
console.log(parseFloat('asdfasdgasd'))
// NaN - Not a Number
console.log(Math.round(2.3))
console.log(Math.round(2.6))
console.log(Math.ceil(2.3))
console.log(Math.floor(2.6))

const number = parseFloat('asdfasdgasd');

console.log(isNaN(number))
console.log(isNaN(3))
console.log(number + 1)
console.log(Number(''))

const yes = true;
const no = false;

const string = 'asdasd';
const string_222 = "asdasd 'asd' ";
const string_333 = `Liczba: ${double}`;
const long_string = `
asdasd
asdasd

asdasdasd ${double}
`;
const string_444 = 'Liczba: ' + double;

string.concat(string_333);

console.log(string.length)
console.log(string.charAt(1))
console.log(string.indexOf('d'))
console.log(string.lastIndexOf('d'))
console.log(string.toLowerCase().toUpperCase())
console.log(string.replace('as', 'ed'))
console.log(string.replaceAll('as', 'ed'))
console.log('Zajecia z JS 2'.slice(0, 7))
console.log('Zajecia z JS 2'.substr(10, 2))

const _null = null;
const _undefined = undefined;

let foo;

console.log(foo);

const obj = {
    name: 'Oskar',
    address: {
        street: 'Jasna'
    }
};

const _obj = {};
_obj['asd']=123;

console.log(_obj);

const login = 'ok@alx.pl';

const person = {
    // login: login,
    login,
}

const secondPerson = {...person, foo: '123'}; // Kopiowanie 

person.login = "test"
console.log(person)
console.log(person.login)
console.log(obj.address.street)

let array = ['123'];

array = [];

array.push('435')

const arr = ['123', '456'];
// arr = []
arr.push('879');

console.log(arr)
console.log(arr[1])
console.log(arr[5])

arr.pop()
arr.splice(1, 3) // Usuwa 3 elementy zaczynajac od indeksu 1
arr.reverse()
arr.includes('123')

const first = [1,2,3];
const second = [...first]; // Kopiowanie 
const third = [0, ...first, 10]; // Kopiowanie z dodatkowymi wartosciami

console.log(third);
third.length = 0; // Czyszczenie talicy
console.log(third);

if (3 <5) {

} else if (3 === 5) {

} else { }

console.log(2 == '2')
console.log(2 === '2')

const type = 'email';

switch (type) {
    case 'text': {
        //
        // break;
        // return 
    }
    case 'email': {
        //
        // break;
        // return 
    }
}

const ternary = type === 'email' ? 'To email' : 'To NIE JEST EMAIL';
const age = 1;
const height1 = null;

const canAccess = age && height1 && '321';

console.log(canAccess)

const bar = '321';
const baz =  bar || '123'
console.log(baz);

// function Component() {
//     const loading = false;

//     return <>
//         {loading && <div>Loading ...</div>}
//     </>
// }

// Falsy
// 0, '', false, null, undefined


for (let i = 0; i < 5; i++) {}
let j =0;
while (j < 5) {
    j++
}

const names = ['Oskar', 'Michal', 'asd'];

for (const name of names) {
    // names[i]
}

// DOM
const btnEl = document.querySelector('#btn');
document.getElementById('btn');

console.log(btnEl);

// document.addEventListener('DOMContentLoaded', () => {
//     const btnEl = document.querySelector('#btn');

//     console.log(btnEl)
// });

console.log(document.querySelectorAll('.paragraph'));
console.log(document.querySelector('.paragraph'));
console.log(document.getElementsByClassName('paragraph'));
console.log(document.querySelectorAll('button'));

btnEl.innerText = 'Tekst  z JSa';
btnEl.style.background = 'orange';

const jsButtonEl = document.createElement('button')

jsButtonEl.innerText = 'Nowy guzik';

document.body.appendChild(jsButtonEl);
document.body.removeChild(btnEl)

console.log(jsButtonEl.textContent)
console.log(document.getElementById('reset-btn').getAttribute('type'))
// setAttribute('type', 'button')

document.getElementById('reset-btn').classList.add('nowa-klasa');
// $('#reset-btn').addClass('...')
document.getElementById('reset-btn').classList.add('druga-nowa-klasa');
document.getElementById('reset-btn').classList.remove('nowa-klasa');
document.getElementById('reset-btn').classList.contains('nowa-klasa');
document.getElementById('reset-btn').classList.toggle('nowa-klasa');