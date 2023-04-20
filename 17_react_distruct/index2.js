// 클래스
// : 객체를 생성 템플릿 => 객체를 만들기 위해 사용

class Cat {
   // 생성자
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
   // method
   mew() {
      console.log('야옹');
   }
   eat() {
      console.log('냠냠');
   }
}

let navi = new Cat('나비', 1)
navi.mew()
navi.eat()
console.log('=============================');
// 클래스를 사용하는 이유
// class 가 없던 시절
let tv1 = {
   name: 'aaa tvx',
   price: '2000',
   size: '56inch'
}

let tv2 = {
   name: 'bbb tv',
   price: '3000',
   size: '27inch'
}

let tv3 = {
   name: 'ccc tv',
   size: '55inch'
}
// tv3에는 price 가 없어 undefined 
console.log(tv1.price, tv2.price, tv3.price);

// class 등장  = 일종의 작업지시서
class TV {
   name = '';
   price = 0;
   size = '';

   constructor(name, price, size) {
      // this : 여기 클래스 안에있는 속성
      // this.name : 이 클래스 안에있는 name
      this.name = name;
      this.price = price;
      this.size = size;
   }

   // class 캡슐화 - 값을 직접 변경하지 않고 구조적으로 변경하기
   // get 가져오기
   getPrice() {
      return this.price + '만원';
   }
   // set 보내기
   setPrice(price) {
      this.price = price;
   }
}

const newTv1 = new TV('aaa tv', 2000, '55inch')
console.log(newTv1.getPrice())
newTv1.setPrice(4000)
console.log(newTv1.getPrice())



console.log('=============================');
// 하위클래스 extends

class Product {
   name = '';
   price = '';

   constructor(name, price) {
      this.name = name;
      this.price = price;
   }
   getPrice() {
      return this.price + ' 만원'
   }
}

// 상속 : 부모클래스(Product) 로부터 변수, 메소드를 가져와서(Laptop에) 사용하는 개념
class Laptop extends Product {
   weight = ''
   constructor(name, price, weight) {
      // 상속받은 부모 클래스 값을 불러옴
      super(name, price);
      this.weight = weight;
   }
}

let laptop = new Laptop('삼성', 5000, '55')
console.log(laptop.price);
console.log(laptop.getPrice());

// (class) 부모는 자식의 값 사용불가 
let parent = new Product('tv', 10000)
console.log(parent.weight);

console.log('============ KL ============');

class KL {
   name = '';
   player = '';
   rank = 0;
   color = '';
   win = 0;

   constructor(name, player, rank, color, win) {
      this.name = name;
      this.player = player;
      this.rank = rank;
      this.color = color;
      this.win = win;
   }
   getRank() {
      return this.rank + '위';
   }
   setRank(rank) {
      this.rank = rank;
   }
}
const ssb = new KL('suwon', 'Yeom', 12, 'b-w-r', 4)
console.log(ssb.getRank());
ssb.setRank(1);
console.log(ssb.getRank());
console.log(ssb);

// console.log(ssb);


