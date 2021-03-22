    // Q1. make a string out of an array
    //Using toString(), join()
    {
        const fruits = ['apple', 'banana', 'orange'];
        const result = fruits.join();
        const result2 = fruits.toString();
        console.log(result);//apple,banana,orange
        console.log(result2);//apple,banana,orange
        console.log('fruits.toString() :' + fruits.toString()); //fruits.toString() :apple,banana,orange
        console.log('fruits.joins() :' + fruits.join()); //fruits.joins() :apple,banana,orange
        console.log('fruits.joins() :' + fruits.join('-')); //fruits.joins() :apple-banana-orange
        console.log('fruits.joins() :' + fruits.join('')); //fruits.joins() :applebananaorange
    }

    console.clear();
    // Q2. make an array out of a string
    //Using string.split(separator, limit) , [], new Array()
    {
        const fruits = '🍎, 🥝, 🍌, 🍒';
        const result = fruits.split(','); 
        const result2 = fruits.split(',',2 ); 
        const result3 = ['🍎', '🥝', '🍌', '🍒'];
        console.log(result); //(4) ["🍎", " 🥝", " 🍌", " 🍒"]
        console.log(result2); //(3) ["🍎", " 🥝", " 🍌"]
        console.log(result3); //(4) ["🍎", "🥝", "🍌", "🍒"]
    }

    // Q3. make this array look like this: [5, 4, 3, 2, 1]
    //Using array.reverse();
    {
        const array = [1, 2, 3, 4, 5];
        const array2 = array.reverse();
        console.log(array2); //(5) [5, 4, 3, 2, 1]
    }

    // Q4. make new array without the first two elements
    {
      const array = [1, 2, 3, 4, 5];
      const result = array.slice(2,5);
      console.log(result); //(3) [3, 4, 5]
    }
  
      class Student {
        constructor(name, age, enrolled, score) {
          this.name = name;
          this.age = age;
          this.enrolled = enrolled;
          this.score = score;
        }
      }
      const students = [
        new Student('A', 29, true, 45),
        new Student('B', 28, false, 80),
        new Student('C', 30, true, 90),
        new Student('D', 40, false, 66),
        new Student('E', 18, true, 88),
      ];
      
    // Q5. find a student with the score 90
    // Using array.find(callbackfunction)
      {
        const result = students.find((student) => student.score === 90);
        console.log(result); //Student {name: "C", age: 30, enrolled: true, score: 90}
      }

      
    // Q6. make an array of enrolled students
    //Using filter
    {
        const result = students.filter((student) =>  student.enrolled);
        console.log(result); //(3) [Student, Student, Student]
        /*
        0: Student {name: "A", age: 29, enrolled: true, score: 45}
        1: Student {name: "C", age: 30, enrolled: true, score: 90}
        2: Student {name: "E", age: 18, enrolled: true, score: 88}
        length: 3
        __proto__: Array(0)
        */

    }
    
    // Q7. make an array containing only the students' scores
    // result should be: [45, 80, 90, 66, 88]
    {
      const result = students.map((student) => student.score);
      console.log(result); //(5) [45, 80, 90, 66, 88]
    }
    
    // Q8. check if there is a student with the score lower than 50
    { const result = students.some((student) => student.score < 50);
      console.log(result); //true
      const result2 = students.every((student) => student.score < 50);
      console.log(result2); //false 모든 학생의 점수가 50점 보다 낮아야 true 반환 
    }
    
    
    // Q9. compute students' average score
    {
      const result = students.reduce((prev, curr) => {
        console.log(prev);
        console.log(curr);
        return prev + curr.score;
      },0);
     console.log(result);

     const average = result / students.length;
     console.log(average); //73.8
    }
    
    // Q10. make a string containing all the scores
    // result should be: '45, 80, 90, 66, 88'
    {
      const result = students
        .map((student) => student.score)
        .filter((score) => score >=50)
        .join();
        console.log(result); //80,90,66,88
    }
    
    // Bonus! do Q10 sorted in ascending order
    // result should be: '45, 66, 80, 88, 90'
    {

      const result = students.map(student => student.score)
      .sort((a,b) => a-b)
      .join();
      console.log(result); //45,66,80,88,90
    }