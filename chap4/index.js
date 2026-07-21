const p = document.createElement('p');

document.addEventListener('DOMContentLoaded',()=> {
  let rank = 'B';

  switch(rank) {
    case 'A' :
      console.log('Aランクです');
      break;
    case 'B':
      console.log('Bランクです');
  }

  // let i = 5;
  // while(i < 10) {
  //   console.log(`iは${i}です。`);
  //   i++;
  // }

  for (let i = 1; i < 5; i++) {
    console.log(`今${i}回目のループ`);
  }

  let data = {
    apple: 150,
    orange: 200,
    grape: 250,
  }
  for (let key in data) {
    console.log(`キーは${key} = ${data[key]}`)
  }
  let fruit = [
    'apple','orange','banana'
  ];
  Array.prototype.hoge = function() {};
  for (let value of fruit) {
    console.log(value);
  }
  let books = [
    ['インザメガチャーチ',"本屋大賞"],
    ['ファイアドーム','ミステリー'],
  ];
  for (let [title, publisher] of books) {
    console.log(`タイトルは${title} 出版社は${publisher}`);
  }
  let num = 1;
  try {
    num = num * j;
  } catch(e) {
    console.error(`${e.name}: ${e.message}`);
  }finally {
    console.log('処理は完了しました');
  }
});

try {
  notfunc();
  console.log('エラーなし');
} catch(e) {
  console.log('えらーだよ～')
} finally {
  console.log('nothing');
}

let person = {
  name: "Bob",
  age: 25,
  city: "New York"
};

let numbers = [1,2,3,4,5];
console.log("Person",person);
console.log(numbers);

function add(a,b) {
  let sum = a + b;
  console.log("sum", a, "and", b , "is" ,sum);
  return sum;
}

let result = add(3,2);

function divide(x,y) {
  if(y === 0) {
    throw new Error("えー？");
  }
  return x / y;
}
try {
  let result = divide(2,0);
  console.log("result", result);
} catch (error) {
  console.error("an", error.message);
}

const url = 'https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json';

const ajaxBtn = document.getElementById('ajax-btn');

// ajaxBtn.addEventListener('click', ()=> {
//   console.log('クリックした');
//   fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data)=> {
//     console.log(data);
//     const wether = data[0].timeSeries[0].areas[0].weathers[0];
//     console.log('東京の明日の天気' + wether);
//   });
// });

const fetchUrl = 'https://jsonplaceholder.typicode.com/posts';

ajaxBtn.addEventListener('click', ()=> {
  const dummyData = {name: '健太郎', age: 36}; 
  fetch(fetchUrl, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(dummyData)
  })
  .then((response) => {
    return response.json();
  })
  .then((data)=> {
    console.log('サーバーからの応答' + JSON.stringify(data, null,2));
  });
});

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
tl.fromTo(".mask",
  { clipPath: "inset(0 100% 0 0)" },
  {
    clipPath: "inset(0 0% 0 0)",
    duration: 0.8,
    ease: "power4.out"
  }
);
gsap.to(".target", {
  x: 100,
  scrollTrigger: {
    trigger: ".target",
    start: "top 80%",
    end: "bottom top",
    scrub: true,
  }
});
