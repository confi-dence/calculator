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
    modalButton = document.getElementById('modal-Button')

// to close the modal by clicking on button

closed.addEventListener('click', function () {
    modal.style.display = 'none'
    aboutCal.style.display = 'flex'
    modalButton.style.display = 'flex'
    footer.style.display = 'flex'
})
// to open the calcuator
openMoa.addEventListener('click', function (params) {
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
    if (score.innerText === '0') {
        if (isoperatoe(number)) {
            return;
        } else {
            score.innerText = number
        }
    } else {
        score.innerText += number
    }
}

// to make * ? or all of that not to enable n=before a number
function isoperatoe(char) {
    return [, '*', '/', '%', '**',].includes(char)
}
// to clear number
function clearNumber() {
    score.innerText = '0';
}
clear.addEventListener('click', clearNumber)

// to bring out the result just by clicking equals to
function results() {
    try {

        if (score.innerText.includes('sin')) {
            let number = parseFloat(score.innerText)
            if (isNaN(number)) {
                score.innerText = `${number}`

            } else {
                score.innerText = (Math.sin(number * Math.PI / 180)).toFixed(5)
            }
        } else if (score.innerText.includes('cos')) {
            let number = parseFloat(score.innerText)
            if (isNaN(number)) {
                score.innerText = `${number}`
            } else {
                score.innerText = (Math.cos(number * Math.PI / 180)).toFixed(5)
            }
        } else {
            score.innerText = eval(score.innerText)
        }
    } catch (error) {
        if (score.innerText === 'Syntax Error') {
            score.innerText = '0'
        } else {
            score.innerText = 'Syntax Error'
        }
    }
}
overResult.addEventListener('click', results)
function delect() {

    if (score.innerText.length > 0) {
        score.innerText = score.innerText.slice(0, -1)
    }
    if (score.innerText === '') {
        score.innerText = '0'
    }
}
delectText.addEventListener('click', delect)










