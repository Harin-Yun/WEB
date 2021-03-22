for(let i = 0; i < 10; i++){
 if(i % 2 === 0){
     continue;
 }
 console.log(`q1: ${i}`); //홀수 출력
}


for(let i = 0; i < 11; i++){
    if(i % 2 !== 0){
        continue;
    }
    console.log(`q2: ${i}`); //짝수 출력
   }

   for(let i = 0; i < 10; i++){
    if(i > 8){
        break;
    }
    console.log(`q3: ${i}`); //8까지만 출력
   }
   
   
