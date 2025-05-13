const modal = document.getElementById('modal'),
closed = document.getElementById('close'),
openMoa = document.getElementById('openMoa'),
clear = document.getElementById('clear'),
overResult = document.getElementById('overResult')

closed.addEventListener('click', function () {
    modal.style.display = 'none'
})
openMoa.addEventListener('click', function (params) {
    modal.style.display = 'flex'
})

function showValue(number) {
    if(score.innerText=== '0' ){
        if (isoperatoe(number)) {
            return;
        }else{
        score.innerText = number
        }
    }else{
score.innerText += number
    }
}
function  isoperatoe(char) {
    return['+', '-0', '*' ,'/', '%','**'  ].includes(char)
}
function clearNumber() { 
 
    score.innerText = '0';

}
clear.addEventListener('click', clearNumber)

function results() {
    let results =  Math.sin(number * Math.PI / 180)
    console.log(results);
    if (score.innerText.includes('sin')) {
        score.innerText = results
        return;
    }
    try {
        
        score.innerText = eval(score.innerText)
    } catch (error) {
        if(score.innerText === 'Syntax Error'){
            score.innerText = '0'
        }else{
            score.innerText = 'Syntax Error'
        }
    }
}

