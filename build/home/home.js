const img = document.getElementById('img'),
over = document.getElementById('over')

function clicsk() {
    if (over.style.display === "none") {
        over.style.display ="block";
        img.classList.add('imgs')     
    }else{
        over.style.display ="none"
        img.classList.remove('imgs')
    }
   
}
img.addEventListener('click', clicsk)