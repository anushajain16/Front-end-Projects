let questions = {
    que : ["What is Anusha called at home?","How many years old is Anusha?", "What does anusha prefer in while buying clothes?", "What does Anusha like to eat the most?"],
    options: {
        q1: ["Anu", "Anusha Jain", "Didi", "Jo bulana hai bula lo"],
        q2: ["21", "20", "22", "19"],
        q3: ["night-suit", "shorts", "top", "Kuch bhi dila do"],
        q4: ["Pasta", "Pizza", "Paneer", "Pani-puri"]
    },
    answer: [
        "Jo bulana hai bula lo",
        "21",
        "Kuch bhi dila do",
        "Pizza"
    ]
}
window.onload = nextQuestion;

let queNo = 0;

function nextQuestion(){
    const ques = document.querySelector('.quiz-que');
    const container = document.querySelector('.option-container');
    const msg = document.querySelector('.msg');
    const options = document.querySelectorAll('.option'); // Set all options with white background again for every question
    const next = document.querySelector('.next');
    options.forEach(btn => {
        btn.style.backgroundColor = 'white';
    });
    
    if(queNo<questions.que.length){         //Question change
        ques.innerHTML = questions.que[queNo];
        msg.innerHTML ="";
    }
    else{
        container.innerHTML = "Game Over - Aaj ke liye itna hi"; //For last question
        container.style.fontFamily = "Alice, serif";
        msg.innerHTML ="";
        next.innerHTML = "";
        next.style.backgroundColor="white";
    }

    for(let i=1;i<=4;i++){          //Chnage options according to question number
        const optionNo = document.getElementById(`${i}`);
        optionNo.innerHTML=questions.options[`q${queNo+1}`][i-1];
    }
    
    queNo++;
}

function checkAnswer(id){
    let btn = document.getElementById(id);
    let ans = btn.innerHTML;
    let correctAnswer = questions.answer[queNo-1];
    const msg = document.querySelector('.msg');

    const options = document.querySelectorAll('.option');
    options.forEach(btn => btn.style.backgroundColor = 'white');
    
    if(ans===correctAnswer){
        btn.style.backgroundColor = 'green';
        msg.innerHTML = "Sahi baat hai";
        msg.style.color='green';
    }
    else{
        options.forEach(optionBtn => {
            if (optionBtn.innerHTML === correctAnswer) {
                optionBtn.style.backgroundColor = 'green';
            }
        });
        btn.style.backgroundColor='red';
        msg.innerHTML = "Na re na";
        msg.style.color='red';
    }
}