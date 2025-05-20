const img = document.getElementById('img'),
    over = document.getElementById('over'),
    header = document.getElementById('header'),
    link = document.getElementById('link'),
    removeContent = document.getElementById('removeContent'),
    imgAnimate = document.getElementById('imgAnimate')

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
    img.classList.add('linkImg')
    imgAnimate.classList.add('link-animate')
    removeContent.style.display = 'none'
    event.preventDefault();
    setTimeout(()=>{
                window.location.href = link.href
        }, 5000)

    header.style.transform = 'none'
        
}
link.addEventListener('click', loading)