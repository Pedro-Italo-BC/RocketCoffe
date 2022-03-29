const btnHambuger = document.getElementById('btnHambuger')

const navBar = document.getElementById('navBar')

const imgBtnHambuger = document.querySelector('#btnHambuger img')

btnHambuger.addEventListener('click', function () {
  navBar.classList.toggle('active')

  if (navBar.classList == 'active') {
    imgBtnHambuger.src = './assets/menu-buguer-close.svg'
  } else {
    imgBtnHambuger.src = './assets/menu-buguer-open.svg'
  }
})
