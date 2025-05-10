const modal = document.getElementById('modal'),
closed = document.getElementById('close'),
openMoa = document.getElementById('openMoa')

closed.addEventListener('click', function () {
    modal.style.display = 'none'
})
openMoa.addEventListener('click', function (params) {
    modal.style.display = 'flex'
})
