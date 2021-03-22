'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const harin = { name: 'harin', age: 5 };
print(harin);

// with JavaScript magic (dynamically typed language)
// can add properties later
harin.hasJob = true;
console.log(harin.hasJob);

// can delete properties later
delete harin.hasJob;
console.log(harin.hasJob);

// 2. Computed properties---------------------------------------------------------------------------------
// key should be always string
console.log(harin.name);
console.log(harin['name']);
harin['hasJob'] = true;
console.log(harin.hasJob);

//동적으로 사용자에게 입력을 받아 출력해야하는 데이터라면..
function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(harin, 'name');
printValue(harin, 'age');
//--------------------------------------------------------------------------------------------------
// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
//만약  person1~person3까지 object가 작성되어 있는데 여기에 person을 더 추가 하고 싶을 때, 
//const person4 = { name: '', age: .. };
//const person5 = { name: '', age: .. };
//const person6 = { name: '', age: .. };
//...이런식의 추가는 비효율적, 힘듦.
//makeperson이라는 함수를 만들어서 대입.
/*
const person4 = makePerson('harin',30);
function makePerson(name, age){
    return {
        name: name, //key와 value의 이름이 동일 하다면 name: name에서 name:를  생략할 수 있음. 
        age: age,
    };
    
}
console.log(person4);//{name: "harin", age: 30}
*/
//-----------------------------------------------------------------
/*다른 계산을 하지않고 순수하게 obj만 생성하는 것들은 name을 대문자로 시작하고 앞에 new를 붙임 
function makePerso(=>Person) (name, age){
    return =>(this.) {=>({}없어짐.)
        name, 
        age,
    };
    
}
*/
const person4 = new Person('harin', 30);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
// 해당하는 obj안에 key가 있는지 없는지 확인.
console.log('name' in harin);//true
console.log('age' in harin);//true
console.log('random' in harin);//false
console.log(harin.random); //undefined

//6. for..in vs for..of
//for(key in obj)
console.clear();

for (const key in harin) {
    console.log(key);
}
//harin이 가지고 있는 key 들이 {}을 돌때마다 할당되어짐. 

// for (value of iterable)
const array = [1,2,3,4];
for (const value of array) {
    console.log(value);
}


// 7.Cloning
//Object.assign(dest, [obj1, obj2, obj3....])

const user = {name: 'harin', age: '29'};
const user2 = user;
user2.name = 'coder';
console.log(user);

//object 복사 
//old way

const user3 = {};
for (const key in user) {
    user3[key] = user[key];
}
console.log(user3);

//use bject.assign(dest, [obj1, obj2, obj3....])
/*
const user4 = {};
Object.assign(user4, user);
console.log(user4);
or
*/ 

const user4 = Object.assign({}, user);
console.log(user4);

//another example

const fruit1 = {color:'red'};
const fruit2 = {color:'blue', size:' big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
