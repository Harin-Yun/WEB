    // 1.String Concatenation

        console.log('my' + 'book');
        console.log('1' + 2);
        console.log(`string literals: 1 + 5 = ${1 + 5}`);

    // 2.Numeric operators
        console.log(1 + 2);  //3    => add
        console.log(1 - 2);  //-1   => substract
        console.log(1 / 2);  //0.5  => divide
        console.log(1 * 2);  //2    => multiply
        console.log(5 % 2);  //1    => remainder
        console.log(5 ** 2); //25   => exponentiation

    // 3.Increment and decrement operators
        let counter = 2; 
        const preIncrement = ++counter;

        // counter = counter + 1; 
        // preIncrement = counter;

        console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); //3 3

        const postIncrement = counter++;
        // postIncrement = counter;
        // counter = counter + 1
        console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); //3 4

        const preDecrement = --counter;
        // counter = counter - 1; 
        // preDecrement = counter;
        console.log(`preDecrement: ${preDecrement}, counter: ${counter}`); //3 3

        const postDecrement = counter--;
        console.log(`postDecrement: ${postDecrement}, counter: ${counter}`); // 3 2
        // postDecrement = counter;
        // counter = counter - 1

    // 4.Assignment operators

        let x = 2;
        let y = 3;

        x += y; // 5 , x = x + y
        x -= y; //-1 , x = x - y 
        x *= y; //6 , x = x * y 
        x /= y; //0.666 , x = x / y

    // 5.Comparison operators

        let a = 7;
        let b = 3;

        console.log(a == b); //false a,b의 값이 같은가 (데이터 타입을 동일하다고 간주. a=2  b='2'는 같은 데이터로 간주 2 == 2 로 인식하여 true로 반환된다.  )
        console.log(a === b); //false  a,b의 값과 데이터 타입이 같은가? (a=2  b='2'는 같은 2의 값이지만 a는 숫자열 b는 문자열로  다른 데이터기 때문에 2 === '2' 로  false로 반환된다.)
        console.log(a != b); //true a,b의 값이 다른가
        console.log(a !== b); //true a,b의 값과 데이터 타입이 다른가
        console.log(a < b); //false a가 b보다 작은가 
        console.log(a <= b); //false  a가 b보다 작거나 같은가 
        console.log(a > b); //true a가 b보다 큰가
        console.log(a >= b); //true  a가 b보다 크거나 같은가 


    // 6.Local operators

    const value1 = false;
    const value2 = 4 < 2;

    // || (or)
    console.log(`or: ${value1 || value2 || check()}`);
    
    // && (and)
    console.log(`and: ${value1 && value2 && check()}`);

    function check(){
        for(let i = 0; i < 0; i++) {
            console.log('noooooooooooooo');
        }
        return true;
    }