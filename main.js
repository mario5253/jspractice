// 1問目　（２問目のバックグラウンドをランダムにできてない）
const createBtn = document.getElementById('createTxt');
const generate = document.getElementById('generate');

createBtn.addEventListener("click", ()=> {
  console.log("こんにちはテスト");
  const pTxt = document.createElement('p');
  pTxt.textContent = "こんにちは！";
  generate.appendChild(pTxt);
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  pTxt.style.backgroundColor = `rgb(${r},${g},${b})`;
});


// 2問目　OK？
const input = document.getElementById('textForm');

  input.addEventListener('input', (e)=> {
    const pTxtS = document.querySelector('#generateT');
    pTxtS.textContent = e.target.value;
  });


//3問目 カウンター 途中
let countNum = 0;
const result = document.getElementById('result');
const plusBtn = document.getElementById('plusBtn');
const minusBtn = document.getElementById('minusBtn');

result.textContent = countNum;

plusBtn.addEventListener('click', ()=> {
  countNum++;
  result.textContent = countNum;
});
minusBtn.addEventListener('click',()=> {
  countNum--;
  result.textContent = countNum;
})

// 4問目
const Image = document.getElementById('figureBox');
const switchImg = document.getElementById('switchImg');
const createImg = document.createElement('img');
Image.appendChild(createImg);
const defaultA = "./image/";
createImg.src = defaultA+ "bg_cta.jpg";
const imgPath = {
  src: ["bg_cta.jpg","bg_kv02.jpg"],
}
let isAlt = false;
function switchA (e) {
  isAlt = !isAlt;
  if (isAlt) {
    createImg.src = defaultA+imgPath.src[1];
  } else {
    createImg.src = defaultA+imgPath.src[0];
  }
};
switchImg.addEventListener('click', switchA);
// 5問目
const agreeCheck = document.querySelector('#agree');
agreeCheck.addEventListener('change',(e)=> {
  if(e.target.checked) {
    alert("チェックされました");
  } 
});
// 6問目
const selectBox = document.querySelector('#selectBox');
const yes = document.querySelector('#yes');
selectBox.addEventListener('change',(e)=> {
  console.log(e.target.value);
  yes.textContent  = e.target.value;
});

// ７問目タイマー
const timeDisplay = document.getElementById('timeDisplay');
const startBtn = document.getElementById('startBtn');

let time = 10;
let timerID = null;

startBtn.addEventListener('click',()=> {
  if(timerID) return;

  timerID = setInterval(()=> {
    time--;
    timeDisplay.textContent = time;

    // 
    if(time <= 0) {
      clearInterval(timerID);
      timerID = null;
      alert('時間です！');
    }
  }, 1000);
});

// 文字数カウンタ
const Counter = document.getElementById('lengthCounter');
const CounterNum = document.getElementById('lengthCounterTxt');
Counter.addEventListener('input',()=> {
console.log(Counter.value.length);
CounterNum.textContent = Counter.value.length;
});

// ランダム名言表示
const poemMessage = document.getElementById('poemMessage');
const poemHuman = document.getElementById('human');
const poem = [
  {message: '何かを始めるのに遅すぎることはない',author: 'カーネル'},
  {message: 'ちいさい',author: 'カネル'},
  {message: '気合',author: '長谷川'},
];

const poemNum = Math.floor(Math.random() * poem.length);
const selectPoem = poem[poemNum]; 
poemMessage.textContent = selectPoem.message;
poemHuman.textContent = `- ${selectPoem.author}`;

// リスト追加
let listBox = [];
function addText() {
  let input = document.getElementById('inputForm');
  if (input.value !== "") {
    listBox.push(input.value);
    input.value = "";

    // 結果
    const li = document.createElement('li');
    li.textContent = listBox[listBox.length -1];
    const List = document.querySelector('#list');
    List.appendChild(li);
    li.className = "remove";
    const bTn = document.createElement('button');
    bTn.textContent = '削除';
    bTn.className= 'removeBtn'
    li.appendChild(bTn);
    bTn.addEventListener('click',()=> {
      li.remove();
    }) ;
  }
}

// 天気
fetch('https://wttr.in/Tokyo?format=j1')
.then(res => res.json())
.then(data => {
  console.log(data);
  const temp = data.current_condition[0].temp_C;
  document.getElementById('wether').innerHTML =
  `
  <p>東京は現在${temp}℃</p>

  `;

});


