const img = document.getElementById('img'),
    over = document.getElementById('over'),
    header = document.getElementById('header')
    


function image() {
    // img.classList.add('imgs')
    over.style.display = 'block'
    // img.style.opacity= '0.2'
    header.innerText= "thanks for clicking"
    header.classList.toggle('rotated')
    
}