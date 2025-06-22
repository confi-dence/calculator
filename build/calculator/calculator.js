const modal = document.getElementById('modal'),
    closed = document.getElementById('close'),
    openMoa = document.getElementById('openMoa'),
    modalContent = document.getElementById('modal-Content'),
    clear = document.getElementById('clear'),
    overResult = document.getElementById('overResult'),
    Numbers = document.querySelectorAll('#Number div'),
    answer = document.getElementById('Answer'),
    aboutCal = document.getElementById('aboutCal'),
    delectText = document.getElementById('delectText'),
    footer = document.getElementById('footer'),
    modalButton = document.getElementById('modal-Button'), 
    strong = document.getElementById('strong'),
score = document.getElementById('score'),
works = document.getElementById('works')


    strong.innerText = " \" use calculator\""
    // to close the modal by clicking on button
closed.addEventListener('click', function () {
    modal.style.display = 'none'
    aboutCal.style.display = 'flex'
    modalButton.style.display = 'flex'
    footer.style.display = 'flex'
})
// to open the calcuator

openMoa.addEventListener('click', function ( ) {
    modal.style.display = 'flex'
    aboutCal.style.display = 'none'
    modalButton.style.display = 'none'
    footer.style.display = 'none'

    setTimeout(() => {
        modalContent.style.animation = 'none'
        closed.style.animation = 'none'
        answer.style.animation = 'none'
        Numbers.forEach((div) => {
            div.style.animation = 'none'
        })
    }, 5000);
})
// to show the numbers on my input




function showValue(number) {
    if (score.innerText === '0'  ) {
        if (isoperatoe(number)) {
            return;
        }else {
            score.innerText = number
        }
    }else if (score.innerText === 'Syntax Error' || score.innerText === 'NaN' || score.innerText === 'math Error') {
        score.innerText = '0'
    }else {
        score.innerText += number
    }

    if (largerfont(number)) {
        return;
    }
    if (smallerFont(number)) {
        return;
    }
    
    
}
function largerfont() {
    if (score.innerText.length > 23) {
        score.style.fontSize = '20px'
    }else if(score.innerText.length > 20){
        score.style.fontSize = '35px'
    }else {
        score.style.fontSize = '40px'
    }
}
function smallerFont() {
    if (window.innerWidth > 450) return
    if (score.innerText.length > 15) {
        score.style.fontSize = '20px'
    }else if (score.innerText.length > 8) {
        score.style.fontSize = '30px'
    } else{
        score.style.fontSize = '40px'
    }
}

// to make * ? or all of that not to enable n=before a number
function isoperatoe(char) {
    return [, '*', '/', '%', '**',].includes(char)
}
// to clear number
function clearNumber() {
    score.innerText = '0';
    score.style.fontSize = '40px'
}
clear.addEventListener('click', clearNumber)


// to bring out the result just by clicking equals to
function results() {
    try {
        const text = score.innerText;

        if (text.includes('sin')) {
          if (text.startsWith('sin')) {
            const angle = parseFloat(text.replace(/[^0-9.\-]/g, ''));
            const result = Math.sin(angle * Math.PI / 180).toFixed(5);
            score.innerText = result;
        
          } else {
            const match = text.match(/^(\d+)(?:\s*)sin(\d+)/);
            if (match) {
              const base = parseFloat(match[1]);     // 8
              const angle = parseFloat(match[2]);    // 30
              const result = (base * Math.sin(angle * Math.PI / 180)).toFixed(5);
              score.innerText = result;
            }else{
                score.innerText = 'math Error'
            }
          }
        }else if (score.innerText.includes('cos')) {
        if (score.innerText.startsWith('cos')) {
            const angle = parseFloat(text.replace(/[^0-9.\-]/g, ''));
            const result = Math.cos(angle * Math.PI / 180).toFixed(5);
            score.innerText = result;
        }else {
            const match = score.innerText.match(/^(\d+)(?:\s*)cos(\d+)/); 
            if (match) {
                const base = parseFloat(match[1]);
                const angle = parseFloat(match[2]);
                const result = (base * Math.cos(angle * Math.PI / 180)).toFixed(5);
                score.innerText = result;
            }else{
                score.innerText = 'math Error'
            }
        }
            }else if (!isFinite(eval(score.innerText))) {
                score.innerText= 'math Error'
            }else {
            score.innerText = eval(score.innerText)
        }
    } catch (error) {
       
        if ( score.innerText === 'NaN') {
            score.innerText = '0'
        }
    } 
}
overResult.addEventListener('click', results)
function delect() {

    if (score.innerText.length > 0) {
        score.innerText = score.innerText.slice(0 , -1)

    }
    if (score.innerText === '') {
        score.innerText = '0'
        score.style.fontSize = '40px'
    }
}
delectText.addEventListener('click', delect)










