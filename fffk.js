
// //1.
// // console.log(parseInt(100,3))   //javobi nechi chiqadi 
// // javob: 9
// // 2.“ “ ni ishiga “” ni qiqish qanday bo`ladi?
// // "\"jamshid\""
// // 3.Stringni o`rtasiga string tiqish qanday boladi?
// // `asfasfasf,$'jamshid' fasfasf`    
// // 4.Arrow funksiya qanday yasaladi?
// // const kk =()=>{}
// // 5.||    qiymat berildi qaysi holatda true chiqadi?
// //     2 ovidan biri true bolsa true
// // 6.Math.abs() nima chiqadi?
// // mudul
// // 7. Fill nechda parametr oladi?
// // 3ta
// // 8.
// // ar= [ 1,2,3 ,4,'besh',6]
// // arr = ar.slice(0,3)
// // console.log(arr.splice(1,2))
// // [2,3]
// // 9.tofixed(-1)oladimi?
// // yoq
// // 10.  eval() nima?
// // arifmetik amal bajaradi stringda
// // 11. 
// // for( let i=0; i<-10; i--){
// // console.log(i)}       
// //  javobi nima?
// // ishlamaydi
// // 12. join()vazifasi nima?
// //stringa otkazadi
// // 13.sortni 10 katta sonlada ishlash uchun nima qilinadi?
// // sort((a,b)=>a-b)
// // 14. a=[10,100]
// // console.log((Array.from(a,x=> x+x)));
// // javobi nima
// // [20,200]
// // 15.every() dan bizga nima qaytadi?
// //true false
// // 16.(…) vazifasi nima?
// // arrayga kirish
// // 17.localCompare() nima?
// //taqqoshlash
// // 18.trim() vazifasi?
// //boshidan va oxiridan boshliqni ochiradi
// // 19. && qiymatlar berilsa 2 ta 1 tasi true 2 chisi false bolsa nima javob chiqadi?
// // false
// // 20.indexOf()ni 2 parametri nima?
// // dan keying
// // 21.randomdan chiqqan natijani butunini olish uchun nima ishlatamiz?
// // parseInt()
// // 22. var a=12.5
// // console.log(a.toFixed(0));
// // nima javob chiqadi.
// // 13
// // 23. fill()ni 2chi parametric nomi
// //   dan
// // 24.typeofnima ?
// // taypini chiqaradi
// // 25. if ga (agar teng bolmasa) degan qiymatni qanday yozamiz?
// // !=  
// const game = () => {
//     let pScore = 0;
//     let cScore = 0;
//     const startGame = () => {
//       const playBtn = document.querySelector(".intro button");
//       const introScreen = document.querySelector(".intro");
//       const match = document.querySelector(".match");
  
//       playBtn.addEventListener("click", () => {
//         introScreen.classList.add("fadeOut");
//         match.classList.add("fadeIn");
//       });
//     };
//     const playMatch = () => {
//       const options = document.querySelectorAll(".option button");
//       const playerHand = document.querySelector(".player-hand");
//       const computerHand = document.querySelector(".computer-hand");
//       const hands = document.querySelectorAll(".hands img");
  
//       hands.forEach((hand) => {
//         hand.addEventListener("animationend", function () {
//           this.style.animation = "";
//         });
//       });
  
//       const computerOptions = ["rock", "paper", "scissors"];
  
//       options.forEach((option) => {
//         option.addEventListener("click", function () {
//           const computerNumber = Math.floor(Math.random() * 3);
//           const computerChoise = computerOptions[computerNumber];
  
//           setTimeout(() => {
//             compareHands(this.textContent, computerChoise);
  
//             playerHand.src = `./assets/${this.textContent}.png`;
//             computerHand.src = `./assets/${computerChoise}.png`;
//           }, 2000);
//           playerHand.style.animation = "shakePlayer 2s ease";
//           computerHand.style.animation = "shakeComputer 2s ease";
//         });
//       });
//     };
  
//     const updateScore = () => {
//       const playerScore = document.querySelector(".player-score p");
//       const computerScore = document.querySelector(".computer-score p");
//       playerScore.textContent = pScore;
//       computerScore.textContent = cScore;
//     };
  
//     const compareHands = (playerChoice, computerChoice) => {
//       const winner = document.querySelector(".winner");
//       if (playerChoice === computerChoice) {
//         winner.textContent = "It is tie";
//         return;
//       }
//       if (playerChoice === "rock") {
//         if (computerChoice === "scissors") {
//           winner.textContent = "Player Wins";
//           pScore++;
//           updateScore();
  
//           return;
//         } else {
//           winner.textContent = "Computer Wins";
//           cScore++;
//           updateScore();
  
//           return;
//         }
//       }
  
//       if (playerChoice === "paper") {
//         if (computerChoice === "scissors") {
//           winner.textContent = "Computer Wins";
//           cScore++;
//           updateScore();
  
//           return;
//         } else {
//           winner.textContent = "Player Wins";
//           pScore++;
//           updateScore();
  
//           return;
//         }
//       }
  
//       if (playerChoice === "scissors") {
//         if (computerChoice === "rock") {
//           winner.textContent = "Computer Wins";
//           cScore++;
//           updateScore();
//           return;
//         } else {
//           winner.textContent = "Player Wins";
//           pScore++;
//           updateScore();
  
//           return;
//         }
//       }
//     };
  
//     startGame();
//     playMatch();
//   };
  
//   game();
  





