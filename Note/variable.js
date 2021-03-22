// What is Programming? = input, operator, output
//
//----------------------------------------------------------------------------------------------------------
//  //한 줄 주석 처리
//
//  /*  내용    */ 여러 줄 주석 처리
//----------------------------------------------------------------------------------------------------------
// 1.Variable(read/write)
// -메모리에 값을 읽고 쓰는게 가능
// -변할수 있는 데이터 
// -변수에 데이터를 넣는 것 : "값을 할당한다.","값을 대입한다." 
// -Before ES6 => var사용
// -ES6 => let추가 
// -변수를 선언할 때에는 기본적으로 const를 사용하고, 재할당이 필요한 경우 한정해서 let을 사용. 
// -let을 사용할 때 변수의 scoped는  최대한 좁게 만든다.
// -재할당이 필요없는 상수와 객체는 const 사용. 
//----------------------------------------------------------------------------------------------------------
// var의 문제점 :
// -var로 변수 선언 시 var 생략 가능 
// -var로 변수 선언 후 중복 선언 가능
// -변수가 선언 되지 않았는데 참조 가능(변수 호이스팅 5.)

    /*  
    color = 'red'; //var 생략하고 변수 선언 
    console.log(color); //red출력

    var color = 'red'; //color변수 중복 선언 
    console.log(color); //red출력   
    */

//----------------------------------------------------------------------------------------------------------
// 1-1.Global Variable(전역 변수)
//      :전역 변수는 함수 외부에서 선언된 변수, 프로그램 전체에서 접근할 수 있는 변수
//      :{}(block-scoped) 밖에서 선언되어 {}(block-scoped)안에서도 사용할 수 있다. 
//      :Global Variable는 프로그램 전체에 영향을 주는 변수로 많은 사용은 지양해야 함. 
//
// 1-2.Local Variable(지역 변수)
//      :{}(block-scoped) 안에 선언된 변수 유효한 범위 = {}(block-scoped)안.
//      :지역 변수는 함수 내부에서 선언된 변수, 함수 외부에서는 접근할 수 X.
//----------------------------------------------------------------------------------------------------------
// 2.Identifier
// 
// -Variable를 구분짓는 각각의 name
//----------------------------------------------------------------------------------------------------------
// 3.let
// -mutable data
// -변수(변할 수 있는 수)
// -반복 대입 가능

    let globalVariale = 'hi, I am global Variale';
    {
        let userName = "Harin";
        console.log(userName); //Harin

        userName = "HarinYun";
        console.log(userName); //HarinYun

        console.log(globalVariale); //hi, I am global Variale

        globalVariale = "30"; //"30"
        console.log(globalVariale);
    }

    /*
    console.log(userName); //Uncaught ReferenceError: userName is not defined
    {}안에 선언된 변수는 {} 밖에서 출력 x
    */
    


    /* 
    console.log(userName); 
    Uncaught ReferenceError userName is not defined at -:
    검색되지 않은 참조 오류 userName이(가) 정의되지 않았습니다. 
    -오류
    -let userName은 {}안에서 선언 되었기 때문에 {} 밖에서는 출력 x 
    */

    console.log(globalVariale); //"30"

    
    /* 
    console.log(userAge); 
    let userAge = 30;
    main.js:64 Uncaught ReferenceError: Cannot access 'userAge' before initialization
    초기화 전에 'userAge'에 액세스할 수 없습니다.
    -오류
    -변수 선언전에 호출이 먼저 선행되었기 때문
    */

    let userAge = 30;
        userAge = 26;

    console.log(userAge); //26
        userAge = 30;
    console.log(userAge); //30

    let myString = '하린';
    let currentDate = new Date(); //현재 날짜 대입
    let myFunction = () => console.log('함수 확인') // 함수대입

    console.log(myString); //하린
    console.log(currentDate); //Mon Mar 08 2021 14:35:25 GMT+0900 (대한민국 표준시)
    console.log(myFunction); //() => console.log('함수 확인')

//변수에 변수 대입
    let favoriteFruit = 'apple';
    let fruit = favoriteFruit; 

    console.log(fruit); //apple

    let fruit1 = 'apple',
        fruit2 = 'pear',
        fruit3 = 'grape',
        fruit4 = 'banana';
    
    let allFruit = fruit1 +  fruit2 + fruit3 + fruit4;

    console.log(fruit1 +',' + fruit2+',' +fruit3+ ',' +fruit4);//apple,pear,grape,banana
    console.log(allFruit); //applepeargrapebanana
//----------------------------------------------------------------------------------------------------------
// 4.Const(only read)
// -immutable data
// -상수
// -데이터 값의 수정이 불가능

    const globalVariale2 = 'hi, I am global Variale2';
    {
        const userName2 = "Harin";
        console.log(userName2); //Harin

        /*
        userName2 = "HarinYun";
        console.log(userName2); 
        Assignment to constant variable오류
        */

        console.log(globalVariale2); //hi, I am global Variale2  global variable 사용했기때문에 출력 가능 
    }
    console.log(globalVariale2); //hi, I am global Variale2  global variable 사용했기때문에 출력 가능 


    const myString2 = '하린';
    const currentDate2 = new Date(); //현재 날짜 대입
    const myFunction2 = () => console.log('함수 확인') // 함수대입

    console.log(myString2); //하린
    console.log(currentDate2); //Mon Mar 08 2021 15:10:59 GMT+0900 (대한민국 표준시)
    console.log(myFunction2); //() => console.log('함수 확인')
    
//상수 한번에 여러개 선언

    {
        const flower = 'rose',
          flower2 = 'Sunflower',
          flower3 = 'cherry blossoms';

          console.log(flower);  //rose
          console.log(flower2); //Sunflower
          console.log(flower3); //cherry blossoms
          console.log(flower + flower2 + flower3); //roseSunflowercherry blossoms
          console.log(`flower: ${flower},${flower2},${flower3}`); //flower: rose,Sunflower,cherry blossoms
    }

    /*
    console.log(flower); //Uncaught ReferenceError: flower is not defined
    {}안에 선언된 상수는 {} 밖에서 출력 x
    */
//----------------------------------------------------------------------------------------------------------
// 5.Hoisting & Scope  
//  5-1.Scope :변수의 유효범위, 변수 생존범위
//      1-1.Global Variable(전역 변수)
//          :전역 변수는 함수 외부에서 선언된 변수, 프로그램 전체에서 접근할 수 있는 변수
//          :{}(block-scoped) 밖에서 선언되어 {}(block-scoped)안에서도 사용할 수 있다. 
//          :Global Variable는 프로그램 전체에 영향을 주는 변수로 많은 사용은 지양해야 함. 
//
//      1-2.Local Variable(지역 변수)
//          :{}(block-scoped) 안에 선언된 변수 유효한 범위 = {}(block-scoped)안.
//          :지역 변수는 함수 내부에서 선언된 변수, 함수 외부에서는 접근할 수 X.
// -Before ES6 => var 사용. 
// -var는 블럭 범위가 아닌  함수 범위.

    var country = "South Korea"; // Global Variable

    function favoriteCountry(){
        var country = "U.S.A"; //Local Variable
        if(true) { //if의{}는 무시됨.
            var country = "America";   
            console.log(country); //America
        }
        console.log(country); //America
    }
    favoriteCountry();
    console.log(country); //Global Variable출력 South Korea
//
//
//  5-2.Hoisting: 선언문을 끌어올리다.
//      -변수 호이스팅 
//      -함수 호이스팅 
//      -var = 함수 선언문 방식만 호이스팅이 가능
//      -let ,const는 var가 지닌 문제점을 보안하기 위해 ES6부터 등장 
       

        favoriteFood(); 

        function favoriteFood(){
            var food; //undefined =>변수 선언문. 초기화와 동시에 최상단으로 올라감. =>변수 호이스팅  
            console.log(food);
            food = "bibimbap";
            console.log(food); //bibimbap;
        }

        favoriteBook(); //함수 선언문 호이스팅. 
        function favoriteBook(){
            console.log(book); //undefined
            var book = "Demian";
            console.log(book); //Demian
        }

        /*  
        favoriteColor(); //함수 표현식  호이스팅 (x)Uncaught TypeError
        var favoriteColor = function(){
            console.log(color); 
            var color = "yellow";
            console.log(color); 
        }
        */


        /* new 키워드를  사용한  함수 정의시 호이스팅 (x)Uncaught TypeError
        favoriteFood(); 
        var favoriteFood = new Function("", console.log('bibimbap'));
        */
//----------------------------------------------------------------------------------------------------------
// 6.Variable Data Types
//   -Primitive  Type(immutability)
//      -Boolean
//      -Null
//      -Undefined 
//      -Number   
//      -String  
//      -Symbol                  
//   -Reference Type
//      -Object
//      -Function
//      -Date
//      -Array
//      -RegExp
//      -WeakMap, Map, Set, WeakSet
//
//
//  6.1 Boolean 
//      -true/false으로 이루어진 자료형

        console.log(7 > 4); //true
        console.log(4 > 9); //false

//  6.2 Null & Undefined 
//     -Null : 존재하지 않는 값, 
//     -Undefined : 변수가 정의 되었지만 아무 값도 할당받지 않은 상태.

        let value = null;
        console.log(value); //null 출력
        console.log(typeof value); //object출력 (typeof으로 null의 자료형을 확인하면 object로 출력되지만 객체(x)) 

        value;
        console.log(value); //null 출력 
        console.log(typeof value); //object출력

//   6.3 Number 
//  -Infinity(무한대)/NaN(유효하지 않은 값, 너무 커서 표현할 수 없는 값)
    console.log(1 / Infinity); //0
    console.log(Infinity / 1); //Infinity
    console.log(0 / 0); //NaN
    console.log(1 / 0); //Infinity
    console.log(Infinity - Infinity); //NaN


 //   6.4 String
 //      -값이 텍스트 형태

 console.log("I love JEJO") //I love JEJO
 console.log('I love JEJO') //I love JEJO
 console.log(`I love JEJO`) //I love JEJO
 console.log('I love JEJO\nI love JEJO') /*
                                        I love JEJO
                                        I love JEJO
                                        */
// -Template String
// ` ${}`

    const cart = [
        {name: 'shirt', price: 20000},
        {name: 'skirt', price: 15000}  
    ];
    
    const cartReceipt = `${cart[0].name}의 가격은 ${cart[0].price}입니다.`

    console.log(cartReceipt); //shirt의 가격은 20000입니다.

//     6.5 Symbol  
// -심볼은 문자형으로 자동 형 변환되지 않음
// -유일한 식별자(unique identifier)를 만들고 싶을 때
// -심볼은 유일성이 보장되는 자료형이기 때문에, 설명이 동일한 심볼을 여러 개 만들어도 각 심볼값은 다르다
// -map이나 다른 자료구조에서 다른 식별자가 필요하거나 우선순위를 주고싶을 떄 

    const symbol1 = Symbol('id'); //('id')는 어떤 것에도 영향x 오직 이름표 역할
    const symbol2 = Symbol('id');

    console.log(symbol1 == symbol2); //false
//애플리케이션에서 광범위하게 사용해야 하는 심볼이라면 전역 심볼을 사용
//전역 심볼 레지스트리 안에 심볼을 만들고 해당 심볼에 접근하면, 이름이 같은 경우 항상 동일한 심볼을 반환
    const gSymbol1 = Symbol.for('id');
    const gSymbol2 = Symbol.for('id');
    console.log(gSymbol1 == gSymbol2); //true
//----------------------------------------------------------------------------------------------------------
// 7. Dynamic typing
let text ='hello';

console.log(text);
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '10' + 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '10' / '2';
console.log(`value: ${text}, type: ${typeof text}`);