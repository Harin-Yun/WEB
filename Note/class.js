// Class vs Object 
// 1.Class
// 조금 더 연관있는 데이터를 한곳에 묶어 놓는 컨테이너 같은 역할. 
/* 
class person {
    name;   => 속성(field)
    age;    => 속성(field)
    speak(); => 행동 (method)
}
*/
// class안에는 method는 없고 field만 있는 경우도 있다. =>data class라고 부름 
// class 내부적으로 보여지는 변수, 밖에서 보일 수 있는 변수를 나누어서 캡슐화라고 함.  
// class를 이용해서 상속과 다양성이 일어날 수 있음. 
// class 
//   -template (class자체에는 데이터가 들어가 있지 않고 틀만 정해놓은, 청사진만 정의하고 )
//   -declare once (한 번만 선언)
//   -no data in

// 2.Object 
// Class를 이용, 실제로 데이터를 넣어 만드는 것이 Object
//   -instance of a class (class를 이용해서 새로운 instance를 생성하면  object가 됨.)
//   -created many times (class는 정의만 한 것이라서 메모리에 실제로 올라가지 않음. object는 메모리에 올라감)
//   -data in 



'use strict';

// 1. Class declarations
class person {
    //constructor(생성자)를 만들어서 필요한 데이터를 object에 전달. 
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    //method
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const harin = new person('harin', 30); //object (새로운 object를 만들때는 앞에 new를 붙임.)
console.log(harin);
console.log(harin.name);
console.log(harin.name);
harin.speak();

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    get age() {
      return this._age;
    }
  
    set age(value) {
      // if (value < 0) {
      //   throw Error('age can not be negative');
      // }
      this._age = value < 0 ? 0 : value;
    }
  }
  
  const user1 = new User('Steve', 'Job', -1);
  console.log(user1.age);
  
  // 3. Fields (public, private)
  // Too soon!
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
  class Experiment {
    publicField = 2;
    #privateField = 0;
  }
  const experiment = new Experiment();
  console.log(experiment.publicField);
  console.log(experiment.privateField);
  
  // 4. Static properties and methods
  // Too soon!
  class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
      this.articleNumber = articleNumber;
    }
  
    static printPublisher() {
      console.log(Article.publisher);
    }
  }
  
  const article1 = new Article(1);
  const article2 = new Article(2);
  console.log(Article.publisher);
  Article.printPublisher();
  
  // 5. Inheritance
  // a way for one class to extend another class.
  class Shape {
    constructor(width, height, color) {
      this.width = width;
      this.height = height;
      this.color = color;
    }
  
    draw() {
      console.log(`drawing ${this.color} color!`);
    }
  
    getArea() {
      return this.width * this.height;
    }
  }
  
  class Rectangle extends Shape {}
  class Triangle extends Shape {
    draw() {
      super.draw();
      console.log('🔺');
    }
    getArea() {
      return (this.width * this.height) / 2;
    }
  
    toString() {
      return `Triangle: color: ${this.color}`;
    }
  }
  
  const rectangle = new Rectangle(20, 20, 'blue');
  rectangle.draw();
  console.log(rectangle.getArea());
  const triangle = new Triangle(20, 20, 'red');
  triangle.draw();
  console.log(triangle.getArea());
  
  // 6. Class checking: instanceOf
  console.log(rectangle instanceof Rectangle);
  console.log(triangle instanceof Rectangle);
  console.log(triangle instanceof Triangle);
  console.log(triangle instanceof Shape);
  console.log(triangle instanceof Object);
  console.log(triangle.toString());
  
  let obj = { value: 5 };
  function change(value) {
    value.value = 7;
  }
  change(obj);
  console.log(obj);