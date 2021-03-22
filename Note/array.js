'use strict'
// object와 자료구조의 차이점
// object = 토끼(특징: 귀 , 먹는다, 뛴다, 동물 ), 당근(특징: 주황색, 비타민, 채소)
//자료구조 = 비슷한 object끼리 묶어 놓는것

// Array 배열 
// -index가 지정되어 있는 자료구조
// -index는 0번부터 시작

// 1. Declaration (배열 선언 방법)
const arr1 = new Array (); //1번
const arr2 = [1, 2];       //2번 (2번이 더 흔하게 쓰임 )


// 2.Index position (index를 이용해서 배열에 접근하는 방법(배열 조회 방법))
const fruits = ['🍎', '🍌'];

console.log(fruits); //(2) ["🍎", "🍌"]
console.log(fruits.length); //2
console.log(fruits[0]); //🍎 배열의 첫번째 값을 찾을 때는 보통 [0]조회 
console.log(fruits[1]); //🍌
console.log(fruits[2]); //undefined(fruits배열의 3번째 칸에는 값이 x)
console.log(fruits[fruits.length - 1]);// 배열의 마지막 값 조회 할 때는 [배열.length - 1] 

// 3.Looping over an array 
// print all fruits
//a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
    //🍎 🍌
}

//b. for of
for (const fruit  of fruits) {
    console.log(fruit);
       //🍎 🍌
}
// forEach
fruits.forEach(function(){
    console.log('he'); //he가 두번 출력됨 fruits에 데이터가 두개 들어 있기 때문. 

})

fruits.forEach(function(fruit, index, array){
    console.log(fruit); //🍎 🍌
    
})

fruits.forEach(function(fruit, index){
    console.log(fruit, index); //🍎0 🍌1
    
})

fruits.forEach(function(fruit, index, array){
    console.log(fruit, index, array); //🍌 1 (2) ["🍎", "🍌"]
                                    //🍎 0 (2) ["🍎", "🍌"]
})

fruits.forEach((fruit) => console.log(fruit)); //🍎 🍌

//4.Addition, deletion, copy (배열 추가, 삭제, 복사)
//push: add an item to the end(배열의 맨 뒤에서 추가)

fruits.push('🍈','🍒');
console.log(fruits); //(4) ["🍎", "🍌", "🍈", "🍒"]
//pop: remove an item from the end
fruits.pop(); // -🍒
fruits.pop();//-🍈
console.log(fruits); //(2) ["🍎", "🍌"]

//unshift: add an item to the benigging
fruits.unshift('🍇','🍋'); //(4) ["🍇", "🍋", "🍎", "🍌"] 앞에서 부터 밀어넣기 
console.log(fruits);
//shift: remove an item from the benigging(앞에서 부터 하나씩 제거 )
fruits.shift();//-🍇
fruits.shift();//-🍋
console.log(fruits);//(2)["🍎", "🍌"]


// note!! shift, unshift are slower than pop, push 

//splice: remove an item by index position 
fruits.push('🍓','🥭','🥝','🍑'); 
console.log(fruits);//(6) ["🍎", "🍌", "🍓", "🥭", "🥝", "🍑"]

fruits.splice(1); //splice는 어디서 부터 지울건지만 적고 몇개를 지울것인지에 대해 적지않으면 지우기 시작한 부분부터 끝까지 모두 지워버린다
console.log(fruits); //["🍎"]

fruits.push("🍌", "🍓", "🥭", "🥝", "🍑");
console.log(fruits); //(6) ["🍎", "🍌", "🍓", "🥭", "🥝", "🍑"]

fruits.splice(1,2); // index [1]번인 🍌부터 지울것, 총 2개를 지울것 = 🍌와 🍓 지워짐. 
console.log(fruits);// (4) ["🍎", "🥭", "🥝", "🍑"]

fruits.splice(1, 1, '🥑','🍍'); //index [1]번인 🥭부터 지우기 시작 개수는 총 1개로 🥭만 지우고 그 자리에 '🥑','🍍'를 넣음.
console.log(fruits); //(5) ["🍎", "🥑", "🍍", "🥝", "🍑"]

//combine two arrays
const fruits2 = ['🍐','🍉'];
const newFruits = fruits.concat(fruits2); //fruits배열에 fruits2배열을 연결
console.log(newFruits);//(7) ["🍎", "🥑", "🍍", "🥝", "🍑", "🍐", "🍉"]

//5.Searching
//find the index
console.clear();

//searching - indexOf
console.log(fruits);//(5) ["🍎", "🥑", "🍍", "🥝", "🍑"]
console.log(fruits.indexOf('🍎')); //0 🍎는 index[0]번
//배열에 없는 값 조회시 -1반환
console.log(fruits.indexOf('🍌')); //-1 🍌는 없는 값
console.log(fruits.indexOf('🥭')); //-1 🥭 배열에 없음 
//searching - includes
console.log(fruits.includes('🥝')); //true 배열에 🥝가 있나? true
console.log(fruits.includes('🍌')); //false 
console.clear();
//searching - lastIndexOf
fruits.push('🍎');
console.log(fruits); //(6) ["🍎", "🥑", "🍍", "🥝", "🍑", "🍎"]
console.log(fruits.indexOf('🍎')); //0
console.log(fruits.lastIndexOf('🍎')); //5