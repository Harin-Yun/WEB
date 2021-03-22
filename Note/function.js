//Functioin

    /*
    function name (param1,param2) {
        return
    }

    one function === one thing
    name = function's name 
    naming: doSomething, command, verb
    param1, param2 = Optional Arguments전달 인자 

    */
//-------------------------------------------------------------------------------------------------------------
    // Parameters
    //premitive parameters : passed by value 
    //object parameters :  passed by reference

    function changeName(obj) {
        obj.name = 'coder';
    }

    const harin = { name: 'harin' };
    changeName(harin);
    console.log(harin);
//-------------------------------------------------------------------------------------------------------------
    // Default Parameters
    function showMessage(message, from = 'unknown'){
        console.log(`${message} by ${from}`);
    }

    showMessage('Hi!');
//-------------------------------------------------------------------------------------------------------------
    // Rest Parameters

    function printAll(...args){
        for(let i = 0; i < args.length; i++){
            console.log(args[i]);
        }
        for(const arg of args){
            console.log(arg);
        }
        args.forEach((arg) => console.log(arg));
    }
    printAll('love', 'happy', 'harin');

//-------------------------------------------------------------------------------------------------------------
    //Local scoped
    // 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다. 
//-------------------------------------------------------------------------------------------------------------
    //Return a value
    function sum(a, b){
        return a + b;
    }

    const result = sum (1, 2);
    console.log(`sum: ${sum(1, 2)}`);
//-------------------------------------------------------------------------------------------------------------
    //Early return, early exit 
    //bad 

    /*
    function upgradueUser(user){
        if(user.point > 10) {

        }
    }
    */

    //good 

    /*
    function upgradueUser(user){
        if(user.point <= 10) {
            return;
        }
    }
    */
//-------------------------------------------------------------------------------------------------------------
    //Function expression

    const print = function(){ //anonymous function() = no name
        console.log('print');
    };

    print();
    const printAgain = print;
    printAgain();
    const sumAgain = sum;
    console.log(sumAgain(1, 3));

//-------------------------------------------------------------------------------------------------------------
    // Callback function using function expression
    function randomQuiz(answer, printYes, printNo){
        if(answer === 'i love you') {
            printYes();
        }else {
            printNo();
        }
    }
    
    const printYes = function () {
        console.log('yes!');
    };

    const printNo =function print () {
        console.log('no!');
    }

    randomQuiz('wrong', printYes, printNo);
    randomQuiz('i love you', printYes, printNo);
//-------------------------------------------------------------------------------------------------------------
    // Arrow function
    //-anonymous function

    const simplePrint = function(){
        console.log('simplePrint!');
    }

    const simplePrint = () => console.log('simplePrint!');
    const add = (a, b) => a + b;
    const simpleMultiply = (a, b) => {
        return a + b;
    };
    


//-------------------------------------------------------------------------------------------------------------
    //IIFE: Immediately Invoked Function Expression :선언과 동시에 즉시 호출

    (function hello(){
        console.log('IIFE');
    })();
