const img = document.getElementById('img'),
    over = document.getElementById('over'),
    header = document.getElementById('header')
    


function image() {
    // img.classList.add('imgs')
    over.style.display = 'block'
    // img.style.opacity= '0.2'
    header.innerText= "thanks for clicking"
let hasRotated = false
if(!hasRotated){
    header.classList.toggle('rotated')
      hasRotated = true
}    
}

{/* <script>
    const box = document.getElementById('rotatableBox');
    let hasRotated = false;

    box.addEventListener('click', function() {
        if (!hasRotated) {
            box.style.transform = 'rotate(360deg)';
            hasRotated = true;
        }
    });
</script> */}