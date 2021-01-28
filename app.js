const quiz = [
    {
        question:'ゲーム市場、最も売れたゲーム機は次のうちどれ?',
        answers: ['スーパーファミコン', 'プレイステーション2', 'Nintendo Switch', 'ニンテンドーDS'],
        correct: 'ニンテンドーDS',
    }, {
        question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
        answers: [ 'MOTHER2', 'スーパーマリオブラザーズ3', 'スーパードンキーコング', '星のカービィ'],
        correct: 'MOTHER2'
      }, {
        question: 'ファイナルファンタジーⅣの主人公の名前は？',
        answers: [ 'フリオニール', 'クラウド', 'ティーダ', 'セシル'],
        correct: 'セシル'
      }
    ];

const quizLenght = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLenght = $button.length;

const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < 4){
      $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
      buttonIndex++;
    }  
}

setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解')
    score++;       
   } else {
    window.alert('不正解')
   }

   quizIndex++;

   if(quizIndex < quizLenght){
    setupQuiz();
   } else {
    window.alert('終了!あなたの正解数は' + score + '/' + quizLenght + 'です')
   }
};

let handlerIndex = 0;
while (handlerIndex < buttonLenght) {
    $button[handlerIndex].addEventListener('click', (e)=> {
    clickHandler(e);
    });
    handlerIndex++;   
}