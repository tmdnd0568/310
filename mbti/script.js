const questions = [
  {q:"친구들과 놀 때 나는?", a:[{text:"😆 밖에서 논다", type:"E"}, {text:"📱 혼자 논다", type:"I"}]},
  {q:"새로운 사람을 만나면?", a:[{text:"먼저 말 건다 😎", type:"E"}, {text:"조용히 지켜본다 😐", type:"I"}]},
  {q:"공부할 때 나는?", a:[{text:"계획적으로 📋", type:"J"}, {text:"그때그때 😴", type:"P"}]},
  {q:"문제를 풀 때?", a:[{text:"현실적으로 🧠", type:"S"}, {text:"상상으로 💭", type:"N"}]},
  {q:"친구가 힘들어하면?", a:[{text:"해결방법 제시 💡", type:"T"}, {text:"공감해준다 ❤️", type:"F"}]},
  {q:"놀 때 나는?", a:[{text:"밖에서 활동 🏃", type:"E"}, {text:"집에서 쉼 🛋", type:"I"}]},
  {q:"새로운 아이디어?", a:[{text:"현실 중심 🧱", type:"S"}, {text:"창의적 💡", type:"N"}]},
  {q:"일 할 때?", a:[{text:"계획 먼저 📊", type:"J"}, {text:"즉흥적으로 🎲", type:"P"}]},
  {q:"결정할 때?", a:[{text:"논리적 ⚖️", type:"T"}, {text:"감정적 💖", type:"F"}]},
  {q:"친구 관계는?", a:[{text:"많이 사귄다 👥", type:"E"}, {text:"소수 친한 친구 🤝", type:"I"}]},
  {q:"새로운 경험?", a:[{text:"안전하게 🔒", type:"S"}, {text:"도전적으로 🚀", type:"N"}]},
  {q:"마감이 있을 때?", a:[{text:"미리 끝냄 ⏰", type:"J"}, {text:"마지막에 함 ⚡", type:"P"}]
  }
];

let current=0;
let score={E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0};

function startTest(){
document.getElementById("start-screen").classList.add("hidden");
document.getElementById("quiz-screen").classList.remove("hidden");
showQ();
}

function showQ(){
let q=questions[current];
document.getElementById("progress").innerText=`${current+1}/12`;
document.getElementById("question").innerText=q.q;

let opt=document.getElementById("options");
opt.innerHTML="";

q.a.forEach(item=>{
let btn=document.createElement("div");
btn.className="option";
btn.innerText=item.text;
btn.onclick=()=>{
score[item.type]++;
next();
}
opt.appendChild(btn);
});
}

function next(){
current++;
if(current<questions.length){
showQ();
}else{
showResult();
}
}

function showResult(){
document.getElementById("quiz-screen").classList.add("hidden");
document.getElementById("result-screen").classList.remove("hidden");

let mbti =
(score.E>=score.I?"E":"I")+
(score.S>=score.N?"S":"N")+
(score.T>=score.F?"T":"F")+
(score.J>=score.P?"J":"P");

let desc={
"ENFP":"열정적이고 창의적인 사람!",
"INTJ":"전략적이고 계획적인 사람!",
"ESFP":"활발하고 재미있는 사람!",
"ISTJ":"책임감 강한 사람!"
};

document.getElementById("result-type").innerText=mbti;
document.getElementById("result-desc").innerText=desc[mbti]||"독특한 성격이에요!";
}
