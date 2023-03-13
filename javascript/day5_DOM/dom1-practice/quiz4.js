const section = document.querySelector('section');
const icecreams = [
   '내가 아인슈페너?!',
   '엄마는 외계인',
   '민트 초콜릿 칩',
   '뉴욕 치즈케이크',
   '아이스 초당옥수수',
   '초콜릿 무스',
   '체리쥬빌레',
   '뮤! 넌 내거야',
   '오레오 쿠키 앤 크림',
];

let img = document.createElement('img')
img.classList.add('img-box');
img.setAttribute('src', './image/icecream1.png')

let h3 = document.createElement('h3')
h3.classList.add('text-center')
h3.innerText = 'Top1'

let div = document.createElement('div')
div.classList.add('text-center')
div.innerText = '내가 아인슈페너?!'

let article = document.createElement('article')
article.classList.add('article-box')



for (i = 0; i < icecreams.length; i++) {
   section.appendChild(article);
   article.append(img, h3, div);

}
// console.log(article);
