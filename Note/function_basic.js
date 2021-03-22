// function
// a.선언 => b.호출

// 1.function 
//기능을 수행하고 끝나는 함수
{
function doSomething()
{
    console.log('hello');
}//함수 선언 (doSomething 이라는 함수는 console창에 'hello'를 출력한다 라는 뜻)

doSomething();// 함수 호출 (function name(); => 함수를 실행시킴 doSomething(); 라고 호출을 하고 console을 확인하면 'hello'라는 값이 나온다)


// 2.function 
// 어떠한 계산을 하고 계산된 값을 리턴하는 함수

function add(a, b){
    const sum = a + b;
    return sum;
}

const result = add(1, 5);

console.log(result);
}
{
    function add(a, b){
        const sum = a + b;
        return sum;
    }
    
    const result = add(1, 5);
    
    console.log(result);

    function doSomething(add)//add함수를 인자로 받아옴
    {
        console.log(add);
        const result = add(2, 9);
        console.log(result);
    }
    doSomething(add);

}
