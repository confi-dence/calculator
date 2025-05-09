const img = document.getElementById('img'),
    over = document.getElementById('over'),
    header = document.getElementById('header'),
    link = document.getElementById('link'),
    removeContent = document.getElementById('removeContent')

    


    let hasRotated = false
function image() {
    over.style.display = 'block'
    header.innerText= "Thanks for clicking"
    if(!hasRotated){
    header.classList.toggle('rotated')
      hasRotated = true
}    
}
function loading(event){
    removeContent.style.display = 'none'
    event.preventDefault();
    header.innerText = "loading........"
  header.classList.remove('rotated')
    setTimeout(()=>{
            window.location.href = link.href
        }, 10000)
}
link.addEventListener('click', loading)